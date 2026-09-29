import fs from 'node:fs'
import path from 'node:path'

const KINDS = [
  ['Problems', '/dsa'],
  ['Reference', '/dsa/reference'],
]

const slugify = (s) => s.toLowerCase().trim().replace(/\s+/g, '-')

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(p))
    else if (entry.name.endsWith('.md')) out.push(p)
  }
  return out
}

function buildLinkMap() {
  const map = new Map()
  const base = path.resolve(process.cwd(), '../dsa/notes')
  for (const [folder, urlBase] of KINDS) {
    const dir = path.join(base, folder)
    if (!fs.existsSync(dir)) continue
    for (const file of walk(dir)) {
      const name = path.basename(file, '.md')
      map.set(name.toLowerCase(), `${urlBase}/${slugify(name)}/`)
    }
  }
  return map
}

// Resolves [[Name]] / [[Name|alias]] wikilinks, drops ![[embeds]] and
// ```dataview/```base blocks, and turns inline $math$ into inlineCode.
export default function obsidian() {
  const linkMap = buildLinkMap()

  function splitText(value) {
    const nodes = []
    const re = /!\[\[([^\]]+)\]\]|\[\[([^\]]+)\]\]|\$([^$\n]+)\$/g
    let last = 0
    let m
    while ((m = re.exec(value))) {
      if (m.index > last) nodes.push({ type: 'text', value: value.slice(last, m.index) })
      if (m[2] !== undefined) {
        const [name, alias] = m[2].split('|')
        const url = linkMap.get(name.trim().toLowerCase())
        const label = (alias ?? name).trim()
        nodes.push(url ? { type: 'link', url, children: [{ type: 'text', value: label }] } : { type: 'text', value: label })
      } else if (m[3] !== undefined) {
        nodes.push({ type: 'inlineCode', value: m[3] })
      }
      // m[1] (embed) is dropped entirely
      last = re.lastIndex
    }
    if (last < value.length) nodes.push({ type: 'text', value: value.slice(last) })
    return nodes.length ? nodes : [{ type: 'text', value: '' }]
  }

  function walkNode(node) {
    if (!node.children) return
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]
      if (child.type === 'code' && (child.lang === 'dataview' || child.lang === 'base')) {
        node.children.splice(i, 1)
        i--
      } else if (child.type === 'text') {
        const replacement = splitText(child.value)
        node.children.splice(i, 1, ...replacement)
        i += replacement.length - 1
      } else {
        walkNode(child)
      }
    }
  }

  return (tree) => walkNode(tree)
}
