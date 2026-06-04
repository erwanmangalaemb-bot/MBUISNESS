export default function CtaBanner() {
  return (
    <section
      className="py-20 px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0f1a3a 0%,#1a3a8a 40%,#2563eb 100%)' }}
    >
      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <svg width="400" height="330" viewBox="0 0 120 100" fill="none">
          <polygon points="5,100 40,25 75,100" fill="white" />
          <polygon points="45,100 70,45 95,100" fill="white" />
          <polygon points="22,100 45,55 55,78 32,100" fill="#1a3a8a" />
          <polygon points="58,100 72,68 82,88 68,100" fill="#1a3a8a" />
        </svg>
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
          style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)' }}
        >
          Prêt à scaler ?
        </span>
        <h2 className="font-black leading-tight mb-8" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
          Obtiens ton devis<br />
          <em className="italic" style={{ color: 'rgba(255,255,255,0.8)' }}>en moins de 24h</em>
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-all hover:-translate-y-0.5 glow-pulse"
          style={{ background: 'var(--red)' }}
        >
          Je veux un devis gratuit →
        </a>
        <div className="flex justify-center flex-wrap gap-4 mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {['Sans engagement', 'Réponse sous 24h', 'Livraison 48h'].map(t => (
            <span key={t} className="flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
