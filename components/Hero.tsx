import Counter from './Counter'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 text-center overflow-hidden dot-grid"
      style={{ background: 'var(--bg)' }}
    >
      {/* ── Static ambient glow (no GPU animation) ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 15% 20%, rgba(232,57,28,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 85% 80%, rgba(80,100,240,0.07) 0%, transparent 70%)',
      }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-2xl">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-medium"
          style={{ background: 'var(--glass-2)', border: '1px solid var(--border-2)', color: 'var(--muted-2)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--red)' }} />
          Montage vidéo · Site web · Stratégie digitale
        </div>

        <h1
          className="font-black leading-none mb-6"
          style={{ fontSize: 'clamp(3.5rem,11vw,7rem)', letterSpacing: '-0.04em' }}
        >
          Tu tournes.<br />
          <span className="gradient-text">On gère</span><br />
          le reste.
        </h1>

        <p
          className="text-base leading-relaxed mb-10 mx-auto"
          style={{ color: 'var(--muted-2)', maxWidth: 440, letterSpacing: '-0.01em' }}
        >
          Un système <strong className="text-white font-semibold">clé en main</strong> pour créateurs et établissements francophones.
          Montage, site, stratégie — livré en&nbsp;48h.
        </p>

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

        <div className="flex flex-wrap items-center justify-center gap-5 mt-8 text-xs" style={{ color: 'var(--muted)' }}>
          {['Livraison 48h garantie', 'Sans engagement', 'Réponse sous 24h'].map((t, i) => (
            <span key={t} className="flex items-center gap-1.5">
              {i > 0 && <span className="w-px h-3 inline-block" style={{ background: 'var(--border-2)' }} />}
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats with counter animation ── */}
      <div className="relative z-10 w-full max-w-xl mt-16">
        <div
          className="grid grid-cols-3 rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border)', background: 'var(--glass)' }}
        >
          <div className="py-7 text-center" style={{ borderRight: '1px solid var(--border)' }}>
            <div className="text-3xl font-black mb-1" style={{ letterSpacing: '-0.04em' }}>
              48<span style={{ color: 'var(--red)' }}>h</span>
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>Livraison garantie</div>
          </div>
          <div className="py-7 text-center" style={{ borderRight: '1px solid var(--border)' }}>
            <div className="text-3xl font-black mb-1" style={{ letterSpacing: '-0.04em' }}>
              <Counter to={50} suffix="+" />
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>Clients satisfaits</div>
          </div>
          <div className="py-7 text-center">
            <div className="text-3xl font-black mb-1" style={{ letterSpacing: '-0.04em' }}>
              <Counter to={3} prefix="×" />
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>Audience en 90j</div>
          </div>
        </div>
      </div>
    </section>
  )
}
