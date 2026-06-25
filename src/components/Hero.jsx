import { useState, useRef, useEffect } from 'react'
import { COMMANDS } from '../data/terminal'

export default function Hero() {
  const [lines, setLines] = useState(['', '  Type "help" to explore.', ''])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const termRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight
  }, [lines])

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    if (trimmed === 'clear') {
      setLines([''])
      setHistory(prev => [cmd, ...prev])
      setHistIdx(-1)
      return
    }
    const newLines = [...lines, `  ❯ ${cmd}`]
    const handler = COMMANDS[trimmed]
    if (handler) newLines.push(...handler())
    else if (trimmed) newLines.push('', `  command not found: ${trimmed}`, '')
    setLines(newLines)
    setHistory(prev => [cmd, ...prev])
    setHistIdx(-1)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') { handleCommand(input); setInput('') }
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0 && histIdx < history.length - 1) {
        const n = histIdx + 1; setHistIdx(n); setInput(history[n])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIdx > 0) { const n = histIdx - 1; setHistIdx(n); setInput(history[n]) }
      else { setHistIdx(-1); setInput('') }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = Object.keys(COMMANDS).find(c => c.startsWith(input.trim().toLowerCase()))
      if (match) setInput(match)
    }
  }

  return (
    <section id="about" className="section-wrap min-h-screen flex items-center pt-16">
      <div className="content-area py-8 sm:py-12">
        {/* Intro */}
        <div className="mb-10 animate-fade-up">
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
            Hello World!,<br />
            I'm <span className="text-accent">Abhinav Gupta</span>.
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl mt-6">
            Software Engineer at <span className="text-text font-medium">Zscaler</span> (via SquareX).
            I build multi-tenant enterprise backends, fork Chromium for device posture,
            and research GPU memory systems. B.Tech CS, IIT Tirupati '25.
          </p>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl mt-3">
            Day-to-day: Go, C++, Python, TypeScript. I like taking things from
            idea → architecture → code → <span className="text-accent-orange italic">"wow this is fast"</span> → production.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5 mt-6 text-xs">
            <a href="https://github.com/Navknight" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-green link-animated transition-colors">github</a>
            <a href="https://www.linkedin.com/in/abhinav-gupta-iitt/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-blue link-animated transition-colors">linkedin</a>
            <a href="mailto:abhi.gupta8802@gmail.com" className="text-text-muted hover:text-accent-orange link-animated transition-colors">email</a>
            <a href="#interactive" className="text-text-muted hover:text-accent link-animated transition-colors">demos ↓</a>
          </div>
        </div>

        {/* Terminal */}
        <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div className="rounded-lg overflow-hidden panel-translucent flex flex-col h-[260px] sm:h-[340px] max-w-2xl shadow-2xl shadow-black/30">
            <div className="bg-white/5 px-3 sm:px-4 py-2 flex items-center gap-3 border-b border-border shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-red" />
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-amber" />
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-green" />
              </div>
              <span className="text-[11px] text-text-muted hidden sm:inline">~/navknight — zsh</span>
            </div>

            <div
              ref={termRef}
              className="flex-1 overflow-y-auto cursor-text p-3 sm:p-4 text-[11px] sm:text-[12px] leading-relaxed flex flex-col"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex-1">
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={`whitespace-pre-wrap ${
                      line.startsWith('  ❯') ? 'text-accent-green font-medium'
                        : line.includes('command not found') ? 'text-terminal-red'
                        : line.includes('✓') ? 'text-terminal-green'
                        : line.includes('⚡') ? 'text-terminal-amber'
                        : line.includes('[WARN]') ? 'text-terminal-amber'
                        : 'text-text-secondary'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-2 shrink-0">
                <span className="text-accent-green mr-2">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  className="flex-1 bg-transparent outline-none text-text caret-accent-green text-[11px] sm:text-[12px] p-0 border-none focus:ring-0"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="animate-blink text-accent-green/70">▊</span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-text-muted mt-2 opacity-60">
            ↑↓ history · tab autocomplete
          </p>
        </div>
      </div>
    </section>
  )
}
