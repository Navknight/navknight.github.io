// Cache game: 4-set x 2-way cache, 64-byte lines, pick a replacement policy and a
// prefetcher, step through an access stream, compare against Belady's optimal.
const SETS = 4
const WAYS = 2
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i))

export const PATTERNS = {
  sequential: {
    label: 'Sequential',
    stream: range(24, (i) => i),
    takeaway: 'A stream never reuses a line, so every policy scores zero. Only a prefetcher helps, and next-line is enough.',
  },
  strided: {
    label: 'Strided',
    stream: range(24, (i) => i * 3),
    takeaway: 'Next-line fetches the neighbours you skip and just pollutes the cache. A stride prefetcher learns the +3 delta.',
  },
  loop: {
    label: 'Loop with reuse',
    stream: range(30, (i) => [0, 9, 2, 7, 4, 1, 8, 3, 6, 5][i % 10]), // pointer-chase order: no stride to learn
    takeaway: 'The loop is slightly bigger than the cache, so LRU evicts each line just before it comes back. Random breaks the cycle; useless prefetches make it worse.',
  },
}
export const POLICIES = { lru: 'LRU', fifo: 'FIFO', random: 'Random' }
export const PREFETCHERS = { none: 'None', next: 'Next-line', stride: 'Stride' }

export const setOf = (b) => b % SETS
const tagOf = (b) => b >> 2
export const hex = (b) => '0x' + (b * 64).toString(16).toUpperCase().padStart(4, '0')

export function create(policy, prefetcher) {
  return { policy, prefetcher, sets: range(SETS, () => []), clock: 0, last: null, delta: null, hits: 0, pfUseful: 0, pfIssued: 0 }
}

// Put block b into its set. Returns the evicted block, or null.
function insert(s, b, pf) {
  const set = s.sets[setOf(b)]
  if (set.some((l) => l.b === b)) return undefined // already cached
  const line = { b, pf, t: s.clock, u: s.clock }
  if (set.length < WAYS) { set.push(line); return null }
  let v = 0
  if (s.policy === 'random') v = Math.floor(Math.random() * WAYS)
  else {
    const key = s.policy === 'lru' ? 'u' : 't'
    set.forEach((l, i) => { if (l[key] < set[v][key]) v = i })
  }
  const out = set[v].b
  set[v] = line
  return out
}

// One demand access. Returns what happened, for the UI.
export function step(s, b) {
  s.clock++
  const set = s.sets[setOf(b)]
  const line = set.find((l) => l.b === b)
  const ev = { b, set: setOf(b), hit: !!line, pfHit: false, evicted: null, pf: null }
  if (line) {
    s.hits++
    line.u = s.clock
    if (line.pf) { ev.pfHit = true; s.pfUseful++; line.pf = false }
  } else {
    ev.evicted = insert(s, b, false)
  }
  let target = null
  if (s.prefetcher === 'next') target = b + 1
  if (s.prefetcher === 'stride' && s.last !== null) {
    const d = b - s.last
    if (d !== 0 && d === s.delta) target = b + d
    s.delta = d
  }
  s.last = b
  if (target !== null && target >= 0) {
    const out = insert(s, target, true)
    if (out !== undefined) { s.pfIssued++; ev.pf = { b: target, evicted: out } }
  }
  return ev
}

// Belady's MIN: on a miss with a full set, evict the line used farthest in the future.
export function belady(stream) {
  const sets = range(SETS, () => [])
  let hits = 0
  stream.forEach((b, i) => {
    const set = sets[setOf(b)]
    if (set.includes(b)) { hits++; return }
    if (set.length < WAYS) { set.push(b); return }
    const next = (x) => { const j = stream.indexOf(x, i + 1); return j < 0 ? Infinity : j }
    let v = 0
    set.forEach((x, k) => { if (next(x) > next(set[v])) v = k })
    set[v] = b
  })
  return hits
}

// ---------------------------------------------------------------- UI
const radios = (name, opts, sel) =>
  `<fieldset class="opts"><legend>${name}</legend>${Object.entries(opts)
    .map(([v, l]) => `<label><input type="radio" name="${name}" value="${v}"${v === sel ? ' checked' : ''}><span>${typeof l === 'string' ? l : l.label}</span></label>`)
    .join('')}</fieldset>`

