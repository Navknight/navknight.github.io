// Pointer-following glow on .glow cards (drawn by CSS from --mx/--my).
document.querySelectorAll('.glow').forEach((el) => {
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  })
})
