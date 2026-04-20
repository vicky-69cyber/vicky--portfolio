import { Flame, Zap, Palette, Layers, Wind, Mail, Cloud, Database, Code2, Globe } from 'lucide-react'

const TIERS = [
  {
    label: 'Core',
    pills: [
      { icon: <Code2 size={15} />, label: 'HTML5' },
      { icon: <Layers size={15} />, label: 'CSS3' },
      { icon: <Code2 size={15} />, label: 'JavaScript' },
      { icon: <Flame size={15} />, label: 'Firebase' },
    ],
  },
  {
    label: 'Tooling',
    pills: [
      { icon: <Layers size={15} />, label: 'React' },
      { icon: <Wind size={15} />, label: 'Tailwind' },
      { icon: <Code2 size={15} />, label: 'Python' },
      { icon: <Mail size={15} />, label: 'EmailJS' },
      { icon: <Cloud size={15} />, label: 'Cloudflare' },
      { icon: <Zap size={15} />, label: 'Vercel' },
      { icon: <Palette size={15} />, label: 'Figma' },
    ],
  },
  {
    label: 'Learning now',
    pills: [
      { icon: <Globe size={15} />, label: 'Next.js 15' },
      { icon: <Code2 size={15} />, label: 'TypeScript' },
      { icon: <Database size={15} />, label: 'MySQL' },
    ],
  },
]

export default function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="py-24 bg-bg2 border-t border-ink/7 relative overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-14 md:gap-[60px] items-center">

          {/* Text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 font-hand text-[16px] font-bold text-accent mb-3 before:content-[''] before:w-7 before:h-0.5 before:bg-accent before:rounded">
              My Stack
            </div>
            <h2 id="stack-heading" className="font-sans font-extrabold text-ink mb-5 tracking-[-0.025em]" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
              Tools I actually use.
            </h2>
            <p className="text-[15.5px] text-ink2 leading-[1.75] max-w-[440px]">
              No buzzword padding. This is the real stack — what I reach for on every project, and what I'm learning right now.
            </p>
          </div>

          {/* Pills */}
          <div className="reveal delay-2 flex flex-col gap-4" aria-label="Technology stack">
            {TIERS.map((tier) => (
              <div key={tier.label}>
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-ink3 mb-2">{tier.label}</div>
                <div className="flex flex-wrap gap-2.5">
                  {tier.pills.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="s-pill inline-flex items-center gap-[9px] bg-card border border-ink/12 rounded-full px-[18px] py-2.5 text-[13px] font-semibold text-ink2 shadow-card transition-all duration-200 hover:text-white hover:border-transparent hover:-translate-y-[3px] hover:scale-[1.04] hover:shadow-accent-lg relative overflow-hidden"
                    >
                      <span className="s-pill-inner text-accent transition-colors duration-200">{icon}</span>
                      <span className="s-pill-inner">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
