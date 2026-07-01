# CHANGELOG 2.6.5

## Corrección de flujo PNG/MD

- Las tarjetas principales ya no muestran botones de exportación directa.
- El enlace PNG abre `ficha_export.html` con `version`, `lang` y `class`.
- El enlace MD abre `ficha_md.html` con `version`, `lang` y `class`.
- El botón `Exportar PNG` solo aparece dentro de la vista de ficha PNG.
- El documento MD incluye botón opcional de descarga MD.

## Corrección técnica

- `assets/js/png_export.js` carga la plantilla mediante `fetch` + `Blob URL` antes de dibujar en Canvas.
- Esto evita el error del navegador: `Tainted canvases may not be exported`.

## Archivos principales

- `assets/js/app.js`
- `assets/js/png_export.js`
- `data/i18n/content_i18n.js`
- `ficha_md.html`
- `assets/css/styles.css`
