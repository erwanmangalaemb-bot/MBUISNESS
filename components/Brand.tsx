export default function Brand() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'var(--bg2)' }}>
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(230,60,30,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <p
          className="text-xs tracking-widest uppercase mb-10 font-semibold"
          style={{ color: 'var(--muted)' }}
        >
          Une seule marque. Trois piliers.
        </p>

        {/* Big logo */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <svg width="90" height="75" viewBox="0 0 120 100" fill="none">
            <polygon points="5,100 40,25 75,100" fill="white" />
            <polygon points="45,100 70,45 95,100" fill="white" />
            <polygon points="22,100 45,55 55,78 32,100" fill="#0f1219" />
            <polygon points="58,100 72,68 82,88 68,100" fill="#0f1219" />
          </svg>
          <div
            className="font-black italic leading-none"
            style={{ fontSize: 'clamp(2.5rem,9vw,5rem)', letterSpacing: '-0.02em' }}
          >
            <span style={{ color: 'var(--red)' }}>M</span>Buisness
          </div>
        </div>

        {/* Quote card — Verdant glass style */}
        <div
          className="inline-block px-6 py-5 rounded-2xl text-sm italic leading-relaxed max-w-sm"
          style={{ background: 'var(--glass)', border: '1px solid var(--border)', color: 'rgba(255,255,255,0.65)' }}
        >
          <span className="text-3xl font-black not-italic mr-1" style={{ color: 'var(--red)', lineHeight: 0 }}>&ldquo;</span>
          Le sommet, c&apos;est là où tu veux être.
          Je suis là pour t&apos;y emmener.
          <span className="text-3xl font-black not-italic ml-1" style={{ color: 'var(--red)', lineHeight: 0 }}>&rdquo;</span>
        </div>

        {/* Pillars */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['Montage vidéo', 'Site web', 'Stratégie digitale'].map((p) => (
            <span
              key={p}
              className="px-4 py-2 rounded-full text-xs font-semibold"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
