# CHANGELOG 2.6.3

`2.6.3` es la versión de la web/documentación, no una versión del mod Specialized Classes.

## i18n

- Resolver centralizado con fallback idioma activo → inglés → español → técnico.
- Eliminados accesos directos a campos terminados en `_es` desde el renderizado.
- Interfaz y contenido interno revisados para `es`, `en`, `de`, `ru`, `uk`, `pt`, `fr`, `ca` e `it`.
- Los datos traducidos se resuelven después de cargar la versión del mod activa.
- Las frases técnicas extensas sin traducción humana específica usan fallback inglés documentado.

## Exportaciones

- Nueva plantilla única `ficha_export.html` de 1240×1754.
- Exportador reproducible `scripts/export_png.cjs` basado en Playwright.
- PNG y MD separados por versión e idioma.
- Manifiesto de archivos para evitar enlaces rotos y aplicar fallback controlado.

## Compatibilidad

- Se mantienen `version` y `lang` en navegación y selectores.
- No se duplican páginas HTML por idioma ni versión.
- El proyecto continúa siendo estático y compatible con GitHub Pages.
