# Incidencia aprendida para futuras versiones

Problema detectado anteriormente:
- Se llegó a partir de una base antigua y se reempaquetó más allá del alcance pedido.
- Eso arriesga sobrescribir o perder funciones ya presentes en la web, como la lógica de cambio dinámico de versión.

Causa raíz:
1. Trabajar desde una versión base que no era la última funcional correcta.
2. Tocar archivos fuera del alcance pedido cuando la solicitud era solo visual.

Regla de trabajo para evitar que vuelva a ocurrir:
- Si el cambio pedido es solo visual, modificar **solo** assets visuales y, como mucho, la documentación de versión.
- No tocar HTML, JS, JSON de datos ni mecánicas de la web salvo petición explícita.
- Tomar siempre como base la última versión funcional correcta indicada por el usuario.
