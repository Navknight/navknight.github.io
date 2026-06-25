import { useState, useEffect, useMemo, useRef } from 'react'

// Sparse tensor X: entries as [i, j, k, value]
// 3 modes: i (rows), j (cols), k (depth)
const I = 3, J = 3, K = 3, R = 2
const TENSOR = [
  [0,1,0,2],[0,1,1,3],[0,1,2,1],
  [1,0,0,4],[1,0,2,5],[1,2,0,3],
  [2,0,1,1],[2,1,0,2],[2,2,1,2],
]
const MAT_B = [[1,2],[3,1],[2,4]]  // J×R
const MAT_C = [[2,1],[1,3],[3,2]]  // K×R

// Group nonzeros by fiber (i,k) — the "tube" shared by multiple j
function getFibers(tensor) {
  const map = {}
  tensor.forEach(([i,j,k,v]) => {
    const key = `${i},${k}`
    if (!map[key]) map[key] = { i, k, entries: [] }
    map[key].entries.push({ j, v })
  })
  return Object.values(map).sort((a, b) => a.i !== b.i ? a.i - b.i : a.k - b.k)
}

function buildSteps(algo, fibers) {
  const steps = []
  fibers.forEach(({ i, k, entries }) => {
    if (algo === 'buffered') {
      steps.push({ type: 'cache', i, k, label: `Load C[${k},:] into buffer`, cMemReads: R })
    }
    entries.forEach(({ j, v }) => {
      for (let r2 = 0; r2 < R; r2++) {
        for (let r3 = 0; r3 < R; r3++) {
          steps.push({
            type: 'compute', i, j, k, r2, r3, v,
            label: algo === 'naive'
              ? `X(${i},${j},${k})×B[${j},${r2}]×C[${k},${r3}] → Y[${i},${r2},${r3}]`
              : `X(${i},${j},${k})×B[${j},${r2}]×buf[${r3}] → Y[${i},${r2},${r3}]`,
            product: v * (MAT_B[j]?.[r2] ?? 0) * (MAT_C[k]?.[r3] ?? 0),
            cMemReads: algo === 'naive' ? 1 : 0,
          })
        }
      }
    })
  })
  return steps
}

