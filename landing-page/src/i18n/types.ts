export type Locale = 'es' | 'en'

export interface Translation {
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    keywords: string
  }
  nav: {
    features: string
    pricing: string
    faq: string
    investors: string
    contact: string
    download: string
  }
  a11y: {
    skipToContent: string
    mainNav: string
    openMenu: string
    closeMenu: string
    languageSelector: string
    footerNav: string
  }
  hero: {
    badge: string
    headline: string
    slogan: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    mockupAlt: string
    mockupPlaceholder: string
  }
  problemSolution: {
    title: string
    subtitle: string
    problemTitle: string
    problems: string[]
    solutionTitle: string
    solutions: string[]
  }
  walkthrough: {
    title: string
    subtitle: string
    steps: { title: string; tagline: string; description: string; imageAlt: string }[]
  }
  seoContent: {
    title: string
    paragraphs: string[]
    subsections: { title: string; text: string }[]
  }
  promoBanner: {
    alt: string
  }
  features: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  audience: {
    title: string
    subtitle: string
    segments: { title: string; description: string }[]
  }
  pricing: {
    title: string
    subtitle: string
    free: {
      title: string
      price: string
      description: string
      features: string[]
    }
    payPerReport: {
      title: string
      badge: string
      price: string
      priceSuffix: string
      description: string
      features: string[]
    }
    comingSoon: {
      title: string
      description: string
    }
    cta: string
  }
  socialProof: {
    title: string
    badges: string[]
    testimonialPlaceholder: string
  }
  faq: {
    title: string
    items: { question: string; answer: string }[]
  }
  investors: {
    title: string
    subtitle: string
    badge: string
    whyNowTitle: string
    whyNowText: string
    bullets: { title: string; description: string }[]
    contact: string
    cta: string
  }
  finalCta: {
    title: string
    subtitle: string
    supportText: string
    ctaPrimary: string
    ctaSecondary: string
    trustCopy: string
  }
  floatingCta: {
    label: string
    ariaLabel: string
  }
  footer: {
    tagline: string
    product: string
    legal: string
    contact: string
    privacy: string
    playStore: string
    followUs: string
    copyright: string
  }
}
