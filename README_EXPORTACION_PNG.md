# Exportación dinámica PNG/MD — web 2.6.5

`2.6.5` es la versión de la web/documentación, no una versión del mod Specialized Classes.

## Funcionamiento publicado

La web no almacena fichas PNG finales.

En la página principal:
- **Ficha PNG** abre la ficha PNG dinámica (`ficha_export.html`) de la clase, versión e idioma activos.
- **Ficha MD** abre el documento Markdown dinámico (`ficha_md.html`) de la clase, versión e idioma activos.

Dentro de la ficha PNG:
1. La web toma clase, versión del mod e idioma activos.
2. Construye el modelo localizado con título, resumen, stats, bonus, malus, recetas y categorías.
3. `assets/js/png_export.js` carga la plantilla WebP desde `fichas_png_plantillas/`.
4. La plantilla se carga como `Blob URL` local para evitar canvas tainted.
5. El navegador dibuja plantilla y textos en un Canvas de 1240×1754.
6. El botón **Exportar PNG** descarga `<clase>_<version>_<lang>.png` sin backend.

El documento MD se genera dinámicamente en navegador y puede descargarse desde la propia vista MD.

## Plantillas

```text
fichas_png_plantillas/
  assets/card_templates/3.0.0-rc.1/webp/
  data/card_templates.js
  data/card_template_manifest.json
  data/card_layouts/3.0.0-rc.1.json
```

## Validación recomendada

- Abrir `index.html?version=3.0.0-rc.1&lang=es`.
- Pulsar **Ficha PNG** en una clase.
- Confirmar que abre `ficha_export.html?...`.
- Pulsar **Exportar PNG** dentro de la ficha.
- Confirmar que descarga PNG.
- Volver a portada y pulsar **Ficha MD**.
- Confirmar que abre `ficha_md.html?...`.
