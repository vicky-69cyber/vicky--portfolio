import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

/* ── Thumbnail sub-components ── */
function FlowTrackThumb() {
  return (
    <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1100] h-full flex flex-col items-start justify-center p-7 gap-3.5">
      <div className="font-sans text-[22px] font-extrabold text-[#c9a96e] tracking-[-0.02em]">
        Flow<em className="italic text-[#c9a96e]">Track</em>
      </div>
      <div className="font-sans text-[17px] font-bold text-white leading-[1.25]">
        Know Where Your<br /><em className="italic text-[#c9a96e]">Focus Goes.</em>
      </div>
      <div className="flex gap-5">
        {[['6h 42m','Deep Focus'],['94','Flow Score'],['4.9★','Rating']].map(([v,l]) => (
          <div key={l} className="flex flex-col">
            <strong className="text-[15px] font-bold text-[#c9a96e]">{v}</strong>
            <span className="text-[10px] text-white/50 font-medium tracking-[0.04em] uppercase">{l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function VickyStudioThumb() {
  return (
    <div className="bg-gradient-to-br from-[#faf8f5] to-[#f0ebe2] h-full flex flex-col items-center justify-center p-7 gap-3.5 text-center">
      <div className="font-hand text-[18px] font-bold text-[#1a1a1a]">
        Vicky <span className="text-[#e84e1b]">Studio</span>
      </div>
      <div className="font-sans text-[20px] font-extrabold text-[#1a1a1a] leading-[1.2]">
        Your Website Should<br />Be <em className="italic text-[#e84e1b]">Winning</em> You Customers.
      </div>
      <div className="bg-[#e84e1b] text-white px-4 py-2 rounded-full text-[12px] font-semibold">
        Start a Project →
      </div>
    </div>
  )
}

function EcommerceThumb() {
  return (
    <div className="relative bg-[#ece6dd] h-full">
      <img
        src="/maison-hero.png"
        alt=""
        loading="lazy"
        decoding="async"
        width="400"
        height="220"
        className="w-full h-full object-cover object-[center_top]"
        onError={(e) => { e.target.parentElement.style.background = '#ece6dd' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
    </div>
  )
}

function JJKThumb() {
  return (
    <div
      className="h-full flex flex-col items-center justify-center gap-3 p-7 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0a0005,#1a0030,#0f000a)' }}
    >
      {/* Rings */}
      <div className="absolute w-[160px] h-[160px] border border-purple-500/20 rounded-full top-1/2 left-1/2 animate-[jjk-spin_18s_linear_infinite]"
        style={{ transform: 'translate(-50%,-50%)' }} />
      <div className="absolute w-[110px] h-[110px] border border-fuchsia-400/15 rounded-full top-1/2 left-1/2 animate-[jjk-spin_28s_linear_infinite_reverse]"
        style={{ transform: 'translate(-50%,-50%)' }} />
      {/* Eye */}
      <div className="relative z-[2] animate-jjk-pulse">
        <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" width="72" height="48" aria-hidden="true">
          <path d="M 2 40 Q 60 -12 118 40 Q 60 92 2 40 Z" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.7)" strokeWidth="1.4" />
          <circle cx="60" cy="40" r="24" fill="rgba(14,165,233,0.15)" stroke="rgba(14,165,233,0.8)" strokeWidth="1.2" />
          <circle cx="60" cy="40" r="10" fill="#050010" />
          <circle cx="60" cy="40" r="7" fill="rgba(14,165,233,0.5)" />
          <circle cx="60" cy="40" r="4" fill="#0a0005" />
          <ellipse cx="53" cy="34" rx="4" ry="2.5" fill="rgba(255,255,255,0.7)" transform="rotate(-10,53,34)" />
        </svg>
      </div>
      <div
        className="font-sans text-[13px] font-extrabold tracking-[0.1em] z-[2]"
        style={{ background: 'linear-gradient(135deg,#fff,#e879f9,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
      >
        JUJUTSU KAISEN
      </div>
      <div className="text-[10px] text-purple-500/60 tracking-[0.3em] z-[2]">呪術廻戦</div>
    </div>
  )
}

const CARDS = [
  {
    delay: 'delay-1',
    thumb: <FlowTrackThumb />,
    thumbTag: 'SaaS · Dark UI',
    eyebrow: 'AI SaaS Landing Page',
    name: 'FlowTrack',
    desc: 'Premium SaaS landing page with strong visual hierarchy, gold/black luxury palette. 88 mobile / 99 desktop PageSpeed score.',
    tags: ['HTML/CSS', 'Dark UI', 'SaaS'],
    link: 'https://flowtrack-demo.web.app',
    linkText: 'View Live',
  },
  {
    delay: 'delay-2',
    thumb: <VickyStudioThumb />,
    thumbTag: 'Agency · Light UI',
    eyebrow: 'High-Converting Landing Page',
    name: 'Vicky Studio',
    desc: 'The type of landing page I build for clients — clear structure, strong messaging, designed to convert visitors into customers.',
    tags: ['HTML/CSS', 'Agency', 'EmailJS'],
    link: 'https://vicky-studio.web.app',
    linkText: 'Get One Like This',
  },
  {
    delay: 'delay-3',
    thumb: <EcommerceThumb />,
    thumbTag: 'E-Commerce · Web App',
    eyebrow: 'E-Commerce Frontend',
    name: 'E-Commerce Store',
    desc: 'Responsive storefront focused on clean product presentation, smooth browsing, and a polished shopping flow.',
    tags: ['E-Commerce', 'Responsive', 'Frontend'],
    link: 'https://e-commerce-nine-rho-89.vercel.app/',
    linkText: 'View Live',
  },
  {
    delay: 'delay-4',
    thumb: <JJKThumb />,
    thumbTag: 'Fan Site · Dark UI',
    thumbTagStyle: { background: 'rgba(168,85,247,0.85)', color: '#fff' },
    eyebrow: 'Creative Fan Tribute',
    eyebrowColor: 'text-purple-500',
    name: 'Jujutsu Kaisen Fan Site',
    desc: 'Cinematic dark fan tribute with animated SVG seals, canvas particles, 3D tilt cards, and custom cursors. Pure HTML/CSS/JS — zero dependencies.',
    tags: ['HTML/CSS/JS', 'Canvas', 'Dark UI'],
    link: null,
    linkText: 'Coming Soon',
  },
]

export default function Work() {
  /* Tilt effect */
  useEffect(() => {
    if (!window.matchMedia('(min-width:768px) and (hover:hover)').matches) return
    const cards = document.querySelectorAll('.work-card')
    cards.forEach((card) => {
      card.style.transition = 'transform .15s ease, box-shadow .3s, border-color .3s'
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        card.style.transform = `translateY(-6px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`
      }
      const onLeave = () => { card.style.transform = '' }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
    })
  }, [])

  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 bg-bg">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-12">
          <div className="sec-eyebrow inline-flex items-center gap-2 font-hand text-[16px] font-bold text-accent mb-3 before:content-[''] before:w-7 before:h-0.5 before:bg-accent before:rounded">
            Featured Work
          </div>
          <h2 id="work-heading" className="font-sans font-extrabold text-ink mb-3 tracking-[-0.025em]" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Built to convert.<br />Designed to impress.
          </h2>
          <p className="text-[15.5px] text-ink2 max-w-[480px] leading-[1.65]">
            Four projects, four styles — one goal: turning visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {CARDS.map((card) => (
            <article
              key={card.name}
              className={`work-card reveal ${card.delay} bg-card border border-ink/7 rounded-[24px] overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg hover:border-accent/20`}
            >
              {/* Thumbnail */}
              <div className="relative h-[220px] overflow-hidden">
                {card.thumb}
                <span
                  className="absolute top-3.5 right-3.5 z-[3] bg-white/92 backdrop-blur-[8px] border border-black/8 rounded-full px-3 py-1 text-[11px] font-semibold text-ink2"
                  style={card.thumbTagStyle}
                >
                  {card.thumbTag}
                </span>
              </div>

              {/* Body */}
              <div className="p-7">
                <div className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-2 ${card.eyebrowColor || 'text-accent'}`}>
                  {card.eyebrow}
                </div>
                <h3 className="text-[22px] font-bold text-ink mb-2.5 tracking-[-0.015em">{card.name}</h3>
                <p className="text-[13.5px] text-ink2 leading-[1.7] mb-5 font-normal">{card.desc}</p>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3.5 pt-4 border-t border-ink/7">
                  <ul className="flex gap-1.5 flex-wrap list-none" role="list" aria-label="Technologies used">
                    {card.tags.map((t) => (
                      <li key={t} className="bg-bg2 border border-ink/12 rounded-md px-2.5 py-[3px] text-[11px] text-ink3 font-semibold">{t}</li>
                    ))}
                  </ul>
                  {card.link ? (
                    <a
                      href={card.link}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent no-underline transition-[gap] duration-200 hover:gap-2.5 whitespace-nowrap"
                    >
                      {card.linkText} <ArrowRight size={11} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-[13px] font-semibold text-purple-400/40" aria-label="Coming soon">{card.linkText}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
