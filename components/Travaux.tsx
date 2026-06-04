const items = [
  { tag: 'Montage vidéo', title: 'Reels Instagram — Creator FR' },
  { tag: 'Site web', title: 'Landing page — Restaurant Dakar' },
  { tag: 'Stratégie contenu', title: '×3 audience en 90 jours' },
  { tag: 'Branding', title: 'Identité visuelle complète' },
]

export default function Travaux() {
  return (
    <section id="travaux" className="py-20 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--red)' }}>Travaux</p>
        <h2 className="font-black leading-tight mb-10" style={{ fontSize: 'clamp(1.8rem,5vw,2.6rem)' }}>
          Quelques réalisations
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-5 flex flex-col justify-end"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', aspectRatio: '4/3' }}
            >
              <div className="text-xs font-bold tracking-wider uppercase mb-1" style={{ color: 'var(--red)' }}>
                {item.tag}
              </div>
              <div className="text-sm font-bold leading-snug">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
