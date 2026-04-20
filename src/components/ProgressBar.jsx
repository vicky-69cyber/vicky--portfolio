import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const onScroll = () => {
      const d = document.documentElement
      const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100
      el.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-hidden="true"
      className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-accent to-accent2 z-[9999] shadow-[0_0_10px_#ff6b35] transition-[width] duration-[80ms] linear will-change-[width]"
      style={{ width: '0%' }}
    />
  )
}
