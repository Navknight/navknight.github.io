import { PROJECTS } from '../data/projects'
import Section from './ui/Section'
import AnimatedItem from './ui/AnimatedItem'

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="font-sans text-2xl font-bold text-text mb-8">Projects & Research</h2>
      <div>
        {PROJECTS.map((project, i) => (
          <AnimatedItem key={i} index={i} className="py-6 border-b border-border/50 last:border-b-0 group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-sm font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className={`text-[10px] font-medium ${project.color}`}>{project.stat}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mt-1.5 max-w-lg">{project.description}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                  {project.tech.map(t => (
                    <span key={t} className="text-[11px] text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 shrink-0 pt-0.5">
                {project.demoLink && (
                  <a href={project.demoLink} className="text-[11px] text-text-muted hover:text-accent-green link-animated transition-colors">demo</a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[11px] text-text-muted hover:text-text link-animated transition-colors">src</a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[11px] text-text-muted hover:text-accent-orange link-animated transition-colors">site</a>
                )}
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </Section>
  )
}
