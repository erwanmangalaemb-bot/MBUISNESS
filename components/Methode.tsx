import Reveal from './Reveal'
import CircularReveal from './CircularReveal'

const steps = [
  { n: '01', title: 'Brief & devis',       desc: 'Tu décris ton projet. On répond avec une offre claire sous 24h.' },
  { n: '02', title: 'Production',          desc: 'On livre en 48h — montage, site ou stratégie, sans délai.' },
  { n: '03', title: 'Révisions',           desc: 'Tu valides. On ajuste jusqu\'à la perfection.' },
  { n: '04', title: 'Mise en ligne',       desc: 'On publie, on mesure, on optimise en continu.' },
]

export default function Methode() {
  return (
    <section id="methode" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-2xl mx-auto">

        <Reveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>
              Méthode
            </p>
            <h2
              className="font-black tracking-tight"
              style={{ fontSize: 'clamp(2rem,6vw,3.2rem)', letterSpacing: '-0.03em' }}
            >
              <CircularReveal>Simple. Rapide. Efficace.</CircularReveal>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div
                className="card-hover p-7 rounded-2xl"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              >
                {/* Large ghost number */}
                <div
                  className="text-6xl font-black leading-none mb-5 tabular-nums"
                  style={{ color: 'var(--border-2)', letterSpacing: '-0.04em' }}
                >
                  {s.n}
                </div>
                <div
                  className="font-semibold mb-2"
                  style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
                >
                  {s.title}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {s.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
