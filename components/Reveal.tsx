import { type ReactNode, type CSSProperties } from 'react'

export default function Reveal({
  children,
  delay: _delay = 0,
  className = '',
  style,
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
