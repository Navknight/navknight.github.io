import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const COMMANDS = {
  help: () => [
    '  Available commands:',
    '  ─────────────────────────────────────',
    '  help          Show this message',
    '  whoami        About me',
    '  skills        List technical skills',
    '  experience    Work history',
    '  projects      Notable projects',
    '  hire          Why you should hire me',
    '  neofetch      System specs',
    '  clear         Clear terminal',
    '  ─────────────────────────────────────',
    '  Tip: Try "sudo increase-performance"',
  ],
  whoami: () => [
    '  Nav Knight',
    '  ─────────────────────────────────────',
    '  GPU & Systems Engineer | Chromium Contributor',
    '  IIT Tirupati CSE \'25 | Zscaler (via SquareX)',
    '  ',
    '  I build things at the intersection of',
    '  systems programming and web platform.',
    '  From parallel tensor decomposition to',
    '  browser forks to enterprise security engines.',
  ],
  skills: () => [
    '  Languages:  C/C++, Rust, Go, Python, TypeScript',
    '  Systems:    OpenMP, CUDA, WebAssembly, Chromium',
    '  Backend:    Flask, Kafka, PostgreSQL, Redis, GCP',
    '  Frontend:   React, Browser Extensions, WebRTC',
    '  Security:   DLP, OIDC, Enterprise Auth, SWG bypass',
  ],
  experience: () => [
    '  Zscaler (via SquareX acquisition)',
    '  Software Engineer | Jan 2025 - Present',
    '  ─────────────────────────────────────',
    '  - Multi-tenant enterprise backend (50+ customers)',
    '  - Chromium fork: 5000+ lines C++/Obj-C',
    '  - browser.security: DEF CON + Forbes coverage',
    '  - OIDC provider, cloud upload system, DLP engine',
    '  ',
    '  Type "hire" for the full pitch ;)',
  ],
  projects: () => [
    '  [1] DAP: Dead-Block Aware GPU Prefetching',
    '      32% cache miss reduction, 80% prefetch hit rate',
    '  [2] Parallel Sparse Tensor Decomposition',
    '      O(n^5) -> O(n^4), 2.87x speedup',
    '  [3] Custom Zip Library (Rust/WASM)',
    '      80% memory reduction via OPFS streaming',
    '  [4] Rituals: Collaborative Habit Tracker',
    '      P2P photo recovery, event-driven backend',
    '  ',
    '  Scroll down for interactive demos!',
  ],
  hire: () => [
    '  ╔══════════════════════════════════════════╗',
    '  ║     WHY YOU SHOULD HIRE NAV KNIGHT       ║',
    '  ╠══════════════════════════════════════════╣',
    '  ║                                          ║',
    '  ║  ✓ Ships production systems (50+ tenants)║',
    '  ║  ✓ Low-level + high-level (C++ to React) ║',
    '  ║  ✓ Chromium internals experience         ║',
    '  ║  ✓ Research: GPU prefetching, tensors    ║',
    '  ║  ✓ DEF CON presenter, Forbes coverage    ║',
    '  ║  ✓ IIT Top 1% (JEE Advanced 2021)       ║',
    '  ║                                          ║',
    '  ║  Resume: navknight.github.io/resume.pdf  ║',
    '  ║  GitHub: github.com/Navknight            ║',
    '  ║  Email:  nav@navknight.dev               ║',
    '  ║                                          ║',
    '  ╚══════════════════════════════════════════╝',
  ],
  neofetch: () => [
    '  navknight@systems',
    '  ─────────────────────',
    '  OS:       macOS / Linux',
    '  Shell:    zsh + tmux',
    '  Editor:   Neovim / VS Code',
    '  GPU:      NVIDIA (CUDA dev)',
    '  Lang:     C++ > Rust > Go > TS',
    '  Uptime:   4 years of shipping',
    '  Packages: too many npm modules',
  ],
  'sudo increase-performance': () => [
    '  [sudo] password for visitor: ********',
    '  ',
    '  ⚡ Overclocking portfolio...',
    '  ⚡ Enabling GPU acceleration...',
    '  ⚡ Loading WASM modules...',
    '  ⚡ Performance increased by 420%',
    '  ',
    '  Just kidding. But scroll down for real',
    '  interactive WASM demos that run in your browser.',
  ],
}

export default function Hero() {
  const [lines, setLines] = useState([
    '  Welcome to navknight.dev',
    '  ─────────────────────────────────────',
    '  GPU & Systems Engineer | Web Platform Hacker',
    '  ',
    '  ⚠  System performance degraded.',
    '  💡 To increase performance, use the terminal below.',
    '  ',
    '  Type "help" to see available commands.',
    '',
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const termRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (termRef.current) {
      termRef.current.scrollTop = termRef.current.scrollHeight
    }
  }, [lines])

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const newLines = [...lines, `  $ ${cmd}`]

    if (trimmed === 'clear') {
      setLines([''])
      return
    }

    const handler = COMMANDS[trimmed]
    if (handler) {
      newLines.push(...handler())
    } else if (trimmed) {
      newLines.push(`  command not found: ${trimmed}`, '  Type "help" for available commands.')
    }
    newLines.push('')
    setLines(newLines)
    setHistory(prev => [cmd, ...prev])
    setHistIdx(-1)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (histIdx < history.length - 1) {
        const ni = histIdx + 1
        setHistIdx(ni)
        setInput(history[ni])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIdx > 0) {
        const ni = histIdx - 1
        setHistIdx(ni)
        setInput(history[ni])
      } else {
        setHistIdx(-1)
        setInput('')
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" />

      {/* Title */}
      <div className="text-center mb-8 z-10">
        <h1 className="font-mono text-4xl md:text-6xl font-bold text-terminal-green glow-text mb-3">
          Nav Knight
        </h1>
        <p className="text-text-dim text-lg md:text-xl font-mono">
          GPU & Systems Engineer — Building at the Metal
        </p>
      </div>

      {/* Terminal */}
      <div
        className="w-full max-w-2xl z-10 rounded-lg overflow-hidden border border-border animate-pulse-glow cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title bar */}
        <div className="bg-surface-2 px-4 py-2 flex items-center gap-2 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-terminal-red" />
          <div className="w-3 h-3 rounded-full bg-terminal-amber" />
          <div className="w-3 h-3 rounded-full bg-terminal-green" />
          <span className="ml-3 font-mono text-xs text-text-dim">navknight — zsh</span>
        </div>

        {/* Terminal body */}
        <div
          ref={termRef}
          className="bg-bg/95 p-4 font-mono text-sm leading-relaxed max-h-[400px] overflow-y-auto scanline"
        >
          {lines.map((line, i) => (
            <div key={i} className={`whitespace-pre-wrap ${line.startsWith('  $') ? 'text-terminal-green' : 'text-text'}`}>
              {line}
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center text-terminal-green">
            <span className="mr-2">  $</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              className="flex-1 bg-transparent outline-none text-text caret-terminal-green font-mono text-sm"
              autoFocus
              spellCheck={false}
            />
            <span className="animate-blink">▊</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#experience" className="absolute bottom-8 z-10 animate-float text-text-dim hover:text-terminal-green transition-colors">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
