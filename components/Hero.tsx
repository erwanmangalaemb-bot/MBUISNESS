export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative noise flex flex-col justify-center min-h-screen px-6 pt-28 pb-16 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(230,60,30,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative z-10 max-w-xl mx-auto w-full text-center md:text-left">

        {/* Announcement pill — Verdant style */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold"
          style={{ background: 'var(--glass)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--red)' }} />
          Devis gratuit · Livraison 48h garantie
        </div>

        {/* Headline — Creatiwise ultra-bold + Verdant italic accent */}
        <h1
          className="font-black leading-none mb-6 tracking-tight"
          style={{ fontSize: 'clamp(3rem,10vw,5.5rem)' }}
        >
          Tu tournes.<br />
          <em className="not-italic" style={{ color: 'var(--red)', fontStyle: 'italic' }}>On gère</em><br />
          le reste.
        </h1>

        <p className="text-base leading-relaxed mb-8 md:mb-10" style={{ color: 'var(--muted)', maxWidth: 440 }}>
          Montage vidéo professionnel + couche opérationnelle + site internet.
          Un système <strong className="text-white font-semibold">clé en main</strong> pour créateurs et établissements francophones.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 mb-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-white text-base transition-all hover:-translate-y-0.5 glow-pulse"
            style={{ background: 'var(--red)', minWidth: 200 }}
          >
            Devis gratuit →
          </a>
          <a
            href="#travaux"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all hover:text-white"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)', minWidth: 180 }}
          >
            Voir les travaux ↗
          </a>
        </div>

        {/* Trust badges — Verdant style */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-xs" style={{ color: 'var(--muted)' }}>
          {['Livraison 48h', 'Sans engagement', 'Devis en 24h'].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--red)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Stats — GreenSpace bordered cards */}
      <div className="relative z-10 max-w-xl mx-auto w-full mt-16">
        <div className="grid grid-cols-3 gap-3">
          {[
            { val: '48h', label: 'Livraison garantie' },
            { val: '50+', label: 'Clients satisfaits' },
            { val: '×3',  label: 'Audience en 90j' },
          ].map((s) => (
            <div
              key={s.val}
              className="rounded-2xl p-4 text-center transition-transform hover:-translate-y-0.5"
              style={{ border: '1px solid var(--border)', background: 'var(--glass)' }}
            >
              <div className="text-2xl font-black mb-1" style={{ color: 'var(--red)' }}>{s.val}</div>
              <div className="text-xs leading-snug" style={{ color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
