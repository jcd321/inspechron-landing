# Plan SEO Inspechron — 30 días

**Sitio:** https://inspechron.com  
**Objetivo:** Aparecer en Google para búsquedas de inspección técnica, inspectores y la marca Inspechron.  
**Inicio del plan:** 21 de junio de 2026  
**Última actualización:** 24 de junio de 2026 — Privacidad en web ✅ | Reindexación home + privacy solicitada ✅

---

## Progreso general

| Semana | Enfoque | Estado |
|--------|---------|--------|
| Semana 1 | Indexación y enlaces off-page | 🟢 Completada (días 1–7) |
| Semana 2 | Optimización on-page | 🟡 Días 8–12 ✅ | Días 13–14 pendientes |
| Semana 3 | Contenido y long-tail | ⬜ Pendiente |
| Semana 4 | Autoridad y off-page | ⬜ Pendiente |

---

## Registro diario

### Día 1 — 21 jun 2026 — Indexación: Google Search Console

**Tareas del día**

- [x] Crear documento de plan SEO (`docs/SEO-PLAN.md`)
- [x] Auditar estado actual: `robots.txt` y `sitemap.xml` ya configurados en producción
- [x] Preparar meta tag de verificación GSC en `index.html` (listo para pegar tu código)
- [x] Actualizar `lastmod` del sitemap a fecha actual
- [x] **TÚ:** Crear cuenta en [Google Search Console](https://search.google.com/search-console)
- [x] **TÚ:** Añadir propiedad `inspechron.com` (verificación por DNS)
- [x] **TÚ:** Verificar dominio vía registro TXT en Hostinger
- [x] **TÚ:** Propiedad verificada correctamente (21 jun 2026)
- [x] **TÚ:** Confirmar que `https://inspechron.com/robots.txt` responde correctamente

**Resumen del día 1:** ✅ Completado. Dominio verificado en GSC por DNS (Hostinger). Google ya reconoce que eres dueño de inspechron.com.

---

### Día 2 — 21 jun 2026 — Enviar sitemap y solicitar indexación ✅ COMPLETADO

**Tareas del día**

- [x] En GSC → **Sitemaps** → enviar `https://inspechron.com/sitemap.xml`
- [x] Google detectó **2 páginas** en el sitemap
- [x] Solicitar indexación de `https://inspechron.com/`
- [x] Solicitar indexación de `https://inspechron.com/privacy/`
- [ ] Revisar en 3–5 días el informe de **Páginas** en GSC (pendiente automático)

**Resumen día 2:** ✅ Sitemap enviado. Indexación solicitada para home y privacidad. Google rastreará en 1–7 días.

---

### Día 3 — 22 jun 2026 — Bing Webmaster Tools ✅ COMPLETADO

**Tareas del día**

- [x] Crear cuenta en [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [x] Importar sitio desde Google Search Console (cuenta `jcd.cuello@gmail.com`)
- [x] Confirmar que `inspechron.com` aparece verificado en Bing
- [x] Enviar sitemap: `https://inspechron.com/sitemap.xml` (estado: Processing)
- [ ] Comprobar en 24–48 h que Bing detecta las 2 URLs (pendiente automático)

**Resumen día 3:** ✅ Sitio importado y sitemap enviado en Bing. Datos en procesamiento (hasta 48 h).

**Bonus del día:** ✅ Google indexó la home — "La URL está en Google" en GSC.

---

### Día 4 — 22 jun 2026 — Revisión de indexación en GSC ✅ COMPLETADO

**Tareas del día**

- [x] Revisar GSC → **Inspección de URL** → `https://inspechron.com/` → **Indexada**
- [x] Revisar GSC → **Inspección de URL** → `https://inspechron.com/privacy/` → **Indexada**
- [x] Buscar en Google: `site:inspechron.com` → **2 páginas** aparecen
- [x] Anotado: 2 URLs indexadas (home + privacidad)

**Resumen día 4:** ✅ Sitio visible en Google. Búsqueda `site:inspechron.com` muestra home y privacidad.

---

### Día 5 — 22 jun 2026 — Enlaces desde tus canales ✅ COMPLETADO

**Tareas del día**

- [x] Instagram → bio con enlace a `https://inspechron.com`
- [x] Facebook → sitio web + enlaces revisados y ajustados
- [x] Enlaces unificados (https, coherencia de marca)
- [x] Google Play → URL del sitio web: `https://inspechron.com`
- [ ] Email de firma → enlace a la web (opcional)

**Resumen día 5:** ✅ Redes sociales enlazando correctamente a la web.

---

### Día 6 — 26 jun 2026 — Comprobar indexación ✅ COMPLETADO

**Tareas del día**

- [x] Buscar `site:inspechron.com` en Google → 2 páginas indexadas
- [x] Buscar `Inspechron` en Google → aparece la marca
- [ ] Revisar GSC → Rendimiento (si ya hay datos de impresiones)
- [x] Home indexada — no fue necesario volver a solicitar indexación

**Resumen día 6:** ✅ Sitio visible. Búsqueda de marca funciona.

---

### Día 7 — 27 jun 2026 — Cierre semana 1 ✅ COMPLETADO

**Tareas del día**

- [x] Indexación confirmada — no hizo falta repetir solicitud
- [x] Redes sociales enlazan correctamente a la web
- [x] Registro diario actualizado
- [x] Semana 1 marcada como completada

**Resumen día 7:** ✅ Semana 1 cerrada. Base de indexación lista para optimización on-page.

---

## Semana 2 — Optimización on-page

### Día 8 — 22 jun 2026 — Título optimizado ✅ COMPLETADO

- [x] Actualizar `<title>` con keywords: inspección técnica, inspectores, IA
- [x] Sincronizar `src/i18n/es.ts`, `src/i18n/en.ts` e `index.html`
- [x] Unificar canonical (`CANONICAL_HOME`) para evitar duplicados en GSC
- [x] Deploy en Hostinger — title en vivo: *"Inspechron — App de inspección técnica con IA para inspectores"*
- [x] Solicitar reindexación en GSC (24 jun 2026 — home)

### Día 9 — 22 jun 2026 — Meta description ✅ COMPLETADO

- [x] Reescribir description con CTA y palabras clave de intención
- [x] Actualizar Open Graph y Twitter Cards
- [x] Deploy en Hostinger confirmado

**Bonus (extra del plan):** Favicon real generado desde logo oficial (`favicon-16/32/48/192.png`, `favicon.ico`, `apple-touch-icon.png`). Google tarda 1–4 semanas en actualizar el icono en SERP.

### Día 10 — 30 jun 2026 — Alt text en imágenes ✅ COMPLETADO (código)

- [x] Walkthrough: `imageAlt` descriptivo en los 6 pasos (`es.ts` / `en.ts`)
- [x] `AppWalkthrough.tsx` usa `step.imageAlt` en lugar del título
- [x] Logo: alt *"Inspechron — app de inspección técnica con IA"*
- [x] Promo banner ya tenía alt en i18n
- [x] Deploy (24 jun 2026)

### Día 11 — 1 jul 2026 — Más contenido en home ✅ COMPLETADO

- [x] Sección `SeoContent.tsx` (~650 palabras ES / EN)
- [x] H2 principal + 4 H3 con keywords long-tail
- [x] Integrada en `App.tsx` (entre Pricing y FAQ)
- [x] Deploy y solicitar indexación en GSC (24 jun 2026 — home)

### Día 12 — 2 jul 2026 — Jerarquía de encabezados ✅ AUDITADO

- [x] Un solo `<h1>` en `Hero.tsx` ✅
- [x] Cada sección tiene su `<h2>`; subsecciones usan `<h3>` / `<h4>` correctamente
- [x] Nueva sección SEO sigue la jerarquía H2 → H3
- [x] No se requieren correcciones

### Privacidad — migración GitHub → web ✅ COMPLETADO (24 jun 2026)

- [x] Contenido legal publicado en `https://inspechron.com/privacy/`
- [x] URL actualizada en Google Play Console
- [ ] Enviar cambio a revisión en Play Console (botón "Enviar 1 cambio a revisión")
- [x] Solicitar indexación de `/privacy/` en GSC
- [ ] (Opcional) Actualizar README en repo GitHub con enlace a URL oficial

### Día 13 — 3 jul 2026 — Analytics

- [ ] Activar Plausible o Google Analytics
- [ ] Pegar ID en `src/config.ts` → `ANALYTICS_ID`
- [ ] Verificar que recibe visitas en tiempo real

### Día 14 — 4 jul 2026 — Velocidad (Core Web Vitals)

- [ ] Probar en [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Corregir problemas críticos (LCP, CLS, INP)
- [ ] Revisar informe en GSC → Experiencia

---

## Semana 3 — Contenido y long-tail

### Día 15 — 5 jul 2026 — Página `/inspeccion-tecnica-vivienda`

- [ ] Crear página con 500+ palabras únicas
- [ ] Title, description y schema propios
- [ ] Añadir al sitemap

### Día 16 — 6 jul 2026 — Página `/para-inspectores`

- [ ] Landing para inspectores independientes
- [ ] CTA a Google Play
- [ ] Añadir al sitemap

### Día 17 — 7 jul 2026 — Página `/informe-inspeccion-tecnica-pdf`

- [ ] Contenido sobre informes PDF con IA
- [ ] Enlazar desde home (enlace interno)
- [ ] Añadir al sitemap

### Día 18 — 8 jul 2026 — Actualizar sitemap

- [ ] Incluir todas las URLs nuevas
- [ ] Actualizar `lastmod`
- [ ] Reenviar sitemap en GSC

### Día 19 — 9 jul 2026 — Indexar páginas nuevas

- [ ] Solicitar indexación de cada URL nueva en GSC
- [ ] Comprobar que responden 200 OK

### Día 20 — 10 jul 2026 — Redes sociales

- [ ] Publicar 1 post en Instagram/Facebook enlazando a una página SEO
- [ ] Usar hashtags: #inspeccióntécnica #inspectores #proptech

### Día 21 — 11 jul 2026 — Revisión GSC

- [ ] Revisar consultas con impresiones en GSC → Rendimiento
- [ ] Anotar top 5 consultas
- [ ] Ajustar contenido según consultas reales

---

## Semana 4 — Autoridad y off-page

### Día 22 — 12 jul 2026 — Reseñas Google Play

- [ ] Pedir 3–5 reseñas a usuarios piloto
- [ ] Responder cada reseña en Play Store

### Día 23 — 13 jul 2026 — Directorios

- [ ] Crear perfil LinkedIn Company para Inspechron
- [ ] Añadir enlace a la web en el perfil

### Día 24 — 14 jul 2026 — Artículo guía

- [ ] Escribir: "Cómo hacer una inspección técnica de vivienda en 2026"
- [ ] Publicar como página `/blog/inspeccion-tecnica-guia` o similar
- [ ] Añadir al sitemap

### Día 25 — 15 jul 2026 — Outreach

- [ ] Contactar 1 blog de construcción o proptech para mención o guest post
- [ ] Registrar intento en este doc

### Día 26 — 16 jul 2026 — Core Web Vitals

- [ ] Revisar GSC → Experiencia → Core Web Vitals
- [ ] Corregir URLs en estado "Necesita mejora"

### Día 27 — 17 jul 2026 — Posiciones

- [ ] Buscar: `inspechron`, `app inspección técnica`, `inspector vivienda app`
- [ ] Anotar posición aproximada (página 1, 2, 3… o no aparece)

### Días 28–30 — 18–20 jul 2026 — Mantenimiento

- [ ] 1 contenido nuevo o mejora de página existente
- [ ] 1 enlace externo nuevo (red, directorio, mención)
- [ ] Revisión semanal GSC
- [ ] Actualizar este documento con resultados del mes

---

## Palabras clave objetivo

| Prioridad | Keyword | Competencia | ¿Objetivo realista? |
|-----------|---------|-------------|---------------------|
| Alta | Inspechron | Baja | ✅ Sí (2–4 semanas) |
| Alta | app inspección técnica | Baja | ✅ Sí (2–6 meses) |
| Media | inspector de viviendas app | Media | ✅ Sí (3–6 meses) |
| Media | informe inspección técnica PDF | Baja | ✅ Sí |
| Media | software para inspectores | Baja | ✅ Sí |
| Baja | inmobiliaria | Muy alta | ❌ No es tu nicho |

---

## Lo que ya estaba hecho (antes del plan)

- [x] Meta title, description, keywords
- [x] Open Graph y Twitter Cards
- [x] `robots.txt` con referencia al sitemap
- [x] `sitemap.xml` (home + privacidad)
- [x] Schema.org: Organization, WebSite, SoftwareApplication, FAQPage
- [x] Canonical y hreflang
- [x] Contenido `<noscript>` para crawlers
- [x] Componente `SeoHead.tsx` dinámico por idioma

---

## Pendiente de tu acción (Día 1)

1. Entra en https://search.google.com/search-console
2. **Añadir propiedad** → URL: `https://inspechron.com`
3. Elige método de verificación:
   - **Opción A (recomendada):** Registro DNS TXT en tu proveedor de dominio
   - **Opción B:** Meta tag HTML → copia el código y pégalo en `index.html` (línea marcada con `GOOGLE SITE VERIFICATION`), haz deploy, y pulsa Verificar
4. Cuando esté verificado, avísame y pasamos al **Día 2** (sitemap + indexación)

---

## Expectativas de tiempo

| Objetivo | Tiempo estimado |
|----------|-----------------|
| Aparecer indexado (`site:inspechron.com`) | 1–2 semanas |
| Aparecer al buscar "Inspechron" | 2–4 semanas |
| Posiciones para "app inspección técnica" | 2–6 meses |
| "Inmobiliaria" genérico | No es objetivo realista |

---

## Notas y aprendizajes

_Añade aquí observaciones cada día (impresiones GSC, errores, ideas de contenido)._

- **22 jun 2026:** ✅ Día 5 completado. Instagram y Facebook enlazan a https://inspechron.com.
- **22 jun 2026:** ✅ Días 8–9 desplegados. Title nuevo visible en producción. Canonical unificado.
- **22 jun 2026:** ✅ Favicon real desplegado desde logo oficial. Esperar 1–4 semanas en Google SERP.
- **21 jun 2026:** ✅ Días 10–12 desplegados (alt text, sección SEO, auditoría H1).
- **24 jun 2026:** ✅ Política de privacidad real en `/privacy/`. Play Store URL actualizada. Reindexación solicitada (home + privacy).
- **Pendiente:** Google puede tardar días/semanas en actualizar title/description en resultados de búsqueda.
- **Pendiente:** Bing sitemap — comprobar si pasó de "Processing" a "Success".
