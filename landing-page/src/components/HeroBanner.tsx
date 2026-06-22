import { useTranslation } from '../i18n'
import { PLAY_STORE_URL, HERO_BANNER_URL } from '../config'

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
        <img
          src={HERO_BANNER_URL}
          alt={t.promoBanner.alt}
          width={1024}
          height={512}
          decoding="async"
          className="block h-auto w-full"
          fetchPriority="high"
        />
      </a>
    </section>
  )
}
