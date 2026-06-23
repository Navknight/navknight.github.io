import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { marked } from 'marked'

const __dirname = dirname(fileURLToPath(import.meta.url))
const postsDir = join(__dirname, '../src/posts')
const outFile = join(__dirname, '../public/rss.xml')

const SITE_URL = 'https://navknight.github.io'
const SITE_TITLE = 'navknight — Blog'
const SITE_DESC = 'Notes on systems, GPU architecture, browser internals, and security research.'

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

function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const posts = readdirSync(postsDir)
  .filter(f => f.endsWith('.md'))
  .map(f => {
    const raw = readFileSync(join(postsDir, f), 'utf-8')
    const { meta, content } = parseFrontmatter(raw)
    return {
      title: meta.title ?? 'Untitled',
      date: meta.date ?? '1970-01-01',
      slug: meta.slug ?? f.replace(/\.md$/, ''),
      description: meta.description ?? '',
      html: marked(content.trim()),
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

const items = posts.map(p => `
  <item>
    <title>${escape(p.title)}</title>
    <link>${SITE_URL}/blog/${p.slug}</link>
    <guid>${SITE_URL}/blog/${p.slug}</guid>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <description>${escape(p.description)}</description>
    <content:encoded><![CDATA[${p.html}]]></content:encoded>
  </item>`).join('')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}/blog</link>
    <description>${SITE_DESC}</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`

writeFileSync(outFile, xml)
console.log(`RSS generated: ${posts.length} post(s)`)
