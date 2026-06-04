import Reveal from './Reveal'

/*
  Images: Picsum.photos — libre de droits (CC0 / Unsplash licence)
  Seeds déterministes → même image à chaque chargement
  Filtre CSS sombre pour coller au thème
*/
const items = [
  {
    img: 'https://picsum.photos/seed/mbuisness-video/1200/500',
    tag: 'Montage vidéo',
    title: 'Reels Instagram',
    sub: '×4 vues en 60 jours',
    wide: true,
  },
  {
    img: 'https://picsum.photos/seed/mbuisness-resto/600/600',
    tag: 'Site web',
    title: 'Landing page restaurant',
    sub: '+35% réservations',
    wide: false,
  },
  {
    img: 'https://picsum.photos/seed/mbuisness-social/600/600',
    tag: 'Stratégie',
    title: '×3 audience organique',
    sub: '90 jours · Zéro pub',
    wide: false,
  },
  {
    img: 'https://picsum.photos/seed/mbuisness-brand/1200/500',
    tag: 'Branding',
    title: 'Identité visuelle complète',
    sub: 'Logo · Charte · Supports',
    wide: true,
  },
]

const imgFilter = 'brightness(0.35) contrast(1.15) saturate(0.4)'

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
            <Reveal key={item.title} delay={i * 70}>
              <div
                className="img-zoom card-hover relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  gridColumn: item.wide ? 'span 2' : 'span 1',
                  aspectRatio: item.wide ? '16/6' : '1',
                }}
              >
                {/* Photo */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: imgFilter }}
                  loading="lazy"
                />

                {/* Bottom gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(8,10,16,0.95) 0%, rgba(8,10,16,0.3) 50%, transparent 100%)' }}
                />

                {/* Red corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-20"
                  style={{ background: 'radial-gradient(circle at top right, var(--red) 0%, transparent 70%)' }}
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
