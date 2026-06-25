# Specialized Classes fichas web 2.5.0

## Cambios principales

- Añadido selector global de idioma en la parte superior de las páginas dinámicas.
- Idiomas incluidos: español, inglés, alemán, ruso, ucraniano y portugués.
- Corregido el bug por el cual una ficha podía cargar la versión principal aunque el usuario estuviera navegando otra versión del mod.
- Todos los enlaces dinámicos ahora propagan `version` y `lang`:

```text
clase.html?class=archivist&version=2.2.2&lang=en
```

- La versión y el idioma también se guardan en `localStorage` como respaldo.
- Arquitectura optimizada: no se crean páginas duplicadas por idioma y versión. Se mantiene una plantilla HTML dinámica y se separan datos versionados de textos de interfaz.

## Archivos modificados

- `assets/js/app.js`
- `index.html`
- `clase.html`
- `rasgos.html`
- `mecanicas.html`
- `historico_web.html`
- `versiones.html`
- `data/mod_versions/catalog_ES.js`
- `data/mod_versions/catalog_ES.json`
- `VERSION_DOCUMENTO.txt`
- `HISTORICO_WEB.md`

## Archivos añadidos

- `data/i18n/i18n.js`
- `CHANGELOG_2.5.0.md`
- `README_I18N_VERSIONES.md`

## Nota importante

Los datos objetivos siguen siendo únicos por versión del mod dentro de `data/mod_versions/`. El idioma traduce la interfaz y las capas humanas principales sin duplicar una web completa por cada combinación de versión e idioma.
