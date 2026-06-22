import { useTranslation } from '../i18n'

interface LanguageToggleProps {
  light?: boolean
}

export default function LanguageToggle({ light = false }: LanguageToggleProps) {
  const { locale, setLocale, t } = useTranslation()

  return (
    <div
      role="group"
      aria-label={t.a11y.languageSelector}
      className={`flex rounded-lg border p-0.5 ${
        light
          ? 'border-white/30 bg-white/10'
          : 'border-border bg-surface'
      }`}
    >
      <button
        type="button"
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
        className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
          locale === 'es'
            ? light
              ? 'bg-white text-brand-900'
              : 'bg-brand-800 text-white'
            : light
              ? 'text-white/80 hover:text-white'
              : 'text-muted hover:text-brand-800'
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
          locale === 'en'
            ? light
              ? 'bg-white text-brand-900'
              : 'bg-brand-800 text-white'
            : light
              ? 'text-white/80 hover:text-white'
              : 'text-muted hover:text-brand-800'
        }`}
      >
        EN
      </button>
    </div>
  )
}
