import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { getProblem, problems, allTopics } from '../data/dsa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MiniGraph from '../components/ui/MiniGraph'

// Title → slug map for wikilink resolution
const titleToSlug = new Map(problems.map(p => [p.title.toLowerCase(), p.slug]))

function resolveWikilinks(md) {
  return md.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
    // Skip file paths (contain /)
    if (inner.includes('/')) return `\`${inner}\``
    const key = inner.toLowerCase()
    if (titleToSlug.has(key)) return `[${inner}](/dsa/${titleToSlug.get(key)})`
    if (allTopics.includes(inner)) return `[${inner}](/dsa?topic=${encodeURIComponent(inner)})`
    return `**${inner}**`
  })
}

const DIFF_STYLE = {
  Easy:   'text-accent-green border-accent-green/30 bg-accent-green/5',
  Medium: 'text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5',
  Hard:   'text-accent-orange border-accent-orange/30 bg-accent-orange/5',
}

export default function DSAPost() {
  const { slug } = useParams()
  const p = getProblem(slug)

  if (!p) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="section-wrap flex-1 pt-24">
          <div className="content-area">
            <p className="text-xs text-text-muted">Problem not found.</p>
            <Link to="/dsa" className="text-xs text-accent hover:underline mt-4 inline-block">← back</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-24 px-6 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          {/* Back */}
          <Link to="/dsa" className="text-[11px] text-text-muted hover:text-accent transition-colors inline-flex items-center gap-1 mb-8">
            ← all problems
          </Link>

          {/* Header */}
          <div className="flex flex-wrap items-start gap-3 mb-2">
            <h1 className="font-sans text-2xl font-bold text-text flex-1">{p.title}</h1>
            {p.star && <span className="text-accent-yellow text-lg mt-1">★</span>}
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className={`text-[11px] border rounded px-2 py-0.5 ${DIFF_STYLE[p.difficulty] ?? DIFF_STYLE.Medium}`}>
              {p.difficulty}
            </span>
            <span className="text-[11px] text-text-muted">{p.source}</span>
            {p.topics.map(t => (
              <span key={t} className="text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5">{t}</span>
            ))}
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[11px] text-accent-blue hover:text-accent border border-accent-blue/30 hover:border-accent/30 rounded px-3 py-1 transition-colors"
              >
                Open problem ↗
              </a>
            )}
          </div>

          {/* Mini graph */}
          <div className="mb-8">
            <MiniGraph nodeId={`dsa:${slug}`} />
          </div>

          {/* Note content */}
          {p.content ? (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(resolveWikilinks(p.content)) }}
            />
          ) : (
            <p className="text-xs text-text-muted">No notes yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
