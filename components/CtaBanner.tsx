import Reveal from './Reveal'
import { Logo } from './Navbar'

export default function CtaBanner() {
  return (
    <section className="px-6 py-6" style={{ background: 'var(--bg)' }}>
      <Reveal>
        <div
          className="relative overflow-hidden rounded-3xl text-center py-20 px-6 mx-auto"
          style={{
            maxWidth: 720,
            background: 'linear-gradient(135deg, #0d1f4a 0%, #1a40a0 50%, #1e4dd8 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.06 }}>
            <Logo size={260} bg="transparent" />
          </div>

          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(232,57,28,0.15) 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Prêt à scaler ?
            </p>
            <h2
              className="font-black tracking-tight mb-8"
              style={{ fontSize: 'clamp(2rem,6vw,3.5rem)', letterSpacing: '-0.04em' }}
            >
              Obtiens ton devis<br />en moins de 24h
            </h2>
            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white"
              style={{ background: 'var(--red)' }}
            >
              Commencer maintenant →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
