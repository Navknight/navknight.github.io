import { useState } from 'react'
import { FolderArchive, Activity, Cpu } from 'lucide-react'
import ZipDemo from './demos/ZipDemo'
import TTMcDemo from './demos/TTMcDemo'
import PrefetchDemo from './demos/PrefetchDemo'

const tabs = [
  { id: 'zip', label: 'WASM Zip Creator', icon: FolderArchive, color: 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/35' },
  { id: 'ttmc', label: 'Tensor Contraction Sim', icon: Activity, color: 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/35' },
  { id: 'prefetch', label: 'GPU L1/L2 Prefetcher', icon: Cpu, color: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/35' },
]

export default function Interactive() {
  const [active, setActive] = useState('zip')

  return (
    <section id="interactive" className="section-container relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-indigo/5 rounded-full blur-[160px] pointer-events-none" />

      <h2 className="font-mono text-xl font-bold text-accent-indigo mb-3 flex items-center gap-3">
        <span className="text-text-muted text-sm">04.</span> Interactive Demos
        <span className="flex-1 h-px bg-border" />
      </h2>
      <p className="text-text-secondary text-sm mb-10 max-w-xl">
        Visualizing low-level system execution. Toggle the modules below to inspect parallel computation speeds, memory cycles, and streaming client-side file compression.
      </p>

      {/* Segmented Control Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white/5 border border-white/5 rounded-2xl w-fit">
        {tabs.map(t => {
          const Icon = t.icon
          const isActive = active === t.id
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 font-mono text-xs rounded-xl transition-all duration-300 ${
                isActive
                  ? `${t.color} font-bold shadow-md shadow-black/10`
                  : 'text-text-secondary hover:text-text border border-transparent hover:bg-white/5'
              }`}
            >
              <Icon size={14} className={isActive ? '' : 'text-text-muted'} />
              {t.label}
            </button>
          )
        })}
      </div>

      {/* Main Demo Dashboard Container */}
      <div className="glass rounded-2xl p-6 md:p-8 min-h-[500px] flex flex-col justify-between">
        {active === 'zip' && <ZipDemo />}
        {active === 'ttmc' && <TTMcDemo />}
        {active === 'prefetch' && <PrefetchDemo />}
      </div>
    </section>
  )
}
