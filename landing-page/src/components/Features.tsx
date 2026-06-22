import { Zap, Scan, FileText, Building2, Camera, ShieldCheck } from 'lucide-react'
import { useTranslation } from '../i18n'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

const featureIcons = [Zap, Scan, FileText, Building2, Camera, ShieldCheck]

export default function Features() {
  const { t } = useTranslation()

  return (
    <section id="features" className="section-accent py-16 md:py-28" aria-labelledby="features-title">
      <div className="section-container">
        <Reveal>
          <div className="text-center">
            <h2 id="features-title" className="section-heading">
              {t.features.title}
            </h2>
            <p className="section-lead">{t.features.subtitle}</p>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <RevealItem key={feature.title} index={index}>
                <article className="card-premium flex h-full flex-col p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-800 text-white shadow-md shadow-brand-800/20">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-brand-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </article>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
