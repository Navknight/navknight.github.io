// Command palette: Ctrl/Cmd+K or "/" opens a <dialog>; the index is fetched from /search.json on first open.
import { THEMES, setTheme } from './theme.js'

const dlg = document.querySelector('dialog.palette')
const input = dlg?.querySelector('.palette-input')
const list = dlg?.querySelector('.palette-list')
const btn = document.querySelector('.palette-btn')

const actions = [
  ...THEMES.map((t) => ({ t: `Theme: ${t}`, k: 'theme', run: () => setTheme(t) })),
  { t: 'lumos', k: 'spell', run: () => setTheme('light') },
  { t: 'nox', k: 'spell', run: () => setTheme('dark') },
]
let items = null
let shown = []
let sel = 0

// Subsequence match; rewards consecutive hits and word starts. Returns -1 for no match.
export function score(q, s) {
  s = s.toLowerCase()
  let si = 0, total = 0, run = 0
  for (const ch of q) {
    const i = s.indexOf(ch, si)
    if (i < 0) return -1
    run = i === si ? run + 1 : 0
    total += 1 + run * 2 + (i === 0 || s[i - 1] === ' ' || s[i - 1] === '-' ? 3 : 0) - Math.min(i - si, 5) * 0.2
    si = i + 1
  }
  return total - s.length * 0.01
}

function render() {
  const q = input.value.trim().toLowerCase().replace(/\s+/g, ' ')
  const all = [...(items ?? []), ...actions]
  shown = q
    ? all.map((it) => [score(q, it.t), it]).filter(([n]) => n >= 0).sort((a, b) => b[0] - a[0]).slice(0, 40).map(([, it]) => it)
    : all.filter((it) => it.k === 'page' || it.k === 'theme')
  sel = 0
  list.innerHTML = ''
  shown.forEach((it, i) => {
    const li = document.createElement('li')
    li.id = `pal-${i}`
    li.setAttribute('role', 'option')
    li.innerHTML = '<span></span><small></small>'
    li.firstChild.textContent = it.t
    li.lastChild.textContent = it.k
    li.addEventListener('click', () => go(i))
    li.addEventListener('pointermove', () => mark(i))
    list.append(li)
  })
  if (!shown.length) list.innerHTML = `<li class="none">${items ? 'Nothing matches. Try fewer letters.' : 'Loading index…'}</li>`
  mark(0)
}

function mark(i) {
  sel = i
  list.querySelectorAll('[role=option]').forEach((li, j) => li.setAttribute('aria-selected', String(j === i)))
  const li = document.getElementById(`pal-${i}`)
  input.setAttribute('aria-activedescendant', li ? li.id : '')
  li?.scrollIntoView({ block: 'nearest' })
}

function go(i) {
  const it = shown[i]
  if (!it) return
  dlg.close()
  if (it.run) it.run()
  else location.href = it.u
}

async function open() {
  if (dlg.open) return
  input.value = ''
  dlg.showModal()
  render()
  if (!items) {
    try {
      const data = await (await fetch('/search.json')).json()
      items = data.map(([t, u, k]) => ({ t, u, k }))
    } catch { items = [] }
    render()
  }
}

if (dlg) {
  btn.hidden = false
  btn.addEventListener('click', open)
  document.addEventListener('keydown', (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
      e.preventDefault()
      open()
    }
  })
  input.addEventListener('input', render)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); mark(Math.min(sel + 1, shown.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); mark(Math.max(sel - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); go(sel) }
  })
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close() })
}
