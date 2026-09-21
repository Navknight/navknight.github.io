// One fixed giant background word that swaps as [data-word] sections scroll into view.
const big = document.querySelector('.bigword')
const sections = document.querySelectorAll('[data-word]')
if (big && sections.length) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting || big.textContent === e.target.dataset.word) continue
      big.classList.add('swap')
      setTimeout(() => { big.textContent = e.target.dataset.word; big.classList.remove('swap') }, 180)
    }
  }, { rootMargin: '-45% 0px -45% 0px' })
  sections.forEach((s) => io.observe(s))
}
