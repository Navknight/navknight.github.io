// Hero terminal. Data (posts, projects, topics, about) is JSON embedded at build time.
// Without JS the static transcript in the markup stays as-is.
import { THEMES, setTheme, current } from './theme.js'

const root = document.querySelector('[data-term]')
if (root) {
  const data = JSON.parse(document.getElementById('term-data').textContent)
  const out = root.querySelector('.term-out')
  const form = root.querySelector('.term-line')
  const input = form.querySelector('input')
  const body = root.querySelector('.term-body')
  const history = []
  let hi = 0

  const el = (tag, cls, text) => {
    const n = document.createElement(tag)
    if (cls) n.className = cls
    if (text != null) n.textContent = text
    return n
  }
  const print = (text, cls) => out.append(el('p', cls, text))
  const links = (pairs) => {
    const p = el('p', 'term-links')
    for (const [label, href] of pairs) {
      const a = el('a', null, label)
      a.href = href
      p.append(a)
    }
    out.append(p)
  }
  const nav = (url, label) => { print(`opening ${label}…`, 'dim'); location.href = url }

  const files = { 'about.md': data.about }
  const dirs = {
    projects: () => links(data.projects.map((p) => [p.id, p.href])),
    blog: () => links(data.posts.map((p) => [p.title, p.url])),
    dsa: () => links(data.topics.map((t) => [t.slug, `/dsa/topics/${t.slug}/`])),
  }

  const commands = {
    help: () => {
      print('whoami            who is this')
      print('ls [dir]          list about.md, projects/, blog/, dsa/, lab/')
      print('cat about.md      read the short bio')
      print('open <project>    go to a project (tab completes)')
      print('blog              go to the blog')
      print('dsa [topic]       go to DSA notes, or one topic')
      print('lab               go to the lab')
      print('theme [name]      list or switch themes')
      print('clear             clear the screen')
      print('Tip: Ctrl K (or /) opens search from anywhere.', 'dim')
    },
    whoami: () => print(data.whoami),
    ls: (arg) => {
      const d = arg?.replace(/\/$/, '')
      if (!d) return links([['about.md', '/about/'], ['projects/', '#work'], ['blog/', '/blog/'], ['dsa/', '/dsa/'], ['lab/', '/lab/']])
      if (dirs[d]) return dirs[d]()
      print(`ls: ${arg}: no such directory`, 'err')
    },
    cat: (arg) => (arg in files ? print(files[arg]) : print(`cat: ${arg ?? ''}: no such file. Try cat about.md`, 'err')),
    open: (arg) => {
      const p = data.projects.find((x) => x.id === arg?.toLowerCase())
      if (p) return nav(p.href, p.name)
      print(arg ? `open: unknown project "${arg}"` : 'usage: open <project>', 'err')
      dirs.projects()
    },
    blog: () => nav('/blog/', 'blog'),
    lab: () => nav('/lab/', 'lab'),
    dsa: (arg) => {
      if (!arg) return nav('/dsa/', 'DSA notes')
      const t = data.topics.find((x) => x.slug === arg.toLowerCase() || x.name.toLowerCase() === arg.toLowerCase())
      if (t) return nav(`/dsa/topics/${t.slug}/`, t.name)
      print(`dsa: unknown topic "${arg}". Topics:`, 'err')
      dirs.dsa()
    },
    theme: (arg) => {
      if (!arg) return print(`themes: ${THEMES.join(', ')} (current: ${current()})`)
      const name = arg.toLowerCase()
      if (setTheme(name)) print(`theme set to ${name}`)
      else print(`theme: unknown "${arg}". Try: ${THEMES.join(', ')}`, 'err')
    },
    clear: () => { out.textContent = '' },
  }

  const argOptions = {
    open: () => data.projects.map((p) => p.id),
    dsa: () => data.topics.map((t) => t.slug),
    theme: () => THEMES,
    cat: () => Object.keys(files),
    ls: () => [...Object.keys(dirs)],
  }

  function complete() {
    const v = input.value
    const parts = v.split(' ')
    const opts = parts.length === 1 ? Object.keys(commands) : argOptions[parts[0]]?.() ?? []
    const word = parts[parts.length - 1]
    const hits = opts.filter((o) => o.startsWith(word))
    if (!hits.length) return
    let pre = hits[0]
    for (const h of hits) while (!h.startsWith(pre)) pre = pre.slice(0, -1)
    parts[parts.length - 1] = hits.length === 1 ? hits[0] + (parts.length === 1 ? ' ' : '') : pre
    input.value = parts.join(' ')
    if (hits.length > 1) print(hits.join('  '), 'dim')
  }

  function run(line) {
    const echo = el('p', 'echo')
    echo.append(el('span', 'ps', '$'), document.createTextNode(' ' + line))
    out.append(echo)
    const [cmd, ...rest] = line.trim().split(/\s+/)
    if (!cmd) return
    const fn = commands[cmd.toLowerCase()]
    fn ? fn(rest.join(' ') || undefined) : print(`command not found: ${cmd}. Type help.`, 'err')
  }

  form.hidden = false
  root.classList.add('live')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const line = input.value
    if (line.trim()) history.push(line)
    hi = history.length
    input.value = ''
    run(line)
    body.scrollTop = body.scrollHeight
  })
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && input.value) { e.preventDefault(); complete(); body.scrollTop = body.scrollHeight }
    else if (e.key === 'ArrowUp' && history.length) { e.preventDefault(); hi = Math.max(0, hi - 1); input.value = history[hi] }
    else if (e.key === 'ArrowDown' && history.length) {
      e.preventDefault(); hi = Math.min(history.length, hi + 1); input.value = history[hi] ?? ''
    }
  })
  body.addEventListener('click', (e) => { if (!e.target.closest('a') && !getSelection().toString()) input.focus({ preventScroll: true }) })
}
