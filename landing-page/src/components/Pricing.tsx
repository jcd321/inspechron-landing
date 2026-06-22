import { Check, Sparkles, Users } from 'lucide-react'
import { useTranslation } from '../i18n'
import { PLAY_STORE_URL } from '../config'
import { Reveal } from './Reveal'

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="section-muted py-16 md:py-28">
      <div className="section-container">
        <Reveal>
          <div className="text-center">
            <h2 className="section-heading">{t.pricing.title}</h2>
            <p className="section-lead max-w-2xl">{t.pricing.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="card-premium flex flex-col p-8">
              <h3 className="text-xl font-bold text-brand-900">{t.pricing.free.title}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-brand-800">
                  {t.pricing.free.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {t.pricing.free.description}
              </p>
              <ul className="mt-8 flex-1 space-y-3.5">
                {t.pricing.free.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-brand-900/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                      <Check className="text-brand-700" size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex w-full items-center justify-center rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 shadow-sm hover:border-brand-300 hover:bg-brand-50"
              >
                {t.pricing.cta}
              </a>
            </div>

            <div className="card-premium relative flex flex-col border-2 border-brand-500 bg-gradient-to-b from-white to-brand-50/40 p-8 shadow-[0_12px_40px_rgba(30,58,138,0.12)]">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-800 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                {t.pricing.payPerReport.badge}
              </span>
              <h3 className="text-xl font-bold text-brand-900">{t.pricing.payPerReport.title}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight text-brand-800">
                  {t.pricing.payPerReport.price}
                </span>
                <span className="text-sm font-medium text-muted">
                  {t.pricing.payPerReport.priceSuffix}
                </span>
              </div>
              <p className="mt-3 rounded-xl bg-brand-100/70 px-3 py-2.5 text-sm font-semibold text-brand-800">
                {t.pricing.payPerReport.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3.5">
                {t.pricing.payPerReport.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-brand-900/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-800">
                      <Check className="text-white" size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-solid mt-8 inline-flex w-full items-center justify-center rounded-xl bg-brand-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-800/25 hover:bg-brand-700"
              >
                {t.pricing.cta}
              </a>
            </div>
          </div>

          <div className="card-premium-static card-premium mt-8 border-dashed border-brand-300 bg-white/80 p-8 text-center md:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
              <Users className="text-brand-700" size={22} />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Sparkles className="text-brand-600" size={16} aria-hidden="true" />
              <h3 className="text-lg font-bold text-brand-900">{t.pricing.comingSoon.title}</h3>
            </div>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              {t.pricing.comingSoon.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
