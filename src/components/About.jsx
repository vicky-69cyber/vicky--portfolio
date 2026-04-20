import { ArrowRight, Flame, ShoppingBag, Code2, MapPin } from 'lucide-react'

const META = [
  { icon: <Flame size={14} />,       label: 'Self-taught' },
  { icon: <ShoppingBag size={14} />, label: 'Active on Fiverr' },
  { icon: <Code2 size={14} />,       label: 'HTML · CSS · JS' },
  { icon: <MapPin size={14} />,      label: 'Madurai, TN' },
]

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-bg2 border-t border-b border-ink/7"
    >
      <div className="max-w-[1140px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-[60px] items-center">

          {/* Image column */}
          <div className="reveal relative">
            <div className="relative w-full max-w-[360px] mx-auto block">
              {/* Frame */}
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] max-w-[360px] mx-auto shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
                <img
                  src="/Profile.jpeg"
                  alt="Vicky — Frontend Developer from Madurai, Tamil Nadu"
                  loading="lazy"
                  decoding="async"
                  width="360"
                  height="450"
                  className="w-full h-full object-cover object-[center_15%]"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/8 z-[1]" />

                {/* Available badge */}
                <div className="absolute top-4 left-4 z-[3] inline-flex items-center gap-2 bg-white/95 backdrop-blur-[12px] border border-black/8 rounded-full px-3.5 py-2 text-[11.5px] font-bold text-ink">
                  <div className="w-[7px] h-[7px] rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)] animate-pulse-g" />
                  Available for projects
                </div>
              </div>

              {/* Deco badge */}
              <div className="absolute bottom-[-16px] right-[-16px] w-[120px] h-[120px] bg-accent rounded-[20px] flex items-center justify-center font-hand text-[13px] font-bold text-white text-center leading-[1.3] z-[2] shadow-accent-lg rotate-6">
                4+ live<br />projects<br />
                <em className="not-italic text-white/80 text-[11px]">& counting</em>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="reveal delay-2">
            <div className="inline-flex items-center gap-2 font-hand text-[16px] font-bold text-accent mb-3 before:content-[''] before:w-7 before:h-0.5 before:bg-accent before:rounded">
              About Me
            </div>
            <h2
              id="about-heading"
              className="font-hand font-bold text-ink leading-[1.1] tracking-[-0.01em] mb-5"
              style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}
            >
              Developer who thinks about <span className="text-accent">conversion</span>, not just code.
            </h2>

            <p className="text-[15.5px] text-ink2 leading-[1.85] mb-4">
              I'm Vicky — a self-taught frontend developer from Madurai, Tamil Nadu. I build landing pages that are structured to get results, not just look good.
            </p>
            <p className="text-[15.5px] text-ink2 leading-[1.85] mb-7">
              I focus on how users think, what makes them stay, and what makes them take action. Every element on the page earns its place.
            </p>

            <dl className="grid grid-cols-2 gap-3 mb-7">
              {META.map(({ icon, label }) => (
                <div
                  key={label}
                  className="bg-card border border-ink/7 rounded-[14px] p-4 flex items-center gap-2.5 text-[13px] shadow-card transition-all duration-200 hover:border-accent/25 hover:-translate-y-0.5"
                >
                  <span className="text-accent flex-shrink-0">{icon}</span>
                  <span className="font-semibold text-ink">{label}</span>
                </div>
              ))}
            </dl>

            <a
              href="https://www.fiverr.com/s/yv09DkV"
              target="_blank" rel="noopener noreferrer"
              className="btn-shimmer bg-accent hover:bg-accent2 text-white px-7 py-[13px] rounded-full text-[14.5px] font-semibold inline-flex items-center gap-2 shadow-accent hover:shadow-accent-lg transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden no-underline w-fit"
            >
              Start a Project <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
