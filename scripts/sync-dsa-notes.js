import { readdirSync, statSync, mkdirSync, copyFileSync, existsSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src  = join(__dirname, '../../dsa/notes/Problems')
const dest = join(__dirname, '../src/dsa-notes')

function copyDir(from, to) {
  mkdirSync(to, { recursive: true })
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    const s = join(from, entry.name)
    const d = join(to, entry.name)
    if (entry.isDirectory()) copyDir(s, d)
    else if (entry.name.endsWith('.md')) copyFileSync(s, d)
  }
}

if (!existsSync(src)) {
  console.warn(`DSA vault not found at ${src} — skipping sync`)
  process.exit(0)
}

if (existsSync(dest)) rmSync(dest, { recursive: true })
copyDir(src, dest)
console.log('✓ DSA notes synced →', dest)
