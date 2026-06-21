import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'DAP: Dead-Block Aware GPU Prefetching',
    description: 'Hardware prefetcher modules (next-line and strided) in MGPUsim. Reduced cache miss rates by 32% with 80% prefetch hit rate. Profiled dead-block rates across six multi-GPU benchmarks identifying >90% dead-on-arrival rate.',
    tech: ['Go', 'GPU Architecture', 'Cache Coherence', 'MGPUsim'],
    metrics: ['32% miss reduction', '80% hit rate', '>90% DOA rate'],
  },
  {
    title: 'Parallel Sparse Tensor Decomposition',
    description: 'Parallelised Tucker decomposition on sparse tensors (CSF format) using C++/OpenMP. Reduced complexity from O(n^5) to O(n^4) via intermediate buffering. Benchmarked 7 parallel algorithms across 3 modes.',
    tech: ['C++', 'OpenMP', 'HPC', 'Sparse Tensors'],
    metrics: ['O(n^5) → O(n^4)', '2.87x speedup', '7 algorithms'],
  },
  {
    title: 'Custom Zip Library (Rust/WASM)',
    description: 'Reduced client-side memory footprint by 80% for in-browser zip operations using Rust/WebAssembly with OPFS streaming, enabling large file processing without browser tab crashes.',
    tech: ['Rust', 'WebAssembly', 'OPFS', 'Streaming'],
    metrics: ['80% memory reduction', 'No tab crashes', 'Streaming I/O'],
  },
  {
    title: 'Rituals: Collaborative Habit Tracker',
    description: 'Built collaborative habit tracker with streak tracking and photo proof. Designed peer-to-peer photo recovery where devices detect broken links via Firestore listeners and re-upload from local cache.',
    tech: ['TypeScript', 'React Native', 'Firebase', 'Cloud Functions'],
    metrics: ['P2P recovery', 'Zero server storage', 'Free-tier backend'],
  },
  {
    title: 'browser.security',
    description: 'Showcased at DEF CON with 30+ attacks demonstrating how Secure Web Gateways fail at last-mile reassembly. Covered by Forbes. Sensitized industry to fundamental SWG limitations.',
    tech: ['Security Research', 'Browser Internals', 'DEF CON'],
    metrics: ['30+ attacks', 'DEF CON talk', 'Forbes coverage'],
    link: 'https://browser.security/',
  },
]

const achievements = [
  'Top 1% in JEE Advanced 2021',
  'Knight (1850+) on Leetcode',
  'Students\' General Secretary, IIT Tirupati (elected highest student representative for 2000+ members)',
  'First net-zero financial year through strategic sponsorships despite 25% budget cut',
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`glass rounded-lg p-6 hover:border-terminal-green/30 transition-all duration-500 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-mono text-base font-bold text-terminal-green group-hover:glow-text transition-all">
          {project.title}
        </h3>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener" className="text-text-dim hover:text-terminal-green">
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <p className="text-sm text-text-dim mb-4 leading-relaxed">{project.description}</p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.metrics.map(m => (
          <span key={m} className="px-2 py-0.5 text-xs font-mono text-terminal-amber bg-terminal-amber/10 rounded border border-terminal-amber/20">
            {m}
          </span>
        ))}
      </div>

      {/* Tech */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-0.5 text-xs font-mono text-text-dim">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <h2 className="font-mono text-2xl font-bold text-terminal-green mb-12 flex items-center gap-3">
        <span className="text-text-dim">02.</span> Projects & Achievements
        <span className="flex-1 h-px bg-border ml-4" />
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>

      {/* Achievements */}
      <div className="glass rounded-lg p-6">
        <h3 className="font-mono text-sm font-bold text-terminal-amber mb-4">// achievements</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {achievements.map((a, i) => (
            <div key={i} className="flex gap-2 text-sm">
              <span className="text-terminal-green shrink-0">◆</span>
              <span className="text-text-dim">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
