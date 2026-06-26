# Guía de imágenes — Inspechron Landing

Todas las imágenes van en `public/`. Vite las sirve automáticamente desde la raíz (`/brand/logo.png`, etc.).

## Estructura de carpetas

```
public/
├── brand/                    ← Logo y marca
│   └── logo.png              ✅ Ya colocado (logo Inspechron)
│
├── banners/                  ← Banners promocionales (formato ancho)
│   ├── hero-banner.png       ✅ Banner promocional (referencia)
│   ├── footer-banner.png     ✅ Banner del pie de página (principal)
│   └── og-image.png          ✅ Para compartir en redes
│
└── screenshots/
    ├── hero-mockup.png       ✅ Ya colocado (detección IA en cámara)
    └── walkthrough/          ← Secuencia "cómo usar la app" (en orden)
        ├── 01-splash.png           ✅ Pantalla de inicio / splash
        ├── 02-dashboard.png        ✅ Dashboard — todas tus inspecciones
        ├── 03-new-project.png      ✅ Crear proyecto por propiedad
        ├── 04-new-section.png      ✅ Dividir inspección por áreas
        ├── 05-camera-detection.png ✅ Capturar y detectar con IA
        └── 06-report.png           ✅ Generar informe en segundos
```

## Qué va en cada carpeta

### `brand/` — Identidad de marca

| Archivo | Qué poner | Dónde se usa |
|---------|-----------|--------------|
| `logo.png` | Logo principal PNG | Header y footer |
| `logo-white.png` | *(opcional)* Logo blanco para fondos oscuros | Footer alternativo |

> **Tip:** Si tu logo tiene fondo negro, exporta una versión con **fondo transparente** y reemplaza `logo.png`.

### `banners/` — Banners grandes

| Archivo | Qué poner | Dónde se usa |
|---------|-----------|--------------|
| `hero-banner.png` | Banner promocional ancho | Sección banner debajo del hero |
| `og-image.png` | Imagen 1200×630 px para redes | Facebook, Twitter, LinkedIn |

### `screenshots/walkthrough/` — Secuencia de la app

Los archivos deben llamarse exactamente `01-` a `06-` para mantener el orden.

| # | Archivo | Paso de la app |
|---|---------|----------------|
| 1 | `01-splash.png` | Splash / pantalla de bienvenida |
| 2 | `02-dashboard.png` | Dashboard principal |
| 3 | `03-new-project.png` | Organizar por propiedad |
| 4 | `04-new-section.png` | Dividir por áreas/secciones |
| 5 | `05-camera-detection.png` | Captura + detección IA |
| 6 | `06-report.png` | Generar informe PDF |

### `screenshots/` (raíz)

| Archivo | Qué poner | Dónde se usa |
|---------|-----------|--------------|
| `hero-mockup.png` | Imagen más impactante (detección en cámara) | Hero principal |

## Cómo reemplazar una imagen

1. Guarda tu nueva imagen con **el mismo nombre**
2. Refresca el navegador (`Ctrl + Shift + R`)
3. No hace falta reiniciar el servidor

## Formatos recomendados

- **PNG** para screenshots y logo
- Comprimir en [squoosh.app](https://squoosh.app) si pesan más de 500 KB
