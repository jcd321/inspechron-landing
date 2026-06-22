import { Sparkles, ArrowRight } from 'lucide-react'
import { useTranslation } from '../i18n'
import { PLAY_STORE_URL, CONTACT_EMAIL } from '../config'
import { Reveal } from './Reveal'

export default function FinalCTA() {
  const { t } = useTranslation()

  return (
    <section className="section-white py-16 md:py-24" aria-labelledby="final-cta-title">
      <div className="section-container">
        <Reveal variant="cta">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-8 py-16 text-center text-white md:px-20 md:py-24">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]"
              aria-hidden="true"
            />

            <h2
              id="final-cta-title"
              className="relative text-3xl font-bold tracking-tight md:text-5xl md:leading-tight"
            >
              {t.finalCta.title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100 md:text-xl">
              {t.finalCta.subtitle}
            </p>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-200/90 md:text-base">
              {t.finalCta.supportText}
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-light inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-900 shadow-xl shadow-black/20 hover:bg-brand-50 sm:w-auto"
              >
                <Sparkles size={20} aria-hidden="true" />
                {t.finalCta.ctaPrimary}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Demo%20B2B%20Inspechron`}
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/15 sm:w-auto"
              >
                {t.finalCta.ctaSecondary}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <p className="relative mx-auto mt-8 max-w-lg text-sm leading-relaxed text-brand-200/80">
              {t.finalCta.trustCopy}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
