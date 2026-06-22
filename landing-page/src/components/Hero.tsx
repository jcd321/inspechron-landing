import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from '../i18n'
import { PLAY_STORE_URL, CONTACT_EMAIL } from '../config'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="section-white relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20"
      aria-labelledby="hero-headline"
    >
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-50 blur-3xl" />

      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="fade-in">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-800">
              {t.hero.badge}
            </span>

            <h1
              id="hero-headline"
              className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight text-brand-950 md:text-5xl lg:text-[3.25rem]"
            >
              {t.hero.headline}
            </h1>

            <p className="mt-4 max-w-xl text-lg font-semibold leading-snug text-brand-800 md:text-xl">
              {t.hero.slogan}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-solid inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-800/20 hover:bg-brand-700 sm:w-auto"
              >
                <Sparkles size={18} aria-hidden="true" />
                {t.hero.ctaPrimary}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Demo%20B2B%20Inspechron`}
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 hover:border-brand-300 hover:bg-brand-50 sm:w-auto"
              >
                {t.hero.ctaSecondary}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="fade-in-delay-1 relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-device)] ring-1 ring-brand-900/5">
              <img
                src="/screenshots/hero-mockup.png"
                alt={t.hero.mockupAlt}
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
