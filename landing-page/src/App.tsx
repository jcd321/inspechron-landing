import { useEffect } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Hero from './components/Hero'
import AppWalkthrough from './components/AppWalkthrough'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Audience from './components/Audience'
import Pricing from './components/Pricing'
// import SocialProof from './components/SocialProof' // Tracción temprana — desactivada por ahora
import FAQ from './components/FAQ'
import SeoContent from './components/SeoContent'
import Investors from './components/Investors'
import FinalCTA from './components/FinalCTA'
import FloatingCTA from './components/FloatingCTA'
import Footer from './components/Footer'
import { useTranslation } from './i18n'
import SeoHead from './seo/SeoHead'
import { ANALYTICS_ID } from './config'

function useAnalytics() {
  useEffect(() => {
    if (!ANALYTICS_ID) return

    const loadAnalytics = () => {
      if (ANALYTICS_ID.startsWith('G-')) {
        const loader = document.createElement('script')
        loader.async = true
        loader.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`
        document.head.appendChild(loader)

        const inline = document.createElement('script')
        inline.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS_ID}');
        `
        document.head.appendChild(inline)
        return
      }

      const script = document.createElement('script')
      script.defer = true
      script.dataset.domain = 'inspechron.com'
      script.src = 'https://plausible.io/js/script.js'
      document.head.appendChild(script)
    }

    const schedule =
      'requestIdleCallback' in window
        ? (cb: () => void) => {
            const id = window.requestIdleCallback(cb)
            return () => window.cancelIdleCallback(id)
          }
        : (cb: () => void) => {
            const id = globalThis.setTimeout(cb, 2000)
            return () => globalThis.clearTimeout(id)
          }

    return schedule(loadAnalytics)
  }, [])
}

export default function App() {
  useAnalytics()
  const { t } = useTranslation()

  return (
    <>
      <SeoHead />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>
      <Header />
      <HeroBanner />
      <main id="main-content">
        <Hero />
        <ProblemSolution />
        <AppWalkthrough />
        <Features />
        <Audience />
        <Investors />
        <Pricing />
        <SeoContent />
        {/* <SocialProof /> Tracción temprana — desactivada por ahora */}
        <FAQ />
        <FinalCTA />
      </main>
      <FloatingCTA />
      <Footer />
    </>
  )
}
