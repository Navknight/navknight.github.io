import { SKILLS } from '../data/skills'
import useInView from '../hooks/useInView'
import Section from './ui/Section'

export default function Skills() {
  const { ref, visible } = useInView(0.1)

  return (
    <Section id="skills" compact>
      <div ref={ref}>
        <h2 className="font-sans text-2xl font-bold text-text mb-6">Stack</h2>
        <div className={`space-y-3 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {SKILLS.map((cat, i) => (
            <div
              key={cat.name}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className={`text-[11px] w-24 shrink-0 ${cat.color} font-medium`}>{cat.name}</span>
              <span className="text-xs text-text-secondary">{cat.skills.join(' · ')}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
