'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function Counter({ to, suffix = '', prefix = '', duration = 1800 }: Props) {
  const [count, setCount]   = useState(0)
  const [started, setStarted] = useState(false)
  const ref                 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.unobserve(el) } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * to))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, to, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}
