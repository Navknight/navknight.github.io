// Light/dark via html[data-theme]. The no-flash read is inline in Base.astro <head>.
import { THEMES } from '../data/site.js'

export { THEMES }
const root = document.documentElement

export const current = () =>
  root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

export function setTheme(name) {
  if (!THEMES.includes(name)) return false
  root.dataset.theme = name
  try { localStorage.setItem('theme', name) } catch {}
  return true
}

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  setTheme(current() === 'dark' ? 'light' : 'dark')
})
