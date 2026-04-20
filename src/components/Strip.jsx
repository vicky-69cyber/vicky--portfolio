import { Flame, Zap, Palette, Layers, Gauge, Smartphone, Code2 } from 'lucide-react'

const ITEMS = [
  { icon: <Code2 size={12} />,      label: 'HTML5' },
  { icon: <Layers size={12} />,     label: 'CSS3' },
  { icon: <Code2 size={12} />,      label: 'JavaScript' },
  { icon: <Flame size={12} />,      label: 'Firebase' },
  { icon: <Layers size={12} />,     label: 'React' },
  { icon: <Zap size={12} />,        label: 'Vercel' },
  { icon: <Palette size={12} />,    label: 'Tailwind' },
  { icon: <Layers size={12} />,     label: 'Figma' },
  { icon: <Gauge size={12} />,      label: 'PageSpeed 90+' },
  { icon: <Smartphone size={12} />, label: 'Mobile-First' },
]
const DOUBLED = [...ITEMS, ...ITEMS]

export default function Strip() {
  return (
    <div className="overflow-hidden py-3.5 bg-ink" aria-hidden="true">
      <div className="flex w-max animate-marquee pause-hover">
        {DOUBLED.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-7 text-[12px] font-semibold tracking-[0.1em] uppercase text-white/65 whitespace-nowrap">
            <span className="text-accent2">{item.icon}</span>
            <em className="not-italic text-accent2">{item.label}</em>
            <span className="text-white/25 text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
