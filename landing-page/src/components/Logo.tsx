import { useState } from 'react'

interface LogoProps {
  className?: string
  variant?: 'default' | 'white'
}

const DEFAULT_SIZE = 'h-12 w-auto sm:h-[3.375rem] md:h-14'

export default function Logo({ className = '', variant = 'default' }: LogoProps) {
  const [error, setError] = useState(false)
  const src = '/brand/logo.png'

  if (error) {
    return (
      <span
        className={`text-xl font-bold tracking-tight ${
          variant === 'white' ? 'text-white' : 'text-brand-900'
        } ${className}`}
      >
        Inspechron
      </span>
    )
  }

  return (
    <img
      src={src}
      alt="Inspechron"
      width={1024}
      height={588}
      onError={() => setError(true)}
      className={`block max-w-none object-contain object-left ${
        variant === 'white' ? 'brightness-0 invert' : ''
      } ${className || DEFAULT_SIZE}`}
    />
  )
}
