import path from 'node:path'

export const nameOf = (e) => path.basename(e.filePath ?? e.id, '.md')
export const topicsOf = (e) => {
  const t = e.data.topics
  return Array.isArray(t) ? t : t ? [t] : []
}
export const diffOf = (e) => (e.data.difficulty ?? '').toLowerCase()

export const DIFFS = ['easy', 'medium', 'hard']
const order = { easy: 0, medium: 1, hard: 2 }

export function problemRows(entries) {
  return entries
    .filter((e) => e.id.startsWith('problems/'))
    .map((e) => ({
      name: nameOf(e),
      slug: e.id.slice('problems/'.length),
      difficulty: e.data.difficulty,
      diff: diffOf(e),
      topics: topicsOf(e),
      source: e.data.source,
      star: !!e.data.star,
    }))
}

export const byDifficulty = (a, b) =>
  (order[a.diff] ?? 3) - (order[b.diff] ?? 3) || a.name.localeCompare(b.name)
