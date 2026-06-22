import { useState, useRef, useEffect, useMemo, useCallback } from 'react'

export default function TTMcDemo() {
  const [algo, setAlgo] = useState('naive')
  const [threads, setThreads] = useState(2)
  const [tick, setTick] = useState(0)
  const [playing, setPlaying] = useState(false)
  const animRef = useRef(null)

  const R = 2

  const [tensor, setTensor] = useState([
    [0,0,0,2],[0,1,1,3],[0,2,0,1],
    [1,0,1,4],[1,1,0,2],[1,2,1,5],
    [2,0,0,3],[2,1,0,1],[2,2,1,2],
  ])
  const [matB, setMatB] = useState([[1,2],[3,1],[2,4]])
  const [matC, setMatC] = useState([[2,1],[1,3]])

  const threadColors = ['#6366f1','#06b6d4','#10b981','#f59e0b']
  const threadBgs = ['rgba(99,102,241,0.1)','rgba(6,182,212,0.1)','rgba(16,185,129,0.1)','rgba(245,158,11,0.1)']

  // Derive dimensions from data
  const I = useMemo(() => Math.max(...tensor.map(([i])=>i)) + 1, [tensor])
  const J = useMemo(() => Math.max(...tensor.map(([,j])=>j)) + 1, [tensor])
  const K = useMemo(() => Math.max(...tensor.map(([,,k])=>k)) + 1, [tensor])

  // Grow matrices when dimensions increase
  useEffect(() => {
    if (matB.length < J) setMatB(prev => [...prev, ...Array.from({ length: J - prev.length }, () => [1, 1])])
  }, [J])
  useEffect(() => {
    if (matC.length < K) setMatC(prev => [...prev, ...Array.from({ length: K - prev.length }, () => [1, 1])])
  }, [K])

  const fibers = useMemo(() => {
    const map = {}
    tensor.forEach(([i,j,k,v]) => {
      const key = `${i},${k}`
      if (!map[key]) map[key] = { i, k, entries: [] }
      map[key].entries.push({ j, v })
    })
    return Object.values(map)
  }, [tensor])

  const addNonzero = () => {
    // Add entry at next available slot
    const newI = I - 1
    const newJ = Math.floor(Math.random() * J)
    const newK = Math.floor(Math.random() * K)
    // Avoid duplicate coordinates
    const exists = tensor.some(([i,j,k]) => i===newI && j===newJ && k===newK)
    if (exists) {
      setTensor([...tensor, [I, 0, 0, 1]])
    } else {
      setTensor([...tensor, [newI, newJ, newK, 1]])
    }
  }

  const removeNonzero = (idx) => {
    if (tensor.length <= 1) return
    setTensor(tensor.filter((_, i) => i !== idx))
  }

  // Build per-thread step queues (parallel execution) — round-robin assignment
  const threadQueues = useMemo(() => {
    const queues = Array.from({ length: threads }, () => [])

    fibers.forEach((fiber, fIdx) => {
      const t = fIdx % threads

      if (algo === 'naive') {
        fiber.entries.forEach(({ j, v }) => {
          if (!matB[j] || !matC[fiber.k]) return
          for (let r2 = 0; r2 < R; r2++) {
            for (let r3 = 0; r3 < R; r3++) {
              const bVal = matB[j][r2], cVal = matC[fiber.k][r3]
              queues[t].push({
                type: 'compute', i: fiber.i, j, k: fiber.k, r2, r3,
                xVal: v, bVal, cVal, product: v * bVal * cVal,
                label: `X(${fiber.i},${j},${fiber.k})×B(${j},${r2})×C(${fiber.k},${r3})`,
                math: `${v}×${bVal}×${cVal} = ${v*bVal*cVal}`,
                redundant: true,
              })
            }
          }
        })
      } else {
        if (!matC[fiber.k]) return
        const cached = []
        for (let r3 = 0; r3 < R; r3++) {
          const cVal = matC[fiber.k][r3]
          cached.push(cVal)
          queues[t].push({
            type: 'buffer', i: fiber.i, k: fiber.k, r3, cVal,
            label: `Cache C(${fiber.k},${r3})`,
            math: `buf[${r3}] ← ${cVal}`,
          })
        }
        fiber.entries.forEach(({ j, v }) => {
          if (!matB[j]) return
          for (let r2 = 0; r2 < R; r2++) {
            for (let r3 = 0; r3 < R; r3++) {
              const bVal = matB[j][r2]
              queues[t].push({
                type: 'multiply', i: fiber.i, j, k: fiber.k, r2, r3,
                xVal: v, bVal, cVal: cached[r3], product: v * bVal * cached[r3],
                label: `X(${fiber.i},${j},${fiber.k})×B(${j},${r2})×buf[${r3}]`,
                math: `${v}×${bVal}×${cached[r3]} = ${v*bVal*cached[r3]}`,
                usesBuffer: true,
              })
            }
          }
        })
      }
    })
    return queues
  }, [algo, threads, tensor, matB, matC, fibers])

  const maxQueueLen = useMemo(() => Math.max(0, ...threadQueues.map(q => q.length)), [threadQueues])

  // Output computation
  const outputY = useMemo(() => {
    const Y = Array.from({ length: I }, () => Array.from({ length: R }, () => Array(R).fill(0)))
    tensor.forEach(([i,j,k,v]) => {
      if (!matB[j] || !matC[k]) return
      for (let r2 = 0; r2 < R; r2++)
        for (let r3 = 0; r3 < R; r3++)
          Y[i][r2][r3] += v * matB[j][r2] * matC[k][r3]
    })
    return Y
  }, [tensor, matB, matC, I])

  const partialY = useMemo(() => {
    const Y = Array.from({ length: I }, () => Array.from({ length: R }, () => Array(R).fill(0)))
    threadQueues.forEach(queue => {
      queue.slice(0, tick).forEach(s => {
        if (s.product !== undefined) Y[s.i][s.r2][s.r3] += s.product
      })
    })
    return Y
  }, [threadQueues, tick, I])

  useEffect(() => { setTick(0); setPlaying(false) }, [algo, threads, tensor, matB, matC])

  useEffect(() => {
    if (!playing) return
    animRef.current = setInterval(() => {
      setTick(prev => {
        if (prev >= maxQueueLen) { setPlaying(false); return prev }
        return prev + 1
      })
    }, 500)
    return () => clearInterval(animRef.current)
  }, [playing, maxQueueLen])

  const updateTensor = (idx, val) => {
    const next = tensor.map(r => [...r])
    next[idx][3] = Number(val) || 0
    setTensor(next)
  }
  const updateB = (j, r, val) => { const n = matB.map(r=>[...r]); n[j][r] = Number(val)||0; setMatB(n) }
  const updateC = (k, r, val) => { const n = matC.map(r=>[...r]); n[k][r] = Number(val)||0; setMatC(n) }

  const wallClockNaive = useMemo(() => {
    const q = Array.from({ length: threads }, () => [])
    fibers.forEach((fiber, fIdx) => {
      const t = fIdx % threads
      fiber.entries.forEach(() => { for (let r2=0;r2<R;r2++) for(let r3=0;r3<R;r3++) q[t].push(1) })
    })
    return Math.max(...q.map(x=>x.length))
  }, [fibers, threads])

  const wallClockBuffered = useMemo(() => {
    const q = Array.from({ length: threads }, () => [])
    fibers.forEach((fiber, fIdx) => {
      const t = fIdx % threads
      for(let r3=0;r3<R;r3++) q[t].push(1)
      fiber.entries.forEach(() => { for(let r2=0;r2<R;r2++) for(let r3=0;r3<R;r3++) q[t].push(1) })
    })
    return Math.max(...q.map(x=>x.length))
  }, [fibers, threads])

  return (
    <div className="space-y-5">
      {/* Header */}
      <div>
        <h3 className="font-mono text-lg text-emerald-400 font-bold mb-1">
          TTMc: Tensor-Times-Matrix Chain (Mode-1)
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          <span className="text-zinc-200 font-medium">Y(i, r₂, r₃) = Σⱼ Σₖ X(i,j,k) · B(j,r₂) · C(k,r₃)</span>
          <br />
          Core kernel of Tucker decomposition on sparse tensors stored in CSF (Compressed Sparse Fiber) format.
          Fibers group nonzeros sharing (i,k) — parallelized via OpenMP with round-robin assignment.
          Buffered variant caches C(k,:) per fiber, reducing complexity from O(nnz·R²) to O(fibers·R + nnz·R²) by eliminating redundant reads.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 p-3 rounded-lg border border-zinc-800 bg-zinc-900/80">
        <button
          onClick={() => setAlgo('naive')}
          className={`px-3 py-1.5 font-mono text-xs rounded-md font-medium transition-all ${
            algo === 'naive'
              ? 'bg-red-500/20 text-red-300 border border-red-500/50 shadow-lg shadow-red-500/10'
              : 'border border-zinc-700 text-zinc-400 hover:text-zinc-200'
          }`}
        >
          ✗ Naive
        </button>
        <button
          onClick={() => setAlgo('buffered')}
          className={`px-3 py-1.5 font-mono text-xs rounded-md font-medium transition-all ${
            algo === 'buffered'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-lg shadow-emerald-500/10'
              : 'border border-zinc-700 text-zinc-400 hover:text-zinc-200'
          }`}
        >
          ✓ Buffered
        </button>
        <select
          value={threads}
          onChange={e => setThreads(Number(e.target.value))}
          className="px-3 py-1.5 font-mono text-xs rounded-md border border-zinc-700 text-zinc-300 bg-zinc-800"
        >
          {[1,2,4].map(t => <option key={t} value={t}>{t} thread{t>1?'s':''}</option>)}
        </select>

        <div className="ml-auto flex items-center gap-1.5">
          <button onClick={() => setTick(t => Math.max(0, t-1))} disabled={tick===0}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-30 text-sm">◀</button>
          <button onClick={() => setPlaying(!playing)}
            className={`px-3 h-7 font-mono text-xs rounded border font-medium transition-all ${
              playing ? 'border-amber-500/50 text-amber-300 bg-amber-500/10' : 'border-zinc-600 text-zinc-300 hover:border-zinc-400'
            }`}
          >{playing ? '⏸' : '▶'}</button>
          <button onClick={() => setTick(t => Math.min(maxQueueLen, t+1))} disabled={tick>=maxQueueLen}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-30 text-sm">▶</button>
          <button onClick={() => { setTick(0); setPlaying(false) }}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white text-sm">↺</button>
        </div>
      </div>

      {/* Parallel Thread Lanes — the main visualization */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 overflow-hidden">
        <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
          <span className="font-mono text-xs text-zinc-400 font-bold">PARALLEL EXECUTION — TICK {tick}/{maxQueueLen}</span>
        </div>

        <div className="p-4 space-y-3">
          {threadQueues.map((queue, t) => {
            const current = queue[tick - 1]
            const done = queue.slice(0, tick)
            const progress = queue.length > 0 ? (Math.min(tick, queue.length) / queue.length) * 100 : 100
            const isIdle = tick > queue.length

            return (
              <div key={t} className="rounded-lg border border-zinc-800 overflow-hidden" style={{ borderColor: `${threadColors[t]}33` }}>
                {/* Thread header */}
                <div className="flex items-center gap-2 px-3 py-1.5" style={{ background: threadBgs[t] }}>
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{
                    backgroundColor: threadColors[t],
                    animationDuration: isIdle ? '0s' : '1s',
                    opacity: isIdle ? 0.3 : 1,
                  }} />
                  <span className="font-mono text-xs font-bold" style={{ color: threadColors[t] }}>
                    Thread {t}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">
                    fibers: {fibers.filter((_, fIdx) => fIdx % threads === t)
                      .map(f => `(${f.i},${f.k})`).join(' ')}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-zinc-500">
                    {Math.min(tick, queue.length)}/{queue.length} ops
                  </span>
                  {isIdle && <span className="font-mono text-[10px] text-zinc-600 italic">idle</span>}
                </div>

                {/* Progress bar */}
                <div className="h-1" style={{ background: `${threadColors[t]}15` }}>
                  <div className="h-full transition-all duration-300 ease-out" style={{
                    width: `${progress}%`,
                    backgroundColor: threadColors[t],
                    opacity: 0.7,
                  }} />
                </div>

                {/* Current operation */}
                <div className="px-3 py-2 min-h-[44px] flex items-center">
                  {current && tick <= queue.length ? (
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-1">
                        <div className="font-mono text-xs text-zinc-300">{current.label}</div>
                        <div className="font-mono text-sm font-bold mt-0.5" style={{ color: threadColors[t] }}>
                          {current.math}
                        </div>
                      </div>
                      {current.type === 'buffer' && (
                        <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          CACHE
                        </span>
                      )}
                      {current.redundant && (
                        <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/15 text-red-300 border border-red-500/30">
                          REDUNDANT
                        </span>
                      )}
                      {current.usesBuffer && (
                        <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          FROM CACHE
                        </span>
                      )}
                      {current.product !== undefined && (
                        <span className="shrink-0 font-mono text-xs text-zinc-500">
                          → Y({current.i},{current.r2},{current.r3})
                        </span>
                      )}
                    </div>
                  ) : isIdle ? (
                    <span className="font-mono text-xs text-zinc-600">✓ Complete</span>
                  ) : (
                    <span className="font-mono text-xs text-zinc-600">Waiting...</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Input / Output Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Tensor Input */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="font-mono text-xs text-zinc-400 font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-violet-500" />
            Sparse Tensor X
            <span className="text-zinc-600 font-normal">({tensor.length} nnz, {fibers.length} fibers)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-[200px] overflow-y-auto pr-1">
            {tensor.map(([i,j,k,v], idx) => {
              const active = threadQueues.some((q) => {
                const s = q[tick-1]
                return s && s.i === i && s.k === k && (s.j === j || s.type === 'buffer')
              })
              return (
                <div key={idx} className={`flex items-center gap-0.5 p-1 rounded transition-all group ${
                  active ? 'bg-violet-500/20 ring-1 ring-violet-500/50' : 'hover:bg-zinc-800/50'
                }`}>
                  <span className="font-mono text-[10px] text-zinc-500">({i},{j},{k})</span>
                  <input type="number" value={v} onChange={e => updateTensor(idx, e.target.value)}
                    className="w-8 px-0.5 py-0.5 rounded text-center font-mono text-xs bg-zinc-800 border border-zinc-700 text-zinc-200 focus:border-violet-500 focus:outline-none"
                  />
                  <button onClick={() => removeNonzero(idx)}
                    className="opacity-0 group-hover:opacity-100 w-4 h-4 flex items-center justify-center text-red-400 text-[10px] hover:bg-red-500/20 rounded transition-opacity"
                  >×</button>
                </div>
              )
            })}
          </div>
          <button onClick={addNonzero}
            className="mt-2 w-full py-1.5 rounded border border-dashed border-zinc-700 text-zinc-500 font-mono text-xs hover:border-violet-500 hover:text-violet-400 transition-colors"
          >+ Add nonzero</button>
        </div>

        {/* Factor Matrices */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 space-y-4">
          <div>
            <div className="font-mono text-xs text-zinc-400 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-indigo-500" />
              Matrix B <span className="text-zinc-600">(J={J} × R={R})</span>
            </div>
            <div className="space-y-1">
              {matB.map((row, j) => (
                <div key={j} className="flex items-center gap-1">
                  <span className="font-mono text-[10px] text-zinc-500 w-6">j={j}</span>
                  {row.map((val, r) => {
                    const active = threadQueues.some(q => { const s=q[tick-1]; return s && s.j===j && s.r2===r })
                    return (
                      <input key={r} type="number" value={val} onChange={e => updateB(j, r, e.target.value)}
                        className={`w-9 px-1 py-0.5 rounded text-center font-mono text-xs border focus:outline-none transition-all ${
                          active ? 'bg-indigo-500/20 border-indigo-500 text-indigo-200' : 'bg-zinc-800 border-zinc-700 text-zinc-200'
                        }`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-zinc-400 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-cyan-500" />
              Matrix C <span className="text-zinc-600">(K={K} × R={R})</span>
            </div>
            <div className="space-y-1">
              {matC.map((row, k) => (
                <div key={k} className="flex items-center gap-1">
                  <span className="font-mono text-[10px] text-zinc-500 w-6">k={k}</span>
                  {row.map((val, r) => {
                    const active = threadQueues.some(q => { const s=q[tick-1]; return s && s.type!=='buffer' && s.k===k && s.r3===r })
                    return (
                      <input key={r} type="number" value={val} onChange={e => updateC(k, r, e.target.value)}
                        className={`w-9 px-1 py-0.5 rounded text-center font-mono text-xs border focus:outline-none transition-all ${
                          active ? 'bg-cyan-500/20 border-cyan-500 text-cyan-200' : 'bg-zinc-800 border-zinc-700 text-zinc-200'
                        }`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Output Y */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="font-mono text-xs text-zinc-400 font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-amber-500" />
            Output Y <span className="text-zinc-600">(I×R×R)</span>
          </div>
          <div className="space-y-3">
            {Array.from({ length: I }, (_, i) => (
              <div key={i}>
                <div className="font-mono text-[10px] text-zinc-500 mb-1">i={i}</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {Array.from({ length: R }, (_, r2) =>
                    Array.from({ length: R }, (_, r3) => {
                      const partial = partialY[i][r2][r3]
                      const final = outputY[i][r2][r3]
                      const done = partial === final && tick > 0
                      const active = threadQueues.some(q => {
                        const s = q[tick-1]
                        return s && s.i === i && s.r2 === r2 && s.r3 === r3
                      })
                      return (
                        <div key={`${r2}-${r3}`} className={`relative px-2 py-1.5 rounded font-mono text-xs text-center border transition-all duration-200 ${
                          active ? 'border-amber-500 bg-amber-500/15 scale-105 shadow-lg shadow-amber-500/20' :
                          done ? 'border-emerald-600/50 bg-emerald-500/10' :
                          'border-zinc-700 bg-zinc-800/50'
                        }`}>
                          <div className="text-[9px] text-zinc-500">r₂={r2},r₃={r3}</div>
                          <div className={`text-sm font-bold ${done ? 'text-emerald-300' : 'text-zinc-200'}`}>
                            {partial}
                          </div>
                          {!done && tick > 0 && (
                            <div className="text-[9px] text-zinc-600">/{final}</div>
                          )}
                          {active && (
                            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                          )}
                        </div>
                      )
                    })
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison panel */}
      <div className="grid grid-cols-2 gap-4">
        <div className={`rounded-lg border p-4 transition-all ${
          algo === 'naive' ? 'border-red-500/40 bg-red-500/5 shadow-lg shadow-red-500/5' : 'border-zinc-800 bg-zinc-900/30'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-red-400">✗ Naive</span>
            {algo === 'naive' && <span className="text-[10px] font-mono text-red-400/60 border border-red-500/30 px-1.5 rounded">ACTIVE</span>}
          </div>
          <div className="font-mono text-[11px] text-zinc-400 space-y-1">
            <div>Total ops: <span className="text-red-300 font-bold">{tensor.length * R * R}</span></div>
            <div>Wall-clock (parallel): <span className="text-red-300 font-bold">{wallClockNaive} ticks</span></div>
            <div className="text-red-400/70 text-[10px] mt-2 leading-relaxed">
              Every nonzero recomputes C(k,r₃) — same value fetched {tensor.length > fibers.length ? `${Math.round(tensor.length/fibers.length)}×` : ''} per fiber
            </div>
          </div>
        </div>
        <div className={`rounded-lg border p-4 transition-all ${
          algo === 'buffered' ? 'border-emerald-500/40 bg-emerald-500/5 shadow-lg shadow-emerald-500/5' : 'border-zinc-800 bg-zinc-900/30'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-emerald-400">✓ Buffered</span>
            {algo === 'buffered' && <span className="text-[10px] font-mono text-emerald-400/60 border border-emerald-500/30 px-1.5 rounded">ACTIVE</span>}
          </div>
          <div className="font-mono text-[11px] text-zinc-400 space-y-1">
            <div>Cache ops: <span className="text-cyan-300 font-bold">{fibers.length * R}</span></div>
            <div>Multiply ops: <span className="text-emerald-300 font-bold">{tensor.length * R * R}</span></div>
            <div>Wall-clock (parallel): <span className="text-emerald-300 font-bold">{wallClockBuffered} ticks</span></div>
            <div className="text-emerald-400/70 text-[10px] mt-2 leading-relaxed">
              C(k,:) cached once per fiber → no redundant memory access
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
        <div className="font-mono text-xs text-zinc-400 font-bold mb-2">Research Context</div>
        <div className="font-mono text-[11px] text-zinc-500 space-y-1 leading-relaxed">
          <div>• <span className="text-zinc-300">CSF format</span> stores sparse tensors as compressed fiber trees — efficient iteration per mode</div>
          <div>• <span className="text-red-300">REDUNDANT</span> = C(k,r₃) re-fetched for every nonzero in same fiber (naive approach)</div>
          <div>• <span className="text-emerald-300">FROM CACHE</span> = intermediate buffer eliminates redundant memory access</div>
          <div>• Real system: 2048³ tensor, 1% density, R=S=60 → best mode achieves <span className="text-emerald-300">2.87× speedup</span> on 4 threads</div>
          <div>• Key challenge: lock contention on shared output buffer limits parallel scaling</div>
          <div>• 7 algorithm variants across 3 modes — performance depends on CSF representation order</div>
        </div>
      </div>
    </div>
  )
}
