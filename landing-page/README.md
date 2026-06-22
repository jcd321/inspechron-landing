# Inspechron Landing Page

Landing page profesional para **Inspechron** — plataforma B2B de inspección técnica asistida por IA.

Stack: React + Vite + Tailwind CSS v4 + TypeScript

## Requisitos

- Node.js 18+
- npm 9+

## Desarrollo local

```bash
cd landing-page
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Build de producción

```bash
npm run build
npm run preview
```

El build genera la carpeta `dist/` lista para desplegar.

## Estructura del proyecto

```
landing-page/
├── public/
│   ├── favicon.svg
│   ├── privacy/index.html      # Placeholder política de privacidad
│   └── screenshots/            # Capturas de la app (ver README ahí)
├── src/
│   ├── components/             # Secciones reutilizables
│   ├── i18n/                   # Traducciones ES/EN
│   ├── config.ts               # URLs y constantes
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Tailwind + tokens de marca
├── index.html                    # SEO + Open Graph
├── vite.config.ts
└── package.json
```

## Desplegar en Vercel (paso a paso)

### Opción A: Desde la web de Vercel

1. Sube el proyecto a GitHub (o conéctalo si ya está en un monorepo).
2. Ve a [vercel.com](https://vercel.com) → **Add New Project**.
3. Importa el repositorio.
4. Configura:
   - **Root Directory:** `landing-page` (si está en monorepo) o `.` (si es repo independiente)
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.
6. (Opcional) En **Settings → Domains**, añade `inspechron.app`.

### Opción B: Desde CLI

```bash
npm install -g vercel
cd landing-page
vercel
```

Sigue las preguntas. Para producción:

```bash
vercel --prod
```

### Variables de entorno

No se requieren secrets para la landing. Si activas analytics, edita `src/config.ts`:

```ts
export const ANALYTICS_ID = 'tu-dominio-plausible'
```

## Personalización

### Screenshots

Añade imágenes reales en `public/screenshots/` — ver `public/screenshots/README.md`.

### Colores de marca

Los tokens están en `src/index.css` bajo `@theme`. Sincronízalos con `mobile-app/.../theme.ts` del monorepo cuando lo tengas disponible.

### Copy / idiomas

Edita `src/i18n/es.ts` y `src/i18n/en.ts`.

### Enlaces

Centralizados en `src/config.ts`:
- Google Play
- Emails de contacto
- WhatsApp demo B2B
- Redes sociales

## SEO

La landing incluye SEO técnico profesional listo para escalar en `inspechron.app`.

### Implementado

| Área | Detalle |
|------|---------|
| **Meta tags** | `title`, `description`, `keywords`, `robots`, `theme-color`, Open Graph, Twitter Cards |
| **Canonical & hreflang** | URL canónica + alternates ES/EN/x-default |
| **JSON-LD** | Organization, WebSite, SoftwareApplication, FAQPage (dinámico por idioma) |
| **Sitemap** | `public/sitemap.xml` — homepage + `/privacy/` |
| **Robots** | `public/robots.txt` con referencia al sitemap |
| **Web App Manifest** | `public/site.webmanifest` |
| **HTML5 semántico** | `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>`, un solo `<h1>` |
| **Accesibilidad** | Skip link, `aria-label`, `aria-expanded`, `aria-labelledby` |
| **Performance** | Preload LCP (hero banner), lazy loading imágenes, code splitting (vendor/icons) |
| **i18n SEO** | Meta y JSON-LD se actualizan al cambiar idioma; soporte `?lang=en` en URL |

### Archivos clave

- `index.html` — meta estáticos + JSON-LD fallback para crawlers sin JS
- `src/seo/SeoHead.tsx` — gestión dinámica del `<head>`
- `src/seo/structured-data.ts` — schemas Schema.org
- `src/seo/site.ts` — `SITE_URL` y constantes SEO
- `src/i18n/es.ts` / `en.ts` — copy optimizado para keywords

### Antes de lanzar a producción

1. **Dominio:** confirma `SITE_URL` en `src/seo/site.ts` (`https://inspechron.app`)
2. **OG image:** verifica que `public/banners/og-image.png` exista (1200×630 px recomendado)
3. **Google Search Console:** verifica el dominio y envía `sitemap.xml`
4. **Analytics:** configura `ANALYTICS_ID` en `src/config.ts` (Plausible u otro)
5. **Core Web Vitals:** prueba en [PageSpeed Insights](https://pagespeed.web.dev/) tras el deploy

### Escalabilidad futura

- Rutas separadas `/en/` para hreflang más preciso (actualmente SPA con toggle)
- Prerender/SSG con `vite-plugin-ssr` si necesitas indexación sin ejecutar JS
- Blog o docs en subrutas → añadir URLs al `sitemap.xml`

## Licencia

© 2026 Inspechron
