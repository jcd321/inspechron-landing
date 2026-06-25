import OptimizedPicture from './OptimizedPicture'
import { useTranslation } from '../i18n'
import { PLAY_STORE_URL } from '../config'

export default function HeroBanner() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-brand-950">
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto block max-w-[1024px]"
        aria-label={t.promoBanner.alt}
      >
        <OptimizedPicture
          baseSrc="/banners/hero-banner"
          alt={t.promoBanner.alt}
          width={1024}
          height={512}
          loading="eager"
          fetchPriority="high"
          className="block h-auto w-full"
        />
      </a>
    </section>
  )
}
