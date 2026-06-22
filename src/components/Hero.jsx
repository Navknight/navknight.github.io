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
    '  projects     Builds & research',
    '  hire         The pitch',
    '  neofetch     System specs',
    '  increase-speed Speed up city & spawn workers',
    '  clear        Clear console',
    '',
    '  Try running: increase-speed',
    '',
  ],
  whoami: () => [
    '',
    '  Abhinav Gupta',
    '  GPU & Systems Engineer',
    '  IIT Tirupati \'25 | Zscaler',
    '',
    '  I build at the intersection of low-level systems',
    '  programming and high-performance web applications.',
    '',
  ],
  skills: () => [
    '',
    '  Languages:  C/C++ · Rust · Go · Python · TypeScript',
    '  Systems:    CUDA · OpenMP · WASM · Chromium internals',
    '  Backend:    Kafka · PostgreSQL · Redis · GCP · Flask',
    '  Frontend:   React · Browser Extensions · WebRTC',
    '',
  ],
  experience: () => [
    '',
    '  Zscaler (via SquareX)',
    '  Software Engineer | 2025–Present',
    '  ──────────────────────────────',
    '  • Multi-tenant enterprise cloud backend systems',
    '  • Custom Chromium fork posture & security APIs',
    '  • DLP engine matching pattern extension core',
    '  • Custom OIDC IDP integrations & Kafka reloading',
    '',
  ],
  projects: () => [
    '',
    '  [1] GPU Prefetcher (MGPUsim) — 32% miss reduction',
    '  [2] Tensor Decomposition — O(n⁴) OpenMP speedup',
    '  [3] WASM Zip — constant 128KB memory stream (OPFS)',
    '  [4] browser.security — DEF CON 2024 bypasses',
    '',
    '  ↓ Scroll down for full interactive demos',
    '',
  ],
  hire: () => [
    '',
    '  ┌────────────────────────────────────────┐',
    '  │  WHY WORK WITH ABHINAV                 │',
    '  ├────────────────────────────────────────┤',
    '  │  ✓ Systems-to-Web full-stack capability │',
    '  │  ✓ Chromium & browser fork engineer    │',
    '  │  ✓ DEF CON presenter & Forbes covered  │',
    '  │  ✓ Top 1% JEE Advanced rank            │',
    '  └────────────────────────────────────────┘',
    '',
  ],
  neofetch: () => [
    '',
    '  navknight@iit-tirupati',
    '  ──────────────────────',
    '  OS:          Linux / macOS',
    '  Shell:       zsh + tmux',
    '  Editor:      Neovim (lazy.nvim)',
    '  GPU:         NVIDIA RTG / CUDA Compute',
    '  Languages:   C++ > Rust > Go > TypeScript',
    '  Academic:    B.Tech CS @ IIT Tirupati \'25',
    '',
  ],
  'increase-speed': () => {
    window.dispatchEvent(new Event('city-speed-boost'))
    return [
      '',
      '  ⚡ Tuning building scheduler...',
      '  ⚡ Spawning additional construction workers...',
      '  ⚡ Cityscape parallax scroll rate increased to maximum.',
      '',
    ]
  },
  'sudo increase-performance': () => {
    window.dispatchEvent(new Event('performance-boost'))
    return [
      '',
      '  [sudo] password: ••••••••',
      '',
      '  ⚡ Enabling intermediate buffers...',
      '  ⚡ Accelerating background cityscape engine threads...',
      '  ⚡ Tuning L1/L2 cache prefetchers...',
      '  ⚡ Boost complete! Background rendering at 4x speed.',
      '',
    ]
  },
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

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const newLines = [...lines, `  ❯ ${cmd}`]

    if (trimmed === 'clear') { setLines(['']); return }

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
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-indigo font-bold">GPU & Systems Engineer</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fade-up">
            Abhinav Gupta
          </h1>
          
          <p className="text-lg md:text-xl font-medium text-text-secondary mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Building high-performance computation kernels, GPU memory systems, and hardened browser runtimes.
          </p>

          <p className="text-sm text-text-muted leading-relaxed mb-8 max-w-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
            Software Engineer at <span className="text-text font-semibold">Zscaler</span>. Previously researched dead-block aware prefetching in GPUs, accelerated sparse tensor algorithms in C++, and built low-level browser forks.
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
                    prefetch.cu
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
                  <p className="text-text-muted">// GPU Stride-Detection Prefetcher Module</p>
                  <p><span className="text-accent-purple">#include</span> <span className="text-accent-cyan">&lt;cuda_runtime.h&gt;</span></p>
                  <p><span className="text-accent-purple">#include</span> <span className="text-accent-cyan">&lt;device_launch_parameters.h&gt;</span></p>
                  <p>&nbsp;</p>
                  <p><span className="text-accent-purple">__global__ void</span> <span className="text-accent-indigo">stridePrefetchKernel</span>(<span className="text-accent-cyan">float</span>* d_out, <span className="text-accent-cyan">float</span>* d_in, <span className="text-accent-cyan">int</span> stride) &#123;</p>
                  <p>    <span className="text-accent-cyan">int</span> idx = blockIdx.x * blockDim.x + threadIdx.x;</p>
                  <p>    </p>
                  <p>    <span className="text-text-muted">// Compute strided memory address access</span></p>
                  <p>    <span className="text-accent-cyan">int</span> targetAddr = idx * stride;</p>
                  <p>    </p>
                  <p>    <span className="text-text-muted">// Dead-block aware prefetching logic</span></p>
                  <p>    <span className="text-accent-purple">__shared__ float</span> cache_buffer[<span className="text-accent-amber">256</span>];</p>
                  <p>    <span className="text-accent-purple">if</span> (threadIdx.x &lt; <span className="text-accent-amber">256</span>) &#123;</p>
                  <p>        <span className="text-text-muted">// Prefetch ahead to hide memory latency</span></p>
                  <p>        <span className="text-accent-cyan">int</span> prefetchAddr = targetAddr + (stride * <span className="text-accent-amber">16</span>);</p>
                  <p>        cache_buffer[threadIdx.x] = d_in[prefetchAddr];</p>
                  <p>    &#125;</p>
                  <p>    <span className="text-accent-indigo">__syncthreads</span>();</p>
                  <p>    </p>
                  <p>    d_out[idx] = d_in[targetAddr] * cache_buffer[threadIdx.x];</p>
                  <p>&#125;</p>
                </div>
              )}

              {activeTab === 'json' && (
                <div className="text-left select-text whitespace-pre overflow-x-auto text-[11px] sm:text-[12px] text-text-secondary">
                  <p>&#123;</p>
                  <p>  <span className="text-accent-cyan">"name"</span>: <span className="text-accent-emerald">"Abhinav Gupta"</span>,</p>
                  <p>  <span className="text-accent-cyan">"role"</span>: <span className="text-accent-emerald">"Systems & GPU Engineer"</span>,</p>
                  <p>  <span className="text-accent-cyan">"education"</span>: &#123;</p>
                  <p>    <span className="text-accent-cyan">"degree"</span>: <span className="text-accent-emerald">"B.Tech in Computer Science"</span>,</p>
                  <p>    <span className="text-accent-cyan">"institute"</span>: <span className="text-accent-emerald">"IIT Tirupati \'25"</span>,</p>
                  <p>    <span className="text-accent-cyan">"gpa"</span>: <span className="text-accent-emerald">"8.69 / 10"</span></p>
                  <p>  &#125;,</p>
                  <p>  <span className="text-accent-cyan">"focus"</span>: [</p>
                  <p>    <span className="text-accent-emerald">"GPU Architecture Simulators"</span>,</p>
                  <p>    <span className="text-accent-emerald">"High-Performance Computing (HPC)"</span>,</p>
                  <p>    <span className="text-accent-emerald">"Browser Hardening & Security"</span></p>
                  <p>  ],</p>
                  <p>  <span className="text-accent-cyan">"interests"</span>: [</p>
                  <p>    <span className="text-accent-emerald">"CUDA / OpenMP"</span>,</p>
                  <p>    <span className="text-accent-emerald">"WebAssembly & OPFS Streaming"</span>,</p>
                  <p>    <span className="text-accent-emerald">"Chromium & Firefox Source Hacking"</span></p>
                  <p>  ]</p>
                  <p>&#125;</p>
                </div>
              )}

            </div>
            
            {/* Console Guide Line */}
            <div className="bg-black/40 px-4 py-2 border-t border-white/5 shrink-0 flex items-center gap-1.5 text-text-muted font-mono text-[10px]">
              <Sparkles size={11} className="text-accent-indigo" />
              {activeTab === 'terminal' && <span>Tab to autocomplete commands · Up/Down for command history</span>}
              {activeTab === 'cuda' && <span>Read-only CUDA prefetch kernel source code module</span>}
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
