import { useState, useEffect } from 'react'
import { NAV_SECTIONS } from '../data/navigation'

/**
 * Fixed background watermark that transitions between section labels on scroll.
 * Hidden on mobile (md:block).
 */
export default function Watermark() {
  const [current, setCurrent] = useState(NAV_SECTIONS[0].watermark)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i].id)
        if (el && scrollPos >= el.offsetTop) {
          if (current !== NAV_SECTIONS[i].watermark) {
            setOpacity(0)
            setTimeout(() => {
              setCurrent(NAV_SECTIONS[i].watermark)
              setOpacity(1)
            }, 150)
          }
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [current])

  return (
    <div
      className="fixed left-[-1rem] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 transition-opacity duration-300 hidden md:block"
      style={{ opacity }}
    >
      <span className="font-sans text-[clamp(7rem,16vw,14rem)] font-bold text-watermark leading-none tracking-[-0.05em] whitespace-nowrap">
        {current}
      </span>
    </div>
  )
}
