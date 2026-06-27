import { useRef, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { buildSubgraph, tick, getColors } from '../../data/graph'

function draw(ctx, W, H, nodes, edges, nodeMap, currentId, hover, pan, scale) {
  const C = getColors()
  ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H)

  const hiSet = new Set()
  if (hover) {
    hiSet.add(hover.id)
    for (const e of edges) {
      if (e.a === hover.id) hiSet.add(e.b)
      if (e.b === hover.id) hiSet.add(e.a)
    }
  }
  const curSet = new Set([currentId])
  for (const e of edges) {
    if (e.a === currentId) curSet.add(e.b)
    if (e.b === currentId) curSet.add(e.a)
  }

  const cx = W/2 + pan.x, cy = H/2 + pan.y

  // Edges
  for (const e of edges) {
    const a = nodeMap.get(e.a), b = nodeMap.get(e.b)
    if (!a||!b) continue
    const isCurEdge = e.a === currentId || e.b === currentId
    const isHiEdge = hover && (e.a === hover.id || e.b === hover.id)
    ctx.beginPath()
    ctx.moveTo(cx + a.x*scale, cy + a.y*scale)
    ctx.lineTo(cx + b.x*scale, cy + b.y*scale)
    ctx.strokeStyle = (isHiEdge || isCurEdge) ? C.edgeHi : C.edge
    ctx.lineWidth = (isHiEdge || isCurEdge) ? 1 : 0.5
    ctx.stroke()
  }

  // Nodes
  for (const n of nodes) {
    const isCur = n.id === currentId
    const isHov = n === hover
    const faded = (hover && !hiSet.has(n.id)) && !curSet.has(n.id)
    let col = n.type==='blog' ? C.blog : n.type==='dsa' ? C.dsa : C.topic
    const r = n.r * scale * (isCur ? 1.8 : isHov ? 1.4 : 1)
    const px = cx + n.x*scale, py = cy + n.y*scale

    ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI*2)
    ctx.fillStyle = faded ? col+'22' : isCur ? col : col+'bb'
    ctx.fill()

    if (isCur) {
      ctx.beginPath(); ctx.arc(px, py, r+3, 0, Math.PI*2)
      ctx.strokeStyle = col+'66'; ctx.lineWidth = 1.5; ctx.stroke()
    }
  }

  // Labels on hover or current
  ctx.font = '9px JetBrains Mono, monospace'
  for (const n of nodes) {
    if (n !== hover && n.id !== currentId && !hiSet.has(n.id)) continue
    const col = n.type==='blog' ? C.blog : n.type==='dsa' ? C.dsa : C.topic
    ctx.fillStyle = n.id === currentId ? col : C.text+'cc'
    ctx.fillText(n.label, cx + n.x*scale + n.r*scale + 3, cy + n.y*scale + 3)
  }
}

export default function MiniGraph({ nodeId }) {
  const canvasRef = useRef(null)
  const stateRef  = useRef(null)
  const navigate  = useNavigate()

  const hitTest = useCallback((mx, my) => {
    const s = stateRef.current
    if (!s) return null
    const canvas = canvasRef.current
    const cx = canvas.width/2 + s.pan.x, cy = canvas.height/2 + s.pan.y
    let best = null, bestD = Infinity
    for (const n of s.nodes) {
      const d = Math.hypot(n.x*s.scale - (mx - cx), n.y*s.scale - (my - cy))
      if (d < n.r*s.scale + 6 && d < bestD) { bestD = d; best = n }
    }
    return best
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const dpr = devicePixelRatio
    canvas.width  = canvas.offsetWidth  * dpr
    canvas.height = canvas.offsetHeight * dpr

    const { nodes, edges, nodeMap } = buildSubgraph(nodeId, 35)
    for (let i = 0; i < 200; i++) tick(nodes, edges, nodeMap, { rep:600, slen:50, sk:0.04, damp:0.72, grav:0.004 })

    stateRef.current = {
      nodes, edges, nodeMap, hover: null, raf: null, settled: false,
      pan: { x: 0, y: 0 }, scale: 1, dragging: false, lastMouse: null,
    }
    const s = stateRef.current
    let count = 0

    function loop() {
      if (!s.settled) {
        tick(nodes, edges, nodeMap, { rep:600, slen:50, sk:0.04, damp:0.72, grav:0.004 })
        if (++count > 150) s.settled = true
      }
      draw(canvas.getContext('2d'), canvas.width, canvas.height, nodes, edges, nodeMap, nodeId, s.hover, s.pan, s.scale)
      s.raf = requestAnimationFrame(loop)
    }
    s.raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(s.raf)
  }, [nodeId])

  const onMouseMove = useCallback(e => {
    const s = stateRef.current; if (!s) return
    const rect = canvasRef.current.getBoundingClientRect()
    const dpr = devicePixelRatio
    if (s.dragging && s.lastMouse) {
      s.pan.x += (e.clientX - s.lastMouse.x) * dpr
      s.pan.y += (e.clientY - s.lastMouse.y) * dpr
    }
    s.lastMouse = { x: e.clientX, y: e.clientY }
    s.hover = hitTest((e.clientX - rect.left) * dpr, (e.clientY - rect.top) * dpr)
    canvasRef.current.style.cursor = s.dragging ? 'grabbing' : s.hover?.url ? 'pointer' : 'grab'
  }, [hitTest])

  const onMouseDown = useCallback(e => {
    const s = stateRef.current; if (!s) return
    s.dragging = true
    s.lastMouse = { x: e.clientX, y: e.clientY }
  }, [])

  const onMouseLeave = useCallback(() => {
    const s = stateRef.current; if (!s) return
    s.hover = null; s.dragging = false
  }, [])

  const onMouseUp = useCallback(() => {
    if (stateRef.current) stateRef.current.dragging = false
  }, [])

  const onWheel = useCallback(e => {
    e.preventDefault()
    const s = stateRef.current; if (!s) return
    s.scale = Math.max(0.3, Math.min(5, s.scale * (e.deltaY < 0 ? 1.1 : 0.91)))
  }, [])

  // Must be non-passive so preventDefault() stops page scroll
  useEffect(() => {
    const canvas = canvasRef.current
    canvas.addEventListener('wheel', onWheel, { passive: false })
    return () => canvas.removeEventListener('wheel', onWheel)
  }, [onWheel])

  const onClick = useCallback(e => {
    const s = stateRef.current; if (!s || s.dragging) return
    const rect = canvasRef.current.getBoundingClientRect()
    const dpr = devicePixelRatio
    const n = hitTest((e.clientX - rect.left) * dpr, (e.clientY - rect.top) * dpr)
    if (n?.url && n.id !== nodeId) navigate(n.url)
  }, [hitTest, navigate, nodeId])

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/50">
        <span className="text-[10px] text-text-muted font-mono">connections</span>
        <Link to="/graph" className="text-[10px] text-text-muted hover:text-accent-cyan transition-colors">
          full graph →
        </Link>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ height: 180, cursor: 'grab' }}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
    </div>
  )
}
