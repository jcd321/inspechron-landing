# Páginas SEO pendientes de deploy

Estas URLs están **listas en código** pero **no deben subirse a Hostinger** hasta el Deploy Fase 2.

Cuando toque publicarlas:
1. Copiar cada carpeta a `public/` (misma ruta)
2. Sincronizar a `dist/`
3. Añadir las 3 URLs al `sitemap.xml`
4. Actualizar enlaces en `index.html` y páginas relacionadas
5. **Ejecutar `npm run sync:deploy`** (copia public → raíz repo para Hostinger)
6. GSC → solicitar indexación

**Importante:** Hostinger despliega desde la **raíz del repo**, no desde `public/`. Siempre ejecuta `npm run sync:deploy` antes de commit + push para que banners, assets e index no se desincronicen.

| Carpeta | URL en producción | Keyword |
|---------|-------------------|---------|
| `inspeccion-pre-compra-vivienda/` | `/inspeccion-pre-compra-vivienda/` | inspección pre compra vivienda |
| `deteccion-humedad-grietas-ia/` | `/deteccion-humedad-grietas-ia/` | detección humedad y grietas IA |
| `informe-pre-entrega-vivienda/` | `/informe-pre-entrega-vivienda/` | informe pre entrega vivienda |

Ver plan completo: `docs/SEO-PLAN.md`
