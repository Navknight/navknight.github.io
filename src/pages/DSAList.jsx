import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { problems, allTopics } from '../data/dsa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DIFF_STYLE = {
  Easy:   'text-accent-green border-accent-green/30 bg-accent-green/5',
  Medium: 'text-accent-yellow border-accent-yellow/30 bg-accent-yellow/5',
  Hard:   'text-accent-orange border-accent-orange/30 bg-accent-orange/5',
}

function FilterBtn({ active, onClick, children, activeClass }) {
  return (
    <button
      onClick={onClick}
      className={`text-[11px] px-3 py-1 rounded border transition-colors ${
        active
          ? activeClass ?? 'border-accent text-accent bg-accent/10'
          : 'border-border/50 text-text-muted hover:border-border-hover hover:text-text-secondary'
      }`}
    >
      {children}
    </button>
  )
}

function ProblemRow({ p }) {
  return (
    <Link to={`/dsa/${p.slug}`}
      className="flex items-center gap-3 py-3 border-b border-border/50 last:border-b-0 group hover:pl-1 transition-all duration-200">
      {/* Star */}
      <span className={`text-xs shrink-0 ${p.star ? 'text-accent-yellow' : 'text-border/30'}`}>★</span>

      {/* Title */}
      <span className="flex-1 min-w-0 text-sm text-text-secondary group-hover:text-text transition-colors truncate font-mono">
        {p.title}
      </span>

      {/* Topics (hidden on mobile) */}
      <div className="hidden sm:flex gap-1.5 shrink-0 max-w-[200px] overflow-hidden">
        {p.topics.slice(0, 2).map(t => (
          <span key={t} className="text-[10px] text-text-muted border border-border/40 rounded px-1.5 py-0.5 truncate">
            {t}
          </span>
        ))}
        {p.topics.length > 2 && (
          <span className="text-[10px] text-text-muted self-center">+{p.topics.length - 2}</span>
        )}
      </div>

      {/* Source */}
      <span className="hidden md:block text-[10px] text-text-muted shrink-0 w-16 text-right">{p.source}</span>

      {/* Difficulty */}
      <span className={`text-[10px] border rounded px-2 py-0.5 shrink-0 w-14 text-center ${DIFF_STYLE[p.difficulty] ?? DIFF_STYLE.Medium}`}>
        {p.difficulty}
      </span>

      {/* External link — stops propagation so row Link still navigates internally */}
      {p.link ? (
        <a href={p.link} target="_blank" rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="shrink-0 text-text-muted hover:text-accent-blue transition-colors"
          title="Open on LC/CF"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : <span className="w-3.5 shrink-0" />}
    </Link>
  )
}

export default function DSAList() {
  const [difficulty, setDifficulty] = useState('All')
  const [topic, setTopic]           = useState('All')
  const [starOnly, setStarOnly]     = useState(false)
  const [search, setSearch]         = useState('')

  const filtered = useMemo(() => problems.filter(p => {
    if (difficulty !== 'All' && p.difficulty !== difficulty) return false
    if (topic !== 'All' && !p.topics.includes(topic)) return false
    if (starOnly && !p.star) return false
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  }), [difficulty, topic, starOnly, search])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-24 px-6 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <h1 className="font-sans text-2xl font-bold text-text mb-1">Problems</h1>
          <p className="text-xs text-text-secondary mb-8">
            {problems.length} problems across algorithms and data structures.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-2">
            {['All', 'Easy', 'Medium', 'Hard'].map(d => (
              <FilterBtn key={d} active={difficulty === d} onClick={() => setDifficulty(d)}>
                {d}
              </FilterBtn>
            ))}

            <select
              value={topic}
              onChange={e => setTopic(e.target.value)}
              className="text-[11px] px-3 py-1 rounded border border-border/50 bg-surface text-text-muted
                         focus:outline-none focus:border-accent transition-colors cursor-pointer"
            >
              <option value="All">All Topics</option>
              {allTopics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            <FilterBtn
              active={starOnly}
              onClick={() => setStarOnly(s => !s)}
              activeClass="border-accent-yellow text-accent-yellow bg-accent-yellow/10"
            >
              ★ Starred
            </FilterBtn>
          </div>

          {/* Search */}
          <div className="mb-6 flex items-center gap-3">
            <input
              type="text"
              placeholder="search problems..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="text-[11px] px-3 py-1.5 rounded border border-border/50 bg-surface text-text-secondary
                         placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors w-56"
            />
            <span className="text-[11px] text-text-muted ml-auto">
              {filtered.length} / {problems.length}
            </span>
          </div>

          {/* Problem list */}
          {filtered.length === 0 ? (
            <p className="text-xs text-text-muted py-8">No problems match.</p>
          ) : (
            <div>
              {filtered.map(p => <ProblemRow key={p.slug} p={p} />)}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
