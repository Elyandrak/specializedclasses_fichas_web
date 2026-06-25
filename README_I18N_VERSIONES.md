# Idiomas y versiones — Specialized Classes fichas web 2.5.0

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

## Dónde se editan las traducciones

```text
data/i18n/i18n.js
```

Ahí están los textos de interfaz, nombres humanos de clases, descripciones y traducciones auxiliares.

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
