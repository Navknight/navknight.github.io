import { useState, useRef, useEffect } from 'react'

// ponytail: visual demo of streaming zip vs in-memory, no actual WASM binary shipped
// upgrade: bundle real wasm zip module when ready

export default function ZipDemo() {
  const canvasRef = useRef(null)
  const [running, setRunning] = useState(false)
  const [mode, setMode] = useState('traditional') // 'traditional' | 'streaming'
  const animRef = useRef(null)
  const stateRef = useRef({ blocks: [], memUsage: 0, progress: 0, done: false })

  const FILE_SIZE = 50 // blocks
  const TRADITIONAL_MEM = 100 // % (loads all into RAM)
  const STREAMING_MEM = 20 // % (only buffer window)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr
    ctx.scale(dpr, dpr)
    draw(ctx, canvas.offsetWidth, canvas.offsetHeight)
  })

  const draw = (ctx, w, h) => {
    const s = stateRef.current
    ctx.clearRect(0, 0, w, h)

    const blockW = (w - 80) / FILE_SIZE
    const blockH = 30

    // File blocks
    ctx.fillStyle = '#1a1a25'
    ctx.fillRect(30, 30, w - 60, blockH + 10)
    ctx.strokeStyle = '#2a2a3a'
    ctx.strokeRect(30, 30, w - 60, blockH + 10)

    // Label
    ctx.font = '11px JetBrains Mono'
    ctx.fillStyle = '#888'
    ctx.fillText('File Data (blocks)', 30, 22)

    for (let i = 0; i < FILE_SIZE; i++) {
      const x = 35 + i * blockW
      const y = 35
      const processed = i < s.progress

      ctx.fillStyle = processed ? '#00ff88' : '#2a2a3a'
      ctx.fillRect(x, y, blockW - 2, blockH)

      if (mode === 'streaming' && i >= s.progress && i < s.progress + 5) {
        ctx.fillStyle = 'rgba(0, 255, 136, 0.3)'
        ctx.fillRect(x, y, blockW - 2, blockH)
      }
    }

    // Memory bar
    const memY = 100
    ctx.fillStyle = '#888'
    ctx.fillText('Memory Usage', 30, memY - 5)

    ctx.fillStyle = '#1a1a25'
    ctx.fillRect(30, memY, w - 60, 30)
    ctx.strokeStyle = '#2a2a3a'
    ctx.strokeRect(30, memY, w - 60, 30)

    const memWidth = ((w - 60) * s.memUsage) / 100
    const memColor = s.memUsage > 80 ? '#ff4444' : s.memUsage > 50 ? '#ffb800' : '#00ff88'
    ctx.fillStyle = memColor
    ctx.fillRect(30, memY, memWidth, 30)

    ctx.fillStyle = '#e0e0e0'
    ctx.font = 'bold 12px JetBrains Mono'
    ctx.fillText(`${Math.round(s.memUsage)}%`, w / 2 - 15, memY + 20)

    // Output zip
    const outY = 160
    ctx.fillStyle = '#888'
    ctx.font = '11px JetBrains Mono'
    ctx.fillText('Output (.zip)', 30, outY - 5)

    ctx.fillStyle = '#1a1a25'
    ctx.fillRect(30, outY, w - 60, blockH + 10)
    ctx.strokeStyle = '#2a2a3a'
    ctx.strokeRect(30, outY, w - 60, blockH + 10)

    const outputBlocks = mode === 'streaming' ? s.progress : (s.done ? FILE_SIZE : 0)
    for (let i = 0; i < outputBlocks; i++) {
      const x = 35 + i * blockW
      ctx.fillStyle = '#4488ff'
      ctx.fillRect(x, outY + 5, blockW - 2, blockH)
    }

    // Stats
    const statsY = 230
    ctx.font = '12px JetBrains Mono'
    ctx.fillStyle = '#00ff88'
    ctx.fillText(`Mode: ${mode === 'streaming' ? 'OPFS Streaming (WASM)' : 'Traditional (in-memory)'}`, 30, statsY)
    ctx.fillStyle = '#888'
    ctx.fillText(`Progress: ${Math.round((s.progress / FILE_SIZE) * 100)}%`, 30, statsY + 20)
    ctx.fillText(`Peak memory: ${mode === 'streaming' ? '~20%' : '~100%'}`, 30, statsY + 40)

    if (mode === 'streaming') {
      ctx.fillStyle = '#00ff88'
      ctx.fillText('✓ Processes chunk-by-chunk via OPFS', 30, statsY + 70)
      ctx.fillText('✓ Never loads full file into memory', 30, statsY + 90)
      ctx.fillText('✓ No tab crashes on large files', 30, statsY + 110)
    } else {
      ctx.fillStyle = '#ff4444'
      ctx.fillText('✗ Must load entire file into memory first', 30, statsY + 70)
      ctx.fillText('✗ Browser tab crashes on files > 500MB', 30, statsY + 90)
      ctx.fillText('✗ Blocks UI thread during processing', 30, statsY + 110)
    }
  }

  const runDemo = () => {
    setRunning(true)
    stateRef.current = { blocks: [], memUsage: 0, progress: 0, done: false }

    const tick = () => {
      const s = stateRef.current
      if (s.progress >= FILE_SIZE) {
        s.done = true
        if (mode === 'traditional') s.memUsage = 0
        setRunning(false)
        return
      }

      if (mode === 'traditional') {
        // Traditional: load all blocks first, then zip
        if (s.memUsage < TRADITIONAL_MEM) {
          s.memUsage = Math.min(TRADITIONAL_MEM, s.memUsage + 4)
        } else {
          s.progress += 2
        }
      } else {
        // Streaming: process chunk by chunk
        s.memUsage = STREAMING_MEM + Math.sin(s.progress * 0.3) * 5
        s.progress += 1
      }

      animRef.current = requestAnimationFrame(tick)
    }

    // Slower tick rate for visibility
    const interval = setInterval(() => {
      tick()
      // Force re-render
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        draw(ctx, canvas.offsetWidth, canvas.offsetHeight)
      }
    }, mode === 'streaming' ? 80 : 50)

    stateRef.current.interval = interval
  }

  const reset = () => {
    setRunning(false)
    clearInterval(stateRef.current.interval)
    cancelAnimationFrame(animRef.current)
    stateRef.current = { blocks: [], memUsage: 0, progress: 0, done: false }
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h3 className="font-mono text-lg text-terminal-green font-bold">WASM Zip: Streaming vs In-Memory</h3>
      </div>

      <p className="text-text-dim text-sm mb-6">
        Traditional zip libraries load entire files into memory, crashing browser tabs on large files.
        Our Rust/WASM library streams through OPFS, keeping memory constant regardless of file size.
      </p>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => { reset(); setMode('traditional') }}
          className={`px-3 py-1.5 font-mono text-xs rounded border transition-all ${
            mode === 'traditional' ? 'border-terminal-red text-terminal-red bg-terminal-red/10' : 'border-border text-text-dim'
          }`}
        >
          Traditional
        </button>
        <button
          onClick={() => { reset(); setMode('streaming') }}
          className={`px-3 py-1.5 font-mono text-xs rounded border transition-all ${
            mode === 'streaming' ? 'border-terminal-green text-terminal-green bg-accent-glow' : 'border-border text-text-dim'
          }`}
        >
          OPFS Streaming
        </button>
        <button
          onClick={running ? reset : runDemo}
          className="px-4 py-1.5 font-mono text-xs rounded border border-terminal-amber text-terminal-amber hover:bg-terminal-amber/10 transition-all"
        >
          {running ? '⏹ Stop' : '▶ Run'}
        </button>
      </div>

      <canvas
        ref={canvasRef}
        className="w-full h-[360px] rounded bg-bg/50"
      />
    </div>
  )
}
