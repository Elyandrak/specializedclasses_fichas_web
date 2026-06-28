# Exportación PNG por versión e idioma

La web 2.6.3 genera las fichas PNG desde `ficha_export.html`, la misma capa de datos e i18n usada por las páginas dinámicas. No se dibujan manualmente y no se usa IA. El exportador levanta un servidor HTTP local efímero para reproducir el comportamiento de GitHub Pages.

## Preparación

```powershell
npm install
```

## Generar todas las fichas

```powershell
npm run export:png
```

El comando crea:

```text
fichas_png/<version>/<lang>/<ficha>.png
```

También genera los MD localizados en `fichas_md/<version>/<lang>/` y regenera `data/png_manifest.js`. La web consulta ese manifiesto para ofrecer los archivos del idioma y versión activos. Si falta una combinación, prueba inglés y después español; si tampoco existe, muestra un estado no disponible y no crea un enlace roto.

## Generación parcial

```powershell
node scripts/export_png.cjs --versions=2.2.2 --languages=de,fr
```

Variables opcionales:

- `SC_BROWSER_EXECUTABLE`: ruta a Chrome/Edge/Chromium si Playwright no tiene navegador instalado.

La plantilla se captura a `1240×1754` píxeles. Los valores, conteos, stats y categorías siempre proceden de `data/mod_versions/<version>/`.
