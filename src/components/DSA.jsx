import { Link } from 'react-router-dom'
import { problems } from '../data/dsa'
import Section from './ui/Section'
import AnimatedItem from './ui/AnimatedItem'

const DIFF_STYLE = {
  Easy:   'text-accent-green border-accent-green/30 bg-accent-green/5',
  Medium: 'text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5',
  Hard:   'text-accent-orange border-accent-orange/30 bg-accent-orange/5',
}

const counts = {
  Easy:   problems.filter(p => p.difficulty === 'Easy').length,
  Medium: problems.filter(p => p.difficulty === 'Medium').length,
  Hard:   problems.filter(p => p.difficulty === 'Hard').length,
}

const starred = problems.filter(p => p.star).slice(0, 5)
const preview = starred.length ? starred : problems.slice(0, 5)

export default function DSA() {
  return (
    <Section id="dsa">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-sans text-2xl font-bold text-text">DSA</h2>
        <Link to="/dsa" className="text-[11px] text-text-muted hover:text-accent link-animated transition-colors">
          all problems →
        </Link>
      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-8">
        {['Easy', 'Medium', 'Hard'].map(d => (
          <div key={d} className={`text-[11px] border rounded px-3 py-1.5 ${DIFF_STYLE[d]}`}>
            <span className="font-bold">{counts[d]}</span>
            <span className="ml-1 opacity-70">{d}</span>
          </div>
        ))}
        <div className="text-[11px] text-text-muted self-center ml-1">
          {problems.length} total
        </div>
      </div>

      {/* Problem list */}
      <div>
        {preview.map((p, i) => (
          <AnimatedItem key={p.slug} index={i} as={p.link ? 'a' : 'div'}
            href={p.link || undefined} target={p.link ? '_blank' : undefined}
            rel={p.link ? 'noopener noreferrer' : undefined}
            className="group flex items-center gap-3 py-3 border-b border-border/50 last:border-b-0 hover:pl-1 transition-all duration-300"
          >
            <span className={`text-xs shrink-0 ${p.star ? 'text-accent-yellow' : 'text-border/30'}`}>★</span>
            <span className="flex-1 min-w-0 text-xs text-text-secondary group-hover:text-text transition-colors truncate">
              {p.title}
            </span>
            <div className="hidden sm:flex gap-1.5 shrink-0">
              {p.topics.slice(0, 2).map(t => (
                <span key={t} className="text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5">{t}</span>
              ))}
            </div>
            <span className={`text-[10px] border rounded px-2 py-0.5 shrink-0 ${DIFF_STYLE[p.difficulty] ?? DIFF_STYLE.Medium}`}>
              {p.difficulty}
            </span>
          </AnimatedItem>
        ))}
      </div>
    </Section>
  )
}
