import { ArrowRight, Check } from 'lucide-react'

const BADGES = ['Fast Delivery', 'Mobile-first', 'Firebase hosted', 'No templates']

export default function CTABand() {
  return (
    <section id="cta-band" aria-labelledby="cta-heading" className="py-0 bg-bg">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-10">
        <div className="reveal my-16 bg-ink rounded-[32px] px-10 py-16 text-center relative overflow-hidden cta-noise">
          {/* Radial glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle 400px at 50% 50%, rgba(232,68,10,0.18), transparent 70%)' }}
          />

          <div className="relative z-[2]">
            <h2
              id="cta-heading"
              className="font-hand font-bold text-white leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
            >
              Let's build something<br />
              <em className="not-italic text-accent2">that actually works.</em>
            </h2>
            <p className="text-[16px] text-white/70 mb-9 font-normal">
              Clear. Fast. Conversion-focused. No templates.
            </p>
            <a
              href="https://www.fiverr.com/s/yv09DkV"
              target="_blank" rel="noopener noreferrer"
              className="btn-shimmer bg-accent hover:bg-accent2 text-white text-[16px] px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-accent hover:shadow-accent-lg transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden no-underline mx-auto"
            >
              Get Your Landing Page <ArrowRight size={15} aria-hidden="true" />
            </a>
            <ul className="flex items-center justify-center gap-5 flex-wrap mt-7 list-none" role="list" aria-label="Guarantees">
              {BADGES.map((b) => (
                <li key={b} className="flex items-center gap-1.5 text-[12.5px] text-white/60">
                  <Check size={12} className="text-accent2" aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
