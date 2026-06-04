export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative dot-grid flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 text-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(232,57,28,0.1) 0%, transparent 65%)',
          filter: 'blur(1px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%', right: '10%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(100,120,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 text-xs font-medium"
          style={{ background: 'var(--glass-2)', border: '1px solid var(--border-2)', color: 'var(--muted-2)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--red)' }} />
          Montage vidéo · Site web · Stratégie digitale
        </div>

        {/* Headline */}
        <h1
          className="font-black leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem,11vw,7rem)', letterSpacing: '-0.04em' }}
        >
          Tu tournes.
          <br />
          <span className="gradient-text">On gère</span>
          <br />
          le reste.
        </h1>

        {/* Sub */}
        <p
          className="text-base leading-relaxed mb-10 mx-auto"
          style={{ color: 'var(--muted-2)', maxWidth: 460, fontSize: '1.05rem', letterSpacing: '-0.01em' }}
        >
          Un système clé en main pour créateurs et établissements francophones.
          Montage, site, stratégie — livré en&nbsp;48h.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white"
            style={{ background: 'var(--red)' }}
          >
            Devis gratuit →
          </a>
          <a
            href="#travaux"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-colors hover:text-white"
            style={{ border: '1px solid var(--border-2)', color: 'var(--muted-2)' }}
          >
            Voir les travaux
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10 text-xs" style={{ color: 'var(--muted)' }}>
          {['Livraison 48h garantie', 'Sans engagement', 'Réponse sous 24h'].map((t, i) => (
            <span key={t} className="flex items-center gap-1.5">
              {i > 0 && <span className="w-px h-3 inline-block" style={{ background: 'var(--border-2)' }} />}
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Stats — bottom of hero */}
      <div className="relative z-10 w-full max-w-xl mt-20">
        <div
          className="grid grid-cols-3 rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border)', background: 'var(--glass)' }}
        >
          {[
            { val: '48h', label: 'Livraison garantie' },
            { val: '50+', label: 'Clients satisfaits'  },
            { val: '×3',  label: 'Audience en 90 jours'},
          ].map((s, i) => (
            <div
              key={s.val}
              className="py-6 text-center"
              style={{ borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ letterSpacing: '-0.04em', color: 'white' }}
              >
                {s.val}
              </div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
