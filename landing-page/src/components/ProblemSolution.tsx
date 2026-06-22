import { AlertTriangle, CheckCircle2, X, Sparkles } from 'lucide-react'
import { useTranslation } from '../i18n'
import { Reveal } from './Reveal'

export default function ProblemSolution() {
  const { t } = useTranslation()

  return (
    <section
      className="section-muted py-16 md:py-24"
      aria-labelledby="problem-solution-title"
    >
      <div className="section-container">
        <Reveal>
          <div className="text-center">
            <h2 id="problem-solution-title" className="section-heading">
              {t.problemSolution.title}
            </h2>
            <p className="section-lead">{t.problemSolution.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="card-premium p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 ring-1 ring-red-100">
                  <AlertTriangle className="text-red-500" size={20} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-brand-950">
                  {t.problemSolution.problemTitle}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.problemSolution.problems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-brand-900/70"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-100">
                      <X className="text-red-400" size={12} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-premium relative border-2 border-brand-500 bg-gradient-to-br from-white via-brand-50/30 to-white p-8 shadow-[0_12px_40px_rgba(30,58,138,0.12)] lg:-translate-y-1">
              <div
                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand-600 to-accent-500"
                aria-hidden="true"
              />
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-white shadow-md shadow-brand-800/25">
                  <Sparkles size={20} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-brand-950">
                  {t.problemSolution.solutionTitle}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.problemSolution.solutions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-brand-900/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-800">
                      <CheckCircle2
                        className="text-white"
                        size={12}
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
