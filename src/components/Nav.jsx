import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const LINKS = ['Work', 'Process', 'About', 'Services', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section tracking */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  /* Close drawer on ESC */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const closeDrawer = useCallback(() => setOpen(false), [])

  return (
    <>
      <nav
        id="nav"
        aria-label="Primary navigation"
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 ${
          scrolled ? 'py-3.5 bg-bg/94 backdrop-blur-[18px] shadow-[0_1px_0_rgba(0,0,0,0.07)]' : 'py-5'
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
          <a href="#" className="font-hand text-[26px] font-bold text-ink no-underline tracking-tight" aria-label="Vicky — go to top">
            vicky<em className="text-accent not-italic">.</em>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none" role="list">
            {LINKS.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={`text-[14px] font-medium no-underline tracking-[0.01em] transition-colors duration-200 ${
                    active === l.toLowerCase() ? 'text-accent' : 'text-ink2 hover:text-accent'
                  }`}
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.fiverr.com/s/yv09DkV"
                target="_blank" rel="noopener noreferrer"
                className="bg-accent hover:bg-accent2 text-white px-5 py-[9px] rounded-full text-[13.5px] font-semibold transition-all duration-200 hover:-translate-y-px flex items-center gap-1.5 no-underline"
              >
                Hire Me <ArrowRight size={13} />
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 border border-ink/12 rounded-[10px] bg-card text-ink flex items-center justify-center text-base"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="navDrawer"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/30 z-[905] transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Drawer */}
      <nav
        id="navDrawer"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-card shadow-[-20px_0_60px_rgba(0,0,0,0.12)] z-[910] flex flex-col pt-20 pb-10 px-8 transition-transform duration-[350ms] cubic-bezier-[0.4,0,0.2,1] will-change-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={closeDrawer}
          aria-label="Close navigation menu"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-ink2 text-lg bg-transparent border-none"
        >
          <X size={20} />
        </button>
        <ul role="list" className="list-none flex flex-col gap-6">
          {LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={closeDrawer}
                className="text-[20px] font-hand font-semibold text-ink no-underline hover:text-accent transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <a
            href="https://www.fiverr.com/s/yv09DkV"
            target="_blank" rel="noopener noreferrer"
            onClick={closeDrawer}
            className="bg-accent hover:bg-accent2 text-white w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors no-underline"
          >
            Hire Me <ArrowRight size={14} />
          </a>
        </div>
      </nav>
    </>
  )
}