export default function TTMcDemo() {
  const [algo, setAlgo]       = useState('naive')
  const [tick, setTick]       = useState(0)
  const [playing, setPlaying] = useState(false)
  const [numThreads, setNumThreads] = useState(2)
  const [showCtx, setShowCtx] = useState(false)
  const intervalRef = useRef(null)

  const fibers     = useMemo(() => getFibers(TENSOR), [])
  const naiveSteps = useMemo(() => buildSteps('naive',    fibers), [fibers])
  const bufSteps   = useMemo(() => buildSteps('buffered', fibers), [fibers])
  const steps      = algo === 'naive' ? naiveSteps : bufSteps
  const totalTicks = steps.length
  const currentStep = tick > 0 ? steps[tick - 1] : null

  const { cReadsTotal, yOutput } = useMemo(() => {
    let c = 0
    const y = Array.from({ length: I }, () =>
      Array.from({ length: R }, () => Array(R).fill(0))
    )
    steps.slice(0, tick).forEach(s => {
      c += s.cMemReads
      if (s.type === 'compute') y[s.i][s.r2][s.r3] += s.product
    })
    return { cReadsTotal: c, yOutput: y }
  }, [steps, tick])

  const naiveCReads = useMemo(() => naiveSteps.reduce((a, s) => a + s.cMemReads, 0), [naiveSteps])
  const bufCReads   = useMemo(() => bufSteps.reduce((a, s) => a + s.cMemReads, 0), [bufSteps])
  const cSaved      = naiveCReads - bufCReads

  const activeFiberKey = currentStep ? `${currentStep.i},${currentStep.k}` : null
  const buffer = (algo === 'buffered' && currentStep?.k !== undefined) ? MAT_C[currentStep.k] : null

  const naiveWall = Math.ceil(naiveSteps.filter(s => s.type === 'compute').length / numThreads)
  const bufWall   = Math.ceil(bufSteps.filter(s => s.type === 'compute').length / numThreads)
  const speedup   = naiveWall > 0 ? (naiveWall / bufWall).toFixed(2) : '—'

  useEffect(() => { setTick(0); setPlaying(false) }, [algo, numThreads])
  useEffect(() => {
    if (!playing) { clearInterval(intervalRef.current); return }
    intervalRef.current = setInterval(() => {
      setTick(p => { if (p >= totalTicks) { setPlaying(false); return p } return p + 1 })
    }, 200)
    return () => clearInterval(intervalRef.current)
  }, [playing, totalTicks])

  return (
    <div className="space-y-5">

      {/* Header */}
      <div>
        <h3 className="font-mono text-lg text-emerald-400 font-bold">TTMc: Tucker Tensor × Matrix Chain</h3>
        <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
          Computes Y(i,r₂,r₃) = Σ<sub>j,k</sub> X(i,j,k)·B(j,r₂)·C(k,r₃) — contracting a 3D sparse tensor along two modes.{' '}
          Nonzeros sharing (i,k) form a <em>fiber</em>. Naively, C[k,:] is re-read from memory for every nonzero in the fiber.{' '}
          <span className="text-cyan-400">Buffered mode</span> loads it once per fiber into registers — no redundant memory reads.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 p-3 rounded-lg border border-zinc-800 bg-zinc-900/60">
        {[
          { key: 'naive',    label: '✗ Naive',    cls: 'bg-red-500/15 text-red-300 border-red-500/40' },
          { key: 'buffered', label: '✓ Buffered', cls: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40' },
        ].map(m => (
          <button key={m.key} onClick={() => setAlgo(m.key)}
            className={`px-3 py-1.5 font-mono text-xs rounded border font-medium transition-all ${
              algo === m.key ? m.cls : 'border-zinc-700 text-zinc-400 hover:text-zinc-200'
            }`}>{m.label}</button>
        ))}
        <select value={numThreads} onChange={e => setNumThreads(+e.target.value)}
          className="px-3 py-1.5 font-mono text-xs rounded border border-zinc-700 text-zinc-300 bg-zinc-800">
          {[1,2,4].map(t => <option key={t} value={t}>{t} thread{t>1?'s':''}</option>)}
        </select>
        <div className="ml-auto flex items-center gap-1">
          <button onClick={() => setTick(t => Math.max(0, t-1))} disabled={tick===0}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-30 text-sm">◀</button>
          <button onClick={() => setPlaying(p => !p)}
            className={`px-3 h-7 font-mono text-xs rounded border font-medium ${
              playing ? 'border-amber-500/50 text-amber-300 bg-amber-500/10' : 'border-zinc-600 text-zinc-300 hover:border-zinc-400'
            }`}>{playing ? '⏸' : '▶'}</button>
          <button onClick={() => setTick(t => Math.min(totalTicks, t+1))} disabled={tick>=totalTicks}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-30 text-sm">▶</button>
          <button onClick={() => { setTick(0); setPlaying(false) }}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white text-sm">↺</button>
        </div>
        <span className="font-mono text-[10px] text-zinc-500">step {tick}/{totalTicks}</span>
      </div>

      {/* Current step callout */}
      {currentStep ? (
        <div className={`rounded-lg border px-4 py-3 flex items-center gap-3 ${
          currentStep.type === 'cache'
            ? 'border-cyan-500/40 bg-cyan-500/5'
            : algo === 'naive'
            ? 'border-red-500/20 bg-red-500/5'
            : 'border-emerald-500/20 bg-emerald-500/5'
        }`}>
          <span className="text-xl shrink-0">
            {currentStep.type === 'cache' ? '📥' : algo === 'naive' ? '⟳' : '⚡'}
          </span>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-xs text-white font-medium truncate">{currentStep.label}</div>
            {currentStep.type === 'compute' && (
              <div className="font-mono text-[10px] text-zinc-500 mt-0.5">
                = {currentStep.v} × {MAT_B[currentStep.j]?.[currentStep.r2]} × {MAT_C[currentStep.k]?.[currentStep.r3]} = {currentStep.product}
              </div>
            )}
          </div>
          {currentStep.type === 'compute' && algo === 'naive' && (
            <span className="shrink-0 font-mono text-[9px] text-red-400 border border-red-500/30 px-2 py-0.5 rounded">+1 C mem read</span>
          )}
          {currentStep.type === 'compute' && algo === 'buffered' && (
            <span className="shrink-0 font-mono text-[9px] text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">from buffer ✓</span>
          )}
          {currentStep.type === 'cache' && (
            <span className="shrink-0 font-mono text-[9px] text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded">
              1 load → saves {(TENSOR.filter(([,, k]) => k === currentStep.k).length - 1) * R} reads
            </span>
          )}
        </div>
      ) : (
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 font-mono text-xs text-zinc-500 text-center">
          Press ▶ to step through the computation
        </div>
      )}

      {/* Main 3-col: Tensor | Factor Matrices | Memory + Output */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Sparse Tensor X */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
          <div className="font-mono text-[10px] text-zinc-400 font-bold mb-3">
            SPARSE TENSOR X [{I}×{J}×{K}] — {TENSOR.length} nonzeros
          </div>
          <div className="space-y-2.5">
            {Array.from({ length: K }, (_, k) => {
              const slice = TENSOR.filter(([,, kk]) => kk === k)
              return (
                <div key={k}>
                  <div className="font-mono text-[9px] text-zinc-500 mb-1">depth k={k}</div>
                  <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${J}, 1fr)` }}>
                    {Array.from({ length: I * J }, (_, idx) => {
                      const i = Math.floor(idx / J), j = idx % J
                      const entry = slice.find(([ei, ej]) => ei === i && ej === j)
                      const isFiber = activeFiberKey === `${i},${k}`
                      const isActive = currentStep?.type === 'compute'
                        && currentStep.i === i && currentStep.j === j && currentStep.k === k
                      return (
                        <div key={idx} className={`h-9 flex flex-col items-center justify-center rounded text-[9px] font-mono transition-all ${
                          isActive  ? 'bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/40 scale-105' :
                          isFiber && entry ? 'bg-indigo-500/30 border border-indigo-500/50 text-indigo-200' :
                          isFiber   ? 'bg-indigo-500/5 border border-indigo-800/50 text-zinc-700' :
                          entry     ? 'bg-zinc-800 border border-zinc-700 text-zinc-300' :
                                      'bg-zinc-900/40 text-zinc-800'
                        }`}>
                          {entry ? (
                            <>
                              <span className="font-bold leading-none">{entry[3]}</span>
                              <span className="text-[7px] text-zinc-500">({i},{j},{k})</span>
                            </>
                          ) : '·'}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          {activeFiberKey && (
            <div className="mt-2 font-mono text-[9px] text-indigo-400 border-t border-zinc-800 pt-2">
              Active fiber i={currentStep?.i}, k={currentStep?.k} —{' '}
              {TENSOR.filter(([i,,k]) => `${i},${k}` === activeFiberKey).length} nonzero(s)
            </div>
          )}
        </div>

        {/* Factor Matrices B and C */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3 space-y-4">
          <div className="font-mono text-[10px] text-zinc-400 font-bold">FACTOR MATRICES</div>

          <div>
            <div className="font-mono text-[10px] text-zinc-500 mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded bg-indigo-500" />
              B [{J}×{R}] — mode-j contraction
            </div>
            <div className="grid gap-1" style={{ gridTemplateColumns: `auto repeat(${R}, 1fr)` }}>
              <div className="font-mono text-[9px] text-zinc-600" />
              {Array.from({ length: R }, (_, r) => (
                <div key={r} className="font-mono text-[9px] text-zinc-500 text-center">r₂={r}</div>
              ))}
              {MAT_B.map((row, j) => [
                <div key={`jl${j}`} className="font-mono text-[9px] text-zinc-500 flex items-center pr-1">j={j}</div>,
                ...row.map((v, r) => (
                  <div key={`${j}${r}`} className={`h-10 flex items-center justify-center rounded font-mono text-base font-bold transition-all ${
                    currentStep?.type === 'compute' && currentStep.j === j && currentStep.r2 === r
                      ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-105'
                      : currentStep?.type === 'compute' && currentStep.j === j
                      ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300'
                      : 'bg-zinc-800/60 border border-zinc-700/50 text-zinc-300'
                  }`}>{v}</div>
                ))
              ])}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-zinc-500 mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded bg-cyan-500" />
              C [{K}×{R}] — mode-k contraction
              {algo === 'buffered' && <span className="text-[9px] text-cyan-400">(buffered per fiber)</span>}
            </div>
            <div className="grid gap-1" style={{ gridTemplateColumns: `auto repeat(${R}, 1fr)` }}>
              <div className="font-mono text-[9px] text-zinc-600" />
              {Array.from({ length: R }, (_, r) => (
                <div key={r} className="font-mono text-[9px] text-zinc-500 text-center">r₃={r}</div>
              ))}
              {MAT_C.map((row, k) => [
                <div key={`kl${k}`} className="font-mono text-[9px] text-zinc-500 flex items-center pr-1">k={k}</div>,
                ...row.map((v, r) => {
                  const isLoading = currentStep?.type === 'cache' && currentStep.k === k
                  const isActive  = currentStep?.type === 'compute' && currentStep.k === k && currentStep.r3 === r
                  const inBuffer  = algo === 'buffered' && currentStep?.type === 'compute' && currentStep.k === k
                  return (
                    <div key={`${k}${r}`} className={`h-10 flex items-center justify-center rounded font-mono text-base font-bold transition-all ${
                      isLoading ? 'bg-cyan-400 text-zinc-900 shadow-lg shadow-cyan-500/30 scale-105' :
                      isActive  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105' :
                      inBuffer  ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300' :
                                  'bg-zinc-800/60 border border-zinc-700/50 text-zinc-300'
                    }`}>{v}</div>
                  )
                })
              ])}
            </div>
          </div>
        </div>

        {/* Memory + Buffer + Output */}
        <div className="space-y-3">

          {/* C memory read counter */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
            <div className="font-mono text-[10px] text-zinc-400 font-bold mb-3">C MATRIX MEMORY READS</div>
            <div className="mb-2">
              <div className="flex justify-between font-mono text-[10px] mb-1">
                <span className="text-zinc-500">reads so far</span>
                <span className={algo === 'naive' ? 'text-red-400' : 'text-emerald-400'}>{cReadsTotal} / {algo === 'naive' ? naiveCReads : bufCReads}</span>
              </div>
              <div className="h-2.5 bg-zinc-800 rounded overflow-hidden">
                <div className={`h-full rounded transition-all duration-200 ${algo === 'naive' ? 'bg-red-500/70' : 'bg-emerald-500/70'}`}
                  style={{ width: `${Math.min(100, (cReadsTotal / (algo === 'naive' ? naiveCReads : bufCReads)) * 100)}%` }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800">
              <div className="text-center">
                <div className="font-mono text-lg font-bold text-red-400">{naiveCReads}</div>
                <div className="font-mono text-[8px] text-zinc-600">naive total</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-lg font-bold text-emerald-400">{bufCReads}</div>
                <div className="font-mono text-[8px] text-zinc-600">buffered total</div>
              </div>
            </div>
            <div className="text-center pt-2 border-t border-zinc-800 mt-2">
              <div className="font-mono text-xl font-bold text-amber-400">{cSaved} saved</div>
              <div className="font-mono text-[8px] text-zinc-500">{((cSaved/naiveCReads)*100).toFixed(0)}% fewer C reads</div>
            </div>
          </div>

          {/* Buffer state */}
          {algo === 'buffered' && (
            <div className={`rounded-lg border p-3 transition-all ${buffer ? 'border-cyan-500/30 bg-cyan-500/5' : 'border-zinc-800 bg-zinc-900/30'}`}>
              <div className="font-mono text-[10px] text-cyan-400 font-bold mb-2">REGISTER BUFFER</div>
              {buffer ? (
                <div>
                  <div className="font-mono text-[9px] text-zinc-500 mb-1.5">C[k={currentStep?.k},:] loaded</div>
                  <div className="flex gap-2">
                    {buffer.map((v, r) => (
                      <div key={r} className={`flex-1 h-10 flex flex-col items-center justify-center rounded border font-mono transition-all ${
                        currentStep?.r3 === r
                          ? 'bg-cyan-500/30 border-cyan-500/60 text-cyan-200'
                          : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
                      }`}>
                        <span className="text-sm font-bold">{v}</span>
                        <span className="text-[8px] text-zinc-600">r₃={r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="font-mono text-[10px] text-zinc-600 italic">empty</div>
              )}
            </div>
          )}

          {/* Output Y partial */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
            <div className="font-mono text-[10px] text-zinc-400 font-bold mb-2">OUTPUT Y[i,r₂,r₃]</div>
            {yOutput.map((mat, i) => (
              <div key={i} className="mb-2">
                <div className="font-mono text-[9px] text-zinc-600 mb-0.5">i={i}</div>
                <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${R * R}, 1fr)` }}>
                  {mat.flatMap((row, r2) => row.map((v, r3) => {
                    const isActive = currentStep?.type === 'compute'
                      && currentStep.i === i && currentStep.r2 === r2 && currentStep.r3 === r3
                    return (
                      <div key={`${r2}${r3}`} className={`h-9 flex flex-col items-center justify-center rounded font-mono transition-all ${
                        isActive ? 'bg-amber-500/40 border border-amber-500/60 text-amber-200 scale-105'
                                 : v > 0 ? 'bg-amber-500/10 border border-amber-500/20 text-amber-300'
                                         : 'bg-zinc-900 border border-zinc-800 text-zinc-700'
                      }`}>
                        <span className="text-xs font-bold">{v > 0 ? v : '·'}</span>
                        {v > 0 && <span className="text-[7px] text-zinc-600">{r2},{r3}</span>}
                      </div>
                    )
                  }))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wall-clock speedup comparison */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
        <div className="font-mono text-xs text-zinc-400 font-bold mb-3 flex items-center gap-3">
          WALL-CLOCK ({numThreads} thread{numThreads>1?'s':''})
          <span className="text-emerald-400 font-bold text-sm">{speedup}× speedup</span>
          <span className="text-zinc-600 font-normal text-[10px]">real experiment: 2.87× on 4T, 2048³ tensor</span>
        </div>
        {[
          { label: '✗ Naive',    ticks: naiveWall, color: 'bg-red-500/60',     text: 'text-red-400' },
          { label: '✓ Buffered', ticks: bufWall,   color: 'bg-emerald-500/60', text: 'text-emerald-400' },
        ].map(r => (
          <div key={r.label} className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[10px] text-zinc-400 w-24 shrink-0">{r.label}</span>
            <div className="flex-1 h-3 bg-zinc-800 rounded overflow-hidden">
              <div className={`h-full rounded ${r.color}`} style={{ width: `${(r.ticks / naiveWall) * 100}%` }} />
            </div>
            <span className={`font-mono text-[10px] ${r.text} w-24 text-right`}>{r.ticks} compute steps</span>
          </div>
        ))}
      </div>

      {/* Research context */}
      <div className="rounded-lg border border-zinc-800 overflow-hidden">
        <button onClick={() => setShowCtx(v => !v)}
          className="w-full flex items-center justify-between px-4 py-2.5 font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors">
          <span>Research context</span>
          <span>{showCtx ? '▲' : '▼'}</span>
        </button>
        {showCtx && (
          <div className="border-t border-zinc-800 px-4 py-3 space-y-1 font-mono text-[11px] text-zinc-500">
            <p>• Input: 2048³ tensor, ~1% density, R=S=60 — Tucker2 decomposition (compressing modes 2 and 3)</p>
            <p>• CSF (Compressed Sparse Fiber) format groups nonzeros by fiber for cache-efficient iteration</p>
            <p>• 7 algorithm variants across 3 mode orderings — buffered wins on mode-1 chain</p>
            <p>• Bottleneck at high thread count: atomic updates on shared Y cause lock contention, not memory</p>
            <p>• C++ / OpenMP; validated on FROSTT public tensor benchmarks</p>
          </div>
        )}
      </div>
    </div>
  )
}
