/**
 * Central navigation config. Used by Navbar, keyboard nav, and Watermark.
 * To add a new section: add entry here, create component, add to App.jsx render.
 */
export const NAV_SECTIONS = [
  { id: 'about', label: 'about', key: '0', watermark: 'About' },
  { id: 'experience', label: 'work', key: '1', watermark: 'Work' },
  { id: 'skills', label: 'skills', key: '2', watermark: 'Skills' },
  { id: 'projects', label: 'projects', key: '3', watermark: 'Projects' },
  { id: 'interactive', label: 'demos', key: '4', watermark: 'Demos' },
  { id: 'blog', label: 'blog', key: '5', watermark: 'Blog' },
  { id: 'dsa', label: 'dsa', key: '6', watermark: 'DSA' },
  { id: 'contact', label: 'contact', key: '7', watermark: 'Contact' },
]
