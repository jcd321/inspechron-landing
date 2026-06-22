import { createContext, useContext, type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

const RevealGroupContext = createContext(false)

interface RevealProps {
  children: ReactNode
  className?: string
  variant?: 'section' | 'cta'
}

export function Reveal({ children, className = '', variant = 'section' }: RevealProps) {
  const { ref, inView } = useInView()
  const baseClass = variant === 'cta' ? 'reveal-cta' : 'reveal'

  return (
    <div
      ref={ref}
      className={`${baseClass} ${inView ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}

interface RevealGroupProps {
  children: ReactNode
  className?: string
}

export function RevealGroup({ children, className = '' }: RevealGroupProps) {
  const { ref, inView } = useInView()

  return (
    <RevealGroupContext.Provider value={inView}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </RevealGroupContext.Provider>
  )
}

interface RevealItemProps {
  children: ReactNode
  index: number
  className?: string
}

export function RevealItem({ children, index, className = '' }: RevealItemProps) {
  const groupVisible = useContext(RevealGroupContext)

  return (
    <div
      className={`reveal-item ${groupVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  )
}
