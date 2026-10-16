// Digit demo: draw on a 28x28 grid, then run my 784-16-16-10 network on it.
// Weights are trained by fnn.cpp (~/Github/digit-recognition) and exported to /nn/digits.json.
const N = 28
const sigmoid = (z) => 1 / (1 + Math.exp(-z))

export function forward(net, x) {
  const acts = [x]
  for (const { W, b } of net.layers) {
    const a = acts.at(-1)
    acts.push(W.map((row, j) => sigmoid(row.reduce((s, w, k) => s + w * a[k], b[j]))))
  }
  return acts
}

// MNIST digits are scaled to fit a 20x20 box, then moved so their centre of mass
// sits at (14, 14). The network only knows digits that look like that.
export function centre(px) {
  let x0 = N, y0 = N, x1 = -1, y1 = -1
  for (let i = 0; i < N * N; i++) {
    if (px[i] < 0.05) continue
    const x = i % N, y = (i / N) | 0
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y)
  }
  if (x1 < 0) return null
  const s = 20 / Math.max(x1 - x0 + 1, y1 - y0 + 1)
  const bw = Math.max(1, Math.round((x1 - x0 + 1) * s)), bh = Math.max(1, Math.round((y1 - y0 + 1) * s))
  const at = (x, y) => (x < 0 || y < 0 || x >= N || y >= N ? 0 : px[y * N + x])
  const box = new Float32Array(bw * bh)
  let m = 0, cx = 0, cy = 0
  for (let v = 0; v < bh; v++) {
    for (let u = 0; u < bw; u++) {
      const sx = x0 + (u + 0.5) / s - 0.5, sy = y0 + (v + 0.5) / s - 0.5
      const fx = Math.floor(sx), fy = Math.floor(sy), tx = sx - fx, ty = sy - fy
      const val = (at(fx, fy) * (1 - tx) + at(fx + 1, fy) * tx) * (1 - ty) + (at(fx, fy + 1) * (1 - tx) + at(fx + 1, fy + 1) * tx) * ty
      box[v * bw + u] = val
      m += val; cx += val * u; cy += val * v
    }
  }
  const ox = Math.round(14 - cx / m), oy = Math.round(14 - cy / m)
  const out = new Float32Array(N * N)
  for (let v = 0; v < bh; v++) {
    for (let u = 0; u < bw; u++) {
      const x = u + ox, y = v + oy
      if (x >= 0 && y >= 0 && x < N && y < N) out[y * N + x] = box[v * bw + u]
    }
  }
  return out
}

const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

