import {
  TrendingUp,
  Smartphone,
  Cpu,
  Layers,
  Zap,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { useTranslation } from '../i18n'
import { CONTACT_EMAIL } from '../config'

const bulletIcons = [TrendingUp, Smartphone, Cpu, Layers, Zap]

export default function Investors() {
  const { t } = useTranslation()

  return (
    <section id="investors" className="section-white py-16 md:py-28" aria-labelledby="investors-title">
      <div className="section-container">
        <div className="card-premium-static card-premium relative overflow-hidden p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-100/60 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-50 blur-3xl" />

          <div className="relative text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-800">
              {t.investors.badge}
            </span>
            <h2 id="investors-title" className="section-heading mt-5">
              {t.investors.title}
            </h2>
            <p className="section-lead">{t.investors.subtitle}</p>
          </div>

          <div className="card-premium-static card-premium relative mt-10 bg-section-muted p-6 md:p-8">
            <h3 className="text-lg font-bold text-brand-900">{t.investors.whyNowTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              {t.investors.whyNowText}
            </p>
          </div>

          <div className="relative mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.investors.bullets.map((bullet, index) => {
              const Icon = bulletIcons[index]
              return (
                <article key={bullet.title} className="card-premium p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-white shadow-md shadow-brand-800/20">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h4 className="mt-4 font-bold text-brand-900">{bullet.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{bullet.description}</p>
                </article>
              )
            })}
          </div>

          <div className="relative mt-10 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted">{t.investors.contact}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Inversión%20Inspechron`}
                className="mt-1 inline-flex items-center gap-2 font-semibold text-brand-800 hover:underline"
              >
                <Mail size={16} aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Inversión%20Inspechron`}
              className="btn-primary btn-primary-solid inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-800/20 hover:bg-brand-700 sm:w-auto"
            >
              {t.investors.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
