import { useState, useEffect } from 'react'
import { Terminal, Menu, X } from 'lucide-react'

const links = [
  { id: 'hero', label: '~/' },
  { id: 'experience', label: './experience' },
  { id: 'projects', label: './projects' },
  { id: 'skills', label: './skills' },
  { id: 'interactive', label: './demos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-mono text-terminal-green font-bold">
          <Terminal size={18} />
          <span>navknight</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="text-text-dim hover:text-terminal-green transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-text-dim" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-lg p-4 font-mono text-sm flex flex-col gap-3">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMobileOpen(false)} className="text-text-dim hover:text-terminal-green">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
