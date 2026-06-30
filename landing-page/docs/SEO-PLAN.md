# Plan SEO Inspechron — actualización 30 jun 2026

**Sitio:** https://inspechron.com  
**Herramientas:** Google Search Console (principal), PageSpeed Insights, Analytics  
**SEMrush:** pospuesto (requiere plan de pago)

---

## Estrategia de deploy por fases

Publicamos URLs en lotes pequeños para que Google las indexe de forma ordenada y no subamos carpetas que aún no están en producción.

---

## FASE 1 — SUBIR HOY (5 URLs nuevas)

### URLs a subir a Hostinger

| # | Carpeta local | URL producción | Keyword |
|---|---------------|----------------|---------|
| 1 | `public/app-inspeccion-tecnica/` | `/app-inspeccion-tecnica/` | app inspección técnica |
| 2 | `public/software-inspeccion-tecnica/` | `/software-inspeccion-tecnica/` | software inspección técnica |
| 3 | `public/deteccion-grietas-ia/` | `/deteccion-grietas-ia/` | detección grietas IA |
| 4 | `public/inspeccion-humedad/` | `/inspeccion-humedad/` | inspección humedad |
| 5 | `public/informes-tecnicos-ia/` | `/informes-tecnicos-ia/` | informes técnicos IA |

### Archivos raíz a subir también

| Archivo local | Destino Hostinger |
|---------------|-------------------|
| `public/index.html` | `public_html/index.html` |
| `public/sitemap.xml` | `public_html/sitemap.xml` |
| `public/llms.txt` | `public_html/llms.txt` |
| `public/.htaccess` | `public_html/.htaccess` |

### Páginas ya indexadas (no tocar contenido, solo enlaces actualizados)

- `/` — home
- `/inspeccion-tecnica-vivienda/`
- `/para-inspectores/`
- `/informe-inspeccion-tecnica/`
- `/privacy/`

### Sitemap Fase 1 = 10 URLs totales

Home + 4 SEO indexadas + 5 nuevas + privacy

### Checklist post-subida Fase 1

- [ ] Subir las 5 carpetas nuevas a `public_html/`
- [ ] Subir `index.html`, `sitemap.xml`, `llms.txt`, `.htaccess`
- [ ] **NO subir** carpetas de `docs/seo-pending/` (ver Fase 2)
- [ ] GSC → Sitemaps → reenviar `https://inspechron.com/sitemap.xml`
- [ ] GSC → Inspección de URLs → solicitar indexación de las 5 URLs nuevas
- [ ] Publicar en redes: `/app-inspeccion-tecnica/` o `/deteccion-grietas-ia/`
- [ ] Revisar GSC en 5–7 días (impresiones, clics, consultas)

---

## FASE 2 — OTRO DÍA (3 URLs guardadas)

**Ubicación en el repo:** `docs/seo-pending/` (NO están en `public/`)

| # | Carpeta | URL | Keyword | Estado |
|---|---------|-----|---------|--------|
| 1 | `inspeccion-pre-compra-vivienda/` | `/inspeccion-pre-compra-vivienda/` | inspección pre compra vivienda | Lista, pendiente deploy |
| 2 | `deteccion-humedad-grietas-ia/` | `/deteccion-humedad-grietas-ia/` | detección humedad y grietas IA | Lista, pendiente deploy |
| 3 | `informe-pre-entrega-vivienda/` | `/informe-pre-entrega-vivienda/` | informe pre entrega vivienda | Lista, pendiente deploy |

### Cuando toque Fase 2

1. Copiar cada carpeta de `docs/seo-pending/` → `public/`
2. Sincronizar a `dist/`
3. Añadir las 3 URLs al `sitemap.xml` (total 13 URLs)
4. Añadir enlaces en `index.html` sección `#recursos-seo`
5. Subir a Hostinger
6. GSC → reenviar sitemap + solicitar indexación de las 3 URLs

---

## FASE 3 — FUTURO (aún no creadas)

| URL propuesta | Keyword | Prioridad |
|---------------|---------|-----------|
| `/inspeccion-tecnica-edificios/` | inspección técnica edificios | Alta |
| `/inspeccion-lista-verificacion/` | lista verificación inspección | Media |
| `/inspeccion-para-aseguradoras/` | perito seguros inspección | Media |

**Evitar duplicar:** no crear `/software-inspeccion-edificios/` si ya existe `/inspeccion-tecnica-edificios/`.

---

## Estado GSC (30 jun 2026)

| URL | Indexación |
|-----|------------|
| `/` | Indexada |
| `/inspeccion-tecnica-vivienda/` | Indexada |
| `/para-inspectores/` | Indexada |
| `/informe-inspeccion-tecnica/` | Indexada |
| `/privacy/` | Indexada |
| 5 URLs Fase 1 | **Pendiente subir e indexar** |
| 3 URLs Fase 2 | **En repo, no en producción** |

**Nota:** `/informe-inspeccion-tecnica-pdf/` fue reemplazada por `/informe-inspeccion-tecnica/`. Redirect 301 en `.htaccess`.

---

## Cambios técnicos ya hechos (30 jun 2026)

- [x] HTML semántico en `#root` de `index.html` (h1, secciones, enlaces)
- [x] JSON-LD: Organization + WebSite + SoftwareApplication + FAQPage
- [x] Banner bilingüe ES/EN funcionando
- [x] Redirect 301 URL antigua `-pdf/`
- [x] Enlaces internos solo a URLs en producción (Fase 1)
- [x] 3 páginas Fase 2 movidas a `docs/seo-pending/`

---

## Pendientes generales

- [ ] Meta tag verificación Google en `index.html`
- [ ] WebP inglés correcto (~245 KB) en `/banners/hero-banner-en.webp`
- [ ] Footer React con links SEO (cuando recuperes código fuente)
- [ ] Reseñas Play Store → aggregateRating real en schema (futuro)

---

## Medición (sin SEMrush)

| Herramienta | Qué revisar | Frecuencia |
|-------------|-------------|------------|
| Google Search Console | Indexación, consultas, CTR | Semanal |
| PageSpeed Insights | LCP, rendimiento | Mensual |
| Analytics | Tráfico orgánico | Semanal |

---

## Nota

Actualizar este documento al completar Fase 1 (deploy) y al iniciar Fase 2.
