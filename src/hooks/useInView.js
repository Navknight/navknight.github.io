import { useEffect, useRef, useState } from 'react'

/**
 * Triggers once when element enters viewport.
 * @param {number} threshold - 0 to 1, how much of element must be visible
 * @returns {{ ref, visible }}
 */
export default function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}
