import { useTranslation } from '../i18n'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import {
  PLAY_STORE_URL,
  CONTACT_EMAIL,
  PRIVACY_POLICY_URL,
} from '../config'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-brand-800 bg-brand-950 pb-24 text-brand-200 sm:pb-12" aria-labelledby="footer-heading">
      <div className="section-container py-12">
        <h2 id="footer-heading" className="sr-only">
          {t.a11y.footerNav}
        </h2>
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex flex-col items-start gap-1">
              <Logo variant="white" className="h-14 w-auto sm:h-[3.75rem] md:h-16" />
              <p className="text-sm leading-snug text-brand-200">{t.footer.tagline}</p>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-100">
              {t.footer.followUs}
            </p>
            <SocialLinks className="mt-2" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.product}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#features" className="text-brand-200 hover:text-white">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-brand-200 hover:text-white">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-200 hover:text-white"
                >
                  {t.footer.playStore}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.resources}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/inspeccion-tecnica-vivienda/" className="text-brand-200 hover:text-white">
                  {t.footer.inspectionPage}
                </a>
              </li>
              <li>
                <a href="/para-inspectores/" className="text-brand-200 hover:text-white">
                  {t.footer.inspectorsPage}
                </a>
              </li>
              <li>
                <a href="/informe-inspeccion-tecnica-pdf/" className="text-brand-200 hover:text-white">
                  {t.footer.reportPage}
                </a>
              </li>
              <li>
                <a href="/blog/inspeccion-tecnica-guia/" className="text-brand-200 hover:text-white">
                  {t.footer.blogGuide}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.legal}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={PRIVACY_POLICY_URL} className="text-brand-200 hover:text-white">
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.contact}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-200 hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-8 text-center text-xs">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
