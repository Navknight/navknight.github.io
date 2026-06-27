import { useRef, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { buildGraph, tick, getColors } from '../data/graph'

function draw(ctx, W, H, nodes, edges, nodeMap, pan, scale, hover) {
  const C = getColors()
  ctx.clearRect(0, 0, W, H)
  ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H)

  // Determine highlighted set
  const hiSet = new Set()
  if (hover) {
    hiSet.add(hover.id)
    for (const e of edges) {
      if (e.a === hover.id) hiSet.add(e.b)
      if (e.b === hover.id) hiSet.add(e.a)
    }
  }

  const tx = W/2 + pan.x, ty = H/2 + pan.y
  const toS = (x, y) => ({ x: x*scale+tx, y: y*scale+ty })

  // Edges
  for (const e of edges) {
    const a = nodeMap.get(e.a), b = nodeMap.get(e.b)
    if (!a||!b) continue
    const hi = hover && (e.a===hover.id||e.b===hover.id)
    const pa = toS(a.x,a.y), pb = toS(b.x,b.y)
    ctx.beginPath(); ctx.moveTo(pa.x,pa.y); ctx.lineTo(pb.x,pb.y)
    ctx.strokeStyle = hi ? C.edgeHi : C.edge
    ctx.lineWidth = hi ? 1 : 0.5
    ctx.stroke()
  }

  // Nodes
  for (const n of nodes) {
    const p = toS(n.x, n.y)
    const r = n.r * scale * (n===hover ? 1.6 : 1)
    const faded = hover && !hiSet.has(n.id)
    let col = n.type==='blog' ? C.blog : n.type==='dsa' ? C.dsa : C.topic

    ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI*2)
    ctx.fillStyle = faded ? col+'22' : col+(n===hover ? 'ff' : 'bb')
    ctx.fill()

    if (n===hover) {
      ctx.beginPath(); ctx.arc(p.x, p.y, r+3, 0, Math.PI*2)
      ctx.strokeStyle = col+'55'; ctx.lineWidth = 1; ctx.stroke()
    }
  }

  // Labels (screen space, only show relevant ones)
  ctx.font = '10px JetBrains Mono, monospace'
  for (const n of nodes) {
    const show = n===hover || hiSet.has(n.id) || (n.type==='topic' && n.r*scale > 6) || (scale > 2)
    if (!show) continue
    const p = toS(n.x, n.y)
    const r = n.r * scale
    const faded = hover && !hiSet.has(n.id)
    ctx.fillStyle = (n===hover ? C.textHi : C.text) + (faded ? '44' : 'dd')
    ctx.fillText(n.label, p.x + r + 4, p.y + 3)
  }
}

export default function GraphPage() {
  const canvasRef  = useRef(null)
  const stateRef   = useRef(null)   // { nodes, edges, nodeMap, pan, scale, hover, raf, dragging, lastMouse }
  const navigate   = useNavigate()

  const init = useCallback(() => {
    const { nodes, edges, nodeMap } = buildGraph()
    stateRef.current = {
      nodes, edges, nodeMap,
      pan: { x:0, y:0 }, scale: 1,
      hover: null, settled: false,
      dragging: false, lastMouse: null, raf: null,
    }
  }, [])

  useEffect(() => {
    init()
    const canvas = canvasRef.current
    const s = stateRef.current

    // Pre-warm: run synchronously so graph appears settled on first paint
    for (let i = 0; i < 250; i++) tick(s.nodes, s.edges, s.nodeMap)
    s.settled = false

    let tickCount = 0
    function loop() {
      const W = canvas.width, H = canvas.height
      if (!s.settled) {
        const energy = tick(s.nodes, s.edges, s.nodeMap)
        tickCount++
        if (energy < 0.02 || tickCount > 300) s.settled = true
      }
      draw(canvas.getContext('2d'), W, H, s.nodes, s.edges, s.nodeMap, s.pan, s.scale, s.hover)
      s.raf = requestAnimationFrame(loop)
    }

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
    }
    resize()
    window.addEventListener('resize', resize)
    s.raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(s.raf)
      window.removeEventListener('resize', resize)
    }
  }, [init])

  // Mouse handlers
  const hitTest = useCallback((mx, my) => {
    const s = stateRef.current
    const canvas = canvasRef.current
    const W = canvas.width, H = canvas.height
    const wx = (mx*devicePixelRatio - W/2 - s.pan.x) / s.scale
    const wy = (my*devicePixelRatio - H/2 - s.pan.y) / s.scale
    let best = null, bestD = Infinity
    for (const n of s.nodes) {
      const d = Math.hypot(n.x-wx, n.y-wy)
      if (d < n.r + 8/s.scale && d < bestD) { bestD = d; best = n }
    }
    return best
  }, [])

  const onMouseMove = useCallback(e => {
    const s = stateRef.current
    if (s.dragging && s.lastMouse) {
      s.pan.x += (e.clientX - s.lastMouse.x) * devicePixelRatio
      s.pan.y += (e.clientY - s.lastMouse.y) * devicePixelRatio
      s.settled = false
    }
    s.lastMouse = { x: e.clientX, y: e.clientY }
    const rect = canvasRef.current.getBoundingClientRect()
    s.hover = hitTest(e.clientX - rect.left, e.clientY - rect.top)
    canvasRef.current.style.cursor = s.hover?.url ? 'pointer' : s.dragging ? 'grabbing' : 'grab'
  }, [hitTest])

  const onMouseDown = useCallback(e => {
    stateRef.current.dragging = true
    stateRef.current.lastMouse = { x: e.clientX, y: e.clientY }
  }, [])

  const onMouseUp = useCallback(() => { stateRef.current.dragging = false }, [])

  const onClick = useCallback(e => {
    if (stateRef.current.dragging) return
    const rect = canvasRef.current.getBoundingClientRect()
    const n = hitTest(e.clientX - rect.left, e.clientY - rect.top)
    if (n?.url) navigate(n.url)
  }, [hitTest, navigate])

  const onWheel = useCallback(e => {
    e.preventDefault()
    const s = stateRef.current
    const factor = e.deltaY < 0 ? 1.12 : 0.89
    s.scale = Math.max(0.2, Math.min(8, s.scale * factor))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.addEventListener('wheel', onWheel, { passive: false })
    return () => canvas.removeEventListener('wheel', onWheel)
  }, [onWheel])

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Navbar />
      <div className="flex-1 flex flex-col pt-12">
        {/* Legend */}
        <div className="flex items-center gap-5 px-6 py-3 border-b border-border/50 text-[10px] text-text-muted">
          <span className="font-mono">GRAPH</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#c084fc] inline-block"/>blog</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4ade80] inline-block"/>dsa</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#3f3f46] inline-block"/>topic</span>
          <span className="ml-auto opacity-60">scroll to zoom · drag to pan · click to open</span>
          <Link to="/" className="hover:text-accent transition-colors">← home</Link>
        </div>
        <canvas
          ref={canvasRef}
          className="flex-1 w-full"
          style={{ cursor: 'grab' }}
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onClick={onClick}
        />
      </div>
    </div>
  )
}
