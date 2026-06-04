import Reveal from './Reveal'

const items = [
  { tag: 'Montage vidéo',  title: 'Reels Instagram',        sub: '×4 vues en 60 jours',        wide: true  },
  { tag: 'Site web',       title: 'Landing page restaurant', sub: '+35% réservations',           wide: false },
  { tag: 'Stratégie',      title: '×3 audience organique',  sub: '90 jours · Zéro pub payante', wide: false },
  { tag: 'Branding',       title: 'Identité visuelle',      sub: 'Logo · Charte · Supports',    wide: false },
]

export default function Travaux() {
  return (
    <section id="travaux" className="py-28 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-2xl mx-auto">

        <Reveal>
          <div className="flex items-end justify-between mb-14 gap-4 flex-wrap">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>
                Travaux
              </p>
              <h2
                className="font-black tracking-tight"
                style={{ fontSize: 'clamp(2rem,6vw,3.2rem)', letterSpacing: '-0.03em' }}
              >
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
            <Reveal key={item.title} delay={i * 80}>
              <div
                className="card-hover relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  gridColumn: item.wide ? 'span 2' : 'span 1',
                  aspectRatio: item.wide ? '16/7' : '1',
                }}
              >
                {/* Subtle inner gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(232,57,28,0.05) 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(8,10,16,0.9) 0%, transparent 50%)' }}
                />

                <div className="absolute bottom-0 left-0 p-5">
                  <div
                    className="inline-block text-xs font-semibold tracking-wider uppercase mb-2 px-2 py-0.5 rounded"
                    style={{ background: 'var(--red-dim)', color: 'var(--red)' }}
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
