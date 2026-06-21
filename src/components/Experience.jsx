import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Zscaler (via SquareX acquisition)',
    period: 'Jan 2025 - Present',
    bullets: [
      'Architected multi-tenant enterprise backend handling policy evaluation, cloud storage, and user management for 50+ enterprise customers',
      'Engineered policy-driven cloud upload system intercepting browser downloads, routing files to enterprise storage (GDrive, OneDrive, Box) based on DLP policies',
      'Developed Chromium browser fork with 5000+ lines of C++/Objective-C: device posture APIs, certificate stores, code signing, AV detection for Windows and macOS',
      'Built custom OIDC identity provider enabling SquareX as second auth factor via enterprise IDP integrations with Kafka hot-reloading across 50+ tenants',
      'Implemented browser extension security engine: real-time DLP content masking across 6 site-specific processors, encrypted WebSocket communication, device trust evaluation',
      'Delivered enterprise admin dashboard end-to-end (700+ commits): policy management, deployment scripts for 7 MDMs x 8 browsers x 3 OSes, RBAC',
      'Spearheaded browser.security — showcased at DEF CON with 30+ attacks bypassing Secure Web Gateways, covered by Forbes',
    ],
    tech: ['C++', 'Go', 'Python', 'TypeScript', 'React', 'Kafka', 'PostgreSQL', 'GCP'],
  },
]

function TimelineItem({ exp, index }) {
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
      className={`relative pl-8 pb-12 border-l border-border transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-terminal-green border-4 border-bg" />

      <div className="glass rounded-lg p-6 hover:border-terminal-green/30 transition-colors">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
          <h3 className="font-mono text-lg font-bold text-terminal-green">{exp.role}</h3>
          <span className="font-mono text-xs text-text-dim">{exp.period}</span>
        </div>
        <p className="text-text-dim font-mono text-sm mb-4">{exp.company}</p>

        <ul className="space-y-2 mb-4">
          {exp.bullets.map((b, i) => (
            <li key={i} className="text-sm text-text flex gap-2">
              <span className="text-terminal-green shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map(t => (
            <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-accent-glow text-terminal-green border border-terminal-green/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <h2 className="font-mono text-2xl font-bold text-terminal-green mb-12 flex items-center gap-3">
        <span className="text-text-dim">01.</span> Experience
        <span className="flex-1 h-px bg-border ml-4" />
      </h2>

      <div className="ml-4">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
