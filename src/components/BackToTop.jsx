import { useEffect, useRef } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const ref = useRef(null)

  useEffect(() => {
    const btn = ref.current
    const onScroll = () => btn.classList.toggle('show', window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      ref={ref}
      href="#"
      id="back-top"
      aria-label="Back to top"
      onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      className="back-top fixed bottom-7 right-7 z-[800] w-11 h-11 rounded-[14px] bg-ink text-white border border-white/10 flex items-center justify-center text-[15px] shadow-[0_8px_28px_rgba(0,0,0,0.25)] hover:bg-accent hover:border-transparent hover:-translate-y-[3px] transition-all duration-200 no-underline"
    >
      <ArrowUp size={15} aria-hidden="true" />
    </a>
  )
}
