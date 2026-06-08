import { Logo } from './Navbar'

const nav = [
  { label: 'Services',  href: '#services' },
  { label: 'Travaux',   href: '#travaux'  },
  { label: 'Méthode',   href: '#methode'  },
  { label: 'Contact',   href: '#contact'  },
]

export default function Footer() {
  return (
    <footer className="relative px-6 py-12 overflow-hidden" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="modem-scanline" />
      <div
        className="mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        style={{ maxWidth: 680 }}
      >
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center gap-2 mb-2">
            <Logo size={22} />
            <span className="font-bold text-sm tracking-tight">
              <span style={{ color: 'var(--red)' }}>M</span>Buisness
            </span>
          </a>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Tu crées. On publie. On scale.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs transition-colors hover:text-white"
              style={{ color: 'var(--muted)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Copy + status */}
        <div className="flex flex-col items-start sm:items-end gap-1">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} MBuisness
          </p>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted)' }}>
            <span className="flex items-end gap-0.5" aria-hidden="true">
              {[3, 5, 7].map(h => (
                <span
                  key={h}
                  className="modem-dot rounded-sm"
                  style={{ width: 2.5, height: h, background: '#22c55e', color: '#22c55e' }}
                />
              ))}
            </span>
            Opérationnel
          </div>
        </div>
      </div>
    </footer>
  )
}
