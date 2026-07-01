# Plan SEO Inspechron — 60 días (jul–ago 2026)

**Sitio:** https://inspechron.com  
**Inicio del plan:** 30 jun 2026  
**Horizonte:** 60 días (hasta ~30 ago 2026)  
**Herramientas:** Google Search Console (principal), PageSpeed Insights, Analytics  
**SEMrush:** pospuesto (requiere plan de pago; última auditoría 96% salud)

---

## Resumen ejecutivo

| Área | Estado al 30 jun 2026 |
|------|------------------------|
| URLs en sitemap | 10 |
| Fase 1 indexada | 5/5 |
| PageSpeed móvil | Rendimiento 92 · SEO 100 · Accesibilidad 100 |
| GSC (7 días) | 24 clics · 36 impresiones · CTR 66,7% · posición media 5,1 |
| CrUX (datos reales) | Sin datos aún (tráfico bajo, normal) |
| Banner ES/EN | Funcionando |
| Fase 2 (3 URLs) | Listas en `docs/seo-pending/`, sin publicar |
| Fase 3 (3+ URLs) | Por crear |

**Objetivo 60 días:** pasar de indexación inicial a tráfico orgánico estable, publicar Fase 2 y Fase 3, y ganar autoridad con redes + contenido.

---

## Mapa completo de URLs

### En producción e indexadas (10)

| URL | Keyword principal | Indexada |
|-----|-------------------|----------|
| `/` | app inspección técnica IA | Sí |
| `/inspeccion-tecnica-vivienda/` | inspección técnica vivienda | Sí |
| `/para-inspectores/` | software para inspectores | Sí |
| `/informe-inspeccion-tecnica/` | informe inspección técnica PDF | Sí |
| `/app-inspeccion-tecnica/` | app inspección técnica | Sí |
| `/software-inspeccion-tecnica/` | software inspección técnica | Sí |
| `/deteccion-grietas-ia/` | detección grietas IA | Sí |
| `/inspeccion-humedad/` | inspección humedad | Sí |
| `/informes-tecnicos-ia/` | informes técnicos IA | Sí |
| `/privacy/` | privacidad | Sí |

### Fase 2 — pendiente deploy (3)

**Ubicación:** `docs/seo-pending/` → copiar a raíz del repo antes de deploy.

| URL | Keyword |
|-----|---------|
| `/inspeccion-pre-compra-vivienda/` | inspección pre compra vivienda |
| `/deteccion-humedad-grietas-ia/` | detección humedad y grietas IA |
| `/informe-pre-entrega-vivienda/` | informe pre entrega vivienda |

### Fase 3 — por crear (mes 2)

| URL propuesta | Keyword | Prioridad |
|---------------|---------|-----------|
| `/inspeccion-tecnica-edificios/` | inspección técnica edificios | Alta |
| `/inspeccion-lista-verificacion/` | lista verificación inspección | Media |
| `/inspeccion-para-aseguradoras/` | perito seguros inspección | Media |

---

## Regla crítica de deploy (Hostinger Git)

Hostinger despliega desde la **raíz del repo** → `public_html`.

| Acción | Dónde |
|--------|--------|
| Crear/editar páginas SEO | `landing-page/public/` + **copiar a raíz repo** |
| Sitemap, index, llms | Actualizar en **raíz** (`/sitemap.xml`, `/index.html`) |
| NO subir aún | `docs/seo-pending/` hasta Fase 2 |

Tras cada cambio SEO: commit → redeploy Hostinger → verificar `inspechron.com/sitemap.xml` → GSC.

---

## Lo ya completado (jun 2026)

- [x] Indexación inicial GSC + sitemap
- [x] 3 páginas SEO originales (vivienda, inspectores, informe)
- [x] Fase 1: 5 URLs nuevas desplegadas e indexadas
- [x] Sitemap con 10 URLs en producción
- [x] Fix deploy raíz vs `landing-page/public/`
- [x] HTML semántico + JSON-LD en home
- [x] Banner bilingüe ES/EN
- [x] Redirect 301 `/informe-inspeccion-tecnica-pdf/` → `/informe-inspeccion-tecnica/`
- [x] PageSpeed: 92 rendimiento · 100 SEO (móvil)
- [x] 3 URLs Fase 2 guardadas en `docs/seo-pending/`

