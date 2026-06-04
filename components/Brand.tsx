import Reveal from './Reveal'

export default function Brand() {
  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div
            className="relative rounded-3xl overflow-hidden p-10 text-center"
            style={{ border: '1px solid var(--border)', background: 'var(--bg3)' }}
          >
            {/* Subtle glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(232,57,28,0.07) 0%, transparent 70%)' }}
            />

            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: 'var(--muted)' }}>
                Une seule marque. Trois piliers.
              </p>

              {/* Logo */}
              <div className="flex flex-col items-center gap-3 mb-8">
                <svg width="64" height="54" viewBox="0 0 120 100" fill="none">
                  <polygon points="5,100 40,25 75,100" fill="white" />
                  <polygon points="45,100 70,45 95,100" fill="white" />
                  <polygon points="22,100 45,55 55,78 32,100" fill="#12161f" />
                  <polygon points="58,100 72,68 82,88 68,100" fill="#12161f" />
                </svg>
                <span
                  className="font-black italic"
                  style={{ fontSize: 'clamp(2.5rem,8vw,4.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  <span className="gradient-text">M</span>
                  <span>Buisness</span>
                </span>
              </div>

              <p
                className="text-sm italic leading-relaxed max-w-xs mx-auto"
                style={{ color: 'var(--muted-2)' }}
              >
                &ldquo;Le sommet, c&apos;est là où tu veux être.<br />Je suis là pour t&apos;y emmener.&rdquo;
              </p>

              {/* Pillars */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {['Montage vidéo', 'Site web', 'Stratégie digitale'].map((p) => (
                  <span
                    key={p}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
