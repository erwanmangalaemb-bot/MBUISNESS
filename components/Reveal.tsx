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

    // Element is already above the fold (e.g. page reloaded while scrolled)
    if (el.getBoundingClientRect().bottom < 0) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      {
        threshold: 0,
        // Pre-trigger 150px before element reaches the viewport so fast
        // scrolling never causes the observer to miss the entry event
        rootMargin: '0px 0px 150px 0px',
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
