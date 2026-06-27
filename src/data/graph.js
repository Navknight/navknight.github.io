import { posts } from './posts'
import { problems } from './dsa'

// Build full graph once (positions randomized, stabilized by caller)
export function buildGraph() {
  const nodeMap = new Map()
  const edges = []

  for (const p of posts) {
    nodeMap.set(`blog:${p.slug}`, {
      id: `blog:${p.slug}`, label: p.title.length > 22 ? p.title.slice(0, 22) + '…' : p.title,
      fullLabel: p.title, type: 'blog', url: `/blog/${p.slug}`,
      tags: p.tags, x: (Math.random()-.5)*40, y: (Math.random()-.5)*40, vx:0, vy:0, r:5,
    })
  }

  for (const p of problems) {
    nodeMap.set(`dsa:${p.slug}`, {
      id: `dsa:${p.slug}`, label: p.title.length > 24 ? p.title.slice(0, 24) + '…' : p.title,
      fullLabel: p.title, type: 'dsa', url: `/dsa/${p.slug}`,
      tags: p.topics, x: (Math.random()-.5)*40, y: (Math.random()-.5)*40, vx:0, vy:0, r:4,
    })
  }

  const topicConn = new Map()
  for (const n of nodeMap.values()) {
    for (const tag of n.tags) topicConn.set(tag, (topicConn.get(tag)||0)+1)
  }
  const topicList = [...topicConn.entries()]
  topicList.forEach(([tag, cnt], i) => {
    const angle = (i / topicList.length) * Math.PI * 2
    nodeMap.set(`topic:${tag}`, {
      id: `topic:${tag}`, label: tag, fullLabel: tag, type: 'topic', url: null,
      tags: [], x: Math.cos(angle)*120, y: Math.sin(angle)*120, vx:0, vy:0,
      r: 2 + Math.sqrt(cnt) * 1.2,
    })
  })

  for (const n of nodeMap.values()) {
    if (n.type === 'topic') continue
    for (const tag of n.tags) edges.push({ a: n.id, b: `topic:${tag}` })
  }

  return { nodes: [...nodeMap.values()], edges, nodeMap }
}

// Return subgraph: current node + its topic hubs + siblings (capped)
export function buildSubgraph(currentId, cap = 40) {
  const { nodes, edges, nodeMap } = buildGraph()

  const cur = nodeMap.get(currentId)
  if (!cur) return { nodes: [], edges: [], nodeMap: new Map() }

  // Direct topic edges from current
  const myTopics = new Set(
    edges.filter(e => e.a === currentId || e.b === currentId)
         .map(e => e.a === currentId ? e.b : e.a)
  )

  // Siblings: other nodes connected to same topics
  const siblingIds = new Set()
  for (const e of edges) {
    if (myTopics.has(e.b) && e.a !== currentId) siblingIds.add(e.a)
    if (myTopics.has(e.a) && e.b !== currentId) siblingIds.add(e.b)
  }

  // Cap siblings — prefer same type first
  const sametype = [...siblingIds].filter(id => {
    const n = nodeMap.get(id); return n && n.type === cur.type
  })
  const other = [...siblingIds].filter(id => {
    const n = nodeMap.get(id); return n && n.type !== cur.type && n.type !== 'topic'
  })
  const allowed = new Set([
    currentId,
    ...myTopics,
    ...sametype.slice(0, Math.floor(cap * 0.6)),
    ...other.slice(0, Math.floor(cap * 0.4)),
  ])

  const subNodes = nodes
    .filter(n => allowed.has(n.id))
    .map(n => ({ ...n, x: (Math.random()-.5)*30, y: (Math.random()-.5)*30, vx:0, vy:0 }))

  const subEdges = edges.filter(e => allowed.has(e.a) && allowed.has(e.b))
  const subMap = new Map(subNodes.map(n => [n.id, n]))

  return { nodes: subNodes, edges: subEdges, nodeMap: subMap }
}

export function tick(nodes, edges, nodeMap, { rep=900, slen=70, sk=0.03, damp=0.75, grav=0.003 } = {}) {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i+1; j < nodes.length; j++) {
      const dx = nodes[j].x - nodes[i].x, dy = nodes[j].y - nodes[i].y
      const d = Math.sqrt(dx*dx+dy*dy) || 1
      const f = rep / (d*d)
      nodes[i].vx -= dx/d*f; nodes[i].vy -= dy/d*f
      nodes[j].vx += dx/d*f; nodes[j].vy += dy/d*f
    }
  }
  for (const e of edges) {
    const a = nodeMap.get(e.a), b = nodeMap.get(e.b)
    if (!a||!b) continue
    const dx = b.x-a.x, dy = b.y-a.y
    const d = Math.sqrt(dx*dx+dy*dy)||1
    const f = (d-slen)*sk
    a.vx+=dx/d*f; a.vy+=dy/d*f; b.vx-=dx/d*f; b.vy-=dy/d*f
  }
  let energy = 0
  for (const n of nodes) {
    n.vx = (n.vx - n.x*grav) * damp
    n.vy = (n.vy - n.y*grav) * damp
    n.x += n.vx; n.y += n.vy
    energy += n.vx*n.vx + n.vy*n.vy
  }
  return energy
}

export function getColors() {
  const light = document.documentElement.classList.contains('light')
  return light ? {
    bg: '#e4e4e7', blog: '#7c3aed', dsa: '#15803d', topic: '#a1a1aa',
    edge: 'rgba(0,0,0,0.07)', edgeHi: 'rgba(0,0,0,0.3)',
    text: '#71717a', textHi: '#18181b', curRing: '#7c3aed',
  } : {
    bg: '#0a0a0a', blog: '#c084fc', dsa: '#4ade80', topic: '#3f3f46',
    edge: 'rgba(255,255,255,0.05)', edgeHi: 'rgba(255,255,255,0.35)',
    text: '#a1a1aa', textHi: '#e4e4e7', curRing: '#c084fc',
  }
}
