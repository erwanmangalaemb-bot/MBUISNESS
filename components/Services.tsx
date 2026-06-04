const services = [
  { n: '01', title: 'Montage vidéo',         desc: 'Reels, YouTube, TikTok, courts-métrages — livré en 48h avec sous-titres, musique et effets.' },
  { n: '02', title: 'Création de site web',   desc: 'Site vitrine, landing page ou portfolio — design moderne, rapide, optimisé mobile et prêt à convertir.' },
  { n: '03', title: 'Stratégie de contenu',   desc: 'Plan de publication, scripts, formats — on optimise chaque contenu pour maximiser ta portée organique.' },
  { n: '04', title: 'Couche opérationnelle',  desc: 'Automatisation, outils de gestion, newsletter — le système complet derrière ta marque.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-2xl mx-auto">

        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
              style={{ background: 'var(--red-dim)', color: 'var(--red)' }}
            >
              Nos services
            </span>
            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.8rem,5vw,2.8rem)' }}>
              Ce qu&apos;on fait<br />pour toi
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--muted)' }}>
            Tout ce dont tu as besoin pour exister fort sur internet.
          </p>
        </div>

        {/* Creatix-style numbered list */}
        <div className="flex flex-col">
          {services.map((s, i) => (
            <a
              key={s.n}
              href="#contact"
              className="group flex items-center justify-between gap-4 py-6 transition-all"
              style={{
                borderTop: '1px solid var(--border)',
                borderBottom: i === services.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div className="flex items-start gap-5 flex-1 min-w-0">
                <span className="text-xs font-bold flex-shrink-0 pt-0.5" style={{ color: 'var(--red)' }}>{s.n}</span>
                <div>
                  <div className="font-bold text-lg mb-1 group-hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {s.title}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</div>
                </div>
              </div>
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              >
                <svg className="w-4 h-4 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
