const items = [
  { tag: 'Montage vidéo',    title: 'Reels Instagram',          sub: 'Creator francophone — ×4 vues en 60j' },
  { tag: 'Site web',         title: 'Landing page restaurant',   sub: 'Dakar — +35% réservations' },
  { tag: 'Stratégie',        title: '×3 audience organique',    sub: 'En 90 jours · Zéro pub payante' },
  { tag: 'Branding',         title: 'Identité visuelle',        sub: 'Logo · Charte · Supports' },
]

export default function Travaux() {
  return (
    <section id="travaux" className="py-20 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-2xl mx-auto">

        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
              style={{ background: 'var(--red-dim)', color: 'var(--red)' }}
            >
              Travaux
            </span>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.8rem,5vw,2.8rem)' }}>
              Quelques réalisations
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-full transition-colors hover:text-white"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
          >
            Voir tout →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                aspectRatio: i === 0 ? '16/10' : '4/3',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,12,19,0.95) 0%, transparent 60%)' }}
              />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'radial-gradient(circle at center, rgba(230,60,30,0.08) 0%, transparent 70%)' }}
              />

              <div className="absolute bottom-0 left-0 p-5">
                <div
                  className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wider uppercase mb-2"
                  style={{ background: 'var(--red-dim)', color: 'var(--red)' }}
                >
                  {item.tag}
                </div>
                <div className="font-bold text-base">{item.title}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
