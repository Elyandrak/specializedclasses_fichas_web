# CHANGELOG 2.6.4

`2.6.4` es la versión de la web/documentación, no una versión del mod Specialized Classes.

## Exportación dinámica

- Nuevo renderizador Canvas `assets/js/png_export.js`.
- Botones PNG y MD generan la ficha activa bajo demanda en el navegador.
- El nombre descargado incluye clase, versión del mod e idioma.
- `ficha_export.html` muestra la misma plantilla dinámica usada para descargar.

## Plantillas y tamaño

- `fichas_png_plantillas/` pasa a ser la fuente visual reutilizable.
- Se conserva solo WebP; se retira la copia PNG redundante de cada plantilla.
- Eliminados los 279 PNG finales de `fichas_png/` de la web activa.
- Eliminada también la copia estática `fichas_md/`; el botón MD la genera bajo demanda.
- Eliminado `data/png_manifest.js`, sustituido por un manifiesto ligero de plantillas.

## Compatibilidad

- Sin backend ni dependencias de ejecución en producción.
- `version` y `lang` siguen conservándose durante la navegación.
- Los datos objetivos siguen cargándose desde `data/mod_versions/<version>/`.
- La generación en lote queda como herramienta opcional con salida externa.
