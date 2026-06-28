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
