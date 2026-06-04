'use client'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-lg mx-auto">

        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>
              Contact
            </p>
            <h2
              className="font-black tracking-tight mb-3"
              style={{ fontSize: 'clamp(2rem,6vw,3.2rem)', letterSpacing: '-0.03em' }}
            >
              Parlons de ton projet
            </h2>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Répond sous 24h · Sans engagement
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              {['Prénom', 'Nom'].map((label) => (
                <div key={label}>
                  <input
                    type="text"
                    placeholder={label}
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white outline-none transition-all"
                    style={{
                      background: 'var(--bg3)',
                      border: '1px solid var(--border)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--border-2)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              ))}
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3.5 rounded-xl text-sm text-white outline-none transition-all"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              onFocus={e => (e.target.style.borderColor = 'var(--border-2)')}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />

            <textarea
              rows={4}
              placeholder="Décris ton projet — montage vidéo, site web, stratégie..."
              className="w-full px-4 py-3.5 rounded-xl text-sm text-white outline-none resize-none transition-all"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              onFocus={e => (e.target.style.borderColor = 'var(--border-2)')}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />

            <button
              type="submit"
              className="btn-glow w-full py-3.5 rounded-xl font-semibold text-sm text-white mt-1"
              style={{ background: 'var(--red)' }}
            >
              Envoyer →
            </button>
          </form>
        </Reveal>

        {/* Contact info */}
        <Reveal delay={150}>
          <div className="flex justify-center gap-8 mt-10 text-xs" style={{ color: 'var(--muted)' }}>
            <span>contact@mbusiness.fr</span>
            <span style={{ color: 'var(--border-2)' }}>·</span>
            <span>France &amp; Francophonie</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
