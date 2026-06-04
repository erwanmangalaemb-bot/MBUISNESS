'use client'
import { useState } from 'react'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#travaux', label: 'Travaux' },
  { href: '#methode', label: 'Méthode' },
  { href: '#contact', label: 'Contact' },
]

function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.83)} viewBox="0 0 48 40" fill="none">
      <polygon points="2,40 16,10 30,40" fill="white" />
      <polygon points="18,40 28,18 38,40" fill="white" />
      <polygon points="10,40 18,24 22,32 14,40" fill="#0b0e17" />
      <polygon points="24,40 30,28 34,36 28,40" fill="#0b0e17" />
    </svg>
  )
}

export { Logo }

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16"
        style={{ background: 'rgba(11,14,23,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}
      >
        <a href="#accueil" className="flex items-center gap-2.5 no-underline">
          <Logo size={34} />
          <span className="text-xl font-extrabold tracking-tight">
            <span style={{ color: 'var(--red)' }}>M</span>Buisness
          </span>
        </a>

        <button onClick={() => setOpen(true)} className="p-2 text-white" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col px-6 pt-20 pb-8" style={{ background: 'var(--bg)' }}>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-5 p-2 text-white"
            aria-label="Fermer"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 text-lg font-semibold"
              style={{
                borderBottom: '1px solid var(--border)',
                color: i === 0 ? 'var(--red)' : 'white',
              }}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 py-4 text-center font-bold text-white rounded-xl"
            style={{ background: 'var(--red)' }}
          >
            Devis gratuit →
          </a>
        </div>
      )}
    </>
  )
}
