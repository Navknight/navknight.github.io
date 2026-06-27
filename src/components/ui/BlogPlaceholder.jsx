const ACCENTS = [
  { color: '#c084fc', glow: 'rgba(192,132,252,0.12)' },
  { color: '#4ade80', glow: 'rgba(74,222,128,0.12)' },
  { color: '#60a5fa', glow: 'rgba(96,165,250,0.12)' },
  { color: '#fb923c', glow: 'rgba(251,146,60,0.12)' },
  { color: '#22d3ee', glow: 'rgba(34,211,238,0.12)' },
  { color: '#f472b6', glow: 'rgba(244,114,182,0.12)' },
  { color: '#facc15', glow: 'rgba(250,204,21,0.12)' },
]

function hash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h
}

export default function BlogPlaceholder({ title = '', className = '' }) {
  const { color, glow } = ACCENTS[hash(title) % ACCENTS.length]
  const initials = title.split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase() ?? '').join('')

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `radial-gradient(ellipse at 30% 60%, ${glow} 0%, var(--color-surface) 70%)` }}
    >
      {/* dot grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, ${color}28 1px, transparent 1px)`,
        backgroundSize: '18px 18px',
      }} />

      {/* corner accent lines */}
      <div className="absolute bottom-0 left-0 h-px w-2/5"
        style={{ background: `linear-gradient(90deg, ${color}70, transparent)` }} />
      <div className="absolute top-0 right-0 w-px h-2/5"
        style={{ background: `linear-gradient(180deg, ${color}70, transparent)` }} />

      {/* SVG initials — scales perfectly at any size */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <text
          x="50" y="68"
          textAnchor="middle"
          fontSize="52"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          letterSpacing="-2"
          fill={color}
          fillOpacity="0.12"
        >
          {initials}
        </text>
      </svg>
    </div>
  )
}
