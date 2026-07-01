# Idiomas y versiones — Specialized Classes fichas web 2.6.3

## Objetivo

Evitar crear una página distinta por cada combinación de versión del mod e idioma.

En lugar de esto, la web usa:

```text
Una plantilla HTML dinámica
+ datos por versión del mod
+ textos de interfaz por idioma
+ parámetros URL persistentes
```

## Enlaces dinámicos

Ejemplo:

```text
clase.html?class=archivist&version=2.2.2&lang=en
```

Parámetros:

- `class`: clase abierta.
- `version`: versión del mod seleccionada.
- `lang`: idioma seleccionado.

## Idiomas disponibles

- `es`: español.
- `en`: inglés.
- `de`: alemán.
- `ru`: ruso.
- `uk`: ucraniano.
- `pt`: portugués.
- `fr`: francés.
- `ca`: catalán.
- `it`: italiano.

## Dónde se editan las traducciones

```text
data/i18n/i18n.js
data/i18n/content_i18n.js
```

`i18n.js` contiene idiomas, interfaz, nombres y descripciones principales. `content_i18n.js` contiene traducción de contenido versionado, etiquetas técnicas y el resolver de fallback.

## Orden de fallback

```text
1. idioma activo
2. inglés
3. español
4. texto técnico o identificador
```

La lógica principal no accede directamente a `name_es`, `summary_es`, `effectText_es`, etc. Usa `localizedField`, `localizedArray`, `mapText` y `contentText` en `assets/js/app.js`.

La prosa técnica sin traducción humana específica usa el fallback inglés. Los valores numéricos, conteos y stats siempre salen de los datos de la versión del mod seleccionada.

## Dónde se editan los datos por versión del mod

```text
data/mod_versions/<version>/classes_ES.js
data/mod_versions/<version>/traits_ES.js
data/mod_versions/<version>/recipes_summary_ES.js
data/mod_versions/<version>/usage_ES.js
```

## Regla importante

No dupliques HTML por idioma.
No crees carpetas como `/en/3.0.0/archivist.html` salvo que en el futuro quieras SEO avanzado.

Para esta web, lo correcto es mantener:

```text
clase.html?class=archivist&version=3.0.0-rc.1&lang=es
```

Así se evita crecimiento exponencial.

Las exportaciones no duplican páginas HTML ni archivos finales. `assets/js/app.js` construye un modelo con los datos de `version` y `lang`; `assets/js/png_export.js` lo dibuja sobre la plantilla WebP de la clase y descarga el PNG desde el navegador. El MD se crea del mismo modo bajo demanda.
