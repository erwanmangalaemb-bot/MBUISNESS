export default function Hero() {
  return (
    <section id="accueil" className="flex flex-col justify-center min-h-screen px-6 pt-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-xl mx-auto w-full">
        <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'var(--red)' }}>
          MBuisness · Montage vidéo &amp; Création de site
        </p>

        <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'clamp(2.6rem,8vw,4.5rem)' }}>
          Tu tournes.<br />
          <span style={{ color: 'var(--red)' }}>On gère</span><br />
          le reste.
        </h1>

        <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--muted)', maxWidth: 500 }}>
          Montage vidéo professionnel + couche opérationnelle complète + site internet.
          Un système clé en main pour créateurs et établissements francophones.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-white rounded-xl px-8 py-3.5 transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--red)', width: 'fit-content' }}
          >
            Devis gratuit →
          </a>
          <a href="#travaux" className="font-semibold text-sm" style={{ color: 'var(--muted)' }}>
            Voir les travaux
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 mt-12 overflow-hidden rounded-2xl"
          style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
        >
          {[
            { val: '48h', label: 'Délai de livraison garanti' },
            { val: '50+', label: 'Clients accompagnés' },
            { val: '×3', label: 'Audience moyenne en 90j' },
          ].map((s, i) => (
            <div
              key={s.val}
              className="py-7 px-2 text-center"
              style={{ borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}
            >
              <div className="text-2xl font-black" style={{ color: 'var(--red)' }}>{s.val}</div>
              <div className="text-xs mt-1 leading-snug" style={{ color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
