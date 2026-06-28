# fichas_png_plantillas

Carpeta base para sustituir las fichas PNG estáticas por fichas dinámicas exportables.

## Qué contiene

- `assets/card_templates/3.0.0-rc.1/webp/`: plantillas ligeras por clase.
- `assets/card_templates/3.0.0-rc.1/png/`: mismas plantillas en PNG como respaldo editable.
- `data/card_layouts/3.0.0-rc.1.json`: coordenadas donde inyectar título, stats, bonus, malus, recetas y categorías.
- `data/card_template_manifest.json`: manifiesto de versiones/clases/plantillas.
- `scripts/create_templates_from_static_png.py`: script reproducible para regenerar estas plantillas desde PNG estáticos.
- `demo/demo_template.html`: ejemplo mínimo de overlay HTML encima de una plantilla.

## Idea de uso

La web no debería guardar 279 PNG finales.  
Debe guardar una plantilla visual por clase y generar el texto en tiempo real según:

```text
version activa + lang activo + classId
```

Después, el botón `Exportar PNG` captura la ficha renderizada en navegador.

## Importante

Estas plantillas se han creado desde los PNG españoles de `3.0.0-rc.1`.  
El texto se ha eliminado por zonas. Las plantillas conservan:

- marco
- fondo
- retrato de la clase
- strip visual de iconos/categorías

El texto debe inyectarse desde el sistema i18n/datos de la web.

## Nota de precisión

Es una primera base funcional: las zonas de texto se limpian con rectángulos oscuros para permitir inyección dinámica. Si después quieres un acabado perfecto, el siguiente paso es sustituir estos PNG base por fondos diseñados desde capas o ajustar coordenadas finas por clase.
