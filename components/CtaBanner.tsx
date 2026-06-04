export default function CtaBanner() {
  return (
    <section
      className="py-20 px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#1a3a8a 0%,#2563eb 50%,#1d4ed8 100%)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <polygon points="50,300 160,80 270,300" fill="white" />
          <polygon points="160,300 240,140 320,300" fill="white" />
        </svg>
      </div>
      <div className="relative z-10">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Prêt à scaler ?
        </p>
        <h2 className="font-black leading-tight mb-8" style={{ fontSize: 'clamp(1.8rem,5vw,2.8rem)' }}>
          Obtiens ton devis<br />en moins de 24h
        </h2>
        <a
          href="#contact"
          className="inline-block font-bold text-white rounded-xl px-8 py-4 text-base transition-transform hover:-translate-y-0.5"
          style={{ background: 'var(--red)' }}
        >
          Je veux un devis gratuit
        </a>
      </div>
    </section>
  )
}
