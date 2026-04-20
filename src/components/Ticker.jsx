const MSGS = [
  { label: 'Currently building', value: 'Next.js portfolio migration' },
  { label: 'Stack',               value: 'HTML · CSS · JS · Firebase · Vercel' },
  { label: 'Available for',       value: 'Landing pages, SaaS UIs, Deployments' },
  { label: 'Based in',            value: 'Madurai, Tamil Nadu 🇮🇳' },
  { label: 'Open to',             value: 'Fiverr orders & direct projects' },
  { label: 'Avg delivery',        value: '4 days from brief to live URL' },
  { label: 'Currently learning',  value: 'Next.js 15 · TypeScript · Tailwind' },
]
const DOUBLED = [...MSGS, ...MSGS]

export default function Ticker() {
  return (
    <div aria-hidden="true" className="bg-bg">
      <div className="border-t border-b border-ink/7 py-7 overflow-hidden">
        <div className="flex items-center w-max animate-ticker">
          {DOUBLED.map((m, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 px-9 whitespace-nowrap text-[13.5px] font-medium text-ink2">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              <span className="bg-accent/10 border border-accent/20 rounded-full px-[9px] py-[2px] text-[10px] font-bold text-accent tracking-[0.06em] uppercase">live</span>
              <strong className="text-ink font-bold">{m.label}:</strong>
              {m.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
