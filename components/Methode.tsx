const steps = [
  { n: '01', title: 'Brief & devis en 24h', desc: 'Tu remplis le formulaire, on analyse ta demande et on t\'envoie une offre claire sous 24h.' },
  { n: '02', title: 'Production & livraison 48h', desc: 'On passe en production immédiatement. Montage, développement ou stratégie — livré en 48h garantis.' },
  { n: '03', title: 'Révisions & validation', desc: 'Tu valides ou demandes des ajustements. On itère jusqu\'à ce que ce soit parfait pour toi.' },
  { n: '04', title: 'Mise en ligne & suivi', desc: 'On publie, on mesure les résultats et on reste dispo pour optimiser en continu.' },
]

export default function Methode() {
  return (
    <section id="methode" className="py-20 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--red)' }}>Méthode</p>
        <h2 className="font-black leading-tight mb-1" style={{ fontSize: 'clamp(1.8rem,5vw,2.6rem)' }}>
          Comment ça marche ?
        </h2>
        <p className="mb-10" style={{ color: 'var(--muted)' }}>Simple, rapide, efficace.</p>

        <div>
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="flex gap-6 py-7"
              style={{ borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black"
                style={{ border: '2px solid var(--red)', color: 'var(--red)' }}
              >
                {s.n}
              </div>
              <div>
                <div className="font-bold mb-1">{s.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
