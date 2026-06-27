import { COMPANY, EXPERIENCE_ITEMS } from '../data/experience'
import useInView from '../hooks/useInView'
import Section from './ui/Section'
import AnimatedItem from './ui/AnimatedItem'

export default function Experience() {
  const { ref, visible } = useInView(0.05)

  return (
    <Section id="experience">
      <div ref={ref} className={`mb-8 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex items-baseline gap-3 mb-1 flex-wrap">
          <h2 className="font-sans text-2xl font-bold text-text">Experience</h2>
          <span className="text-[10px] text-text-muted bg-surface-2 px-2 py-0.5 rounded">{COMPANY.period}</span>
        </div>
        <p className="text-xs text-text-secondary">
          {COMPANY.role} at <span className="text-text font-medium">{COMPANY.name}</span>
          <span className="text-text-muted"> — {COMPANY.note}</span>
        </p>
      </div>

      <div>
        {EXPERIENCE_ITEMS.map((item, i) => (
          <AnimatedItem key={i} index={i} className="py-6 border-b border-border/50 last:border-b-0 group">
            <div className="flex items-start gap-3">
              <span className={`text-[10px] font-bold mt-1 ${item.color} opacity-70`}>0{i + 1}</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-text">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mt-1.5">{item.description}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                  {item.tech.map(t => (
                    <span key={t} className="text-[11px] text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </Section>
  )
}
