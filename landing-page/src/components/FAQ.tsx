import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from '../i18n'
import { Reveal } from './Reveal'

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-white py-16 md:py-28" aria-labelledby="faq-title">
      <div className="section-container">
        <Reveal>
          <h2 id="faq-title" className="section-heading text-center">
            {t.faq.title}
          </h2>

          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {t.faq.items.map((item, index) => {
              const isOpen = openIndex === index
              const answerId = `faq-answer-${index}`
              return (
                <div
                  key={item.question}
                  className={`card-premium overflow-hidden transition-colors duration-300 ${
                    isOpen ? 'border-brand-300 bg-white' : 'bg-section-muted hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/60"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="font-semibold text-brand-900">{item.question}</span>
                    <ChevronDown
                      size={24}
                      strokeWidth={2.5}
                      aria-hidden="true"
                      className={`shrink-0 text-brand-700 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={answerId}
                    role="region"
                    hidden={!isOpen}
                    className="border-t border-border/80 px-6 pb-5 pt-4"
                  >
                    <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
