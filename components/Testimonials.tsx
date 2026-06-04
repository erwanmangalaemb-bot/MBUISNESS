import Reveal from './Reveal'

const reviews = [
  {
    initials: 'KB',
    name: 'Karim B.',
    role: 'Créateur · 120K abonnés',
    text: 'En 3 mois, mon audience a triplé. Montage pro, rapide, et ils comprennent exactement ce que je veux.',
  },
  {
    initials: 'SM',
    name: 'Sophie M.',
    role: 'Restauratrice · Paris 11e',
    text: 'Site livré en 48h, beau et rapide. J\'ai directement vu une hausse des réservations en ligne.',
  },
  {
    initials: 'MD',
    name: 'Mamadou D.',
    role: 'Entrepreneur · Dakar',
    text: 'Le système clé en main m\'a permis de me concentrer sur mon activité. Résultats visibles dès le premier mois.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-2xl mx-auto">

        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--red)' }}>
              Avis clients
            </p>
            <h2
              className="font-black tracking-tight"
              style={{ fontSize: 'clamp(2rem,6vw,3.2rem)', letterSpacing: '-0.03em' }}
            >
              Ils nous font confiance
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <div
                className="card-hover flex flex-col p-6 rounded-2xl h-full"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#fbbf24">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--muted-2)' }}>
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: 'var(--red-dim)', color: 'var(--red)', border: '1px solid var(--border)' }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-xs font-semibold">{r.name}</div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>{r.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
