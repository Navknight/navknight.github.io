import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'interactive', label: 'Demos' },
  { id: 'blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const scrollPos = window.scrollY + 200
      const sections = ['hero', ...links.map(l => l.id)]
      
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4 transition-all duration-300 flex justify-center">
      <div 
        className={`centered-container rounded-2xl flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'glass py-3 px-6 shadow-xl shadow-black/20 border-white/10' 
            : 'bg-transparent py-4 px-6 border-transparent border'
        }`}
      >
        <a
          href={onHome ? '#hero' : '/'}
          className="flex items-center gap-2 font-mono text-sm text-text font-bold hover:text-accent-indigo transition-colors"
        >
          <div className="w-6 h-6 rounded-lg bg-accent-indigo/10 flex items-center justify-center border border-accent-indigo/30">
            <Terminal size={14} className="text-accent-indigo" />
          </div>
          <span className="tracking-tight">navknight</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1">
          {links.map(l => {
            const isActive = (onHome && activeSection === l.id) || (l.id === 'blog' && pathname.startsWith('/blog'))
            return (
              <a
                key={l.id}
                href={onHome ? `#${l.id}` : `/#${l.id}`}
                className={`font-mono text-xs px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-indigo text-white shadow-md shadow-accent-indigo/20 font-medium'
                    : 'text-text-secondary hover:text-text hover:bg-white/5'
                }`}
              >
                {l.label}
              </a>
            )
          })}
        </div>

        {/* Contact/Resume Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="mailto:abhi.gupta8802@gmail.com" 
            className="flex items-center gap-1 font-mono text-xs text-accent-indigo hover:text-white bg-accent-indigo/10 hover:bg-accent-indigo border border-accent-indigo/20 hover:border-transparent px-4 py-2 rounded-xl transition-all duration-300"
          >
            Get in Touch
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-text transition-colors" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-2 border border-white/10 shadow-2xl shadow-black/50 animate-fade-up">
          {links.map(l => {
            const isActive = (onHome && activeSection === l.id) || (l.id === 'blog' && pathname.startsWith('/blog'))
            return (
              <a
                key={l.id}
                href={onHome ? `#${l.id}` : `/#${l.id}`}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-sm px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-accent-indigo/10 text-accent-indigo border-l-2 border-accent-indigo font-medium'
                    : 'text-text-secondary hover:text-text hover:bg-white/5'
                }`}
              >
                {l.label}
              </a>
            )
          })}
          <a 
            href="mailto:abhi.gupta8802@gmail.com" 
            className="flex items-center justify-center gap-1 font-mono text-sm text-white bg-accent-indigo px-4 py-3 rounded-xl mt-2 transition-all"
          >
            Get in Touch
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </nav>
  )
}
