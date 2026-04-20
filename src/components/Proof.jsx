import useCounter from '../hooks/useCounter'

function StatBox({ children, delay }) {
  return (
    <div className={`proof-line reveal delay-${delay} bg-card border border-ink/7 rounded-[20px] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-accent-lg hover:border-accent/20 relative overflow-hidden`}>
      {children}
    </div>
  )
}

function AnimatedNum({ target, suffix }) {
  const [count, ref] = useCounter(target)
  return (
    <div ref={ref} className="font-hand text-[52px] font-bold text-ink leading-none mb-1 tracking-[-0.02em]">
      {count}<span className="text-accent">{suffix}</span>
    </div>
  )
}

export default function Proof() {
  return (
    <section id="proof" aria-label="Key metrics" className="py-16 border-b border-ink/7">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <StatBox delay="1">
            <AnimatedNum target={90} suffix="+" />
            <div className="text-[13px] text-ink3 font-semibold">PageSpeed Score</div>
          </StatBox>

          <StatBox delay="2">
            <div className="font-hand text-[52px] font-bold text-ink leading-none mb-1 tracking-[-0.02em]">
              4<span className="text-accent">d</span>
            </div>
            <div className="text-[13px] text-ink3 font-semibold">Avg. Delivery</div>
          </StatBox>

          <StatBox delay="3">
            <AnimatedNum target={4} suffix="+" />
            <div className="text-[13px] text-ink3 font-semibold">Live Projects</div>
          </StatBox>

          <StatBox delay="4">
            <div className="font-hand text-[52px] font-bold text-ink leading-none mb-1 tracking-[-0.02em]">
              &lt;2<span className="text-accent">h</span>
            </div>
            <div className="text-[13px] text-ink3 font-semibold">Avg. Response Time</div>
          </StatBox>
        </div>
      </div>
    </section>
  )
}
