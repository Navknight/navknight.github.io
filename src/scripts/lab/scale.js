// Scale-the-backend: traffic ramps for 60s; buy components to keep p99 under the SLO.
// Model: each tier is an M/M/1-ish queue. Mean time in a tier is S / (1 - rho), and
// p99 of an exponential sojourn is ln(100) ~ 4.6x the mean. rho >= 1 means drops.
export const SLO = 300 // ms, p99
export const DUR = 60 // s
const TICK = 0.1 // s
const APP_RPS = 250
const DB_RPS = 600
const APP_MS = 10
const DB_MS = 6
const WRITES = 0.1
const LIMIT = 0.85 // limiter admits up to this utilisation of the bottleneck

export const ITEMS = {
  app: { label: 'App replica', cost: 15, max: 20, note: `+${APP_RPS} rps` },
  redis: { label: 'Redis cache', cost: 40, max: 1, note: 'reads skip the DB' },
  queue: { label: 'Async queue', cost: 30, max: 1, note: 'moves 30% of work off the request path' },
  replica: { label: 'DB read replica', cost: 35, max: 3, note: `+${DB_RPS} read rps` },
  limiter: { label: 'Rate limiter', cost: 20, max: 1, note: 'sheds load instead of collapsing' },
}
export const TTLS = { 1: { hit: 0.5, stale: 0 }, 10: { hit: 0.8, stale: 0.02 }, 60: { hit: 0.95, stale: 0.12 } }

export const traffic = (t) => (150 + 2050 * (t / DUR) ** 1.6) * (t > 38 && t < 44 ? 1.4 : 1)

export function create() {
  return { t: 0, credits: 50, spent: 0, app: 1, redis: 0, queue: 0, replica: 0, limiter: 0, ttl: 10, req: 0, err: 0, stale: 0, ok: 0, ticks: 0, hist: [] }
}

export function model(s, lam) {
  const hit = s.redis ? TTLS[s.ttl].hit : 0
  const rhoApp = lam / (s.app * APP_RPS * (s.queue ? 1 / 0.7 : 1))
  const writes = WRITES * lam
  const dbReads = (1 - WRITES) * lam * (1 - hit)
  const rhoDb = Math.max(writes / DB_RPS, (writes + dbReads) / (DB_RPS * (1 + s.replica)))
  const rho = Math.max(rhoApp, rhoDb)
  let a = 1 // admitted fraction
  let err = 0
  if (s.limiter && rho > LIMIT) { a = LIMIT / rho; err = 1 - a }
  // ponytail: overload without a limiter modelled as goodput ~ 1/rho^2 (timeouts + retries)
  else if (rho >= 1) err = 1 - 1 / (rho * rho)
  const wait = (S, r) => S / (1 - Math.min(r * a, 0.97))
  const dbFrac = WRITES + (1 - WRITES) * (1 - hit)
  const mean = wait(APP_MS, rhoApp) + dbFrac * wait(DB_MS, rhoDb) + (1 - dbFrac)
  const p99 = !s.limiter && rho >= 1 ? 2000 : Math.min(2000, 4.6 * mean)
  return { lam, rhoApp: rhoApp * a, rhoDb: rhoDb * a, p99, err, served: lam * (1 - err), stale: s.redis ? TTLS[s.ttl].stale * (1 - WRITES) * hit : 0 }
}

export function tick(s, jitter = 1) {
  const m = model(s, traffic(s.t) * jitter)
  s.t += TICK
  s.ticks++
  s.req += m.lam * TICK
  s.err += m.lam * m.err * TICK
  s.stale += m.served * m.stale * TICK
  s.credits += (m.served * TICK) / 120 // revenue from served requests
  if (m.p99 <= SLO && m.err < 0.01) s.ok++
  s.hist.push(m)
  return m
}

export function buy(s, k) {
  const it = ITEMS[k]
  if (s[k] >= it.max || s.credits < it.cost) return false
  s[k]++
  s.credits -= it.cost
  s.spent += it.cost
  return true
}

