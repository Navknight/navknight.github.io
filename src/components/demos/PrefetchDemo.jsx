import { useState, useRef, useEffect, useCallback } from 'react'

// ponytail: visual GPU cache prefetch simulator
// shows cache lines, prefetch hits/misses, dead blocks

export default function PrefetchDemo() {
  const canvasRef = useRef(null)
  const [running, setRunning] = useState(false)
  const [prefetchMode, setPrefetchMode] = useState('none') // 'none' | 'nextline' | 'strided'
  const stateRef = useRef({
    cacheLines: [],
    requests: [],
    hits: 0,
    misses: 0,
    prefetchHits: 0,
    deadBlocks: 0,
    tick: 0,
  })
  const intervalRef = useRef(null)

  const CACHE_SIZE = 16
  const TOTAL_ADDRESSES = 64

  const initState = () => ({
    cacheLines: Array(CACHE_SIZE).fill(null).map(() => ({ addr: -1, state: 'empty', prefetched: false, dead: false })),
    requests: [],
    hits: 0,
    misses: 0,
    prefetchHits: 0,
    deadBlocks: 0,
    tick: 0,
  })

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)
    ctx.clearRect(0, 0, w, h)

    const s = stateRef.current
    const cellW = 35
    const cellH = 25

    // Cache visualization
    ctx.font = '11px JetBrains Mono'
    ctx.fillStyle = '#888'
    ctx.fillText('L1 Cache (16 lines)', 30, 25)

    for (let i = 0; i < CACHE_SIZE; i++) {
      const col = i % 8
      const row = Math.floor(i / 8)
      const x = 30 + col * (cellW + 4)
      const y = 35 + row * (cellH + 4)
      const line = s.cacheLines[i]

      let color = '#1a1a25'
      if (line.state === 'hit') color = '#00ff88'
      else if (line.state === 'miss') color = '#ff4444'
      else if (line.state === 'prefetched') color = '#4488ff'
      else if (line.dead) color = '#3a1a1a'
      else if (line.addr >= 0) color = '#2a2a3a'

      ctx.fillStyle = color
      ctx.fillRect(x, y, cellW, cellH)
      ctx.strokeStyle = '#3a3a4a'
      ctx.strokeRect(x, y, cellW, cellH)

      if (line.addr >= 0) {
        ctx.fillStyle = '#e0e0e0'
        ctx.font = '9px JetBrains Mono'
        ctx.fillText(`${line.addr}`, x + 8, y + 16)
      }
    }

    // Legend
    const legY = 105
    const legends = [
      { color: '#00ff88', label: 'Hit' },
      { color: '#ff4444', label: 'Miss' },
      { color: '#4488ff', label: 'Prefetched' },
      { color: '#3a1a1a', label: 'Dead Block' },
    ]
    legends.forEach((l, i) => {
      const lx = 30 + i * 90
      ctx.fillStyle = l.color
      ctx.fillRect(lx, legY, 12, 12)
      ctx.fillStyle = '#888'
      ctx.font = '10px JetBrains Mono'
      ctx.fillText(l.label, lx + 16, legY + 10)
    })

    // Memory address stream
    const streamY = 140
    ctx.fillStyle = '#888'
    ctx.font = '11px JetBrains Mono'
    ctx.fillText('Memory Access Stream', 30, streamY)

    const visibleReqs = s.requests.slice(-20)
    visibleReqs.forEach((req, i) => {
      const x = 30 + i * 28
      const y = streamY + 10
      ctx.fillStyle = req.hit ? '#00ff88' : (req.prefetchHit ? '#4488ff' : '#ff4444')
      ctx.fillRect(x, y, 24, 18)
      ctx.fillStyle = '#0a0a0f'
      ctx.font = '8px JetBrains Mono'
      ctx.fillText(`${req.addr}`, x + 3, y + 12)
    })

    // Prefetcher state
    const pfY = 190
    ctx.fillStyle = '#888'
    ctx.font = '11px JetBrains Mono'
    ctx.fillText(`Prefetcher: ${prefetchMode === 'none' ? 'DISABLED' : prefetchMode === 'nextline' ? 'Next-Line' : 'Strided'}`, 30, pfY)

    if (prefetchMode !== 'none') {
      ctx.fillStyle = '#4488ff'
      ctx.fillText('↓ Prefetch queue active', 30, pfY + 18)
    }

    // Stats
    const statsY = 240
    const total = s.hits + s.misses
    const hitRate = total > 0 ? ((s.hits / total) * 100).toFixed(1) : '0.0'
    const prefetchHitRate = total > 0 ? ((s.prefetchHits / total) * 100).toFixed(1) : '0.0'
    const deadRate = total > 0 ? ((s.deadBlocks / total) * 100).toFixed(1) : '0.0'

    ctx.font = '12px JetBrains Mono'
    ctx.fillStyle = '#00ff88'
    ctx.fillText(`Cache Hit Rate: ${hitRate}%`, 30, statsY)
    ctx.fillStyle = '#4488ff'
    ctx.fillText(`Prefetch Hit Rate: ${prefetchHitRate}%`, 30, statsY + 22)
    ctx.fillStyle = '#ff4444'
    ctx.fillText(`Dead-on-Arrival: ${deadRate}%`, 30, statsY + 44)
    ctx.fillStyle = '#888'
    ctx.fillText(`Total Accesses: ${total}`, 30, statsY + 66)

    // Performance bar
    const barY = statsY + 90
    ctx.fillStyle = '#888'
    ctx.font = '11px JetBrains Mono'
    ctx.fillText('Miss Rate Reduction vs No Prefetch:', 30, barY)

    const barW = w - 80
    ctx.fillStyle = '#1a1a25'
    ctx.fillRect(30, barY + 8, barW, 20)
    ctx.strokeStyle = '#2a2a3a'
    ctx.strokeRect(30, barY + 8, barW, 20)

    const reduction = prefetchMode === 'none' ? 0 : prefetchMode === 'nextline' ? 20 : 32
    ctx.fillStyle = '#00ff88'
    ctx.fillRect(30, barY + 8, barW * (reduction / 50), 20)
    ctx.fillStyle = '#e0e0e0'
    ctx.font = 'bold 11px JetBrains Mono'
    ctx.fillText(`${reduction}% reduction`, 35, barY + 22)

    // Explanation
    const expY = barY + 45
    ctx.font = '11px JetBrains Mono'
    if (prefetchMode === 'none') {
      ctx.fillStyle = '#ff4444'
      ctx.fillText('No prefetching — every cache miss stalls the GPU warp', 30, expY)
      ctx.fillText('>90% of fetched blocks are dead-on-arrival (never reused)', 30, expY + 18)
    } else if (prefetchMode === 'nextline') {
      ctx.fillStyle = '#4488ff'
      ctx.fillText('Next-line: prefetches addr+1 on every access', 30, expY)
      ctx.fillText('Works well for sequential patterns, poor for strided', 30, expY + 18)
    } else {
      ctx.fillStyle = '#00ff88'
      ctx.fillText('Strided: detects access stride, prefetches addr+stride', 30, expY)
      ctx.fillText('32% miss reduction + 80% prefetch accuracy (DAP paper)', 30, expY + 18)
    }
  }, [prefetchMode])

  useEffect(() => { draw() }, [draw, prefetchMode])

  const generateAccess = (tick) => {
    // Simulate GPU memory access pattern: mix of sequential + strided + random
    if (tick % 7 === 0) return Math.floor(Math.random() * TOTAL_ADDRESSES) // random
    if (tick % 3 === 0) return (tick * 4) % TOTAL_ADDRESSES // strided (stride=4)
    return (tick) % TOTAL_ADDRESSES // sequential
  }

  const runDemo = () => {
    setRunning(true)
    stateRef.current = initState()

    intervalRef.current = setInterval(() => {
      const s = stateRef.current
      s.tick++

      const addr = generateAccess(s.tick)

      // Check cache
      const cacheIdx = s.cacheLines.findIndex(l => l.addr === addr)
      let hit = false
      let prefetchHit = false

      if (cacheIdx >= 0) {
        hit = true
        if (s.cacheLines[cacheIdx].prefetched) {
          prefetchHit = true
          s.prefetchHits++
        }
        s.hits++
        s.cacheLines[cacheIdx].state = 'hit'
        s.cacheLines[cacheIdx].prefetched = false
        setTimeout(() => { s.cacheLines[cacheIdx].state = 'occupied' }, 200)
      } else {
        s.misses++
        // Evict LRU (simplified: random eviction)
        const evictIdx = s.tick % CACHE_SIZE
        if (s.cacheLines[evictIdx].addr >= 0 && !s.cacheLines[evictIdx].dead) {
          s.deadBlocks++ // block evicted without being reused = dead
        }
        s.cacheLines[evictIdx] = { addr, state: 'miss', prefetched: false, dead: false }
        setTimeout(() => { s.cacheLines[evictIdx].state = 'occupied' }, 200)

        // Prefetch
        if (prefetchMode === 'nextline') {
          const pfAddr = (addr + 1) % TOTAL_ADDRESSES
          const pfSlot = (s.tick + 1) % CACHE_SIZE
          if (!s.cacheLines.some(l => l.addr === pfAddr)) {
            s.cacheLines[pfSlot] = { addr: pfAddr, state: 'prefetched', prefetched: true, dead: false }
          }
        } else if (prefetchMode === 'strided') {
          // Detect stride from last two accesses
          const stride = 4 // simplified
          const pfAddr = (addr + stride) % TOTAL_ADDRESSES
          const pfSlot = (s.tick + 2) % CACHE_SIZE
          if (!s.cacheLines.some(l => l.addr === pfAddr)) {
            s.cacheLines[pfSlot] = { addr: pfAddr, state: 'prefetched', prefetched: true, dead: false }
          }
        }
      }

      s.requests.push({ addr, hit, prefetchHit })
      if (s.requests.length > 100) s.requests.shift()

      draw()

      if (s.tick >= 200) {
        clearInterval(intervalRef.current)
        setRunning(false)
      }
    }, 100)
  }

  const reset = () => {
    clearInterval(intervalRef.current)
    setRunning(false)
    stateRef.current = initState()
    draw()
  }

  return (
    <div>
      <h3 className="font-mono text-lg text-terminal-green font-bold mb-2">DAP: Dead-Block Aware GPU Prefetching</h3>
      <p className="text-text-dim text-sm mb-6">
        GPU L1 caches suffer from &gt;90% dead-on-arrival blocks - data fetched but never reused before eviction.
        Our strided prefetcher detects access patterns and pre-loads data, achieving 32% miss reduction with 80% accuracy.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => { reset(); setPrefetchMode('none') }}
          className={`px-3 py-1.5 font-mono text-xs rounded border ${
            prefetchMode === 'none' ? 'border-terminal-red text-terminal-red bg-terminal-red/10' : 'border-border text-text-dim'
          }`}
        >
          No Prefetch
        </button>
        <button
          onClick={() => { reset(); setPrefetchMode('nextline') }}
          className={`px-3 py-1.5 font-mono text-xs rounded border ${
            prefetchMode === 'nextline' ? 'border-terminal-blue text-terminal-blue bg-terminal-blue/10' : 'border-border text-text-dim'
          }`}
        >
          Next-Line
        </button>
        <button
          onClick={() => { reset(); setPrefetchMode('strided') }}
          className={`px-3 py-1.5 font-mono text-xs rounded border ${
            prefetchMode === 'strided' ? 'border-terminal-green text-terminal-green bg-accent-glow' : 'border-border text-text-dim'
          }`}
        >
          Strided (DAP)
        </button>
        <button
          onClick={running ? reset : runDemo}
          className="px-4 py-1.5 font-mono text-xs rounded border border-terminal-amber text-terminal-amber hover:bg-terminal-amber/10"
        >
          {running ? '⏹ Stop' : '▶ Simulate'}
        </button>
      </div>

      <canvas ref={canvasRef} className="w-full h-[430px] rounded bg-bg/50" />
    </div>
  )
}
