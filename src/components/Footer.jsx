import { Mail, ShoppingBag, Linkedin, ExternalLink } from 'lucide-react'

const LINKS = [
  { href: 'mailto:hello.vickystudio@gmail.com', icon: <Mail size={13} />,          label: 'Email',        external: false },
  { href: 'https://www.fiverr.com/s/yv09DkV',   icon: <ShoppingBag size={13} />,   label: 'Fiverr',       external: true  },
  { href: 'https://www.linkedin.com/in/vicky-k03', icon: <Linkedin size={13} />,   label: 'LinkedIn',     external: true  },
  { href: 'https://vicky-studio.web.app',         icon: <ExternalLink size={13} />, label: 'Vicky Studio', external: true  },
]

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-ink border-t border-white/6 py-9">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <a
            href="#"
            className="font-hand text-[28px] font-bold text-white no-underline"
            aria-label="Vicky — back to top"
          >
            vicky<em className="text-accent2 not-italic">.</em>
          </a>

          <nav aria-label="Footer links">
            <div className="flex flex-wrap justify-center gap-2">
              {LINKS.map(({ href, icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-[7px] text-[13px] text-white/55 no-underline px-3.5 py-2 rounded-full border border-white/10 transition-all duration-200 hover:text-white/90 hover:border-white/25"
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </nav>

          <p className="text-[12px] text-white/30">© 2026 · Built by Vicky</p>
        </div>
      </div>
    </footer>
  )
}