---

# MES 1 — Julio 2026 (días 1–30)

## Semana 1 (30 jun – 6 jul) — Consolidar Fase 1

- [x] Fase 1 desplegada e indexada (5/5)
- [ ] GSC → Rendimiento → revisar pestaña **Consultas** (qué buscan antes de encontrarte)
- [ ] GSC → Rendimiento → pestaña **Páginas** (impresiones por URL nueva)
- [ ] Publicación redes #1: `/deteccion-grietas-ia/`
- [ ] Publicación redes #2: `/app-inspeccion-tecnica/` + link Google Play
- [ ] Subir WebP inglés correcto (~245 KB) en `/banners/hero-banner-en.webp`

**Meta semana:** primeras impresiones en URLs Fase 1 en GSC.

---

## Semana 2 (7 – 13 jul) — Redes + medición

- [ ] Publicación redes #3: `/inspeccion-humedad/`
- [ ] Publicación redes #4: `/software-inspeccion-tecnica/`
- [ ] GSC → comparar impresiones vs semana 1
- [ ] Anotar top 5 consultas reales (aunque sean pocos datos)
- [ ] Activar meta tag verificación Google en `index.html` (si aún no)

**Meta semana:** al menos 1 URL Fase 1 con impresiones en GSC → Páginas.

---

## Semana 3 (14 – 20 jul) — Preparar Fase 2

- [ ] Publicación redes #5: `/informes-tecnicos-ia/`
- [ ] Publicación redes #6: `/inspeccion-tecnica-vivienda/` (reutilizar contenido)
- [ ] Copiar Fase 2 de `docs/seo-pending/` → raíz repo
- [ ] Actualizar `sitemap.xml` (13 URLs)
- [ ] Actualizar enlaces en `index.html` y páginas relacionadas
- [ ] Deploy Hostinger + verificar sitemap en producción

**Meta semana:** Fase 2 lista en producción.

---

## Semana 4 (21 – 27 jul) — Indexar Fase 2

- [ ] GSC → reenviar sitemap
- [ ] Solicitar indexación de las 3 URLs Fase 2
- [ ] Publicación redes #7: `/inspeccion-pre-compra-vivienda/`
- [ ] Revisión mensual PageSpeed (objetivo: mantener 90+)
- [ ] Documentar métricas mes 1 en este archivo (clics, impresiones, consultas)

**Meta mes 1:** 13 URLs en sitemap · Fase 2 indexándose · 7+ posts en redes.

---

# MES 2 — Agosto 2026 (días 31–60)

## Semana 5 (28 jul – 3 ago) — Confirmar Fase 2

- [ ] Verificar indexación 3/3 URLs Fase 2 en GSC
- [ ] Publicación redes #8: `/deteccion-humedad-grietas-ia/`
- [ ] Publicación redes #9: `/informe-pre-entrega-vivienda/`
- [ ] Analizar consultas: ¿aparecen términos long-tail (grietas, humedad, informe PDF)?

---

## Semana 6 (4 – 10 ago) — Crear Fase 3 (1ª URL)

- [ ] Crear `/inspeccion-tecnica-edificios/` (prioridad alta)
- [ ] Copiar a raíz repo + actualizar sitemap (14 URLs)
- [ ] Deploy + solicitar indexación
- [ ] Publicación redes con nueva URL

**Meta:** 14 URLs en sitemap.

---

## Semana 7 (11 – 17 ago) — Fase 3 continúa

- [ ] Crear `/inspeccion-lista-verificacion/` o `/inspeccion-para-aseguradoras/` (elegir 1)
- [ ] Deploy + indexación
- [ ] Revisar GSC: ¿alguna URL Fase 1 recibe clics?
- [ ] Ajustar title/description de la URL con más impresiones si Google muestra otro snippet

---

