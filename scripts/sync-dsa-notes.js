import { readdirSync, mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src  = join(__dirname, '../../dsa/notes/Problems')
const dest = join(__dirname, '../src/dsa-notes')

// The vault keeps personal "### Mistakes" sections in each note. They are
// not published: drop the heading and everything under it up to the next
// heading of the same or higher level.
function stripMistakes(md) {
  const out = []
  let inFence = false
  let skipLevel = 0
  for (const line of md.split('\n')) {
    if (/^\s*```/.test(line)) inFence = !inFence
    const h = !inFence && line.match(/^(#{1,6})\s+(.*)$/)
    if (h) {
      const level = h[1].length
      if (skipLevel && level <= skipLevel) skipLevel = 0
      if (!skipLevel && /^mistakes\b/i.test(h[2].trim())) { skipLevel = level; continue }
    }
    if (!skipLevel) out.push(line)
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n')
}

function copyDir(from, to) {
  mkdirSync(to, { recursive: true })
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    const s = join(from, entry.name)
    const d = join(to, entry.name)
    if (entry.isDirectory()) copyDir(s, d)
    else if (entry.name.endsWith('.md')) writeFileSync(d, stripMistakes(readFileSync(s, 'utf-8')))
  }
}

if (!existsSync(src)) {
  console.warn(`DSA vault not found at ${src} — skipping sync`)
  process.exit(0)
}

if (existsSync(dest)) rmSync(dest, { recursive: true })
copyDir(src, dest)
console.log('✓ DSA notes synced →', dest)
