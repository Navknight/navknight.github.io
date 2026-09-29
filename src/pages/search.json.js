import { getCollection } from 'astro:content'
import { nameOf } from '../lib/dsa.js'

// Compact index for the command palette, fetched lazily on first open: [title, url, kind]
export async function GET() {
  const pages = [
    ['Home', '/', 'page'], ['Blog', '/blog/', 'page'], ['DSA notes', '/dsa/', 'page'],
    ['Lab', '/lab/', 'page'], ['About', '/about/', 'page'], ['Colophon', '/colophon/', 'page'], ['Résumé', 'https://drive.google.com/file/d/1pi1zhwX6OfzqSGr0NFxfJRJ7-5XqyCKA/view', 'page'], ['RSS feed', '/rss.xml', 'page'],
  ]
  const posts = (await getCollection('blog')).map((p) => [p.data.title, `/blog/${p.id}/`, 'post'])
  const dsa = (await getCollection('dsa')).map((e) => {
    const [kind, slug] = e.id.split('/')
    const url = kind === 'problems' ? `/dsa/${slug}/` : `/dsa/${kind}/${slug}/`
    return [nameOf(e), url, kind === 'problems' ? 'problem' : 'reference']
  })
  return new Response(JSON.stringify([...pages, ...posts, ...dsa]), { headers: { 'Content-Type': 'application/json' } })
}
