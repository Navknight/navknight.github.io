const modules = import.meta.glob('../dsa-notes/**/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const meta = {}
  const lines = match[1].split('\n')
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i++; continue }
    // YAML array: next line(s) start with "  -"
    if (i + 1 < lines.length && /^\s+-/.test(lines[i + 1])) {
      const key = line.replace(':', '').trim()
      const items = []
      i++
      while (i < lines.length && /^\s+-/.test(lines[i])) {
        items.push(lines[i].replace(/^\s+-\s*/, '').trim())
        i++
      }
      meta[key] = items
    } else {
      const idx = line.indexOf(': ')
      if (idx !== -1) {
        const key = line.slice(0, idx).trim()
        const val = line.slice(idx + 2).trim()
        // Handle inline JSON arrays: topics: ["A", "B"]
        if (val.startsWith('[')) {
          try { meta[key] = JSON.parse(val) } catch { meta[key] = val }
        } else {
          meta[key] = val
        }
      }
      i++
    }
  }
  return meta
}

function extractContent(raw) {
  const match = raw.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/)
  return match ? match[1].trim() : raw
}

export const problems = Object.entries(modules)
  .map(([path, raw]) => {
    const meta = parseFrontmatter(raw)
    const filename = path.match(/\/([^/]+)\.md$/)[1]
    return {
      title: filename,
      slug: filename.toLowerCase().replace(/\s+/g, '-'),
      difficulty: meta.difficulty ?? 'Medium',
      topics: Array.isArray(meta.topics) ? meta.topics : (meta.topics ? [meta.topics] : []),
      source: meta.source ?? '',
      star: meta.star === 'true' || meta.star === true,
      link: meta.link ?? '',
      date: meta.date ?? '1970-01-01',
      content: extractContent(raw),
    }
  })
  .sort((a, b) => {
    const order = { Easy: 0, Medium: 1, Hard: 2 }
    return (order[a.difficulty] ?? 1) - (order[b.difficulty] ?? 1) || a.title.localeCompare(b.title)
  })

export const allTopics = [...new Set(problems.flatMap(p => p.topics))].sort()
export const getProblem = (slug) => problems.find(p => p.slug === slug)
