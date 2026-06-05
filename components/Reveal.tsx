'use client'
import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

export default function Reveal({
  children,
  delay = 0,
  className = '',
  style,
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    // Already in or near the viewport → reveal immediately, no animation needed
    if (rect.top < window.innerHeight + 100) {
      el.classList.add('visible')
      return
    }

    // Below the fold: mark it so CSS hides it, then observe with a generous
    // pre-trigger zone so even very fast iOS momentum scrolling can't miss it
    el.setAttribute('data-below', '')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 500px 0px',
      }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
