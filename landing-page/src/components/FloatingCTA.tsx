import { useEffect, useState } from 'react'
import { useTranslation } from '../i18n'
import { PLAY_STORE_URL } from '../config'

export default function FloatingCTA() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floatingCta.ariaLabel}
      className={`floating-cta btn-primary btn-primary-solid fixed z-40 inline-flex items-center justify-center rounded-full bg-brand-800 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/25 hover:bg-brand-700 sm:px-6 sm:py-4 sm:text-base ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{
        transition:
          'opacity 300ms ease-out, transform 300ms ease-out, box-shadow 200ms ease-out, background-color 200ms ease-out',
      }}
    >
      {t.floatingCta.label}
    </a>
  )
}
