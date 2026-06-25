import { useTranslation } from '../i18n'
import { Reveal } from './Reveal'

export default function SeoContent() {
  const { t } = useTranslation()

  return (
    <section
      id="inspeccion-tecnica"
      className="section-accent py-16 md:py-24"
      aria-labelledby="seo-content-title"
    >
      <div className="section-container max-w-3xl">
        <Reveal>
          <h2 id="seo-content-title" className="section-heading">
            {t.seoContent.title}
          </h2>
          {t.seoContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              {paragraph}
            </p>
          ))}
          <div className="mt-10 space-y-8">
            {t.seoContent.subsections.map((section) => (
              <article key={section.title}>
                <h3 className="text-lg font-bold text-brand-900 md:text-xl">{section.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{section.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
