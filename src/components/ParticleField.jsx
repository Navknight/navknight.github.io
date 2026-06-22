import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    let baseSpeed = 0.4
    let speedMultiplier = 1.0
    let workerCount = 6
    let boosted = false

    // Handle viewport resize
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Generator function for parallax buildings loop
    const generateBuildings = (count, minW, maxW, minH, maxH) => {
      const list = []
      let currentX = 0
      for (let i = 0; i < count; i++) {
        const w = Math.random() * (maxW - minW) + minW
        const h = Math.random() * (maxH - minH) + minH
        
        // Generate window coordinates
        const rows = Math.floor(h / 20)
        const cols = Math.floor(w / 16)
        const windows = []
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            if (Math.random() > 0.4) {
              windows.push({ r, c, active: Math.random() > 0.35 })
            }
          }
        }

        list.push({
          x: currentX,
          w,
          h,
          windows,
          isUnderConstruction: Math.random() > 0.7 && count < 20 // Only some foreground/midground structures
        })
        currentX += w + Math.random() * 25
      }
      return { list, totalWidth: currentX }
    }

    const bgLayer = generateBuildings(25, 80, 160, 160, 320)
    const midLayer = generateBuildings(18, 100, 180, 100, 240)
    const fgLayer = generateBuildings(14, 120, 200, 60, 160)

    // Workers state
    let workers = []
    const spawnWorkers = (num) => {
      workers = []
      for (let i = 0; i < num; i++) {
        workers.push({
          x: Math.random() * canvas.width,
          y: 0,
          targetX: Math.random() * canvas.width,
          action: Math.random() > 0.5 ? 'walk' : 'build',
          actionTimer: Math.random() * 120 + 30,
          color: i % 2 === 0 ? '#f59e0b' : '#6366f1',
          size: Math.random() * 2 + 3.5
        })
      }
    }
    spawnWorkers(workerCount)

    // Command listener
    const handleBoost = () => {
      boosted = true
      speedMultiplier = 3.8
      workerCount = 18
      spawnWorkers(18)
    }

    window.addEventListener('performance-boost', handleBoost)
    window.addEventListener('city-speed-boost', handleBoost)

    let bgOffset = 0
    let midOffset = 0
    let fgOffset = 0

    // Grow heights for construction towers
    const constructionProgress = Array(fgLayer.list.length).fill(0).map(() => Math.random() * 60)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const groundY = canvas.height - 40
      const currentSpeed = baseSpeed * speedMultiplier

      // Parallax scrolling updates
      bgOffset = (bgOffset + currentSpeed * 0.2) % bgLayer.totalWidth
      midOffset = (midOffset + currentSpeed * 0.5) % midLayer.totalWidth
      fgOffset = (fgOffset + currentSpeed * 1.0) % fgLayer.totalWidth

      const drawLayer = (layer, offset, verticalOffset, fill, stroke) => {
        let drawX = -offset
        while (drawX < canvas.width) {
          layer.list.forEach((b, idx) => {
            const x = drawX + b.x
            const y = groundY - b.h + verticalOffset

            if (x + b.w > 0 && x < canvas.width) {
              ctx.fillStyle = fill
              ctx.fillRect(x, y, b.w, b.h)
              ctx.strokeStyle = stroke
              ctx.strokeRect(x, y, b.w, b.h)

              // Windows
              b.windows.forEach(w => {
                const wx = x + 8 + w.c * 16
                const wy = y + 10 + w.r * 20
                if (wx + 4 < x + b.w && wy + 6 < y + b.h) {
                  ctx.fillStyle = w.active
                    ? (boosted ? 'rgba(6, 182, 212, 0.4)' : 'rgba(245, 158, 11, 0.25)')
                    : 'rgba(255, 255, 255, 0.02)'
                  ctx.fillRect(wx, wy, 4, 6)
                }
              })
            }
          })
          drawX += layer.totalWidth
        }
      }

      // 1. Draw Background Layer (Slowest)
      drawLayer(bgLayer, bgOffset, -40, 'rgba(99, 102, 241, 0.012)', 'rgba(99, 102, 241, 0.025)')

      // 2. Draw Midground Layer
      drawLayer(midLayer, midOffset, -20, 'rgba(6, 182, 212, 0.02)', 'rgba(6, 182, 212, 0.05)')

      // 3. Draw Foreground Layer (Growing structures, scaffolding, animated cranes)
      let drawX = -fgOffset
      while (drawX < canvas.width) {
        fgLayer.list.forEach((b, idx) => {
          const x = drawX + b.x
          
          if (b.isUnderConstruction) {
            constructionProgress[idx] = (constructionProgress[idx] + currentSpeed * 0.004) % 100
          }
          const currentH = b.isUnderConstruction 
            ? b.h * 0.45 + (b.h * 0.55) * (constructionProgress[idx] / 100)
            : b.h

          const y = groundY - currentH

          if (x + b.w > 0 && x < canvas.width) {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.03)'
            ctx.fillRect(x, y, b.w, currentH)
            ctx.strokeStyle = b.isUnderConstruction ? 'rgba(245, 158, 11, 0.12)' : 'rgba(16, 185, 129, 0.07)'
            ctx.strokeRect(x, y, b.w, currentH)

            if (b.isUnderConstruction) {
              // Scaffold grid overlay
              ctx.strokeStyle = 'rgba(245, 158, 11, 0.05)'
              ctx.lineWidth = 0.5
              for (let sx = x; sx < x + b.w; sx += 20) {
                ctx.beginPath()
                ctx.moveTo(sx, y)
                ctx.lineTo(sx, groundY)
                ctx.stroke()
              }
              for (let sy = y; sy < groundY; sy += 20) {
                ctx.beginPath()
                ctx.moveTo(x, sy)
                ctx.lineTo(x + b.w, sy)
                ctx.stroke()
              }
              ctx.lineWidth = 1

              // Animated crane
              ctx.strokeStyle = 'rgba(245, 158, 11, 0.22)'
              ctx.beginPath()
              ctx.moveTo(x + b.w * 0.7, y)
              ctx.lineTo(x + b.w * 0.7, y - 28)
              const craneAngle = Math.sin(Date.now() * 0.001 * currentSpeed) * 8
              ctx.lineTo(x + b.w * 0.7 + 30, y - 28 + craneAngle * 0.1)
              ctx.moveTo(x + b.w * 0.7, y - 28)
              ctx.lineTo(x + b.w * 0.7 - 12, y - 28)
              ctx.stroke()
              
              // Scaffold pulley line
              ctx.strokeStyle = 'rgba(245, 158, 11, 0.08)'
              ctx.beginPath()
              ctx.moveTo(x + b.w * 0.7 + 24, y - 28)
              ctx.lineTo(x + b.w * 0.7 + 24, y - 8)
              ctx.stroke()
            } else {
              // Standard Windows
              b.windows.forEach(w => {
                const wx = x + 10 + w.c * 16
                const wy = y + 12 + w.r * 22
                if (wx + 4 < x + b.w && wy + 6 < y + currentH) {
                  ctx.fillStyle = w.active ? 'rgba(16, 185, 129, 0.18)' : 'rgba(255, 255, 255, 0.02)'
                  ctx.fillRect(wx, wy, 4, 6)
                }
              })
            }
          }
        })
        drawX += fgLayer.totalWidth
      }

      // Ground Line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
      ctx.beginPath()
      ctx.moveTo(0, groundY)
      ctx.lineTo(canvas.width, groundY)
      ctx.stroke()

      // 4. Animate & Draw Workers
      workers.forEach(w => {
        w.actionTimer -= currentSpeed * 1.2
        if (w.actionTimer <= 0) {
          w.action = Math.random() > 0.4 ? 'walk' : 'build'
          w.targetX = Math.random() * canvas.width
          w.actionTimer = Math.random() * 150 + 50
        }

        if (w.action === 'walk') {
          const dx = w.targetX - w.x
          w.x += Math.sign(dx) * currentSpeed * 0.55
        }

        w.y = groundY - 2

        ctx.fillStyle = w.color
        ctx.beginPath()
        ctx.arc(w.x, w.y - 4, w.size * 0.8, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = w.color
        ctx.lineWidth = 1
        if (w.action === 'walk') {
          const legCycle = Math.sin(Date.now() * 0.01 * currentSpeed) * 3
          ctx.beginPath()
          ctx.moveTo(w.x, w.y - 2)
          ctx.lineTo(w.x - 2 + legCycle * 0.5, w.y + 2)
          ctx.moveTo(w.x, w.y - 2)
          ctx.lineTo(w.x + 2 - legCycle * 0.5, w.y + 2)
          ctx.stroke()
        } else {
          const buildCycle = Math.sin(Date.now() * 0.02 * currentSpeed) * 3
          ctx.beginPath()
          ctx.moveTo(w.x, w.y - 2)
          ctx.lineTo(w.x, w.y + 2)
          ctx.moveTo(w.x, w.y - 4)
          ctx.lineTo(w.x + 3, w.y - 6 + buildCycle)
          ctx.stroke()

          if (Math.random() > 0.8) {
            ctx.fillStyle = '#f59e0b'
            ctx.fillRect(w.x + 4, w.y - 6 + buildCycle, 1.5, 1.5)
          }
        }
      })

      // 5. Draw City Telemetry Overlay (Subtle)
      ctx.fillStyle = boosted ? 'rgba(6, 182, 212, 0.4)' : 'rgba(113, 113, 122, 0.2)'
      ctx.font = 'bold 9px JetBrains Mono'
      ctx.fillText(
        boosted 
          ? `CITY ENGINE: ACTIVE | SPEED: ${speedMultiplier.toFixed(1)}X | BUILDERS: ${workers.length}`
          : `CITY ENGINE: ACTIVE | SPEED: ${speedMultiplier.toFixed(1)}X | BUILDERS: ${workers.length}`,
        24,
        canvas.height - 20
      )

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('performance-boost', handleBoost)
      window.removeEventListener('city-speed-boost', handleBoost)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
    />
  )
}
