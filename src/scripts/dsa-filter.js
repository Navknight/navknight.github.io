// Search + difficulty/star chips for the /dsa problem table.
const input = document.getElementById('dsa-filter')
const rows = [...document.querySelectorAll('#dsa-table tbody tr')]
const chips = [...document.querySelectorAll('.chip')]
const count = document.getElementById('dsa-count')
const empty = document.querySelector('.table-wrap .empty')
const text = rows.map((r) => r.textContent.toLowerCase())
let f = ''
const apply = () => {
  const q = input.value.trim().toLowerCase()
  let n = 0
  rows.forEach((r, i) => {
    const ok = text[i].includes(q) && (!f || (f === 'star' ? r.dataset.star : r.dataset.diff === f))
    r.hidden = !ok
    if (ok) n++
  })
  empty.hidden = n > 0
  count.textContent = n === rows.length ? `Showing all ${n} problems` : `Showing ${n} of ${rows.length} problems`
}
chips.forEach((c) => c.addEventListener('click', () => {
  f = c.dataset.f ?? ''
  chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)))
  apply()
}))
input?.addEventListener('input', apply)
