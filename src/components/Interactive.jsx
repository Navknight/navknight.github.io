import { useState } from 'react'
import useInView from '../hooks/useInView'
import Section from './ui/Section'
import ZipDemo from './demos/ZipDemo'
import TTMcDemo from './demos/TTMcDemo'
import PrefetchDemo from './demos/PrefetchDemo'

const TABS = [
  { id: 'zip', label: 'WASM Zip' },
  { id: 'ttmc', label: 'TTMc' },
  { id: 'prefetch', label: 'DAP Prefetch' },
]

export default function Interactive() {
  const [active, setActive] = useState('zip')
  const { ref, visible } = useInView(0.05)

  return (
    <Section id="interactive">
      <div ref={ref} className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="font-sans text-2xl font-bold text-text mb-2">Interactive Demos</h2>
        <p className="text-xs text-text-secondary mb-8 max-w-lg">
          Live visualizations from research. TTMc: parallel sparse tensor decomposition (C++/OpenMP).
          DAP: GPU cache prefetching as built in MGPUsim (Go).
        </p>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-border">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative text-xs px-4 py-2.5 transition-all duration-200 -mb-px ${
                active === t.id
                  ? 'text-text border-b-2 border-current font-medium'
                  : 'text-text-muted hover:text-text-secondary border-b-2 border-transparent'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Demo panel — translucent, fixed height */}
        <div className="panel-translucent rounded-lg p-4 sm:p-6 md:p-8 h-[400px] sm:h-[500px] overflow-y-auto shadow-2xl shadow-black/30">
          {active === 'zip' && <ZipDemo />}
          {active === 'ttmc' && <TTMcDemo />}
          {active === 'prefetch' && <PrefetchDemo />}
        </div>
      </div>
    </Section>
  )
}
