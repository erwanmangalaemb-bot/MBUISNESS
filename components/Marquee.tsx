const words = ['Montage Vidéo', 'Site Web', 'Stratégie', 'Croissance', 'Contenu', 'Scale']
const all = [...words, ...words, ...words, ...words]

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-4 border-y select-none"
      style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}
    >
      <div className="marquee-track">
        {all.map((w, i) => (
          <span key={i} className="flex items-center gap-5 pr-5">
            <span className="text-xs font-semibold tracking-widest uppercase whitespace-nowrap" style={{ color: 'var(--muted)' }}>
              {w}
            </span>
            <span style={{ color: 'var(--border-2)', fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