export function summary(s) {
  const slo = s.ticks ? s.ok / s.ticks : 0
  const grade = slo >= 0.9 ? 'A' : slo >= 0.75 ? 'B' : slo >= 0.5 ? 'C' : 'D'
  const worst = s.hist.reduce((w, m) => (m.p99 > w.p99 ? m : w), s.hist[0])
  const tip = !worst || worst.p99 <= SLO ? 'Clean run. Now try it on a smaller spend.'
    : worst.rhoDb > worst.rhoApp ? 'The database was your bottleneck. A cache takes reads off it far cheaper than replicas.'
    : 'The app tier saturated. Latency explodes near 100% utilisation, so scale before rho gets past ~0.8, not after.'
  return { slo, grade, errRate: s.req ? s.err / s.req : 0, staleRate: s.req ? s.stale / s.req : 0, tip }
}

// ---------------------------------------------------------------- UI
const pct = (x, d = 0) => (x * 100).toFixed(d) + '%'

export default function mount(root) {
  root.innerHTML = `
    <div class="tiles">
      <div><span>Time</span><b data-k="t">0 / ${DUR}s</b></div>
      <div><span>Traffic</span><b data-k="lam">0 rps</b></div>
      <div><span>p99 (SLO ${SLO} ms)</span><b data-k="p99">0 ms</b></div>
      <div><span>Errors</span><b data-k="err">0%</b></div>
      <div><span>Credits</span><b data-k="cr">50</b></div>
    </div>
    <figure class="spark">
      <canvas data-k="canvas" height="120" role="img" aria-label="Sparkline of p99 latency and throughput over time"></canvas>
      <figcaption><span class="key k-lat">p99 latency</span><span class="key k-thr">throughput</span><span class="key k-slo">SLO</span></figcaption>
    </figure>
    <div class="util">
      <div><span>App tier <b data-k="appN">1×</b></span><div class="meter"><i data-k="rApp"></i></div></div>
      <div><span>Database <b data-k="dbN">primary</b></span><div class="meter"><i data-k="rDb"></i></div></div>
    </div>
    <div class="shop" role="group" aria-label="Buy components">
      ${Object.entries(ITEMS).map(([k, it]) => `<button type="button" class="buy" data-buy="${k}"><b>${it.label}</b><span>${it.note}</span><em>${it.cost} cr <i data-own="${k}"></i></em></button>`).join('')}
    </div>
    <fieldset class="opts ttl" data-k="ttl" disabled><legend>Redis TTL: longer means more hits but staler reads</legend>
      ${Object.keys(TTLS).map((v) => `<label><input type="radio" name="ttl" value="${v}"${v === '10' ? ' checked' : ''}><span>${v}s · ${pct(TTLS[v].hit)} hits</span></label>`).join('')}
    </fieldset>
    <p class="log" aria-live="polite" data-k="log">Press Start. Traffic grows for ${DUR} seconds and spikes around 40s. Served requests earn credits.</p>
    <div class="ctrl">
      <button type="button" class="btn primary" data-k="go">Start</button>
      <button type="button" class="btn" data-k="reset">Restart</button>
    </div>
    <div class="result" data-k="result" hidden></div>`

  const $ = (k) => root.querySelector(`[data-k="${k}"]`)
  const canvas = $('canvas')
  let s, timer = null, last = null, lastLog = 0

  const set = (k, v) => { $(k).textContent = v }
  const tone = (el, bad, warn) => { el.dataset.tone = bad ? 'bad' : warn ? 'warn' : '' }

  function render() {
    const m = last || model(s, traffic(0))
    set('t', `${Math.min(DUR, s.t).toFixed(0)} / ${DUR}s`)
    set('lam', `${Math.round(m.lam)} rps`)
    set('p99', m.p99 >= 2000 ? 'timeouts' : `${Math.round(m.p99)} ms`)
    tone($('p99'), m.p99 > SLO, m.p99 > SLO * 0.8)
    set('err', pct(m.err, 1))
    tone($('err'), m.err >= 0.01, m.err > 0)
    set('cr', Math.floor(s.credits))
    set('appN', `${s.app}×${s.queue ? ' + queue' : ''}`)
    set('dbN', `primary${s.replica ? ` + ${s.replica} replica${s.replica > 1 ? 's' : ''}` : ''}${s.redis ? ' + Redis' : ''}`)
    for (const [k, r] of [['rApp', m.rhoApp], ['rDb', m.rhoDb]]) {
      $(k).style.width = pct(Math.min(1, r))
      tone($(k), r >= 0.9, r >= 0.7)
      $(k).parentElement.title = `utilisation ${pct(r)}`
    }
    root.querySelectorAll('[data-buy]').forEach((b) => {
      const k = b.dataset.buy, it = ITEMS[k]
      b.disabled = s[k] >= it.max || s.credits < it.cost || s.t >= DUR
      b.querySelector('[data-own]').textContent = s[k] ? `· own ${s[k]}` : ''
    })
    $('ttl').disabled = !s.redis
    draw()
  }

  function draw() {
    const w = canvas.clientWidth, h = 120, dpr = devicePixelRatio || 1
    if (canvas.width !== Math.round(w * dpr)) canvas.width = Math.round(w * dpr)
    canvas.height = h * dpr
    const c = canvas.getContext('2d')
    c.setTransform(dpr, 0, 0, dpr, 0, 0)
    c.clearRect(0, 0, w, h)
    const css = getComputedStyle(root)
    const col = (v) => css.getPropertyValue(v).trim()
    const pad = 6, H = h - pad * 2
    const x = (i) => (i / (DUR / TICK)) * w
    const yLat = (ms) => pad + H - (Math.min(ms, 2 * SLO) / (2 * SLO)) * H
    c.lineWidth = 1
    c.setLineDash([4, 4])
    c.strokeStyle = col('--hard')
    c.beginPath(); c.moveTo(0, yLat(SLO)); c.lineTo(w, yLat(SLO)); c.stroke()
    c.setLineDash([])
    c.lineWidth = 2
    const line = (color, y) => {
      c.strokeStyle = color
      c.beginPath()
      s.hist.forEach((m, i) => (i ? c.lineTo(x(i), y(m)) : c.moveTo(x(i), y(m))))
      c.stroke()
    }
    line(col('--easy'), (m) => pad + H - (m.served / 3200) * H)
    line(col('--accent'), (m) => yLat(m.p99))
  }

  function loop() {
    last = tick(s, 0.95 + Math.random() * 0.1)
    if (s.t - lastLog >= 5 && (last.p99 > SLO || last.err >= 0.01)) {
      lastLog = s.t
      set('log', `${Math.round(s.t)}s: ${last.err >= 0.01 ? `dropping ${pct(last.err)} of requests` : `p99 ${Math.round(last.p99)} ms breaches the SLO`}. ${last.rhoDb > last.rhoApp ? 'Database' : 'App tier'} is at ${pct(Math.min(last.rhoDb > last.rhoApp ? last.rhoDb : last.rhoApp, 9.99))} utilisation.`)
    }
    if (s.t >= DUR - 1e-9) finish()
    render()
  }

  function finish() {
    pause()
    $('go').disabled = true
    $('go').textContent = 'Done'
    const r = summary(s)
    const el = $('result')
    el.innerHTML = `<p class="grade">Grade <b>${r.grade}</b></p>
      <dl class="mini">
        <div><dt>Time within SLO</dt><dd>${pct(r.slo)}</dd></div>
        <div><dt>Error rate</dt><dd>${pct(r.errRate, 2)}</dd></div>
        <div><dt>Stale reads</dt><dd>${pct(r.staleRate, 1)}</dd></div>
        <div><dt>Credits spent</dt><dd>${s.spent}</dd></div>
      </dl>
      <p>${r.tip}</p>`
    el.hidden = false
    set('log', `Done. Grade ${r.grade}: ${pct(r.slo)} of the run within the SLO.`)
  }

  function pause() { clearInterval(timer); timer = null; $('go').textContent = s.t > 0 ? 'Resume' : 'Start' }
  function go() {
    if (timer) return pause()
    timer = setInterval(loop, TICK * 1000)
    $('go').textContent = 'Pause'
  }
  function reset() {
    clearInterval(timer); timer = null
    s = create(); last = null; lastLog = 0
    root.querySelector('[name="ttl"][value="10"]').checked = true
    $('go').disabled = false
    $('result').hidden = true
    pause()
    render()
  }

  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-buy]')
    if (b && buy(s, b.dataset.buy)) { set('log', `Bought ${ITEMS[b.dataset.buy].label.toLowerCase()}.`); render() }
  })
  $('ttl').addEventListener('change', (e) => { s.ttl = +e.target.value; render() })
  $('go').addEventListener('click', go)
  $('reset').addEventListener('click', reset)
  new ResizeObserver(draw).observe(canvas)
  reset()
}
