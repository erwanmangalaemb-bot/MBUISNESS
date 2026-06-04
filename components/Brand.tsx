export default function Brand() {
  return (
    <section id="apropos" className="py-24 px-6 text-center" style={{ background: 'var(--bg)' }}>
      <p className="text-xs tracking-widest uppercase mb-12" style={{ color: 'var(--muted)' }}>
        Une seule marque. Trois piliers.
      </p>

      <div className="flex flex-col items-center gap-4">
        <svg width="110" height="92" viewBox="0 0 120 100" fill="none">
          <polygon points="5,100 40,25 75,100" fill="white" />
          <polygon points="45,100 70,45 95,100" fill="white" />
          <polygon points="22,100 45,55 55,78 32,100" fill="#0b0e17" />
          <polygon points="58,100 72,68 82,88 68,100" fill="#0b0e17" />
        </svg>
        <div className="font-black italic leading-none" style={{ fontSize: 'clamp(2.5rem,9vw,5rem)' }}>
          <span style={{ color: 'var(--red)' }}>M</span>Buisness
        </div>
      </div>

      <p className="mt-10 text-base italic leading-relaxed max-w-sm mx-auto" style={{ color: 'var(--muted)' }}>
        &ldquo;Le sommet, c&apos;est là où tu veux être.<br />Je suis là pour t&apos;y emmener.&rdquo;
      </p>
    </section>
  )
}
