import { useEffect, useRef } from 'react'

export function DesktopPet() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const size = 120
    let x = Math.random() * Math.max(1, window.innerWidth - size)
    let y = Math.random() * Math.max(1, window.innerHeight - size)
    let vx = 1.4
    let vy = 1.1
    let raf: number

    const tick = () => {
      const maxX = window.innerWidth - size
      const maxY = window.innerHeight - size
      x += vx
      y += vy
      if (x <= 0 || x >= maxX) {
        vx *= -1
        x = Math.max(0, Math.min(x, maxX))
      }
      if (y <= 0 || y >= maxY) {
        vy *= -1
        y = Math.max(0, Math.min(y, maxY))
      }
      el.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return <div ref={ref} className="desktop-pet" aria-hidden="true" />
}
