'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#accueil',  label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#travaux',  label: 'Travaux' },
  { href: '#methode',  label: 'Méthode' },
  { href: '#contact',  label: 'Contact' },
]

export function MountainLogo({ size = 32, bg = '#0a0c13' }: { size?: number; bg?: string }) {
  return (
    <svg width={size} height={Math.round(size * 0.83)} viewBox="0 0 48 40" fill="none">
      <polygon points="2,40 16,10 30,40" fill="white" />
      <polygon points="18,40 28,18 38,40" fill="white" />
      <polygon points="10,40 18,24 22,32 14,40" fill={bg} />
      <polygon points="24,40 30,28 34,36 28,40" fill={bg} />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Pill navbar */}
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
        style={{ width: 'calc(100% - 2rem)', maxWidth: 700 }}
      >
        <div
          className="flex items-center justify-between px-5 h-14 rounded-full transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(10,12,19,0.85)' : 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border)',
          }}
        >
          <a href="#accueil" className="flex items-center gap-2 no-underline flex-shrink-0">
            <MountainLogo size={28} />
            <span className="font-extrabold text-base tracking-tight">
              <span style={{ color: 'var(--red)' }}>M</span>Buisness
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors hover:text-white"
                style={{ color: 'var(--muted)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-px glow-pulse"
            style={{ background: 'var(--red)' }}
          >
            Devis gratuit
          </a>

          <button onClick={() => setOpen(true)} className="md:hidden p-1.5 text-white" aria-label="Menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col px-6 pt-20 pb-8" style={{ background: 'var(--bg)' }}>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 p-2 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 text-xl font-bold"
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
            className="mt-6 py-4 text-center font-bold text-white rounded-2xl text-lg"
            style={{ background: 'var(--red)' }}
          >
            Devis gratuit →
          </a>
        </div>
      )}
    </>
  )
}
