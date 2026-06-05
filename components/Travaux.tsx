import Reveal from './Reveal'

const items = [
  {
    gradient: 'linear-gradient(140deg, rgba(232,57,28,0.22) 0%, rgba(18,22,31,1) 55%)',
    accentColor: 'rgba(232,57,28,0.8)',
    stat: '×4',
    tag: 'Montage vidéo',
    title: 'Reels Instagram',
    sub: '×4 vues en 60 jours',
    wide: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" opacity="0.9" />
      </svg>
    ),
  },
  {
    gradient: 'linear-gradient(140deg, rgba(59,130,246,0.2) 0%, rgba(18,22,31,1) 55%)',
    accentColor: 'rgba(59,130,246,0.8)',
    stat: '+35%',
    tag: 'Site web',
    title: 'Landing page restaurant',
    sub: '+35% réservations',
    wide: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    gradient: 'linear-gradient(140deg, rgba(16,185,129,0.18) 0%, rgba(18,22,31,1) 55%)',
    accentColor: 'rgba(16,185,129,0.8)',
    stat: '×3',
    tag: 'Stratégie',
    title: '×3 audience organique',
    sub: '90 jours · Zéro pub',
    wide: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    gradient: 'linear-gradient(140deg, rgba(245,158,11,0.18) 0%, rgba(18,22,31,1) 55%)',
    accentColor: 'rgba(245,158,11,0.8)',
    stat: '100%',
    tag: 'Branding',
    title: 'Identité visuelle complète',
    sub: 'Logo · Charte · Supports',
    wide: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
]

export default function Travaux() {
  return (
    <section id="travaux" className="py-28 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-2xl mx-auto">

        <Reveal>
          <div className="flex items-end justify-between mb-14 gap-4 flex-wrap">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>Travaux</p>
              <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(2rem,6vw,3.2rem)', letterSpacing: '-0.03em' }}>
                Réalisations
              </h2>
            </div>
            <a
              href="#contact"
              className="text-xs font-medium px-4 py-2 rounded-full transition-colors hover:text-white"
              style={{ border: '1px solid var(--border)', color: 'var(--muted-2)' }}
            >
              Travailler ensemble →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className={item.wide ? 'col-span-2' : ''}>
              <div
                className="card-hover relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: item.gradient,
                  border: '1px solid var(--border)',
                  aspectRatio: item.wide ? '16/6' : '1',
                }}
              >
                {/* Ghost stat — large background number */}
                <div
                  className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none"
                  aria-hidden="true"
                >
                  <span style={{
                    fontSize: item.wide ? 'clamp(5rem,14vw,9rem)' : 'clamp(4rem,12vw,7rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                    color: 'white',
                    opacity: 0.055,
                    lineHeight: 1,
                  }}>
                    {item.stat}
                  </span>
                </div>

                {/* Top-left icon */}
                <div
                  className="absolute top-5 left-5"
                  style={{ color: item.accentColor, opacity: 0.85 }}
                >
                  {item.icon}
                </div>

                {/* Subtle corner glow matching accent */}
                <div
                  className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${item.accentColor.replace('0.8', '0.12')} 0%, transparent 70%)` }}
                />

                {/* Bottom gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(8,10,16,0.7) 0%, transparent 60%)' }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-5">
                  <div
                    className="inline-block text-xs font-semibold tracking-wider uppercase mb-2 px-2.5 py-0.5 rounded-full"
                    style={{ background: 'var(--red-dim)', color: 'var(--red)', border: '1px solid rgba(232,57,28,0.2)' }}
                  >
                    {item.tag}
                  </div>
                  <div className="font-semibold text-sm" style={{ letterSpacing: '-0.01em' }}>
                    {item.title}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
