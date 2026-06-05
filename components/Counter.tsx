'use client'
import { useEffect, useState } from 'react'

interface Props {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function Counter({ to, suffix = '', prefix = '', duration = 1400 }: Props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * to))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [to, duration])

  return <span>{prefix}{count}{suffix}</span>
}
