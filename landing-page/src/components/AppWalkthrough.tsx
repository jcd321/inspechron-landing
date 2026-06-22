import { useTranslation } from '../i18n'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

const WALKTHROUGH_IMAGES = [
  '/screenshots/walkthrough/01-splash.png',
  '/screenshots/walkthrough/02-dashboard.png',
  '/screenshots/walkthrough/03-new-project.png',
  '/screenshots/walkthrough/04-new-section.png',
  '/screenshots/walkthrough/05-camera-detection.png',
  '/screenshots/walkthrough/06-report.png',
]

export default function AppWalkthrough() {
  const { t } = useTranslation()

  return (
    <section className="section-white py-16 md:py-28">
      <div className="section-container">
        <Reveal>
          <div className="text-center">
            <h2 className="section-heading">{t.walkthrough.title}</h2>
            <p className="section-lead max-w-2xl">{t.walkthrough.subtitle}</p>
          </div>
        </Reveal>

        <RevealGroup className="scroll-carousel -mx-4 mt-16 flex gap-6 overflow-x-auto px-4 pb-6 snap-x snap-mandatory sm:-mx-6 sm:gap-8 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
          {t.walkthrough.steps.map((step, index) => (
            <RevealItem key={step.title} index={index}>
              <article className="card-premium w-[300px] shrink-0 snap-center overflow-hidden md:w-auto">
                <div className="bg-gradient-to-b from-brand-50/80 to-white p-5 pb-4">
                  <div className="overflow-hidden rounded-xl shadow-[var(--shadow-device)] ring-1 ring-brand-900/5">
                    <div className="relative aspect-[4/5] overflow-hidden bg-brand-950">
                      <img
                        src={WALKTHROUGH_IMAGES[index]}
                        alt={step.title}
                        width={280}
                        height={350}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center"
                      />
                      <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-800 text-sm font-bold text-white shadow-md">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <h3 className="text-base font-bold text-brand-800">{step.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-snug text-brand-700">
                    {step.tagline}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
