import { type ReactNode } from 'react'

export default function CircularReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <span
      className={`circular-reveal inline-block ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </span>
  )
}
