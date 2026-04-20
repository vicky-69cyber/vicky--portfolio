import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowRight, Zap, Smartphone, Target, Code2 } from 'lucide-react'
import useTypewriter from '../hooks/useTypewriter'

export default function Hero() {
  const gridRef = useRef(null)
  const tw = useTypewriter()

  /* Parallax on desktop only */
  useEffect(() => {
    const grid = gridRef.current
    if (!grid || !window.matchMedia('(hover: hover)').matches) return
    const hero = document.getElementById('hero')
    let raf
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect()
        const dx = ((e.clientX - r.left) / r.width - 0.5) * 18
        const dy = ((e.clientY - r.top) / r.height - 0.5) * 18
        grid.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`
      })
    }
    const onLeave = () => { grid.style.transform = '' }
    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => { hero.removeEventListener('mousemove', onMove); hero.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="min-h-[100svh] flex items-center pt-[120px] pb-[60px] relative overflow-hidden bg-bg"
    >
      {/* Grid background */}
      <div
        ref={gridRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 transition-transform duration-[100ms] linear"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,68,10,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,68,10,0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 70% 50%, black 30%, transparent 80%)',
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle 600px at 70% 50%, rgba(232,68,10,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1140px] mx-auto px-6 lg:px-10 w-full relative z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px] items-center w-full">

          {/* TEXT — order 2 on mobile, 1 on desktop */}
          <div className="order-2 md:order-1">
            {/* Hi tag */}
            <div className="animate-su1 inline-flex items-center gap-2 font-hand text-[18px] font-bold text-accent mb-3">
              <span className="animate-wave inline-block" style={{ transformOrigin: '70% 70%' }}>👋</span>
              &nbsp;Hi there, I'm
            </div>

            {/* Name */}
            <h1
              id="hero-heading"
              className="animate-su2 font-hand leading-[0.92] font-bold tracking-[-0.02em] text-ink mb-4 relative inline-block"
              style={{ fontSize: 'clamp(52px, 10vw, 110px)' }}
            >
              Vicky<em className="text-accent not-italic block">.</em>
              <svg
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
                className="hero-underline absolute bottom-[-8px] left-0 w-full overflow-visible pointer-events-none"
              >
                <path d="M4,10 Q75,4 150,10 Q225,16 296,10" />
              </svg>
            </h1>

            {/* Typewriter */}
            <p className="animate-su3 inline-flex items-center font-hand text-[20px] font-bold text-accent mb-3.5" aria-label="I build landing pages">
              I build&nbsp;
              <span className="tw-caret pr-[2px] min-w-[2ch]" aria-hidden="true">{tw}</span>
            </p>

            {/* Role */}
            <p className="animate-su4 text-ink2 leading-[1.7] mb-8 max-w-[440px]" style={{ fontSize: 'clamp(14px, 2vw, 17px)' }}>
              Landing pages that convert — for startups and businesses who want{' '}
              <strong className="font-semibold text-ink">more customers</strong>, not just a pretty website.
            </p>

            {/* Buttons */}
            <div className="animate-su5 flex flex-wrap gap-3 mb-10">
              <a
                href="#work"
                className="btn-shimmer bg-accent hover:bg-accent2 text-white px-7 py-[13px] rounded-full text-[14.5px] font-semibold inline-flex items-center gap-2 shadow-accent hover:shadow-accent-lg transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden no-underline"
              >
                <ArrowDown size={14} aria-hidden="true" /> See My Work
              </a>
              <a
                href="https://www.fiverr.com/s/yv09DkV"
                target="_blank" rel="noopener noreferrer"
                className="bg-transparent text-ink border border-ink/12 hover:border-accent hover:text-accent px-6 py-3 rounded-full text-[14.5px] font-medium inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 no-underline"
              >
                Get a Landing Page <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Chips */}
            <ul className="animate-su6 flex flex-wrap gap-2 list-none" role="list" aria-label="Key highlights">
              {[
                { icon: <Zap size={10} className="text-accent" />,        label: 'Fast Delivery' },
                { icon: <Smartphone size={10} className="text-accent" />, label: 'Mobile-First' },
                { icon: <Target size={10} className="text-accent" />,     label: 'Conversion-Focused' },
                { icon: <Code2 size={10} className="text-accent" />,      label: 'HTML/CSS/JS' },
              ].map(({ icon, label }) => (
                <li
                  key={label}
                  className="bg-card border border-ink/12 rounded-full px-3.5 py-1 text-[12px] font-medium text-ink2 shadow-card flex items-center gap-1 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
                >
                  {icon} {label}
                </li>
              ))}
            </ul>
          </div>

          {/* VISUAL — order 1 on mobile, 2 on desktop */}
          <div className="order-1 md:order-2" aria-hidden="true">
            <div className="animate-su-v photo-ring relative w-[min(320px,88vw)] mx-auto md:mx-0">
              {/* Blob accents */}
              <div className="absolute w-[260px] h-[260px] top-[-40px] right-[-40px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(232,68,10,0.18), transparent 70%)' }} />
              <div className="absolute w-[180px] h-[180px] bottom-[-20px] left-[-30px] rounded-full pointer-events-none opacity-60"
                style={{ background: 'radial-gradient(circle, rgba(232,68,10,0.18), transparent 70%)' }} />

              {/* Photo */}
              <div
                className="relative overflow-hidden aspect-square bg-bg3 shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_0_6px_#f4f0ea]"
                style={{ borderRadius: '50% 46% 52% 48%' }}
              >
                <img
                  src="/Profile.jpeg"
                  alt="Vicky — Frontend Developer from Madurai"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  width="320"
                  height="320"
                  className="w-full h-full object-cover object-[center_10%]"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>

              {/* Status badge */}
              <div className="absolute bottom-[-12px] right-[-12px] z-10 bg-ink text-white rounded-2xl px-3.5 py-2.5 text-[11px] font-semibold leading-[1.4] shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center gap-2 animate-float-badge">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] flex-shrink-0 animate-pulse-g" />
                <div>
                  Open to projects<br />
                  <span className="font-normal opacity-70 text-[10px]">Usually replies in &lt;2h</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