## Semana 8 (18 – 24 ago) — Autoridad y cierre mes 2

- [ ] Crear 3ª URL Fase 3 (la que falte)
- [ ] Pedir 2–3 reseñas en Google Play (base para schema futuro)
- [ ] Publicar en LinkedIn (si aplica): enfoque B2B constructoras/inspectores
- [ ] Revisión completa GSC mes 2: clics, impresiones, CTR, posición por página
- [ ] Decidir si repetir SEMrush (si hay presupuesto)

**Meta mes 2:** 15–16 URLs · tráfico orgánico en crecimiento · consultas long-tail visibles.

---

## Calendario de publicaciones en redes (referencia 8 semanas)

| Semana | URL sugerida | Canal |
|--------|--------------|-------|
| 1 | `/deteccion-grietas-ia/` | FB / IG |
| 1 | `/app-inspeccion-tecnica/` | FB / IG |
| 2 | `/inspeccion-humedad/` | FB / IG |
| 2 | `/software-inspeccion-tecnica/` | FB / IG |
| 3 | `/informes-tecnicos-ia/` | FB / IG |
| 3 | `/inspeccion-tecnica-vivienda/` | FB / IG |
| 4 | `/inspeccion-pre-compra-vivienda/` | FB / IG (post Fase 2) |
| 5 | `/deteccion-humedad-grietas-ia/` | FB / IG |
| 5 | `/informe-pre-entrega-vivienda/` | FB / IG |
| 6 | `/inspeccion-tecnica-edificios/` | FB / IG (nueva) |
| 7–8 | Rotar URLs con más tráfico en GSC | FB / IG / LinkedIn |

**Formato post:** problema concreto + URL completa de la página SEO + CTA Google Play.

---

## Expectativas realistas (60 días)

| Plazo | Qué es normal | Qué NO esperar |
|-------|---------------|----------------|
| 1–2 semanas | Impresiones en URLs nuevas en GSC | Top 10 en "inspección con IA" |
| 1 mes | Consultas long-tail, algunos clics | Miles de visitas orgánicas |
| 2 meses | Crecimiento gradual, 13–16 URLs indexadas | Competir con marcas grandes |
| 3–6 meses | Mejor posicionamiento en keywords objetivo | Resultados sin redes ni contenido |

**Indexada ≠ posicionada.** Buscar tu keyword a diario no refleja el progreso real; usa GSC semanalmente.

---

## Pendientes técnicos (durante los 60 días)

- [ ] Meta tag verificación Google en `index.html`
- [ ] WebP inglés correcto (~245 KB) en Hostinger
- [ ] Footer React con links SEO (cuando recuperes código fuente)
- [ ] Reseñas Play Store → `aggregateRating` en schema (solo con reseñas reales)
- [ ] Sincronizar `landing-page/public/` ↔ raíz repo en cada deploy SEO

---

## Medición quincenal (plantilla)

Copiar y rellenar cada ~15 días en este documento:

```
Fecha: __/__/2026
GSC clics (28 d): ___
GSC impresiones (28 d): ___
CTR: ___%
Posición media: ___
URLs con impresiones: ___
Top 3 consultas: 1) ___ 2) ___ 3) ___
Posts redes publicados: ___
Notas: ___
```

---

## Hitos al final de 60 días (30 ago 2026)

| Hito | Objetivo |
|------|----------|
| URLs en sitemap | 15–16 |
| URLs indexadas | 13+ mínimo |
| Posts en redes | 8–12 mínimo |
| GSC impresiones (28 d) | > 100 (crecimiento vs 36 actuales) |
| GSC clics (28 d) | > 50 |
| Fase 2 | Desplegada e indexada |
| Fase 3 | Al menos 2 URLs creadas |
| PageSpeed móvil | Mantener 90+ rendimiento, 100 SEO |

---

## Nota de mantenimiento

Actualizar este documento al completar cada semana o hito relevante. Marcar checkboxes `[x]` y rellenar la plantilla de medición quincenal.

**Última actualización:** 30 jun 2026 — Plan extendido a 60 días. Fase 1 completada e indexada.
