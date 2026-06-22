import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { es } from './es'
import { en } from './en'
import type { Locale, Translation } from './types'

const translations: Record<Locale, Translation> = { es, en }

function getInitialLocale(): Locale {
  const params = new URLSearchParams(window.location.search)
  const langParam = params.get('lang')
  if (langParam === 'en') return 'en'
  if (langParam === 'es') return 'es'

  const saved = localStorage.getItem('inspechron-locale')
  if (saved === 'en') return 'en'
  return 'es'
}

interface LanguageContextValue {
  locale: Locale
  t: Translation
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    localStorage.setItem('inspechron-locale', locale)
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useTranslation must be used within LanguageProvider')
  return context
}
