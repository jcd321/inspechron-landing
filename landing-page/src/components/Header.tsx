import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from '../i18n'
import { PLAY_STORE_URL } from '../config'
import LanguageToggle from './LanguageToggle'
import Logo from './Logo'

const navLinks = [
  { key: 'features' as const, href: '#features' },
  { key: 'pricing' as const, href: '#pricing' },
  { key: 'faq' as const, href: '#faq' },
  { key: 'investors' as const, href: '#investors' },
]

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300 ${
        scrolled ? 'border-border/60 shadow-sm' : 'border-border'
      }`}
    >
      <div className="section-container relative flex h-[4.5rem] items-center justify-between md:h-[4.75rem]">
        <a href="/" className="relative z-10 flex shrink-0 items-center" aria-label="Inspechron">
          <Logo className="h-[3.75rem] w-auto md:h-[4.25rem]" />
        </a>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-5 lg:flex xl:gap-7"
          aria-label={t.a11y.mainNav}
        >
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-brand-800 transition-colors hover:text-brand-900"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex sm:items-center sm:gap-3">
            <LanguageToggle />
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-solid whitespace-nowrap rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-800/20 hover:bg-brand-700"
            >
              {t.nav.download}
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-800 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label={t.a11y.mainNav}>
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-brand-800"
                onClick={() => setOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="flex items-center justify-between border-t border-border pt-3">
              <LanguageToggle />
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-solid rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-800/20 hover:bg-brand-700"
              >
                {t.nav.download}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