export default function mount(root) {
  const cfg = { pattern: 'sequential', policy: 'lru', prefetcher: 'none' }
  root.innerHTML = `
    <form class="cfg" data-cfg>
      ${radios('Pattern', PATTERNS, cfg.pattern)}
      ${radios('Replacement', POLICIES, cfg.policy)}
      ${radios('Prefetcher', PREFETCHERS, cfg.prefetcher)}
    </form>
    <p class="takeaway" data-takeaway></p>
    <div class="stream-wrap"><ol class="stream" data-stream aria-label="Memory access stream"></ol></div>
    <div class="cache-row">
      <table class="cache">
        <caption class="sr">Cache contents: 4 sets by 2 ways, showing each line's address</caption>
        <thead><tr><th scope="col">Set</th><th scope="col">Way 0</th><th scope="col">Way 1</th></tr></thead>
        <tbody data-cache></tbody>
      </table>
      <div class="meter-box">
        <div class="meter-label"><span>Hit rate</span><b data-rate>0%</b></div>
        <div class="meter" role="meter" aria-label="Hit rate" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-meter><i></i></div>
        <dl class="mini">
          <div><dt>Hits</dt><dd data-hits>0</dd></div>
          <div><dt>Misses</dt><dd data-misses>0</dd></div>
          <div><dt>Useful prefetches</dt><dd data-pf>0 / 0</dd></div>
        </dl>
      </div>
    </div>
    <p class="log" aria-live="polite" data-log>Press Step or Play to start.</p>
    <div class="ctrl">
      <button type="button" class="btn primary" data-play>Play</button>
      <button type="button" class="btn" data-step>Step</button>
      <button type="button" class="btn" data-reset>Reset</button>
    </div>
    <div class="result" data-result hidden></div>`

  const $ = (k) => root.querySelector(`[data-${k}]`)
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  let s, i, timer = null, stream

  function reset() {
    stop()
    stream = PATTERNS[cfg.pattern].stream
    s = create(cfg.policy, cfg.prefetcher)
    i = 0
    $('takeaway').textContent = PATTERNS[cfg.pattern].takeaway
    $('stream').innerHTML = stream.map((b) => `<li>${hex(b)}</li>`).join('')
    $('stream').children[0].classList.add('now')
    $('result').hidden = true
    $('log').textContent = 'Press Step or Play to start.'
    $('step').disabled = $('play').disabled = false
    draw()
  }

  function draw(ev) {
    $('cache').innerHTML = s.sets.map((set, k) => `<tr><th scope="row">${k}</th>${range(WAYS, (w) => {
      const l = set[w]
      if (!l) return '<td class="empty">·</td>'
      const cls = [l.pf ? 'pf' : '', ev && ev.set === k && ev.b === l.b ? (ev.hit ? 'hit' : 'miss') : '', ev?.pf && ev.pf.b === l.b ? 'fetched' : ''].join(' ')
      return `<td class="${cls}">${hex(l.b)}${l.pf ? '<small>pf</small>' : ''}</td>`
    }).join('')}</tr>`).join('')
    const pct = i ? Math.round((s.hits / i) * 100) : 0
    $('rate').textContent = pct + '%'
    $('meter').setAttribute('aria-valuenow', pct)
    $('meter').firstChild.style.width = pct + '%'
    $('hits').textContent = s.hits
    $('misses').textContent = i - s.hits
    $('pf').textContent = `${s.pfUseful} / ${s.pfIssued}`
  }

  function advance() {
    if (i >= stream.length) return
    const ev = step(s, stream[i])
    const li = $('stream').children
    li[i].classList.remove('now')
    li[i].classList.add(ev.hit ? 'hit' : 'miss')
    i++
    if (li[i]) {
      li[i].classList.add('now')
      const wrap = $('stream').parentElement
      wrap.scrollLeft = li[i].offsetLeft - wrap.clientWidth / 2
    }
    let msg = `${hex(ev.b)} → set ${ev.set}, tag ${tagOf(ev.b)}: ${ev.hit ? (ev.pfHit ? 'HIT (thanks to a prefetch)' : 'HIT') : 'MISS'}`
    if (ev.evicted != null) msg += `, evicted ${hex(ev.evicted)}`
    if (ev.pf) msg += `. Prefetched ${hex(ev.pf.b)}${ev.pf.evicted != null ? ` over ${hex(ev.pf.evicted)}` : ''}`
    $('log').textContent = msg + '.'
    draw(ev)
    if (i >= stream.length) finish()
  }

  function finish() {
    stop()
    $('step').disabled = $('play').disabled = true
    const n = stream.length, opt = belady(stream)
    const verdict = s.hits > opt
      ? 'You beat the oracle. Bélády is optimal only for replacement; prefetching changes the game.'
      : s.hits === opt
        ? 'You matched the optimal policy.'
        : `${opt - s.hits} hit${opt - s.hits > 1 ? "s" : ""} short of optimal. Try another policy or prefetcher.`
    const r = $('result')
    r.innerHTML = `<p><b>Your score: ${s.hits}/${n} hits (${Math.round((s.hits / n) * 100)}%).</b> Bélády's optimal replacement, no prefetching: ${opt}/${n}.</p><p>${verdict}</p>`
    r.hidden = false
    $('log').textContent = `Done. ${s.hits} of ${n} hits; optimal is ${opt}.`
  }

  function stop() {
    clearInterval(timer); timer = null
    $('play').textContent = 'Play'
  }
  function play() {
    if (timer) return stop()
    if (i >= stream.length) reset()
    $('play').textContent = 'Pause'
    timer = setInterval(advance, reduced.matches ? 900 : 450)
    advance()
  }

  $('cfg').addEventListener('change', (e) => {
    cfg[{ Pattern: 'pattern', Replacement: 'policy', Prefetcher: 'prefetcher' }[e.target.name]] = e.target.value
    reset()
  })
  $('play').addEventListener('click', play)
  $('step').addEventListener('click', () => { stop(); advance() })
  $('reset').addEventListener('click', reset)
  reset()
}
