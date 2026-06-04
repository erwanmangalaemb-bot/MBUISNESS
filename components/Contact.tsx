'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--red)' }}>Contact</p>
        <h2 className="font-black leading-tight mb-10" style={{ fontSize: 'clamp(1.8rem,5vw,2.6rem)' }}>
          Parle-nous de ton projet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {['Prénom', 'Nom'].map((label) => (
                <div key={label}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-colors"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>Ton projet</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none resize-none"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                placeholder="Montage vidéo, site web, stratégie..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--red)' }}
            >
              Envoyer →
            </button>
          </form>

          <div className="flex flex-col gap-6 justify-center">
            {[
              { icon: '📧', label: 'Email', val: 'contact@mbusiness.fr' },
              { icon: '📱', label: 'WhatsApp / Téléphone', val: '+33 1 00 00 00 00' },
              { icon: '🌍', label: 'Zone', val: 'France & Francophonie' },
            ].map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: 'var(--muted)' }}>{info.label}</div>
                  <div className="font-semibold">{info.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
