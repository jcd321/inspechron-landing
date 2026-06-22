import type { Translation } from '../i18n/types'
import { SEO_DEFAULTS, SITE_NAME, SITE_URL } from './site'

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: SEO_DEFAULTS.logo,
    email: SEO_DEFAULTS.contactEmail,
    sameAs: [SEO_DEFAULTS.facebookUrl, SEO_DEFAULTS.instagramUrl],
    description:
      'Plataforma B2B de inspección técnica asistida por IA para inspectores, constructoras y aseguradoras.',
  }
}

export function buildWebSiteSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: locale === 'en' ? 'en-US' : 'es-ES',
    description:
      'Inspección inteligente en tiempo real. Detecta defectos en campo y genera informes PDF profesionales.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: SEO_DEFAULTS.logo,
    },
  }
}

export function buildSoftwareApplicationSchema(t: Translation) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Descarga gratuita con créditos de bienvenida',
    },
    description: t.meta.description,
    url: SEO_DEFAULTS.playStoreUrl,
    downloadUrl: SEO_DEFAULTS.playStoreUrl,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  }
}

export function buildFaqSchema(t: Translation) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function buildStructuredData(t: Translation, locale: string) {
  return [
    buildOrganizationSchema(),
    buildWebSiteSchema(locale),
    buildSoftwareApplicationSchema(t),
    buildFaqSchema(t),
  ]
}
