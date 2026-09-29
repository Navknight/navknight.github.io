// Live IST time in the header, so visitors know when I am awake.
const el = document.getElementById('ist')
if (el) {
  const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })
  const tick = () => { el.textContent = `${fmt.format(new Date())} IST` }
  tick()
  setInterval(tick, 15000)
}
