import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Terminal as TerminalIcon, FileCode, Braces, ArrowRight, Sparkles } from 'lucide-react'

const COMMANDS = {
  help: () => [
    '',
    '  Available commands:',
    '  ─────────────────────────────',
    '  whoami       About me',
    '  skills       Tech stack',
    '  experience   Work history',
    '  projects     Research & builds',
    '  neofetch     System info',
    '  increase-speed   ⚡',
    '  clear        Clear console',
    '',
  ],
  whoami: () => [
    '',
    '  Abhinav Gupta',
    '  Software Engineer @ Zscaler (via SquareX)',
    '  B.Tech CS, IIT Tirupati \'25',
    '',
    '  Building multi-tenant enterprise backends,',
    '  custom Chromium forks, and GPU memory systems.',
    '',
  ],
  skills: () => [
    '',
    '  Languages:   C/C++ · Python · Go · Rust · TypeScript · SQL',
    '  Infra:       Docker · Linux · Git · Kafka · Distributed Systems',
    '  Backend:     Flask · PostgreSQL · Redis · GCP (Cloud Run, IAM, Pub/Sub)',
    '  Frontend:    React · Browser Extensions · WebAssembly',
    '  Research:    OpenMP · GPU Architecture · Cache Coherence · MGPUsim',
    '',
  ],
  experience: () => [
    '',
    '  Zscaler (via SquareX acquisition)',
    '  Software Engineer | Jan 2025–Present',
    '  ───────────────────────────────────',
    '  • Multi-tenant enterprise backend — policy evaluation,',
    '    cloud storage routing, DLP (Python/Flask, PostgreSQL, Redis)',
    '  • Chromium fork — device posture APIs, code signing,',
    '    OS password challenges, AV detection (Windows + macOS)',
    '  • Custom OIDC IDP — SquareX as second auth factor,',
    '    Kafka hot-reloading across 20+ tenants (Go, React)',
    '  • Browser extension security engine — sub-ms DLP pattern',
    '    matching, encrypted WebSocket agent comms (TypeScript)',
    '  • Firefox fork for Android + CLI patch management system',
    '  • browser.security — DEF CON, 30+ SWG bypasses, Forbes',
    '',
  ],
  projects: () => [
    '',
    '  [1] DAP: Dead-Block Aware Prefetching in GPUs',
    '      MGPUsim (Go) · next-line + strided prefetcher modules',
    '      32% miss reduction · 80% prefetch hit · MSHR deadlock fix',
    '',
    '  [2] Parallel Sparse Tensor Decomposition (TTMc)',
    '      C++/OpenMP · CSF format · 7 algorithms across 3 modes',
    '      O(n⁵)→O(n⁴) via intermediate buffering · 2.87x speedup',
    '',
    '  [3] Append-Only Zip Library',
    '      Rust/WASM · OPFS streaming · 80% memory reduction',
    '      Large file processing without browser tab crashes',
    '',
    '  ↓ Scroll down for interactive demos of [1] and [2]',
    '',
  ],
  neofetch: () => [
    '',
    '  navknight@workstation',
    '  ─────────────────────',
    '  OS:        Linux / macOS',
    '  Shell:     zsh + tmux',
    '  Editor:    Neovim',
    '  Stack:     Go · C++ · Python · TypeScript',
    '  Infra:     Docker · GCP · Kafka · Redis',
    '  Research:  GPU memory systems · HPC',
    '',
  ],
  'increase-speed': 'ANIMATED',
  'sudo increase-performance': 'ANIMATED',
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState('terminal')
  const [lines, setLines] = useState([
    '',
    '  Welcome. Type "help" to start interacting.',
    '',
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const termRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight
  }, [lines, activeTab])

  const [animating, setAnimating] = useState(false)

  const runOverclockSequence = (cmdLine) => {
    setAnimating(true)
    const isSudo = cmdLine.includes('sudo')
    const base = [...lines, `  ❯ ${cmdLine}`]

    const sequence = isSudo ? [
      { delay: 300, line: '  [sudo] password: ••••••••' },
      { delay: 600, line: '' },
      { delay: 100, line: '  ┌─────────────────────────────────────────────┐' },
      { delay: 50, line:  '  │  PERFORMANCE BOOST v3.2.1 — KERNEL MODULE   │' },
      { delay: 50, line:  '  └─────────────────────────────────────────────┘' },
      { delay: 200, line: '' },
      { delay: 150, line: '  [INIT] Loading overclock driver...' },
      { delay: 200, line: '  [INIT] Hooking into scheduler... ✓' },
      { delay: 150, line: '  [INIT] Patching memory controller... ✓' },
      { delay: 100, line: '' },
      { delay: 100, line: '  ⚡ Raising core voltage:  1.20V → 1.38V' },
      { delay: 150, line: '  ⚡ Clock multiplier:      ×32 → ×48' },
      { delay: 150, line: '  ⚡ L1 prefetch aggression: conservative → extreme' },
      { delay: 150, line: '  ⚡ Memory timings:        CL16 → CL12 (risky)' },
      { delay: 100, line: '' },
      { delay: 100, line: '  ┌ STRESS TEST ──────────────────────────┐' },
      { delay: 200, line: '  │ Core 0: ████████████████████████ 4.8GHz │' },
      { delay: 100, line: '  │ Core 1: ███████████████████████░ 4.7GHz │' },
      { delay: 100, line: '  │ Core 2: ████████████████████████ 4.8GHz │' },
      { delay: 100, line: '  │ Core 3: ██████████████████████░░ 4.6GHz │' },
      { delay: 100, line: '  │ Temp:   62°C → 74°C → 81°C → 89°C ⚠   │' },
      { delay: 200, line: '  └────────────────────────────────────────┘' },
      { delay: 200, line: '' },
      { delay: 100, line: '  [WARN] Approaching thermal limit (95°C)' },
      { delay: 300, line: '  [OK]   Throttle point: NOT reached. Stable.' },
      { delay: 200, line: '' },
      { delay: 100, line: '  ✓ All systems overclocked. +47% throughput.' },
      { delay: 100, line: '  ✓ Background render threads: 4x speed.' },
      { delay: 100, line: '  ✓ Prefetch accuracy: 80% → 94% (DAP engaged).' },
      { delay: 200, line: '' },
    ] : [
      { delay: 200, line: '' },
      { delay: 100, line: '  [SYS] Initiating speed boost...' },
      { delay: 200, line: '  [GPU] Warp scheduler: round-robin → greedy' },
      { delay: 200, line: '  [GPU] SM occupancy: 60% → 95%' },
      { delay: 150, line: '  [MEM] Prefetch depth: 2 → 8 lines' },
      { delay: 150, line: '  [MEM] Coalescing: enabled (128B transactions)' },
      { delay: 100, line: '' },
      { delay: 100, line: '  ┌ BENCHMARK ───────────────────────────┐' },
      { delay: 150, line: '  │ Before: ████░░░░░░░░░░░░  1.2 TFLOPS │' },
      { delay: 300, line: '  │ After:  █████████████████  4.1 TFLOPS │' },
      { delay: 100, line: '  └────────────────────────────────────────┘' },
      { delay: 200, line: '' },
      { delay: 100, line: '  ⚡ 3.4× speedup achieved.' },
      { delay: 150, line: '  ⚡ All warps saturated. Zero stalls.' },
      { delay: 200, line: '' },
    ]

    window.dispatchEvent(new Event('city-speed-boost'))

    let accumulated = [...base]
    let totalDelay = 0
    sequence.forEach(({ delay, line }) => {
      totalDelay += delay
      setTimeout(() => {
        accumulated = [...accumulated, line]
        setLines([...accumulated])
      }, totalDelay)
    })
    setTimeout(() => setAnimating(false), totalDelay + 100)
  }

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()

    if (trimmed === 'clear') { setLines(['']); setHistory(prev => [cmd, ...prev]); setHistIdx(-1); return }

    if (COMMANDS[trimmed] === 'ANIMATED') {
      runOverclockSequence(cmd)
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
    if (animating) { e.preventDefault(); return }
    if (e.key === 'Enter') { handleCommand(input); setInput('') }
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0 && histIdx < history.length - 1) {
        const n = histIdx + 1
        setHistIdx(n)
        setInput(history[n])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIdx > 0) {
        const n = histIdx - 1
        setHistIdx(n)
        setInput(history[n])
      } else {
        setHistIdx(-1)
        setInput('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = Object.keys(COMMANDS).find(c => c.startsWith(input.trim().toLowerCase()))
      if (match) setInput(match)
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Dynamic ambient gradients */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-accent-indigo/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-accent-cyan/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="centered-container grid lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column - Intro Typography */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 mb-6 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-indigo font-bold">Software Engineer</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fade-up">
            Abhinav Gupta
          </h1>
          
          <p className="text-lg md:text-xl font-medium text-text-secondary mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Multi-tenant backends, custom browser forks, and GPU memory research.
          </p>

          <p className="text-sm text-text-muted leading-relaxed mb-8 max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
            Software Engineer at <span className="text-text font-semibold">Zscaler</span> (via SquareX). Previously built dead-block aware prefetchers in MGPUsim, parallelized sparse Tucker decomposition with OpenMP, and presented SWG bypasses at DEF CON 32.
          </p>

          <div className="flex flex-wrap gap-4 w-full animate-fade-up" style={{ animationDelay: '300ms' }}>
            <a 
              href="#interactive" 
              className="flex items-center gap-2 bg-accent-indigo hover:bg-accent-indigo/90 text-white font-medium px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-accent-indigo/20"
            >
              Explore Demos
              <ArrowRight size={16} />
            </a>
            <a 
              href="#experience" 
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white border border-white/10 px-6 py-3.5 rounded-xl transition-all"
            >
              View Experience
            </a>
          </div>
        </div>

        {/* Right Column - Mock IDE/Terminal */}
        <div className="lg:col-span-7 w-full animate-fade-up" style={{ animationDelay: '150ms' }}>
          <div className="rounded-2xl overflow-hidden glass border border-white/5 shadow-2xl flex flex-col h-[420px]">
            
            {/* Title Bar / Tabs */}
            <div className="bg-black/50 px-4 py-1.5 flex items-center justify-between border-b border-white/5 shrink-0">
              <div className="flex items-center gap-6">
                {/* Windows dots */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-red opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-amber opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-green opacity-80" />
                </div>
                
                {/* Tabs */}
                <div className="flex gap-1">
                  <button 
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[11px] transition-all ${
                      activeTab === 'terminal' 
                        ? 'bg-white/5 text-accent-indigo font-bold border-b border-accent-indigo' 
                        : 'text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    <TerminalIcon size={12} />
                    terminal.sh
                  </button>
                  <button
                    onClick={() => setActiveTab('cuda')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[11px] transition-all ${
                      activeTab === 'cuda'
                        ? 'bg-white/5 text-accent-cyan font-bold border-b border-accent-cyan'
                        : 'text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    <FileCode size={12} />
                    prefetch.go
                  </button>
                  <button 
                    onClick={() => setActiveTab('json')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[11px] transition-all ${
                      activeTab === 'json' 
                        ? 'bg-white/5 text-accent-emerald font-bold border-b border-accent-emerald' 
                        : 'text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    <Braces size={12} />
                    profile.json
                  </button>
                </div>
              </div>
              <span className="font-mono text-[9px] text-text-muted hidden sm:inline">IDE v1.2</span>
            </div>

            {/* IDE Workspace Content */}
            <div className="bg-[#050508] p-5 font-mono text-[12px] leading-relaxed overflow-y-auto flex-1 flex flex-col justify-between">
              
              {activeTab === 'terminal' && (
                <div 
                  ref={termRef} 
                  className="flex-1 overflow-y-auto cursor-text h-full flex flex-col"
                  onClick={() => inputRef.current?.focus()}
                >
                  <div className="flex-1">
                    {lines.map((line, i) => (
                      <div 
                        key={i} 
                        className={`whitespace-pre-wrap ${
                          line.startsWith('  ❯') 
                            ? 'text-accent-indigo font-bold' 
                            : line.includes('command not found')
                            ? 'text-accent-red'
                            : 'text-text-secondary'
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center mt-2 shrink-0">
                    <span className="text-accent-indigo font-bold mr-2">  ❯</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={handleKey}
                      className="flex-1 bg-transparent outline-none text-text caret-accent-indigo font-mono text-[12px] p-0 border-none focus:ring-0"
                      autoFocus
                      spellCheck={false}
                      autoComplete="off"
                    />
                    <span className="animate-blink text-accent-indigo/80">▊</span>
                  </div>
                </div>
              )}

              {activeTab === 'cuda' && (
                <div className="text-left select-text whitespace-pre overflow-x-auto text-[11px] sm:text-[12px]">
                  <p className="text-text-muted">// MGPUsim Strided Prefetcher — prefetch.go</p>
                  <p><span className="text-accent-purple">package</span> <span className="text-accent-cyan">prefetcher</span></p>
                  <p>&nbsp;</p>
                  <p><span className="text-accent-purple">type</span> <span className="text-accent-indigo">StridedPrefetcher</span> <span className="text-accent-purple">struct</span> &#123;</p>
                  <p>    strideTable  []<span className="text-accent-cyan">strideEntry</span></p>
                  <p>    confidence   <span className="text-accent-cyan">int</span></p>
                  <p>    threshold    <span className="text-accent-cyan">int</span></p>
                  <p>&#125;</p>
                  <p>&nbsp;</p>
                  <p><span className="text-accent-purple">func</span> (p *<span className="text-accent-indigo">StridedPrefetcher</span>) <span className="text-accent-indigo">Lookup</span>(addr <span className="text-accent-cyan">uint64</span>) *<span className="text-accent-cyan">PrefetchReq</span> &#123;</p>
                  <p>    entry := p.findEntry(addr)</p>
                  <p>    <span className="text-accent-purple">if</span> entry == <span className="text-accent-purple">nil</span> &#123;</p>
                  <p>        p.allocEntry(addr)</p>
                  <p>        <span className="text-accent-purple">return nil</span></p>
                  <p>    &#125;</p>
                  <p>&nbsp;</p>
                  <p>    stride := addr - entry.lastAddr</p>
                  <p>    <span className="text-accent-purple">if</span> stride == entry.stride &#123;</p>
                  <p>        entry.confidence++</p>
                  <p>    &#125; <span className="text-accent-purple">else</span> &#123;</p>
                  <p>        entry.stride = stride</p>
                  <p>        entry.confidence = <span className="text-accent-amber">1</span></p>
                  <p>    &#125;</p>
                  <p>    entry.lastAddr = addr</p>
                  <p>&nbsp;</p>
                  <p>    <span className="text-accent-purple">if</span> entry.confidence &gt;= p.threshold &#123;</p>
                  <p>        <span className="text-accent-purple">return</span> &amp;<span className="text-accent-cyan">PrefetchReq</span>&#123;Addr: addr + stride&#125;</p>
                  <p>    &#125;</p>
                  <p>    <span className="text-accent-purple">return nil</span></p>
                  <p>&#125;</p>
                </div>
              )}

              {activeTab === 'json' && (
                <div className="text-left select-text whitespace-pre overflow-x-auto text-[11px] sm:text-[12px] text-text-secondary">
                  <p>&#123;</p>
                  <p>  <span className="text-accent-cyan">"name"</span>: <span className="text-accent-emerald">"Abhinav Gupta"</span>,</p>
                  <p>  <span className="text-accent-cyan">"role"</span>: <span className="text-accent-emerald">"Software Engineer"</span>,</p>
                  <p>  <span className="text-accent-cyan">"org"</span>: <span className="text-accent-emerald">"Zscaler (via SquareX)"</span>,</p>
                  <p>  <span className="text-accent-cyan">"education"</span>: <span className="text-accent-emerald">"B.Tech CS, IIT Tirupati '25"</span>,</p>
                  <p>  <span className="text-accent-cyan">"domains"</span>: [</p>
                  <p>    <span className="text-accent-emerald">"GPU Memory Systems (MGPUsim)"</span>,</p>
                  <p>    <span className="text-accent-emerald">"Sparse Tensor HPC (OpenMP)"</span>,</p>
                  <p>    <span className="text-accent-emerald">"Browser Forks (Chromium/Firefox)"</span>,</p>
                  <p>    <span className="text-accent-emerald">"Enterprise Security (DLP/OIDC)"</span></p>
                  <p>  ],</p>
                  <p>  <span className="text-accent-cyan">"publications"</span>: [</p>
                  <p>    <span className="text-accent-emerald">"DEF CON 32 — Last Mile Reassembly"</span></p>
                  <p>  ],</p>
                  <p>  <span className="text-accent-cyan">"stack"</span>: [</p>
                  <p>    <span className="text-accent-emerald">"C/C++"</span>, <span className="text-accent-emerald">"Go"</span>, <span className="text-accent-emerald">"Python"</span>,</p>
                  <p>    <span className="text-accent-emerald">"Rust"</span>, <span className="text-accent-emerald">"TypeScript"</span></p>
                  <p>  ]</p>
                  <p>&#125;</p>
                </div>
              )}

            </div>
            
            {/* Console Guide Line */}
            <div className="bg-black/40 px-4 py-2 border-t border-white/5 shrink-0 flex items-center gap-1.5 text-text-muted font-mono text-[10px]">
              <Sparkles size={11} className="text-accent-indigo" />
              {activeTab === 'terminal' && <span>Tab to autocomplete commands · Up/Down for command history</span>}
              {activeTab === 'cuda' && <span>MGPUsim strided prefetcher — confidence-based stride detection (Go)</span>}
              {activeTab === 'json' && <span>Developer JSON profile schema metadata</span>}
            </div>

          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <a 
        href="#experience" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-float text-text-muted hover:text-accent-indigo transition-colors"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  )
}
