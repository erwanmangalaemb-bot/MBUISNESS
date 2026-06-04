import Reveal from './Reveal'

const services = [
  {
    n: '01',
    title: 'Montage vidéo',
    desc: 'Reels, YouTube, TikTok, courts-métrages. Sous-titres, musique, effets. Livré en 48h.',
    tag: '48h',
  },
  {
    n: '02',
    title: 'Création de site web',
    desc: 'Landing page, site vitrine ou portfolio. Design moderne, rapide, converti.',
    tag: 'Web',
  },
  {
    n: '03',
    title: 'Stratégie de contenu',
    desc: 'Plan éditorial, scripts, formats adaptés à chaque plateforme pour maximiser ta portée.',
    tag: 'Growth',
  },
  {
    n: '04',
    title: 'Couche opérationnelle',
    desc: 'Automatisation, CRM, newsletter — le système complet derrière ta marque.',
    tag: 'Ops',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-2xl mx-auto">

        <Reveal>
          <div className="mb-16">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--red)' }}
            >
              Services
            </p>
            <h2
              className="font-black tracking-tight"
              style={{ fontSize: 'clamp(2rem,6vw,3.2rem)', letterSpacing: '-0.03em' }}
            >
              Ce qu&apos;on fait pour toi
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <a
                href="#contact"
                className="group flex items-center justify-between gap-6 py-7 transition-colors"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span
                    className="text-xs font-semibold flex-shrink-0 mt-0.5 tabular-nums"
                    style={{ color: 'var(--muted)' }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <div
                      className="font-semibold text-lg mb-1 transition-colors group-hover:text-white"
                      style={{ letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.85)' }}
                    >
                      {s.title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {s.desc}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="hidden sm:block text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--glass-2)', border: '1px solid var(--border)', color: 'var(--muted)' }}
                  >
                    {s.tag}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:border-white/20 group-hover:translate-x-0.5"
                    style={{ border: '1px solid var(--border)' }}
                  >
                    <svg className="w-3.5 h-3.5 transition-all" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  )
}
