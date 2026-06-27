import { useState, useEffect } from 'react'

export default function useTheme() {
  const [isLight, setIsLight] = useState(
    () => document.documentElement.classList.contains('light')
  )

  const toggle = () => {
    const next = !document.documentElement.classList.contains('light')
    document.documentElement.classList.toggle('light', next)
    localStorage.setItem('theme', next ? 'light' : 'dark')
    setIsLight(next)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const handler = (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('light', e.matches)
        setIsLight(e.matches)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return { isLight, toggle }
}
