import { useState } from 'react'
import ZipDemo from './demos/ZipDemo'
import TTMcDemo from './demos/TTMcDemo'
import PrefetchDemo from './demos/PrefetchDemo'

const tabs = [
  { id: 'zip', label: 'WASM Zip', icon: '📦' },
  { id: 'ttmc', label: 'TTMc Multiply', icon: '🧮' },
  { id: 'prefetch', label: 'GPU Prefetch', icon: '⚡' },
]

export default function Interactive() {
  const [active, setActive] = useState('zip')

  return (
    <section id="interactive" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <h2 className="font-mono text-2xl font-bold text-terminal-green mb-4 flex items-center gap-3">
        <span className="text-text-dim">04.</span> Interactive Demos
        <span className="flex-1 h-px bg-border ml-4" />
      </h2>
      <p className="text-text-dim text-sm font-mono mb-8">
        Real algorithms running in your browser. Click around.
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-4 py-2 font-mono text-sm rounded-lg border transition-all whitespace-nowrap ${
              active === t.id
                ? 'bg-accent-glow border-terminal-green text-terminal-green'
                : 'border-border text-text-dim hover:border-terminal-green/30'
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Demo panels */}
      <div className="glass rounded-lg p-6 min-h-[500px]">
        {active === 'zip' && <ZipDemo />}
        {active === 'ttmc' && <TTMcDemo />}
        {active === 'prefetch' && <PrefetchDemo />}
      </div>
    </section>
  )
}
