type OptimizedPictureProps = {
  baseSrc: string
  alt: string
  width: number
  height: number
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'sync' | 'auto'
}

/** PNG fallback + WebP source for smaller payloads (PageSpeed image delivery). */
export default function OptimizedPicture({
  baseSrc,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
}: OptimizedPictureProps) {
  const normalized = baseSrc.replace(/\.(png|webp)$/i, '')

  return (
    <picture>
      <source srcSet={`${normalized}.webp`} type="image/webp" />
      <img
        src={`${normalized}.png`}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={className}
      />
    </picture>
  )
}
