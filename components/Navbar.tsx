'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#travaux',  label: 'Travaux'  },
  { href: '#methode',  label: 'Méthode'  },
  { href: '#contact',  label: 'Contact'  },
]

export function Logo({ size = 28, bg = 'var(--bg)' }: { size?: number; bg?: string }) {
  const h = Math.round(size * 0.83)
  return (
    <svg width={size} height={h} viewBox="0 0 48 40" fill="none">
      <polygon points="2,40 16,10 30,40" fill="white" />
      <polygon points="18,40 28,18 38,40" fill="white" />
      <polygon points="10,40 18,24 22,32 14,40" fill={bg} />
      <polygon points="24,40 30,28 34,36 28,40" fill={bg} />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [solid, setSolid]     = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
        <div
          className="w-full flex items-center justify-between h-12 px-4 rounded-full transition-all duration-500"
          style={{
            maxWidth: 680,
            background: solid ? 'rgba(8,10,16,0.9)' : 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${solid ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`,
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0 group">
            <Logo size={26} />
            <span className="font-bold text-sm tracking-tight">
              <span style={{ color: 'var(--red)' }}>M</span>Buisness
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--muted-2)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 btn-glow px-4 py-2 rounded-full text-xs font-semibold text-white"
            style={{ background: 'var(--red)' }}
          >
            Devis gratuit
          </a>

          {/* Burger */}
          <button onClick={() => setOpen(true)} className="md:hidden p-1 text-white" aria-label="Menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col px-6 pt-20 pb-8"
          style={{ background: 'var(--bg)', backdropFilter: 'blur(20px)' }}
        >
          <button onClick={() => setOpen(false)} className="absolute top-5 right-5 p-2 text-white opacity-60">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-1 flex-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-2xl font-bold tracking-tight border-b"
                style={{ borderColor: 'var(--border)', color: 'var(--muted-2)' }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-4 text-center font-bold text-white rounded-2xl text-base btn-glow"
            style={{ background: 'var(--red)' }}
          >
            Devis gratuit →
          </a>
        </div>
      )}
    </>
  )
}
