import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Don't run on touch/mobile
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0, raf = null

    const move = (e) => {
      mouseX = e.clientX; mouseY = e.clientY
      if (!raf) {
        raf = requestAnimationFrame(() => {
          const t = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
          dot.style.transform = t
          ring.style.transform = t
          raf = null
        })
      }
    }

    const addHover  = () => ring.classList.add('!w-11', '!h-11', '!bg-accent/10', '!border-accent/60')
    const rmHover   = () => ring.classList.remove('!w-11', '!h-11', '!bg-accent/10', '!border-accent/60')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', rmHover)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] will-change-transform"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="hidden md:block fixed top-0 left-0 w-7 h-7 border border-accent/45 rounded-full pointer-events-none z-[9998] will-change-transform transition-[width,height,background,border-color] duration-200"
      />
    </>
  )
}
