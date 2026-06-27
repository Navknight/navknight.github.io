import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAV_SECTIONS } from '../data/navigation'
import useTheme from '../hooks/useTheme'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(NAV_SECTIONS[0].id)
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const { isLight, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 200
      for (const s of NAV_SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="page-container flex items-center justify-between h-12">
        {/* Logo */}
        <a
          href={onHome ? '#about' : '/'}
          className="flex items-center gap-2 font-bold text-sm hover:opacity-80 transition-opacity"
        >
          <span className="text-accent-green">❯</span>
          <span className="text-text">navknight</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_SECTIONS.map(s => {
            const isActive = onHome && activeSection === s.id
            return (
              <a
                key={s.id}
                href={onHome ? `#${s.id}` : `/#${s.id}`}
                className={`group relative text-xs px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive ? 'text-text' : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-accent' : 'text-text-muted group-hover:text-accent-orange'} transition-colors`}>
                  [{s.key}]
                </span>
                {' '}{s.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-accent animate-fade-in" />
                )}
              </a>
            )
          })}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/graph"
            className="text-xs text-text-muted hover:text-accent-cyan link-animated transition-colors"
          >
            graph
          </Link>
          <button
            onClick={toggle}
            className="text-text-muted hover:text-text transition-colors p-1"
            aria-label="Toggle theme"
          >
            {isLight ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-muted hover:text-text transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1 animate-fade-in">
          {NAV_SECTIONS.map(s => (
            <a
              key={s.id}
              href={onHome ? `#${s.id}` : `/#${s.id}`}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-text-secondary hover:text-text transition-colors py-2.5 border-b border-border/50"
            >
              <span className="text-accent-orange">[{s.key}]</span> {s.label}
            </a>
          ))}
          <Link
            to="/graph"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-text-secondary hover:text-accent-cyan transition-colors py-2.5 border-b border-border/50"
          >
            graph
          </Link>
          <button
            onClick={() => { toggle(); setMobileOpen(false) }}
            className="text-sm text-text-secondary hover:text-text transition-colors py-2.5 text-left"
          >
            {isLight ? '☀ light mode' : '☾ dark mode'} (toggle)
          </button>
        </div>
      )}
    </nav>
  )
}
