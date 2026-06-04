const reviews = [
  {
    name: 'Karim B.',
    role: 'Créateur de contenu · 120K abonnés',
    text: 'En 3 mois avec MBuisness, mon audience a triplé. Le montage est pro, rapide et ils comprennent exactement ce que je veux. Indispensable.',
    stars: 5,
  },
  {
    name: 'Sophie M.',
    role: 'Gérante · Restaurant Paris 11e',
    text: 'Site livré en 48h, beau, rapide, et j\'ai directement vu une hausse des réservations en ligne. Équipe réactive et à l\'écoute.',
    stars: 5,
  },
  {
    name: 'Mamadou D.',
    role: 'Entrepreneur · Dakar',
    text: 'Le système clé en main m\'a permis de me concentrer sur mon activité. Tout est géré — vidéo, site, réseaux. Résultats visibles dès le premier mois.',
    stars: 5,
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" style={{ color: '#fbbf24' }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'var(--red-dim)', color: 'var(--red)' }}
          >
            Avis clients
          </span>
          <h2 className="font-black" style={{ fontSize: 'clamp(1.8rem,5vw,2.8rem)' }}>
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-5 rounded-2xl flex flex-col transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
            >
              {/* Creatiwise-style large quote mark */}
              <span className="text-4xl font-black leading-none mb-3" style={{ color: 'var(--red)', opacity: 0.6 }}>
                &ldquo;
              </span>
              <Stars n={r.stars} />
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {r.text}
              </p>
              <div>
                <div className="font-bold text-sm">{r.name}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
