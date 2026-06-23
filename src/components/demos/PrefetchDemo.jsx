import { useState, useEffect, useMemo, useRef } from 'react'

const CACHE_LINES = 12
const WARP_COLORS = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b']

function buildWarpQueues(matSize, numWarps) {
  const N = matSize
  const baseA = 0, baseB = N * N
  const queues = Array.from({ length: numWarps }, () => [])
  for (let row = 0; row < N; row++) {
    const w = row % numWarps
    for (let col = 0; col < N; col++)
      for (let k = 0; k < N; k++) {
        queues[w].push({ addr: baseA + row * N + k, src: 'A', row, col: k, cRow: row, cCol: col })
        queues[w].push({ addr: baseB + k * N + col, src: 'B', row: k, col, cRow: row, cCol: col })
      }
  }
  return queues
}

function simulate(mode, queues) {
  const cache = Array(CACHE_LINES).fill(null).map(() => ({ addr: -1, valid: false, prefetched: false, used: false, src: '', warp: -1, order: 0 }))
  let nextOrder = CACHE_LINES, hits = 0, misses = 0, pfHits = 0, deadEvictions = 0
  const strideState = {}
  for (let w = 0; w < queues.length; w++)
    strideState[w] = { A: { last: -1, stride: 0, conf: 0 }, B: { last: -1, stride: 0, conf: 0 } }

  const findEvict = () => {
    const empty = cache.findIndex(l => !l.valid)
    return empty >= 0 ? empty : cache.reduce((o, l, i, a) => l.order < a[o].order ? i : o, 0)
  }

  const maxLen = Math.max(0, ...queues.map(q => q.length))
  const states = []

  for (let t = 0; t < maxLen; t++) {
    const events = []
    for (let w = 0; w < queues.length; w++) {
      if (t >= queues[w].length) { events.push({ warp: w, idle: true }); continue }
      const access = queues[w][t]
      const { addr, src } = access

      const ss = strideState[w][src]
      if (ss.last >= 0) {
        const d = addr - ss.last
        if (d === ss.stride && d !== 0) ss.conf = Math.min(ss.conf + 1, 4)
        else { ss.stride = d; ss.conf = 1 }
      }
      ss.last = addr

      const hitIdx = cache.findIndex(l => l.valid && l.addr === addr)
      let result = 'miss'
      let prefetchAddr = null

      if (hitIdx >= 0) {
        result = cache[hitIdx].prefetched && !cache[hitIdx].used ? 'pfhit' : 'hit'
        if (result === 'pfhit') pfHits++
        hits++
        cache[hitIdx].used = true; cache[hitIdx].prefetched = false; cache[hitIdx].order = nextOrder++
      } else {
        misses++
        const ei = findEvict()
        if (cache[ei].valid && !cache[ei].used) deadEvictions++
        cache[ei] = { addr, valid: true, prefetched: false, used: true, src, warp: w, order: nextOrder++ }

        if (mode === 'nextline') prefetchAddr = addr + 1
        else if (mode === 'strided' && ss.conf >= 2) prefetchAddr = addr + ss.stride

        if (prefetchAddr != null && prefetchAddr >= 0 && !cache.some(l => l.valid && l.addr === prefetchAddr)) {
          const pi = findEvict()
          if (cache[pi].valid && !cache[pi].used) deadEvictions++
          cache[pi] = { addr: prefetchAddr, valid: true, prefetched: true, used: false, src: 'PF', warp: w, order: nextOrder++ }
        }
      }
      events.push({ warp: w, access, result, prefetchAddr, strideConf: ss.conf })
    }
    states.push({ tick: t, events, cache: cache.map(l => ({ ...l })), stats: { hits, misses, pfHits, deadEvictions } })
  }
  return states
}

