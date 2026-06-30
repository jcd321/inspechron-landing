# Plan SEO Inspechron — actualización 30 jun 2026

**Sitio:** https://inspechron.com  
**Herramientas activas:** Google Search Console, SEMrush Site Audit, PageSpeed Insights, Analytics  
**Objetivo:** consolidar indexación, corregir avisos técnicos y ganar autoridad orgánica.

---

## Diagnóstico actual (30 jun 2026)

### Google Search Console — URLs indexadas

| URL | Estado |
|-----|--------|
| https://inspechron.com/ | Indexada |
| https://inspechron.com/inspeccion-tecnica-vivienda/ | Indexada |
| https://inspechron.com/para-inspectores/ | Indexada |
| https://inspechron.com/informe-inspeccion-tecnica/ | Indexada (reemplaza la antigua `-pdf/`) |
| https://inspechron.com/privacy/ | Indexada |

**Nota:** La URL antigua `/informe-inspeccion-tecnica-pdf/` ya no se usa. Redirect 301 añadido en `.htaccess`.

### SEMrush Site Audit — 96% salud del sitio

| Métrica | Valor |
|---------|-------|
| Salud del sitio | 96% (mejor que el 92% promedio del top 10%) |
| AI Search Health | 99% |
| Páginas rastreadas | 5 |
| Errores | 0 |
| Advertencias | 3 (1 página cada una) |

**Advertencias detectadas y causa:**

1. **Missing h1** — La home es una SPA (React). SEMrush rastreó **sin JavaScript**. El HTML inicial solo tenía `<div id="root"></div>` vacío.
2. **Low word count** — Mismo motivo: sin JS no ve el contenido de React.
3. **Low text/HTML ratio** — Mucho JS/CSS en el bundle vs. poco HTML estático inicial.

**Importante:** Con JavaScript activado, la app **sí tiene `<h1 id="hero-headline">`** y schema FAQPage/SoftwareApplication inyectado por React. Googlebot ejecuta JS; SEMrush en modo básico no.

### Cambios implementados hoy (30 jun 2026)

- [x] HTML semántico inicial dentro de `#root` (h1, h2, secciones, enlaces internos) para crawlers sin JS
- [x] JSON-LD ampliado en `<head>`: Organization + WebSite + SoftwareApplication + FAQPage (`@graph`)
- [x] Sitemap actualizado con las 5 URLs públicas (sin la URL `-pdf/` obsoleta)
- [x] Redirect 301: `/informe-inspeccion-tecnica-pdf/` → `/informe-inspeccion-tecnica/`
- [x] `llms.txt` actualizado con páginas SEO
- [x] Banner bilingüe ES/EN funcionando en producción

---

## Opinión sobre las recomendaciones recibidas

| Recomendación | ¿Aplica? | Comentario |
|---------------|----------|------------|
| **Un solo `<h1>` por URL** | ✅ Sí | Ya existía en React; ahora también en HTML estático inicial |
| **Contenido semántico (`<main>`, `<section>`)** | ✅ Sí | Implementado en HTML inicial + React ya lo usa |
| **JSON-LD SoftwareApplication** | ✅ Sí | Ya estaba en React; duplicado en HTML estático para crawlers sin JS |
| **JSON-LD FAQPage** | ✅ Sí | Igual: React + HTML estático |
| **aggregateRating con estrellas** | ❌ No todavía | **No usar ratings inventados** (4.8 / 150). Google puede penalizar. Solo añadir cuando haya reseñas reales verificables en Play Store |
| **Meta tags title/description** | ✅ Ya estaban bien | Mantener y ajustar según consultas en GSC |
| **Open Graph** | ✅ Ya implementado | og-image apunta a `/banners/og-image.png` |
| **Minificar CSS/JS** | ✅ Ya hecho | Vite/Rolldown genera bundles minificados |
| **Lazy loading imágenes** | ✅ Parcial | Walkthrough usa lazy; banner usa eager (correcto para LCP) |
| **WebP** | ⚠️ Pendiente | Subir `hero-banner-en.webp` real (~245 KB) en Hostinger |

**Ventaja competitiva real:** código propio, sin WordPress, bundles ligeros, control total del DOM y schema. Eso es correcto.

---

## Fase 1 — Técnico (esta semana)

- [x] Corregir avisos SEMrush en home (HTML estático + schema)
- [x] Actualizar sitemap en producción
- [x] Redirect URL antigua `-pdf/`
- [ ] Subir cambios a Hostinger (`index.html`, `sitemap.xml`, `.htaccess`, `llms.txt`)
- [ ] Re-ejecutar Site Audit en SEMrush (botón **Rerun**)
- [ ] Activar verificación Google en `<head>` (meta tag de Search Console)
- [ ] Subir WebP inglés correcto (~245 KB) en `/banners/`

## Fase 2 — Contenido y enlaces internos (semana 1–2)

- [ ] Añadir en React (cuando recuperes el código fuente) footer con links a páginas SEO
- [ ] Mientras tanto: el HTML estático ya enlaza las 3 páginas SEO
- [ ] Publicar en redes: https://inspechron.com/inspeccion-tecnica-vivienda/
- [ ] Revisar en GSC impresiones/clics/consultas (3–5 días post-deploy)

## Fase 3 — Autoridad (semana 3–4)

- [ ] Pedir reseñas en Google Play (base para aggregateRating real en el futuro)
- [ ] Perfiles de empresa (LinkedIn, directorios sector construcción)
- [ ] Segunda ola de contenido SEO (long-tail: humedad, grietas, pre-entrega)
- [ ] Contactar blogs de construcción / inspección para menciones

## Fase 4 — Medición continua

| Herramienta | Qué revisar | Frecuencia |
|-------------|-------------|------------|
| Google Search Console | Indexación, consultas, CTR | Semanal |
| SEMrush Site Audit | Salud técnica, warnings | Tras cada deploy |
| PageSpeed Insights | LCP, CLS, INP | Mensual |
| Analytics | Tráfico orgánico, conversiones Play Store | Semanal |

---

## Checklist post-deploy Hostinger

1. Subir `public/index.html` → `public_html/index.html`
2. Subir `public/sitemap.xml` → `public_html/sitemap.xml`
3. Subir `public/.htaccess` → `public_html/.htaccess`
4. Subir `public/llms.txt` → `public_html/llms.txt`
5. En GSC → Sitemaps → reenviar sitemap
6. En SEMrush → Site Audit → **Rerun**
7. Probar redirect: `inspechron.com/informe-inspeccion-tecnica-pdf/` debe ir a `/informe-inspeccion-tecnica/`

---

## Nota importante

Actualizar este documento cada vez que se complete una acción relevante o cambien las métricas en GSC/SEMrush.
