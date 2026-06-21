import { useState, useRef, useEffect, useCallback } from 'react'

// ponytail: visual tensor multiplication demo, not actual CSF computation
// shows the algorithmic difference between O(n^5) and O(n^4) approaches

export default function TTMcDemo() {
  const canvasRef = useRef(null)
  const [running, setRunning] = useState(false)
  const [algo, setAlgo] = useState('naive') // 'naive' | 'buffered'
  const [threads, setThreads] = useState(4)
  const stateRef = useRef({ ops: 0, totalOps: 0, phase: '', cells: [], activeThreads: [] })
  const intervalRef = useRef(null)

  const TENSOR_SIZE = 8

  const getColor = (thread) => {
    const colors = ['#00ff88', '#4488ff', '#ffb800', '#ff4444', '#aa44ff', '#44ffff', '#ff44aa', '#88ff44']
    return colors[thread % colors.length]
  }

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

    // Draw tensor as 3D grid (2D slice view)
    const cellSize = Math.min(30, (w - 200) / TENSOR_SIZE)
    const offsetX = 40
    const offsetY = 50

    // Label
    ctx.font = '11px JetBrains Mono'
    ctx.fillStyle = '#888'
    ctx.fillText('Sparse Tensor (CSF format) — Mode-1 Slice', offsetX, 30)

    // Draw grid
    for (let i = 0; i < TENSOR_SIZE; i++) {
      for (let j = 0; j < TENSOR_SIZE; j++) {
        const x = offsetX + j * cellSize
        const y = offsetY + i * cellSize
        const idx = i * TENSOR_SIZE + j
        const cell = s.cells[idx]

        if (cell && cell.active) {
          ctx.fillStyle = cell.color || '#00ff88'
          ctx.globalAlpha = 0.8
          ctx.fillRect(x, y, cellSize - 2, cellSize - 2)
          ctx.globalAlpha = 1
        } else if (cell && cell.done) {
          ctx.fillStyle = '#1a3a2a'
          ctx.fillRect(x, y, cellSize - 2, cellSize - 2)
        } else {
          ctx.fillStyle = Math.random() > 0.7 ? '#1a1a25' : '#0f0f15'
          ctx.fillRect(x, y, cellSize - 2, cellSize - 2)
        }

        ctx.strokeStyle = '#2a2a3a'
        ctx.strokeRect(x, y, cellSize - 2, cellSize - 2)
      }
    }

    // Buffer visualization (for buffered mode)
    const bufX = offsetX + TENSOR_SIZE * cellSize + 40
    const bufY = offsetY
    ctx.fillStyle = '#888'
    ctx.fillText(algo === 'buffered' ? 'Intermediate Buffer' : 'No Buffer (recompute)', bufX, 30)

    if (algo === 'buffered') {
      for (let i = 0; i < TENSOR_SIZE; i++) {
        const y = bufY + i * cellSize
        const fill = s.ops > i * (s.totalOps / TENSOR_SIZE)
        ctx.fillStyle = fill ? 'rgba(68, 136, 255, 0.5)' : '#1a1a25'
        ctx.fillRect(bufX, y, cellSize * 3, cellSize - 2)
        ctx.strokeStyle = '#2a2a3a'
        ctx.strokeRect(bufX, y, cellSize * 3, cellSize - 2)
      }
    } else {
      ctx.fillStyle = '#1a1a25'
      ctx.fillRect(bufX, bufY, cellSize * 3, TENSOR_SIZE * cellSize)
      ctx.strokeStyle = '#ff4444'
      ctx.setLineDash([4, 4])
      ctx.strokeRect(bufX, bufY, cellSize * 3, TENSOR_SIZE * cellSize)
      ctx.setLineDash([])
      ctx.fillStyle = '#ff4444'
      ctx.font = '10px JetBrains Mono'
      ctx.fillText('(redundant', bufX + 5, bufY + TENSOR_SIZE * cellSize / 2 - 5)
      ctx.fillText(' recomputation)', bufX + 5, bufY + TENSOR_SIZE * cellSize / 2 + 10)
    }

    // Thread visualization
    const threadY = offsetY + TENSOR_SIZE * cellSize + 40
    ctx.fillStyle = '#888'
    ctx.font = '11px JetBrains Mono'
    ctx.fillText(`Threads: ${threads} | Algorithm: ${algo === 'buffered' ? 'Buffered O(n⁴)' : 'Naive O(n⁵)'}`, offsetX, threadY)

    for (let t = 0; t < threads; t++) {
      const tx = offsetX + t * 60
      const ty = threadY + 15
      ctx.fillStyle = getColor(t)
      ctx.fillRect(tx, ty, 50, 12)
      ctx.fillStyle = '#0a0a0f'
      ctx.font = '9px JetBrains Mono'
      ctx.fillText(`T${t}`, tx + 18, ty + 10)
    }

    // Stats
    const statsY = threadY + 50
    ctx.font = '12px JetBrains Mono'
    ctx.fillStyle = '#888'
    const progress = s.totalOps > 0 ? Math.round((s.ops / s.totalOps) * 100) : 0
    ctx.fillText(`Progress: ${progress}%`, offsetX, statsY)
    ctx.fillText(`Operations: ${s.ops}/${s.totalOps}`, offsetX, statsY + 20)

    const speedup = algo === 'buffered' ? '2.87x faster' : '1.0x (baseline)'
    ctx.fillStyle = algo === 'buffered' ? '#00ff88' : '#ff4444'
    ctx.fillText(`Speedup: ${speedup}`, offsetX, statsY + 40)

    // Complexity comparison
    ctx.fillStyle = '#888'
    ctx.font = '11px JetBrains Mono'
    const compX = offsetX + 250
    ctx.fillText('Complexity:', compX, statsY)
    ctx.fillStyle = algo === 'buffered' ? '#00ff88' : '#ff4444'
    ctx.font = 'bold 14px JetBrains Mono'
    ctx.fillText(algo === 'buffered' ? 'O(n⁴)' : 'O(n⁵)', compX, statsY + 22)
    ctx.fillStyle = '#888'
    ctx.font = '10px JetBrains Mono'
    ctx.fillText(algo === 'buffered' ? 'Intermediate results cached' : 'Redundant inner-loop computation', compX, statsY + 40)
  }, [algo, threads])

  useEffect(() => { draw() }, [draw, algo, threads])

  const runDemo = () => {
    setRunning(true)
    const totalOps = algo === 'naive' ? TENSOR_SIZE ** 3 * 2 : TENSOR_SIZE ** 2 * 3
    stateRef.current = {
      ops: 0,
      totalOps,
      phase: 'computing',
      cells: Array(TENSOR_SIZE * TENSOR_SIZE).fill(null),
      activeThreads: [],
    }

    const speed = algo === 'naive' ? 30 : 50 // buffered is visually slower per op but fewer ops
    intervalRef.current = setInterval(() => {
      const s = stateRef.current
      if (s.ops >= s.totalOps) {
        clearInterval(intervalRef.current)
        setRunning(false)
        return
      }

      // Activate cells based on thread
      const opsPerTick = threads
      for (let t = 0; t < opsPerTick; t++) {
        const cellIdx = (s.ops + t) % (TENSOR_SIZE * TENSOR_SIZE)
        s.cells[cellIdx] = { active: true, color: getColor(t % threads) }

        // Mark previous as done
        const prevIdx = (cellIdx - threads + TENSOR_SIZE * TENSOR_SIZE) % (TENSOR_SIZE * TENSOR_SIZE)
        if (s.cells[prevIdx]) s.cells[prevIdx] = { done: true, active: false }
      }

      s.ops += opsPerTick
      draw()
    }, speed)
  }

  const reset = () => {
    clearInterval(intervalRef.current)
    setRunning(false)
    stateRef.current = { ops: 0, totalOps: 0, phase: '', cells: [], activeThreads: [] }
    draw()
  }

  return (
    <div>
      <h3 className="font-mono text-lg text-terminal-green font-bold mb-2">TTMc: Parallel Tensor Decomposition</h3>
      <p className="text-text-dim text-sm mb-6">
        Tucker decomposition on sparse tensors. The naive approach has O(n&#x2075;) complexity due to
        redundant recomputation in the inner loop. Intermediate buffering eliminates a full loop level,
        achieving O(n&#x2074;) with 2.87x measured speedup on 4 threads.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => { reset(); setAlgo('naive') }}
          className={`px-3 py-1.5 font-mono text-xs rounded border ${
            algo === 'naive' ? 'border-terminal-red text-terminal-red bg-terminal-red/10' : 'border-border text-text-dim'
          }`}
        >
          Naive O(n⁵)
        </button>
        <button
          onClick={() => { reset(); setAlgo('buffered') }}
          className={`px-3 py-1.5 font-mono text-xs rounded border ${
            algo === 'buffered' ? 'border-terminal-green text-terminal-green bg-accent-glow' : 'border-border text-text-dim'
          }`}
        >
          Buffered O(n⁴)
        </button>
        <select
          value={threads}
          onChange={e => { reset(); setThreads(Number(e.target.value)) }}
          className="px-3 py-1.5 font-mono text-xs rounded border border-border text-text-dim bg-surface-2"
        >
          {[1, 2, 4, 8].map(t => <option key={t} value={t}>{t} threads</option>)}
        </select>
        <button
          onClick={running ? reset : runDemo}
          className="px-4 py-1.5 font-mono text-xs rounded border border-terminal-amber text-terminal-amber hover:bg-terminal-amber/10"
        >
          {running ? '⏹ Stop' : '▶ Run'}
        </button>
      </div>

      <canvas ref={canvasRef} className="w-full h-[400px] rounded bg-bg/50" />
    </div>
  )
}