export default function PrefetchDemo() {
  const [mode, setMode]       = useState('none')
  const [tick, setTick]       = useState(0)
  const [playing, setPlaying] = useState(false)
  const [matSize, setMatSize] = useState(4)
  const [numWarps, setNumWarps] = useState(2)
  const [showContext, setShowContext] = useState(false)
  const intervalRef = useRef(null)

  const queues   = useMemo(() => buildWarpQueues(matSize, numWarps), [matSize, numWarps])
  const sim      = useMemo(() => simulate(mode, queues), [mode, queues])
  const totalTicks = sim.length

  const comparison = useMemo(() => {
    const run = (m) => {
      const s = simulate(m, queues)
      return s.length ? s[s.length - 1].stats : { hits: 0, misses: 0, pfHits: 0, deadEvictions: 0 }
    }
    return { none: run('none'), nextline: run('nextline'), strided: run('strided') }
  }, [queues])

  useEffect(() => { setTick(0); setPlaying(false) }, [mode, matSize, numWarps])
  useEffect(() => {
    if (!playing) { clearInterval(intervalRef.current); return }
    intervalRef.current = setInterval(() => {
      setTick(prev => { if (prev >= totalTicks) { setPlaying(false); return prev } return prev + 1 })
    }, 150)
    return () => clearInterval(intervalRef.current)
  }, [playing, totalTicks])

  const current     = tick > 0 ? sim[tick - 1] : null
  const cacheState  = current ? current.cache : Array(CACHE_LINES).fill({ addr: -1, valid: false, prefetched: false, used: false, src: '' })
  const stats       = current?.stats ?? { hits: 0, misses: 0, pfHits: 0, deadEvictions: 0 }
  const total       = stats.hits + stats.misses
  const hitRate     = total > 0 ? ((stats.hits / total) * 100).toFixed(0) : 0
  const N = matSize

  // Track which addrs have been accessed
  const accessedSet = useMemo(() => {
    const s = new Set()
    sim.slice(0, tick).forEach(st => st.events.forEach(e => { if (!e.idle) s.add(e.access.addr) }))
    return s
  }, [sim, tick])

  const activeSet = useMemo(() => {
    if (!current) return new Set()
    const s = new Set()
    current.events.forEach(e => { if (!e.idle) s.add(e.access.addr) })
    return s
  }, [current])

  const prefetchedSet = useMemo(() => new Set(cacheState.filter(l => l.valid && l.prefetched).map(l => l.addr)), [cacheState])

  const pct = (s) => { const t = s.hits + s.misses; return t > 0 ? +((s.hits/t)*100).toFixed(1) : 0 }

  const modeColor = { none: 'text-red-400', nextline: 'text-blue-400', strided: 'text-emerald-400' }[mode]

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-mono text-lg text-emerald-400 font-bold">DAP: GPU Cache Prefetching</h3>
          <p className="text-zinc-400 text-xs mt-0.5">
            Matrix multiply C = A×B. A is read row-wise (stride 1 — easy). B is read column-wise (stride {N} — causes misses). Toggle prefetch strategies to see what helps.
          </p>
        </div>
        {/* Live hit rate */}
        <div className={`shrink-0 text-center rounded-lg px-4 py-2 border transition-all ${
          mode === 'none'     ? 'bg-red-500/10 border-red-500/30' :
          mode === 'nextline' ? 'bg-blue-500/10 border-blue-500/30' :
                                'bg-emerald-500/10 border-emerald-500/30'
        }`}>
          <div className={`font-mono text-2xl font-bold ${modeColor}`}>{hitRate}%</div>
          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">hit rate</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { key: 'none',     label: 'No Prefetch', cls: 'border-red-500/50 text-red-300 bg-red-500/10' },
          { key: 'nextline', label: '→ Next-Line',  cls: 'border-blue-500/50 text-blue-300 bg-blue-500/10' },
          { key: 'strided',  label: '⇉ Strided (DAP)', cls: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/10' },
        ].map(m => (
          <button key={m.key} onClick={() => setMode(m.key)}
            className={`px-3 py-1.5 font-mono text-xs rounded-lg border font-medium transition-all ${
              mode === m.key ? m.cls : 'border-zinc-800 text-zinc-400 hover:text-white'
            }`}>{m.label}</button>
        ))}
        <select value={matSize} onChange={e => setMatSize(+e.target.value)}
          className="px-3 py-1.5 font-mono text-xs rounded-lg border border-zinc-800 text-zinc-400 bg-transparent">
          {[3,4,5].map(s => <option key={s} value={s}>{s}×{s}</option>)}
        </select>
        <select value={numWarps} onChange={e => setNumWarps(+e.target.value)}
          className="px-3 py-1.5 font-mono text-xs rounded-lg border border-zinc-800 text-zinc-400 bg-transparent">
          {[1,2,3,4].map(w => <option key={w} value={w}>{w}W</option>)}
        </select>
        <div className="ml-auto flex items-center gap-1">
          <button onClick={() => setTick(t => Math.max(0, t-1))} disabled={tick===0}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 text-xs">‹</button>
          <button onClick={() => setPlaying(p => !p)}
            className={`px-3 h-7 font-mono text-xs rounded border transition-all ${
              playing ? 'border-amber-500/50 text-amber-300 bg-amber-500/10' : 'border-zinc-800 text-zinc-400 hover:text-white'
            }`}>{playing ? '⏸' : '▶'}</button>
          <button onClick={() => setTick(t => Math.min(totalTicks, t+1))} disabled={tick>=totalTicks}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 text-xs">›</button>
          <button onClick={() => { setTick(0); setPlaying(false) }}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white text-xs">↺</button>
        </div>
      </div>

      {/* Main visual: memory grids + cache */}
      <div className="grid grid-cols-3 gap-3">

        {/* Matrix A — row access, stride 1 */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
          <div className="font-mono text-[10px] text-zinc-500 mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-indigo-500" />
            Matrix A <span className="text-zinc-500">stride 1 ✓</span>
          </div>
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
            {Array.from({ length: N * N }, (_, i) => {
              const addr = i
              const isActive = activeSet.has(addr) && current?.events.some(e => !e.idle && e.access.src === 'A' && e.access.addr === addr)
              const isPrefetched = prefetchedSet.has(addr)
              const wasAccessed = accessedSet.has(addr)
              return (
                <div key={i} className={`aspect-square rounded flex items-center justify-center font-mono text-[9px] transition-all duration-100 ${
                  isActive     ? 'bg-indigo-500 text-white scale-110 shadow-lg shadow-indigo-500/30' :
                  isPrefetched ? 'bg-violet-500/30 border border-violet-500/50 text-violet-300' :
                  wasAccessed  ? 'bg-indigo-500/20 text-indigo-400' :
                                 'bg-white/5 text-zinc-500'
                }`}>{addr}</div>
              )
            })}
          </div>
          <p className="font-mono text-[9px] text-zinc-500 mt-2">Sequential reads → cache friendly</p>
        </div>

        {/* Matrix B — column access, stride N */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
          <div className="font-mono text-[10px] text-zinc-500 mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-cyan-500" />
            Matrix B <span className="text-red-400/80">stride {N} ✗</span>
          </div>
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
            {Array.from({ length: N * N }, (_, i) => {
              const addr = N * N + i
              const isActive = activeSet.has(addr) && current?.events.some(e => !e.idle && e.access.src === 'B' && e.access.addr === addr)
              const isPrefetched = prefetchedSet.has(addr)
              const wasAccessed = accessedSet.has(addr)
              return (
                <div key={i} className={`aspect-square rounded flex items-center justify-center font-mono text-[9px] transition-all duration-100 ${
                  isActive     ? 'bg-cyan-500 text-white scale-110 shadow-lg shadow-cyan-500/30' :
                  isPrefetched ? 'bg-violet-500/30 border border-violet-500/50 text-violet-300' :
                  wasAccessed  ? 'bg-cyan-500/20 text-cyan-400' :
                                 'bg-white/5 text-zinc-500'
                }`}>{addr}</div>
              )
            })}
          </div>
          <p className="font-mono text-[9px] text-zinc-500 mt-2">Column access jumps by {N} → misses</p>
        </div>

        {/* Cache */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
          <div className="font-mono text-[10px] text-zinc-500 mb-2">L1 Cache ({CACHE_LINES} lines, LRU)</div>
          <div className="space-y-1">
            {cacheState.map((line, idx) => {
              const hitEvent = current?.events.find(e => !e.idle && e.access?.addr === line.addr)
              return (
                <div key={idx} className={`flex items-center gap-1.5 px-2 py-1 rounded text-[9px] font-mono border transition-all ${
                  hitEvent?.result === 'hit'   ? 'border-emerald-500/60 bg-emerald-500/10' :
                  hitEvent?.result === 'pfhit' ? 'border-blue-500/60 bg-blue-500/10' :
                  hitEvent?.result === 'miss'  ? 'border-red-500/40 bg-red-500/5' :
                  line.prefetched              ? 'border-violet-500/30 bg-violet-500/5' :
                  line.valid && !line.used     ? 'border-amber-800/20 bg-amber-950/5' :
                  line.valid                   ? 'border-white/10 bg-white/3' :
                                                 'border-white/5'
                }`}>
                  <span className="text-zinc-500 w-4">L{idx}</span>
                  {line.valid ? (
                    <>
                      <span className={line.src === 'A' ? 'text-indigo-300' : line.src === 'B' ? 'text-cyan-300' : 'text-violet-300'}>
                        {line.addr}
                      </span>
                      <span className="ml-auto">
                        {hitEvent?.result === 'hit'   && <span className="text-emerald-400">HIT</span>}
                        {hitEvent?.result === 'pfhit' && <span className="text-blue-400">PF✓</span>}
                        {hitEvent?.result === 'miss'  && <span className="text-red-400">MISS</span>}
                        {!hitEvent && line.prefetched  && <span className="text-violet-400">PF</span>}
                        {!hitEvent && !line.prefetched && !line.used && <span className="text-amber-500">☠</span>}
                        {!hitEvent && !line.prefetched && line.used  && <span className="text-emerald-600">✓</span>}
                      </span>
                    </>
                  ) : <span className="text-zinc-500">—</span>}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'Hits',        val: stats.hits,          color: 'text-emerald-400' },
          { label: 'Misses',      val: stats.misses,        color: 'text-red-400' },
          { label: 'PF Hits',     val: stats.pfHits,        color: 'text-blue-400' },
          { label: 'Dead blocks', val: stats.deadEvictions, color: 'text-amber-400' },
        ].map(s => (
          <div key={s.label} className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3 text-center">
            <div className={`font-mono text-xl font-bold ${s.color}`}>{s.val}</div>
            <div className="font-mono text-[9px] text-zinc-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Hit rate comparison */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4">
        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-3">
          Strategy comparison — {N}×{N} complete run
        </div>
        <div className="space-y-2">
          {[
            { key: 'none',     label: 'No Prefetch', color: '#ef4444', s: comparison.none },
            { key: 'nextline', label: '→ Next-Line',  color: '#3b82f6', s: comparison.nextline },
            { key: 'strided',  label: '⇉ Strided (DAP)', color: '#10b981', s: comparison.strided },
          ].map(({ key, label, color, s }) => {
            const rate = pct(s)
            const isActive = key === mode
            return (
              <div key={key} onClick={() => setMode(key)} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                isActive ? 'bg-white/5 ring-1' : 'hover:bg-white/3'
              }`} style={isActive ? { ringColor: color + '40' } : {}}>
                <span className="font-mono text-[11px] w-28 shrink-0" style={{ color }}>{label}</span>
                <div className="flex-1 h-2.5 bg-white/5 rounded overflow-hidden">
                  <div className="h-full rounded transition-all duration-700"
                    style={{ width: `${rate}%`, backgroundColor: color }} />
                </div>
                <span className="font-mono text-[11px] w-10 text-right" style={{ color }}>{rate}%</span>
                {s.pfHits > 0 && (
                  <span className="font-mono text-[9px] text-blue-400 w-16 shrink-0">{s.pfHits} pf hits</span>
                )}
                {comparison.none.misses > 0 && s.deadEvictions > comparison.none.deadEvictions && (
                  <span className="font-mono text-[9px] text-amber-400 w-20 shrink-0">+{s.deadEvictions - comparison.none.deadEvictions} dead ☠</span>
                )}
              </div>
            )
          })}
        </div>
        {comparison.none.misses > 0 && (
          <p className="font-mono text-[10px] text-zinc-400 mt-3 pt-3 border-t border-zinc-800">
            Next-line often <span className="text-red-400">hurts</span> for B (wrong stride, pollutes cache).
            Strided learns stride={N} after 2 accesses → <span className="text-emerald-400">
              {((1 - comparison.strided.misses / comparison.none.misses) * 100).toFixed(0)}% fewer misses
            </span>.
          </p>
        )}
      </div>

      {/* Research context */}
      <div className="rounded-lg border border-zinc-800 overflow-hidden">
        <button onClick={() => setShowContext(v => !v)}
          className="w-full flex items-center justify-between px-4 py-3 font-mono text-xs text-zinc-400 hover:text-white transition-colors">
          <span>Research context</span>
          <span>{showContext ? '▲' : '▼'}</span>
        </button>
        {showContext && (
          <div className="border-t border-zinc-800 px-4 py-3 space-y-1 font-mono text-[11px] text-zinc-400">
            <p>• Real system: MGPUsim with 64 CUs, L1V 16KB 4-way, L2 256KB 16-way</p>
            <p>• Counter-intuitive: <span className="text-red-300">throughput decreased</span> despite higher hit rate — L2 bandwidth saturated from 64 CUs all prefetching</p>
            <p>• <span className="text-amber-300">&gt;90% dead blocks at L2</span> — most fetched lines evicted before any reuse</p>
            <p>• MSHR deadlocks: prefetch requests fill Miss Status Holding Registers → resolved via priority queuing</p>
            <p>• 32% cache miss reduction achieved on targeted benchmarks</p>
          </div>
        )}
      </div>
    </div>
  )
}