export default async function mount(root) {
  root.innerHTML = `
    <div class="digits-pad">
      <canvas data-pad aria-label="Drawing grid, 28 by 28 pixels. Draw a digit with your mouse or finger."></canvas>
      <div class="digits-keys">
        <button class="btn" type="button" data-clear>Clear</button>
        <button class="btn primary" type="button" data-check>Check digit</button>
      </div>
    </div>
    <div class="digits-net">
      <canvas data-net aria-hidden="true"></canvas>
      <p class="digits-out" aria-live="polite" data-out>Loading the weights…</p>
    </div>`
  const pad = root.querySelector('[data-pad]')
  const netCanvas = root.querySelector('[data-net]')
  const out = root.querySelector('[data-out]')
  const px = new Float32Array(N * N)
  let net = null, acts = null, seen = null, hover = -1

  try {
    net = await (await fetch('/nn/digits.json')).json()
    out.textContent = 'Draw a digit, then hit Check digit.'
  } catch {
    out.textContent = 'Couldn’t load the weights. Try a refresh?'
  }

  // --- drawing pad ---
  const sizeCanvas = (c, w, h) => {
    const dpr = window.devicePixelRatio || 1
    c.width = Math.round(w * dpr); c.height = Math.round(h * dpr)
    const ctx = c.getContext('2d')
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    return ctx
  }
  let padCtx, cell
  const drawPad = () => {
    const w = pad.clientWidth
    cell = w / N
    padCtx = padCtx && pad.width === Math.round(w * (window.devicePixelRatio || 1)) ? padCtx : sizeCanvas(pad, w, w)
    padCtx.fillStyle = '#0b0b0c'
    padCtx.fillRect(0, 0, w, w)
    for (let i = 0; i < N * N; i++) {
      if (!px[i]) continue
      padCtx.fillStyle = `rgba(255,255,255,${px[i]})`
      padCtx.fillRect((i % N) * cell, ((i / N) | 0) * cell, cell + 0.5, cell + 0.5)
    }
    padCtx.strokeStyle = 'rgba(255,255,255,0.06)'
    padCtx.beginPath()
    for (let i = 1; i < N; i++) {
      padCtx.moveTo(i * cell, 0); padCtx.lineTo(i * cell, w)
      padCtx.moveTo(0, i * cell); padCtx.lineTo(w, i * cell)
    }
    padCtx.stroke()
  }
  // A soft round brush: full ink near the pointer, fading out over about a cell.
  const dab = (gx, gy) => {
    for (let y = Math.floor(gy - 2); y <= gy + 2; y++) {
      for (let x = Math.floor(gx - 2); x <= gx + 2; x++) {
        if (x < 0 || y < 0 || x >= N || y >= N) continue
        const d = Math.hypot(x + 0.5 - gx, y + 0.5 - gy)
        const v = Math.min(1, Math.max(0, (1.6 - d) / 0.8))
        if (v > px[y * N + x]) px[y * N + x] = v
      }
    }
  }
  let last = null
  const point = (e) => {
    const r = pad.getBoundingClientRect()
    return [((e.clientX - r.left) / r.width) * N, ((e.clientY - r.top) / r.height) * N]
  }
  pad.addEventListener('pointerdown', (e) => {
    pad.setPointerCapture(e.pointerId)
    last = point(e)
    dab(...last)
    drawPad()
  })
  pad.addEventListener('pointermove', (e) => {
    if (!last) return
    const [gx, gy] = point(e)
    const steps = Math.ceil(Math.hypot(gx - last[0], gy - last[1]) / 0.3)
    for (let i = 1; i <= steps; i++) dab(last[0] + ((gx - last[0]) * i) / steps, last[1] + ((gy - last[1]) * i) / steps)
    last = [gx, gy]
    drawPad()
  })
  const lift = () => { last = null }
  pad.addEventListener('pointerup', lift)
  pad.addEventListener('pointercancel', lift)

  root.querySelector('[data-clear]').addEventListener('click', () => {
    px.fill(0); acts = null; seen = null
    out.textContent = net ? 'Draw a digit, then hit Check digit.' : out.textContent
    drawPad(); drawNet()
  })
  root.querySelector('[data-check]').addEventListener('click', () => {
    if (!net) return
    seen = centre(px)
    if (!seen) { out.textContent = 'Draw something first. I’ll wait.'; return }
    acts = forward(net, seen)
    const o = acts.at(-1)
    const best = o.indexOf(Math.max(...o))
    out.textContent = o[best] > 0.5 ? `That’s a ${best}.` : `Not sure. Maybe a ${best}?`
    drawNet()
  })

  // --- network view ---
  const layout = () => {
    const W = netCanvas.clientWidth, H = Math.min(360, Math.max(260, W * 0.6))
    const img = Math.min(140, W * 0.26)
    const xs = [img + (W - img) * 0.2, img + (W - img) * 0.52, W - 66]
    const sp = (H - 24) / 16
    const r = Math.max(4, Math.min(9, sp / 2 - 2))
    const ys = (n) => Array.from({ length: n }, (_, i) => H / 2 + (i - (n - 1) / 2) * sp)
    return { W, H, img, xs, r, ys: net ? net.sizes.slice(1).map(ys) : [] }
  }
  const drawNet = () => {
    if (!net) return
    const L = layout()
    const ctx = sizeCanvas(netCanvas, L.W, L.H)
    netCanvas.style.height = `${L.H}px`
    const ink = css('--ink'), bg = css('--surface'), edge = css('--edge'), pos = css('--accent'), neg = css('--hard'), muted = css('--muted')
    ctx.clearRect(0, 0, L.W, L.H)

    // Left: what the network sees, or a hovered first-layer neuron's weights.
    const iy = (L.H - L.img) / 2, c = L.img / N
    ctx.fillStyle = '#0b0b0c'
    ctx.fillRect(0, iy, L.img, L.img)
    if (hover >= 0) {
      const w = net.layers[0].W[hover]
      const max = Math.max(...w.map(Math.abs))
      w.forEach((v, i) => {
        ctx.fillStyle = v > 0 ? pos : neg
        ctx.globalAlpha = Math.abs(v) / max
        ctx.fillRect((i % N) * c, iy + ((i / N) | 0) * c, c + 0.3, c + 0.3)
      })
      ctx.globalAlpha = 1
    } else if (seen) {
      seen.forEach((v, i) => {
        if (!v) return
        ctx.fillStyle = `rgba(255,255,255,${v})`
        ctx.fillRect((i % N) * c, iy + ((i / N) | 0) * c, c + 0.3, c + 0.3)
      })
    }
    ctx.strokeStyle = edge
    ctx.strokeRect(0.5, iy + 0.5, L.img - 1, L.img - 1)
    ctx.fillStyle = muted
    ctx.font = `11px ${css('--mono')}`
    ctx.textAlign = 'left'
    ctx.fillText(hover >= 0 ? `neuron ${hover + 1}, its weights` : 'what it sees', 0, iy + L.img + 16)

    // Faint fan from the image into layer 1, then real weighted edges after that.
    ctx.lineWidth = 1
    ctx.strokeStyle = edge
    ctx.globalAlpha = 0.35
    for (const y of L.ys[0]) {
      ctx.beginPath(); ctx.moveTo(L.img, iy + L.img / 2); ctx.lineTo(L.xs[0] - L.r, y); ctx.stroke()
    }
    for (let l = 1; l < L.xs.length; l++) {
      const W = net.layers[l].W, a = acts?.[l]
      W.forEach((row, j) => row.forEach((w, k) => {
        const s = a ? (Math.abs(w) * a[k]) / 5 : Math.abs(w) / 25
        if (s < 0.02) return
        ctx.globalAlpha = Math.min(0.85, s)
        ctx.strokeStyle = w > 0 ? pos : neg
        ctx.beginPath(); ctx.moveTo(L.xs[l - 1] + L.r, L.ys[l - 1][k]); ctx.lineTo(L.xs[l] - L.r, L.ys[l][j]); ctx.stroke()
      }))
    }
    ctx.globalAlpha = 1

    // Neurons: brighter means more active.
    const o = acts?.at(-1)
    const best = o ? o.indexOf(Math.max(...o)) : -1
    L.xs.forEach((x, l) => L.ys[l].forEach((y, i) => {
      ctx.beginPath(); ctx.arc(x, y, L.r, 0, Math.PI * 2)
      ctx.fillStyle = bg; ctx.fill()
      if (acts) { ctx.globalAlpha = acts[l + 1][i]; ctx.fillStyle = ink; ctx.fill(); ctx.globalAlpha = 1 }
      ctx.strokeStyle = l === 0 && i === hover ? pos : edge
      ctx.lineWidth = l === 0 && i === hover ? 2 : 1
      ctx.stroke()
    }))
    ctx.lineWidth = 1
    ctx.textBaseline = 'middle'
    L.ys[2].forEach((y, d) => {
      ctx.fillStyle = d === best ? pos : muted
      ctx.font = `${d === best ? 'bold ' : ''}12px ${css('--mono')}`
      ctx.fillText(o ? `${d} ${o[d].toFixed(2)}` : `${d}`, L.xs[2] + L.r + 6, y)
    })
    ctx.textBaseline = 'alphabetic'
  }

  // Hover (or tap) a first-layer neuron to see what it looks for.
  netCanvas.addEventListener('pointermove', (e) => {
    if (!net) return
    const L = layout(), r = netCanvas.getBoundingClientRect()
    const x = e.clientX - r.left, y = e.clientY - r.top
    const i = Math.abs(x - L.xs[0]) < L.r + 6 ? L.ys[0].findIndex((cy) => Math.abs(y - cy) < L.r + 3) : -1
    if (i !== hover) { hover = i; drawNet() }
  })
  netCanvas.addEventListener('pointerleave', () => { if (hover >= 0) { hover = -1; drawNet() } })

  new ResizeObserver(() => { drawPad(); drawNet() }).observe(root)
  new MutationObserver(drawNet).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', drawNet)
  drawPad(); drawNet()
}
