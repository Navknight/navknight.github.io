import { useState, useEffect, useMemo } from 'react'

export default function PrefetchDemo() {
  const [prefetchMode, setPrefetchMode] = useState('none')
  const [tick, setTick] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [matSize, setMatSize] = useState(4)
  const [numWarps, setNumWarps] = useState(2)

  const CACHE_LINES = 12

  // Matrix multiply C = A × B
  // Each warp computes a row of C. With W warps, row i is assigned to warp i%W.
  // Per tick, ALL warps advance one step simultaneously (true parallelism).
  const warpQueues = useMemo(() => {
    const N = matSize
    const baseA = 0, baseB = N * N
    const queues = Array.from({ length: numWarps }, () => [])

    for (let row = 0; row < N; row++) {
      const warp = row % numWarps
      for (let col = 0; col < N; col++) {
        for (let k = 0; k < N; k++) {
          queues[warp].push({
            addr: baseA + row * N + k,
            source: 'A', row, col: k, cRow: row, cCol: col,
            reason: `A[${row}][${k}]`,
            detail: `for C[${row}][${col}], stride 1`,
          })
          queues[warp].push({
            addr: baseB + k * N + col,
            source: 'B', row: k, col, cRow: row, cCol: col,
            reason: `B[${k}][${col}]`,
            detail: `for C[${row}][${col}], stride ${N}`,
          })
        }
      }
    }
    return queues
  }, [matSize, numWarps])

  const maxQueueLen = useMemo(() => Math.max(0, ...warpQueues.map(q => q.length)), [warpQueues])
  const TOTAL_TICKS = maxQueueLen

  const warpColors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b']

  // Simulate cache shared by all warps
  const runSim = (mode, queues) => {
    const cache = Array(CACHE_LINES).fill(null).map((_, i) => ({
      addr: -1, valid: false, prefetched: false, used: false, tag: '', warp: -1, order: i
    }))
    let nextOrder = CACHE_LINES
    let hits = 0, misses = 0, pfHits = 0, deadEvictions = 0

    // Per-warp, per-source stride detection
    const strideState = {}
    for (let w = 0; w < queues.length; w++) {
      strideState[w] = { A: { last: -1, stride: 0, conf: 0 }, B: { last: -1, stride: 0, conf: 0 } }
    }

    const findEvict = () => {
      const empty = cache.findIndex(l => !l.valid)
      if (empty >= 0) return empty
      return cache.reduce((o, l, i, a) => l.order < a[o].order ? i : o, 0)
    }

    const states = []

    const maxLen = Math.max(0, ...queues.map(q => q.length))
    for (let t = 0; t < maxLen; t++) {
      const tickEvents = []

      // Each warp issues one access per tick
      for (let w = 0; w < queues.length; w++) {
        if (t >= queues[w].length) {
          tickEvents.push({ warp: w, idle: true })
          continue
        }

        const access = queues[w][t]
        const { addr, source } = access

        // Stride detection
        const ss = strideState[w][source]
        if (ss.last >= 0) {
          const d = addr - ss.last
          if (d === ss.stride && d !== 0) ss.conf = Math.min(ss.conf + 1, 4)
          else { ss.stride = d; ss.conf = 1 }
        }
        ss.last = addr

        const hitIdx = cache.findIndex(l => l.valid && l.addr === addr)
        let result = 'miss'
        let evicted = null
        let prefetchAddr = null

        if (hitIdx >= 0) {
          result = cache[hitIdx].prefetched && !cache[hitIdx].used ? 'prefetch-hit' : 'hit'
          if (result === 'prefetch-hit') pfHits++
          hits++
          cache[hitIdx].used = true
          cache[hitIdx].prefetched = false
          cache[hitIdx].order = nextOrder++
        } else {
          misses++
          const ei = findEvict()
          evicted = cache[ei].valid ? { ...cache[ei] } : null
          if (evicted && !evicted.used) deadEvictions++
          cache[ei] = { addr, valid: true, prefetched: false, used: true, tag: source, warp: w, order: nextOrder++ }

          if (mode === 'nextline') {
            prefetchAddr = addr + 1
          } else if (mode === 'strided' && ss.conf >= 2) {
            prefetchAddr = addr + ss.stride
          }

          if (prefetchAddr != null && prefetchAddr >= 0 && !cache.some(l => l.valid && l.addr === prefetchAddr)) {
            const pi = findEvict()
            if (cache[pi].valid && !cache[pi].used) deadEvictions++
            cache[pi] = { addr: prefetchAddr, valid: true, prefetched: true, used: false, tag: 'PF', warp: w, order: nextOrder++ }
          }
        }

        tickEvents.push({ warp: w, access, result, evicted, prefetchAddr, strideDetected: ss.conf >= 2 ? ss.stride : null })
      }

      states.push({
        tick: t,
        events: tickEvents,
        cache: cache.map(l => ({ ...l })),
        stats: { hits, misses, pfHits, deadEvictions },
      })
    }
    return states
  }

  const simulation = useMemo(() => runSim(prefetchMode, warpQueues), [prefetchMode, warpQueues])

  // Comparison (always run all three)
  const comparison = useMemo(() => {
    const get = (mode) => {
      const sim = runSim(mode, warpQueues)
      return sim.length > 0 ? sim[sim.length - 1].stats : { hits: 0, misses: 0, pfHits: 0, deadEvictions: 0 }
    }
    return { none: get('none'), nextline: get('nextline'), strided: get('strided') }
  }, [warpQueues])

  useEffect(() => { setTick(0); setPlaying(false) }, [prefetchMode, matSize, numWarps])

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setTick(prev => {
        if (prev >= TOTAL_TICKS) { setPlaying(false); return prev }
        return prev + 1
      })
    }, 200)
    return () => clearInterval(id)
  }, [playing, TOTAL_TICKS])

  const current = tick > 0 ? simulation[tick - 1] : null
  const cacheState = current ? current.cache : Array(CACHE_LINES).fill({ addr: -1, valid: false, prefetched: false, used: false, tag: '', warp: -1 })
  const stats = current ? current.stats : { hits: 0, misses: 0, pfHits: 0, deadEvictions: 0 }
  const totalAccesses = stats.hits + stats.misses
  const hitRate = totalAccesses > 0 ? ((stats.hits / totalAccesses) * 100).toFixed(0) : '—'

  const N = matSize
  const matAAddrs = Array.from({ length: N * N }, (_, i) => i)
  const matBAddrs = Array.from({ length: N * N }, (_, i) => N * N + i)

  // Currently active addresses this tick (across all warps)
  const activeAddrs = useMemo(() => {
    if (!current) return new Set()
    const s = new Set()
    current.events.forEach(e => { if (!e.idle) s.add(e.access.addr) })
    return s
  }, [current])

  const accessedAddrs = useMemo(() => {
    const s = new Set()
    simulation.slice(0, tick).forEach(state => {
      state.events.forEach(e => { if (!e.idle) s.add(e.access.addr) })
    })
    return s
  }, [simulation, tick])

  // C progress
  const cProgress = useMemo(() => {
    const p = Array.from({ length: N }, () => Array(N).fill(0))
    simulation.slice(0, tick).forEach(state => {
      state.events.forEach(e => {
        if (!e.idle && e.access.source === 'B') p[e.access.cRow][e.access.cCol]++
      })
    })
    return p
  }, [simulation, tick, N])

  const currentC = useMemo(() => {
    if (!current) return null
    const active = current.events.find(e => !e.idle)
    return active ? { row: active.access.cRow, col: active.access.cCol } : null
  }, [current])

  const pct = (s) => { const t = s.hits + s.misses; return t > 0 ? ((s.hits/t)*100).toFixed(1) : '0' }
  const missPct = (s) => { const t = s.hits + s.misses; return t > 0 ? ((s.misses/t)*100).toFixed(1) : '0' }

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-mono text-lg text-emerald-400 font-bold mb-1">
          DAP: Dead-Block Aware GPU Prefetching
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          <span className="text-zinc-200 font-medium">Benchmark: MatrixMult C = A × B ({N}×{N}, {numWarps} warps)</span>
          <br />
          Simulates MGPUsim L1V cache behavior (real system: 64 CUs, L1V 16KB 4-way, L2 256KB 16-way).
          A is read row-wise (stride 1), B column-wise (stride {N}) — strided prefetcher learns B's pattern
          via confidence-threshold detection. Dead blocks (☠) = fetched but never reused before eviction.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 p-3 rounded-lg border border-zinc-800 bg-zinc-900/80">
        <button onClick={() => setPrefetchMode('none')}
          className={`px-3 py-1.5 font-mono text-xs rounded-md font-medium transition-all ${
            prefetchMode === 'none' ? 'bg-red-500/20 text-red-300 border border-red-500/50' : 'border border-zinc-700 text-zinc-400 hover:text-zinc-200'
          }`}>✗ None</button>
        <button onClick={() => setPrefetchMode('nextline')}
          className={`px-3 py-1.5 font-mono text-xs rounded-md font-medium transition-all ${
            prefetchMode === 'nextline' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50' : 'border border-zinc-700 text-zinc-400 hover:text-zinc-200'
          }`}>→ Next-Line</button>
        <button onClick={() => setPrefetchMode('strided')}
          className={`px-3 py-1.5 font-mono text-xs rounded-md font-medium transition-all ${
            prefetchMode === 'strided' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' : 'border border-zinc-700 text-zinc-400 hover:text-zinc-200'
          }`}>⇉ Strided (DAP)</button>
        <select value={matSize} onChange={e => setMatSize(Number(e.target.value))}
          className="px-3 py-1.5 font-mono text-xs rounded-md border border-zinc-700 text-zinc-300 bg-zinc-800">
          <option value={3}>3×3</option>
          <option value={4}>4×4</option>
          <option value={5}>5×5</option>
        </select>
        <select value={numWarps} onChange={e => setNumWarps(Number(e.target.value))}
          className="px-3 py-1.5 font-mono text-xs rounded-md border border-zinc-700 text-zinc-300 bg-zinc-800">
          <option value={1}>1 warp</option>
          <option value={2}>2 warps</option>
          <option value={3}>3 warps</option>
          <option value={4}>4 warps</option>
        </select>
        <div className="ml-auto flex items-center gap-1.5">
          <button onClick={() => setTick(t => Math.max(0, t-1))} disabled={tick===0}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-30 text-sm">◀</button>
          <button onClick={() => setPlaying(!playing)}
            className={`px-3 h-7 font-mono text-xs rounded border font-medium ${
              playing ? 'border-amber-500/50 text-amber-300 bg-amber-500/10' : 'border-zinc-600 text-zinc-300 hover:border-zinc-400'
            }`}>{playing ? '⏸' : '▶'}</button>
          <button onClick={() => setTick(t => Math.min(TOTAL_TICKS, t+1))} disabled={tick>=TOTAL_TICKS}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-30 text-sm">▶</button>
          <button onClick={() => { setTick(0); setPlaying(false) }}
            className="w-7 h-7 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:text-white text-sm">↺</button>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-zinc-500">Tick {tick}/{TOTAL_TICKS}</span>
        <div className="flex-1 h-1.5 bg-zinc-800 rounded overflow-hidden">
          <div className="h-full rounded transition-all duration-100" style={{ width: `${(tick/TOTAL_TICKS)*100}%`, backgroundColor: '#6366f1' }} />
        </div>
      </div>

      {/* Parallel warp lanes */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 overflow-hidden">
        <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
          <span className="font-mono text-xs text-zinc-400 font-bold">PARALLEL WARP EXECUTION — TICK {tick}</span>
        </div>
        <div className="p-3 space-y-2">
          {warpQueues.map((queue, w) => {
            const event = current?.events[w]
            const progress = queue.length > 0 ? (Math.min(tick, queue.length) / queue.length) * 100 : 100
            const idle = !event || event.idle
            const rows = Array.from(new Set(queue.map(a => a.cRow)))

            return (
              <div key={w} className="rounded border overflow-hidden" style={{ borderColor: `${warpColors[w]}33` }}>
                <div className="flex items-center gap-2 px-3 py-1" style={{ background: `${warpColors[w]}08` }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: warpColors[w], opacity: idle ? 0.3 : 1 }} />
                  <span className="font-mono text-[11px] font-bold" style={{ color: warpColors[w] }}>Warp {w}</span>
                  <span className="font-mono text-[9px] text-zinc-500">rows [{rows.join(',')}]</span>
                  <span className="ml-auto font-mono text-[9px] text-zinc-500">{Math.min(tick, queue.length)}/{queue.length}</span>
                </div>
                <div className="h-1" style={{ background: `${warpColors[w]}10` }}>
                  <div className="h-full transition-all duration-150" style={{ width: `${progress}%`, backgroundColor: warpColors[w], opacity: 0.6 }} />
                </div>
                <div className="px-3 py-1.5 min-h-[32px] flex items-center gap-3">
                  {!idle ? (
                    <>
                      <span className="font-mono text-xs text-zinc-300">{event.access.reason}</span>
                      <span className="font-mono text-[10px] text-zinc-500">{event.access.detail}</span>
                      <span className={`ml-auto px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                        event.result === 'hit' ? 'bg-emerald-500/15 text-emerald-300' :
                        event.result === 'prefetch-hit' ? 'bg-blue-500/15 text-blue-300' :
                        'bg-red-500/15 text-red-300'
                      }`}>{event.result === 'prefetch-hit' ? 'PF-HIT' : event.result.toUpperCase()}</span>
                      {event.prefetchAddr != null && (
                        <span className="font-mono text-[9px] text-violet-400">pf→{event.prefetchAddr}</span>
                      )}
                    </>
                  ) : (
                    <span className="font-mono text-[10px] text-zinc-600 italic">done</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Matrices + Cache row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Matrices (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-2">
          {/* A */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-2">
            <div className="font-mono text-[10px] text-zinc-400 font-bold mb-1.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded bg-indigo-500" />A <span className="text-zinc-600">stride 1</span>
            </div>
            <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
              {matAAddrs.map(addr => {
                const isActive = activeAddrs.has(addr) && simulation[tick-1]?.events.some(e => !e.idle && e.access.source === 'A' && e.access.addr === addr)
                const accessed = accessedAddrs.has(addr)
                return (
                  <div key={addr} className={`aspect-square flex items-center justify-center rounded-sm text-[8px] font-mono transition-all ${
                    isActive ? 'bg-indigo-500/50 text-white font-bold scale-110 z-10' :
                    accessed ? 'bg-indigo-500/10 text-indigo-300' :
                    'bg-zinc-900 text-zinc-700'
                  }`}>{addr}</div>
                )
              })}
            </div>
          </div>

          {/* B */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-2">
            <div className="font-mono text-[10px] text-zinc-400 font-bold mb-1.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded bg-cyan-500" />B <span className="text-zinc-600">stride {N}</span>
            </div>
            <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
              {matBAddrs.map(addr => {
                const isActive = activeAddrs.has(addr) && simulation[tick-1]?.events.some(e => !e.idle && e.access.source === 'B' && e.access.addr === addr)
                const accessed = accessedAddrs.has(addr)
                return (
                  <div key={addr} className={`aspect-square flex items-center justify-center rounded-sm text-[8px] font-mono transition-all ${
                    isActive ? 'bg-cyan-500/50 text-white font-bold scale-110 z-10' :
                    accessed ? 'bg-cyan-500/10 text-cyan-300' :
                    'bg-zinc-900 text-zinc-700'
                  }`}>{addr}</div>
                )
              })}
            </div>
          </div>

          {/* C */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-2">
            <div className="font-mono text-[10px] text-zinc-400 font-bold mb-1.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded bg-amber-500" />C = A×B
            </div>
            <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
              {Array.from({ length: N * N }, (_, idx) => {
                const row = Math.floor(idx / N), col = idx % N
                const prog = cProgress[row][col] / N
                const computing = currentC && currentC.row === row && currentC.col === col
                return (
                  <div key={idx} className={`aspect-square flex items-center justify-center rounded-sm text-[8px] font-mono transition-all ${
                    computing ? 'bg-amber-500/30 text-amber-200 font-bold' :
                    prog >= 1 ? 'bg-emerald-500/20 text-emerald-300' :
                    prog > 0 ? 'bg-amber-500/10 text-amber-300/70' :
                    'bg-zinc-900 text-zinc-700'
                  }`}>
                    {prog >= 1 ? '✓' : prog > 0 ? Math.round(prog * 100) : '·'}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Cache (4 cols) */}
        <div className="lg:col-span-4">
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3 h-full">
            <div className="font-mono text-[10px] text-zinc-400 font-bold mb-2">SHARED L1 CACHE ({CACHE_LINES} lines, LRU)</div>
            <div className="grid grid-cols-2 gap-1.5">
              {cacheState.map((line, idx) => {
                const isHit = current && line.valid && current.events.some(e => !e.idle && e.access.addr === line.addr)
                const hitEvent = isHit ? current.events.find(e => !e.idle && e.access.addr === line.addr) : null
                return (
                  <div key={idx} className={`flex items-center gap-1.5 px-1.5 py-1 rounded border text-[9px] font-mono transition-all ${
                    isHit && hitEvent?.result === 'hit' ? 'border-emerald-500/60 bg-emerald-500/10' :
                    isHit && hitEvent?.result === 'prefetch-hit' ? 'border-blue-500/60 bg-blue-500/10' :
                    isHit && hitEvent?.result === 'miss' ? 'border-red-500/60 bg-red-500/10' :
                    line.prefetched ? 'border-violet-700/30 bg-violet-900/5' :
                    line.valid && !line.used ? 'border-red-800/20 bg-red-950/5' :
                    line.valid ? 'border-zinc-700/30 bg-zinc-800/20' :
                    'border-zinc-800/20'
                  }`}>
                    <span className="text-zinc-600 w-3">L{idx}</span>
                    {line.valid ? (
                      <>
                        <span className={`font-bold ${
                          line.tag === 'A' ? 'text-indigo-300' : line.tag === 'B' ? 'text-cyan-300' : 'text-violet-300'
                        }`}>{line.addr}</span>
                        <span className={`px-0.5 rounded ${
                          line.tag === 'A' ? 'text-indigo-400/70' : line.tag === 'B' ? 'text-cyan-400/70' : 'text-violet-400/70'
                        }`}>{line.tag}</span>
                        <span className="ml-auto">
                          {line.prefetched && <span className="text-violet-400">PF</span>}
                          {!line.prefetched && line.used && <span className="text-emerald-500">✓</span>}
                          {!line.prefetched && !line.used && <span className="text-red-400">☠</span>}
                        </span>
                      </>
                    ) : (
                      <span className="text-zinc-800">—</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats (3 cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2 text-center">
              <div className="font-mono text-[8px] text-zinc-500">Hits</div>
              <div className="font-mono text-base font-bold text-emerald-400">{stats.hits}</div>
            </div>
            <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2 text-center">
              <div className="font-mono text-[8px] text-zinc-500">Misses</div>
              <div className="font-mono text-base font-bold text-red-400">{stats.misses}</div>
            </div>
            <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2 text-center">
              <div className="font-mono text-[8px] text-zinc-500">PF Hits</div>
              <div className="font-mono text-base font-bold text-blue-400">{stats.pfHits}</div>
            </div>
            <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2 text-center">
              <div className="font-mono text-[8px] text-zinc-500">Dead</div>
              <div className="font-mono text-base font-bold text-amber-400">{stats.deadEvictions}</div>
            </div>
          </div>
          <div className="rounded border border-zinc-800 bg-zinc-900/50 p-2 text-center">
            <div className="font-mono text-[8px] text-zinc-500">Hit Rate</div>
            <div className="font-mono text-xl font-bold text-emerald-400">{hitRate}%</div>
          </div>
          {/* Access log */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-2">
            <div className="font-mono text-[9px] text-zinc-500 font-bold mb-1">LAST 6</div>
            <div className="space-y-0.5">
              {simulation.slice(Math.max(0, tick - 6), tick).flatMap((state, si) =>
                state.events.filter(e => !e.idle).slice(0, 1).map((e, ei) => (
                  <div key={`${si}-${ei}`} className="flex items-center gap-1 font-mono text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: warpColors[e.warp] }} />
                    <span className={e.access.source === 'A' ? 'text-indigo-300' : 'text-cyan-300'}>{e.access.reason}</span>
                    <span className={`ml-auto ${
                      e.result === 'hit' ? 'text-emerald-400' : e.result === 'prefetch-hit' ? 'text-blue-400' : 'text-red-400'
                    }`}>{e.result === 'prefetch-hit' ? 'pf✓' : e.result === 'hit' ? '✓' : '✗'}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
        <div className="font-mono text-xs text-zinc-400 font-bold mb-3">
          COMPARISON — {N}×{N} matmul, {numWarps} warps, {CACHE_LINES}-line cache
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { key: 'none', label: '✗ No Prefetch', color: '#ef4444', s: comparison.none },
            { key: 'nextline', label: '→ Next-Line', color: '#3b82f6', s: comparison.nextline },
            { key: 'strided', label: '⇉ Strided (DAP)', color: '#10b981', s: comparison.strided },
          ].map(({ key, label, color, s }) => {
            const active = key === prefetchMode
            return (
              <div key={key} className={`rounded-lg border p-3 transition-all ${
                active ? 'border-zinc-600 bg-zinc-800/50' : 'border-zinc-800 bg-zinc-900/20'
              }`}>
                <div className="font-mono text-[11px] font-bold mb-2" style={{ color }}>{label}</div>
                <div className="space-y-1 font-mono text-[10px]">
                  <div className="flex justify-between"><span className="text-zinc-500">Hit rate</span><span className="text-zinc-200">{pct(s)}%</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">Miss rate</span><span className="text-red-300">{missPct(s)}%</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">PF hits</span><span className="text-blue-300">{s.pfHits}</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">Dead</span><span className="text-amber-300">{s.deadEvictions}</span></div>
                  <div className="mt-1.5 h-1.5 bg-zinc-800 rounded overflow-hidden">
                    <div className="h-full rounded" style={{ width: `${pct(s)}%`, backgroundColor: color }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {comparison.none.misses > 0 && (
          <div className="mt-3 font-mono text-[10px] text-zinc-400">
            Strided vs None: <span className="text-emerald-300 font-bold">
              {((1 - comparison.strided.misses / comparison.none.misses) * 100).toFixed(0)}% fewer misses
            </span>
            {comparison.nextline.misses > comparison.none.misses && (
              <span className="text-red-300 ml-3">Next-line: {((comparison.nextline.misses / comparison.none.misses - 1) * 100).toFixed(0)}% MORE misses (cache pollution)</span>
            )}
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
        <div className="font-mono text-xs text-zinc-400 font-bold mb-2">KEY FINDINGS (from BTP research)</div>
        <div className="font-mono text-[11px] text-zinc-500 space-y-1">
          <div>• <span className="text-indigo-300">A</span> rows reused by same warp → hits. <span className="text-cyan-300">B</span> columns stride by {N} → constant misses.</div>
          <div>• <span className="text-blue-300">Next-line</span> prefetches addr+1 for B — wrong stride, evicts useful data (cache pollution)</div>
          <div>• <span className="text-emerald-300">Strided</span> learns B's stride={N} after confidence threshold → correct prefetch</div>
          <div>• Real finding: <span className="text-amber-300">&gt;90% dead blocks at L2</span> — most fetched lines evicted before reuse</div>
          <div>• Counter-intuitive result: <span className="text-red-300">throughput decreased</span> despite higher hit rate due to L2 bandwidth saturation from 64 CUs</div>
          <div>• MSHR (Miss Status Holding Registers): prefetch requests can cause deadlocks when MSHRs fill — resolved via priority queuing</div>
        </div>
      </div>
    </div>
  )
}
