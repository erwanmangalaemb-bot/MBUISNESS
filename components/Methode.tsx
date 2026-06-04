const steps = [
  { n: '01', title: 'Brief & devis en 24h',       desc: 'Tu remplis le formulaire, on analyse ta demande et on t\'envoie une offre claire sous 24h.' },
  { n: '02', title: 'Production & livraison 48h', desc: 'On passe en production immédiatement. Montage, développement ou stratégie — livré en 48h garantis.' },
  { n: '03', title: 'Révisions & validation',     desc: 'Tu valides ou demandes des ajustements. On itère jusqu\'à ce que ce soit parfait.' },
  { n: '04', title: 'Mise en ligne & suivi',      desc: 'On publie, on mesure les résultats et on reste dispo pour optimiser en continu.' },
]

export default function Methode() {
  return (
    <section id="methode" className="py-20 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'var(--red-dim)', color: 'var(--red)' }}
          >
            Méthode
          </span>
          <h2 className="font-black" style={{ fontSize: 'clamp(1.8rem,5vw,2.8rem)' }}>
            Comment ça marche ?
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>Simple, rapide, efficace.</p>
        </div>

        {/* GreenSpace large-number style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="p-6 rounded-2xl transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
            >
              <div
                className="text-5xl font-black mb-4 leading-none"
                style={{ color: 'rgba(230,60,30,0.2)', fontVariantNumeric: 'tabular-nums' }}
              >
                {s.n}
              </div>
              <div className="font-bold text-base mb-2">{s.title}</div>
              <div className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
