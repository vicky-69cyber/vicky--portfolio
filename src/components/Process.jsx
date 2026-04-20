import { MessageCircle, Target, Users, Palette, Layers, Code2, Flame, Lock, Rocket } from 'lucide-react'

const STEPS = [
  {
    num: '01', tag: 'Discovery', title: 'You tell me the goal',
    desc: 'I ask the right questions — target audience, message, what action you want visitors to take. No guesswork.',
    icons: [<MessageCircle size={13} />, <Target size={13} />, <Users size={13} />],
  },
  {
    num: '02', tag: 'Design', title: 'I structure & design',
    desc: 'Layout, hierarchy, colour palette — everything built from scratch for your brand, not a template.',
    icons: [<Layers size={13} />, <Palette size={13} />, <Layers size={13} />],
  },
  {
    num: '03', tag: 'Build', title: 'Clean code, fast output',
    desc: 'Hand-coded HTML/CSS/JS — no WordPress, no bloat. 90+ PageSpeed score is the standard, not the goal.',
    icons: [<Code2 size={13} />, <Code2 size={13} />, <Code2 size={13} />],
  },
  {
    num: '04', tag: 'Launch', title: 'Live in days, not weeks',
    desc: 'Firebase deployment with SSL and custom domain. You get a live URL — not a zip file and a prayer.',
    icons: [<Flame size={13} />, <Lock size={13} />, <Rocket size={13} />],
  },
]

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-24 bg-ink relative overflow-hidden process-noise"
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 15% 50%, rgba(232,68,10,0.1), transparent 70%)' }}
      />

      <div className="max-w-[1140px] mx-auto px-6 lg:px-10 relative z-[2]">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="inline-flex items-center gap-2 font-hand text-[16px] font-bold text-accent2 mb-3 before:content-[''] before:w-7 before:h-0.5 before:bg-accent2 before:rounded">
            How I Work
          </div>
          <h2
            id="process-heading"
            className="font-hand font-bold text-white leading-[1.05] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
          >
            From brief to <em className="not-italic text-accent2">live</em> — fast.
          </h2>
        </div>

        {/* Steps */}
        <ol
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 list-none"
          aria-label="Work process steps"
        >
          {STEPS.map((step, i) => (
            <li
              key={step.num}
              className="process-step grid grid-cols-[72px_1fr] gap-6 items-start py-8 border-b border-white/6 last:border-b-0 md:last:border-b-0 lg:border-b-0 group"
            >
              <div className="font-hand text-[56px] font-bold leading-none text-accent/15 transition-colors duration-300 select-none group-hover:text-accent/50">
                {step.num}
              </div>
              <div className="pt-2">
                <span className="inline-block bg-accent/12 border border-accent/25 rounded-full px-3 py-[3px] text-[11px] font-bold tracking-[0.08em] uppercase text-accent2 mb-2.5">
                  {step.tag}
                </span>
                <h3 className="text-[clamp(18px,2vw,24px)] font-bold text-white tracking-[-0.015em] mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] text-white/68 leading-[1.7] max-w-[520px]">{step.desc}</p>
                <div className="flex gap-2.5 mt-4 flex-wrap">
                  {step.icons.map((icon, j) => (
                    <div
                      key={j}
                      className="w-[34px] h-[34px] bg-white/4 border border-white/8 rounded-[10px] flex items-center justify-center text-white/45 transition-all duration-200 group-hover:bg-accent/8 group-hover:text-accent2"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
