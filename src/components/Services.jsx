import { Layers, Rocket, Gauge, Cloud } from 'lucide-react'

const SERVICES = [
  {
    icon: <Layers size={18} />,
    name: 'Landing Page Design',
    desc: 'Custom-built, conversion-focused landing pages from scratch. No templates. Built to get results.',
    delay: 'delay-1',
  },
  {
    icon: <Rocket size={18} />,
    name: 'SaaS UI Development',
    desc: 'Premium dark UI pages for SaaS products — the kind that make visitors trust your product immediately.',
    delay: 'delay-2',
  },
  {
    icon: <Gauge size={18} />,
    name: 'Performance Optimization',
    desc: 'Fast-loading, mobile-optimized pages with 90+ PageSpeed scores and clean, lightweight code.',
    delay: 'delay-3',
  },
  {
    icon: <Cloud size={18} />,
    name: 'Firebase Deployment',
    desc: 'Full hosting on Firebase — SSL, custom domain config, and deployment so your site goes live fast.',
    delay: 'delay-4',
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 bg-bg">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-10">
          <div className="inline-flex items-center gap-2 font-hand text-[16px] font-bold text-accent mb-3 before:content-[''] before:w-7 before:h-0.5 before:bg-accent before:rounded">
            What I Do
          </div>
          <h2 id="services-heading" className="font-sans font-extrabold text-ink mb-3 tracking-[-0.025em]" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
            Services
          </h2>
          <p className="text-[15.5px] text-ink2 max-w-[480px] leading-[1.65]">
            Every service is built around one outcome — more customers for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className={`srv-line reveal ${s.delay} bg-card border border-ink/7 rounded-[20px] p-8 transition-all duration-300 shadow-card hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(232,68,10,0.1)] hover:border-accent/20 relative overflow-hidden`}
            >
              <div className="w-12 h-12 bg-accent/8 rounded-[12px] flex items-center justify-center text-accent mb-5">
                {s.icon}
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2 tracking-[-0.01em]">{s.name}</h3>
              <p className="text-[13.5px] text-ink2 leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
