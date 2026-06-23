import { marked } from 'marked'

// Auto-discovers all .md files in src/posts/ — just drop a file, done
const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }
  const meta = Object.fromEntries(
    match[1].split('\n').filter(Boolean).map(line => {
      const idx = line.indexOf(': ')
      return [line.slice(0, idx).trim(), line.slice(idx + 2).trim()]
    })
  )
  return { meta, content: match[2] }
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const { meta, content } = parseFrontmatter(raw)
    return {
      title: meta.title ?? 'Untitled',
      date: meta.date ?? '1970-01-01',
      slug: meta.slug ?? path.match(/\/([^/]+)\.md$/)[1],
      description: meta.description ?? '',
      tags: meta.tags ? meta.tags.split(',').map(t => t.trim()) : [],
      image: meta.image
        ? (meta.image.startsWith('http') || meta.image.startsWith('/') ? meta.image : `/${meta.image}`)
        : null,
      html: marked(content),
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export const getPost = (slug) => posts.find(p => p.slug === slug)
