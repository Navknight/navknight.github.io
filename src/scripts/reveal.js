// Staggered scroll reveals for [data-reveal] containers. CSS only hides children
// under html.js (set in <head>) with motion allowed, so no-JS shows everything.
const els = document.querySelectorAll('[data-reveal]')
els.forEach((el) => [...el.children].forEach((c, i) => c.style.setProperty('--i', Math.min(i, 8))))
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
}, { rootMargin: '0px 0px -8% 0px' })
els.forEach((el) => io.observe(el))
