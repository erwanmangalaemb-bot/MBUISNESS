const services = [
  { icon: '🎬', title: 'Montage vidéo', desc: 'Reels, YouTube, TikTok, courts-métrages — livré en 48h avec sous-titres, musique et effets.' },
  { icon: '🌐', title: 'Création de site web', desc: 'Site vitrine, landing page ou portfolio — design moderne, rapide, optimisé mobile et prêt à convertir.' },
  { icon: '📱', title: 'Stratégie de contenu', desc: "Plan de publication, scripts, formats — on optimise chaque contenu pour maximiser ta portée organique." },
  { icon: '📈', title: 'Couche opérationnelle', desc: 'Automatisation, outils de gestion, newsletter — on met en place le système complet derrière ta marque.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--red)' }}>Services</p>
        <h2 className="font-black leading-tight mb-2" style={{ fontSize: 'clamp(1.8rem,5vw,2.6rem)' }}>
          Ce qu&apos;on fait pour toi
        </h2>
        <p className="mb-10" style={{ color: 'var(--muted)' }}>Tout ce dont tu as besoin pour exister fort sur internet.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-2xl"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <div className="font-bold text-base mb-2">{s.title}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
