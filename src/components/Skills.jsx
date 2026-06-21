import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    name: 'Systems & Low-Level',
    icon: '⚙️',
    skills: ['C/C++', 'Rust', 'OpenMP', 'CUDA', 'Chromium', 'WebAssembly'],
  },
  {
    name: 'Languages',
    icon: '💻',
    skills: ['Go', 'Python', 'TypeScript', 'SQL', 'Objective-C'],
  },
  {
    name: 'Backend & Infra',
    icon: '🏗️',
    skills: ['Flask', 'Kafka', 'Docker', 'Linux', 'Distributed Systems'],
  },
  {
    name: 'Databases & Cloud',
    icon: '☁️',
    skills: ['PostgreSQL', 'Redis', 'GCP', 'Firebase', 'BigQuery'],
  },
  {
    name: 'Frontend & Browser',
    icon: '🌐',
    skills: ['React', 'Browser Extensions', 'WebRTC', 'Service Workers'],
  },
  {
    name: 'Security & Auth',
    icon: '🔐',
    skills: ['OIDC', 'DLP', 'Enterprise IDP', 'mTLS', 'Device Trust'],
  },
]

function SkillCategory({ cat, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`glass rounded-lg p-5 transition-all duration-500 hover:border-terminal-green/30 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{cat.icon}</span>
        <h3 className="font-mono text-sm font-bold text-terminal-green">{cat.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map(s => (
          <span key={s} className="px-2 py-1 text-xs font-mono text-text bg-surface-2 rounded border border-border hover:border-terminal-green/30 hover:text-terminal-green transition-colors cursor-default">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <h2 className="font-mono text-2xl font-bold text-terminal-green mb-12 flex items-center gap-3">
        <span className="text-text-dim">03.</span> Skills
        <span className="flex-1 h-px bg-border ml-4" />
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <SkillCategory key={cat.name} cat={cat} index={i} />
        ))}
      </div>
    </section>
  )
}
