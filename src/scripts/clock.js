// Live IST clock in the footer status bar.
const el = document.getElementById('ist')
if (el) {
  const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const tick = () => { el.textContent = fmt.format(new Date()) }
  tick()
  setInterval(tick, 1000)
}
