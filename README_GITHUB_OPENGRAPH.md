# Open Graph en GitHub Pages

Para que al pegar el enlace se muestre una imagen, sube estos cambios al repositorio de GitHub Pages.

## Archivo nuevo
- `assets/preview-specialized-classes.png`

## Archivos HTML modificados
- `index.html`
- `clase.html`
- `rasgos.html`
- `mecanicas.html`
- `historico_web.html`
- `versiones.html`

## Qué se añadió al `<head>`
- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `og:image:width`
- `og:image:height`
- `twitter:card`
- `twitter:image`

La imagen apunta a:

```text
https://elyandrak.github.io/specializedclasses_fichas_web/assets/preview-specialized-classes.png?v=250
```

## Si no se actualiza la vista previa
WhatsApp, Discord y Telegram cachean las imágenes. Si sigue saliendo vacío o antiguo:

1. Espera unos minutos tras publicar GitHub Pages.
2. Abre directamente:
   `https://elyandrak.github.io/specializedclasses_fichas_web/assets/preview-specialized-classes.png?v=250`
3. Cambia `?v=250` por `?v=251` en los meta tags si necesitas forzar caché nueva.
4. En Discord, pega primero la URL con un parámetro nuevo:
   `https://elyandrak.github.io/specializedclasses_fichas_web/?v=250`

## Nota
Esto no cambia datos del mod. Solo cambia la previsualización al compartir el enlace.
