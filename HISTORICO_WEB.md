# Web 2.6.5

- Corregido el flujo de enlaces de las tarjetas principales.
- `Ficha PNG` abre ahora la vista dinámica de ficha PNG.
- `Ficha MD` abre ahora el documento MD dinámico.
- El botón `Exportar PNG` queda solo dentro de la ficha PNG.
- Añadida página dinámica `ficha_md.html`.
- Corregida la exportación PNG para evitar el error `Tainted canvases may not be exported` cargando plantillas como Blob local antes de dibujar en Canvas.

# Web 2.6.4

- Eliminada de la web activa la carpeta `fichas_png/` con 279 capturas finales repetidas.
- Eliminada la carpeta estática `fichas_md/`; los Markdown se descargan ahora bajo demanda.
- Las fichas PNG se dibujan bajo demanda en Canvas a partir de plantillas WebP de `fichas_png_plantillas/`.
- Texto, stats, bonus, malus, recetas y categorías se inyectan desde la versión del mod y el idioma activos.
- Los botones de exportación generan nombres con clase, versión e idioma y funcionan sin backend.
- `data/png_manifest.js` deja de ser necesario; `card_templates.js` actúa como manifiesto ligero de plantillas.
- La exportación en lote es opcional y escribe por defecto fuera de la carpeta web publicada.
- `2.6.4` identifica la versión de la web/documentación; no es una versión del mod.

# Web 2.6.3

- Resolver único de textos con prioridad: idioma activo → inglés → español → texto técnico.
- Eliminados los accesos directos a campos `_es` desde la lógica de renderizado.
- Clases, rasgos, efectos, herramientas, mecánicas, categorías y ayudas usan la versión del mod y el idioma activos.
- Enlaces PNG y MD versionados, localizados y comprobados mediante manifiesto para no generar enlaces rotos.
- Plantilla de exportación y script Playwright reproducible para todas las combinaciones soportadas.
- `2.6.3` identifica la versión de la web/documentación; no es una versión del mod.

# Web 2.6.2

- Base usada: `2.6.1` como última versión funcional correcta.
- Menú lateral dinámico de clases en la portada, con drawer hamburguesa responsive.
- Francés, catalán e italiano añadidos al selector global con traducciones mínimas coherentes.
- Enlace traducido a la web oficial del mod en el panel inicial.
- Persistencia verificada de `version` y `lang` en los enlaces del nuevo menú.
- Ajuste visual de `assets/personajes/*` para mejorar encuadre y presencia en ficha.
- Sin cambios en los datos del mod ni en la lógica de carga por versión.
