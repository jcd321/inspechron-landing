import { User, Building2, HardHat, ShieldCheck } from 'lucide-react'
import { useTranslation } from '../i18n'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

const segmentIcons = [User, Building2, HardHat, ShieldCheck]

export default function Audience() {
  const { t } = useTranslation()

  return (
    <section className="section-white py-16 md:py-28" aria-labelledby="audience-title">
      <div className="section-container">
        <Reveal>
          <div className="text-center">
            <h2 id="audience-title" className="section-heading">
              {t.audience.title}
            </h2>
            <p className="section-lead">{t.audience.subtitle}</p>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {t.audience.segments.map((segment, index) => {
            const Icon = segmentIcons[index]
            return (
              <RevealItem key={segment.title} index={index}>
                <article className="card-premium flex h-full flex-col p-7 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-800 text-white shadow-md shadow-brand-800/20">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-brand-900">
                    {segment.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {segment.description}
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
