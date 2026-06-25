import { useEffect } from 'react'

/**
 * Maps number keys to section IDs for keyboard navigation.
 * @param {Array<{id: string, key: string}>} sections
 */
export default function useKeyboardNav(sections) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      const section = sections.find(s => s.key === e.key)
      if (section) {
        e.preventDefault()
        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [sections])
}
