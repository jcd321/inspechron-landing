import { BadgeCheck, Quote } from 'lucide-react'
import { useTranslation } from '../i18n'

export default function SocialProof() {
  const { t } = useTranslation()

  return (
    <section className="border-y border-border bg-brand-50/50 py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-950 md:text-4xl">
          {t.socialProof.title}
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {t.socialProof.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-surface-elevated px-4 py-2 text-sm font-medium text-brand-800"
            >
              <BadgeCheck size={16} className="text-brand-600" />
              {badge}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-border bg-surface-elevated p-8 text-center">
          <Quote className="mx-auto text-brand-300" size={32} />
          <p className="mt-4 text-sm italic leading-relaxed text-muted">
            "{t.socialProof.testimonialPlaceholder}"
          </p>
          <p className="mt-3 text-xs font-medium text-brand-400">
            — Testimonio piloto (placeholder)
          </p>
        </div>
      </div>
    </section>
  )
}
