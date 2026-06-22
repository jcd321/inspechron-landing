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
    <footer className="border-t border-brand-800 bg-brand-950 pb-24 text-brand-300 sm:pb-12">
      <div className="section-container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex flex-col items-start gap-1">
              <Logo variant="white" className="h-14 w-auto sm:h-[3.75rem] md:h-16" />
              <p className="text-sm leading-snug text-brand-300">{t.footer.tagline}</p>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-400">
              {t.footer.followUs}
            </p>
            <SocialLinks className="mt-2" />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.product}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {t.footer.playStore}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.legal}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={PRIVACY_POLICY_URL} className="hover:text-white">
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.contact}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
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
