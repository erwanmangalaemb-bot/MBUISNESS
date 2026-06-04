const items = [
  'Montage Vidéo', 'Site Web', 'Stratégie', 'Croissance', 'Contenu', 'Scale',
  'Montage Vidéo', 'Site Web', 'Stratégie', 'Croissance', 'Contenu', 'Scale',
]

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}
    >
      <div className="marquee-track select-none">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 pr-8">
            <span className="text-sm font-bold tracking-widest uppercase whitespace-nowrap" style={{ color: 'var(--muted)' }}>
              {item}
            </span>
            <span className="text-xl font-black" style={{ color: 'var(--red)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
