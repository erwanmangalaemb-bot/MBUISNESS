const cols = [
  {
    title: 'Liens',
    links: [
      { href: '#accueil',  label: 'Accueil' },
      { href: '#services', label: 'Services' },
      { href: '#travaux',  label: 'Travaux' },
      { href: '#methode',  label: 'Méthode' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '#services', label: 'Montage vidéo' },
      { href: '#services', label: 'Site web' },
      { href: '#services', label: 'Stratégie' },
      { href: '#services', label: 'Couche opé.' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: '#contact', label: 'Nous écrire' },
      { href: '#contact', label: 'Devis gratuit' },
      { href: '#contact', label: 'WhatsApp' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="px-6 pt-14 pb-8" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-2xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <svg width="24" height="20" viewBox="0 0 48 40" fill="none">
                <polygon points="2,40 16,10 30,40" fill="white" />
                <polygon points="18,40 28,18 38,40" fill="white" />
                <polygon points="10,40 18,24 22,32 14,40" fill="#0f1219" />
                <polygon points="24,40 30,28 34,36 28,40" fill="#0f1219" />
              </svg>
              <span className="font-extrabold">
                <span style={{ color: 'var(--red)' }}>M</span>Buisness
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              Tu crées.<br />On publie.<br />On scale.
            </p>
          </div>

          {/* Nav cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--muted)' }}>
                {col.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} MBuisness. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
            Tous systèmes opérationnels
          </div>
        </div>
      </div>
    </footer>
  )
}
