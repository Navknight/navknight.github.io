import Section from './ui/Section'

const LINKS = [
  {
    label: 'email',
    value: 'abhi.gupta8802@gmail.com',
    href: 'mailto:abhi.gupta8802@gmail.com',
    color: 'hover:text-accent-orange',
  },
  {
    label: 'github',
    value: 'github.com/Navknight',
    href: 'https://github.com/Navknight',
    color: 'hover:text-accent-green',
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/abhinav-gupta-iitt',
    href: 'https://www.linkedin.com/in/abhinav-gupta-iitt/',
    color: 'hover:text-accent-blue',
  },
]

export default function Contact() {
  return (
    <Section id="contact" compact>
      <h2 className="font-sans text-2xl font-bold text-text mb-2">Contact</h2>
      <p className="text-xs text-text-secondary mb-8">
        Open to work, collaborations, and interesting conversations.
      </p>

      <div className="flex flex-col gap-4">
        {LINKS.map(({ label, value, href, color }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`group flex items-baseline gap-4 transition-colors ${color}`}
          >
            <span className="text-[10px] text-text-muted w-16 shrink-0 font-mono">{label}</span>
            <span className="text-sm text-text-secondary group-hover:text-inherit transition-colors font-mono link-animated">
              {value}
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}
