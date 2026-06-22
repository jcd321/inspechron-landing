import { useEffect } from 'react'
import { useTranslation } from '../i18n'
import { SEO_DEFAULTS, CANONICAL_HOME } from './site'
import { buildStructuredData } from './structured-data'

const STRUCTURED_DATA_ID = 'inspechron-structured-data'

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let element = document.querySelector(selector) as HTMLLinkElement | null
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    if (hreflang) element.hreflang = hreflang
    document.head.appendChild(element)
  }
  element.href = href
}

export default function SeoHead() {
  const { locale, t } = useTranslation()

  useEffect(() => {
    const isEn = locale === 'en'
    const canonicalUrl = CANONICAL_HOME

    document.documentElement.lang = isEn ? 'en' : 'es'
    document.title = t.meta.title

    upsertMeta('name', 'description', t.meta.description)
    upsertMeta('name', 'keywords', t.meta.keywords)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('name', 'author', 'Inspechron')
    upsertMeta('name', 'theme-color', '#0f172a')

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', 'Inspechron')
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:title', t.meta.ogTitle)
    upsertMeta('property', 'og:description', t.meta.ogDescription)
    upsertMeta('property', 'og:image', SEO_DEFAULTS.ogImage)
    upsertMeta('property', 'og:image:alt', t.meta.ogTitle)
    upsertMeta('property', 'og:locale', isEn ? 'en_US' : 'es_ES')
    upsertMeta('property', 'og:locale:alternate', isEn ? 'es_ES' : 'en_US')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', t.meta.ogTitle)
    upsertMeta('name', 'twitter:description', t.meta.ogDescription)
    upsertMeta('name', 'twitter:image', SEO_DEFAULTS.ogImage)

    upsertLink('canonical', canonicalUrl)
    upsertLink('alternate', canonicalUrl, 'x-default')
    upsertLink('alternate', canonicalUrl, 'es')
    upsertLink('alternate', canonicalUrl, 'en')

    let script = document.getElementById(STRUCTURED_DATA_ID) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = STRUCTURED_DATA_ID
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(buildStructuredData(t, locale))
  }, [locale, t])

  return null
}
