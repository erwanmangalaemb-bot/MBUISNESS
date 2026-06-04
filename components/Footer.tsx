export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-2.5 mb-3">
          <svg width="26" height="22" viewBox="0 0 48 40" fill="none">
            <polygon points="2,40 16,10 30,40" fill="white" />
            <polygon points="18,40 28,18 38,40" fill="white" />
            <polygon points="10,40 18,24 22,32 14,40" fill="#111520" />
            <polygon points="24,40 30,28 34,36 28,40" fill="#111520" />
          </svg>
          <span className="font-extrabold text-lg">
            <span style={{ color: 'var(--red)' }}>M</span>Buisness
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
          Système de croissance digitale clé en main.<br />
          Tu crées. On publie. On scale.
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
          {['#accueil:Accueil', '#apropos:À propos', '#services:Services', '#travaux:Travaux', '#methode:Méthode', '#contact:Contact'].map((item) => {
            const [href, label] = item.split(':')
            return (
              <a key={href} href={href} className="text-sm transition-colors hover:text-white" style={{ color: 'var(--muted)' }}>
                {label}
              </a>
            )
          })}
        </nav>

        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} MBuisness. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
