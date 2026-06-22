# Cómo actualizar datos en la versión 2.4.2

La web nueva no necesita tocar `index.html` para cambiar stats de rasgos.

## Archivos principales

```text
data/mod_versions/catalog_ES.js
data/mod_versions/3.0.0-rc.1/classes_ES.js
data/mod_versions/3.0.0-rc.1/traits_ES.js
data/mod_versions/3.0.0-rc.1/categories_ES.js
data/mod_versions/3.0.0-rc.1/recipes_summary_ES.js
```

## Cambio rápido de rasgos, bonus o malus

Edita:

```text
data/mod_versions/3.0.0-rc.1/traits_ES.js
```

Cada entrada de `effects` tiene:

- `classId`: clase afectada.
- `traitId`: rasgo.
- `kind`: `bonus`, `malus` o `desbloqueo`.
- `displayValue`: valor visible, por ejemplo `+25%`.
- `effectText_es`: texto humano que ve el jugador.
- `statKey`: nombre técnico conservado solo para trazabilidad.

## Añadir una versión nueva del mod

1. Copia la carpeta:

```text
data/mod_versions/3.0.0-rc.1/
```

2. Renómbrala, por ejemplo:

```text
data/mod_versions/3.0.1/
```

3. Actualiza sus cuatro archivos `.js`.
4. Añade la versión en:

```text
data/mod_versions/catalog_ES.js
```

## Sobre móvil

Esta versión usa `.js` como fuente dinámica porque muchos móviles bloquean cargar `.json` local desde `index.html`. También se incluyen `.json` espejo para edición, archivo, validación o uso futuro en web servida por HTTP.


## Añadido en 2.4.1: uso humano por clase

Archivo principal:

```text
data/mod_versions/3.0.0-rc.1/usage_ES.js
```

Si cambia una mecánica del mod, actualiza ahí:

- `classUsage.<clase>.howToUse_es`
- `classUsage.<clase>.keyObjects`
- `classUsage.<clase>.stations_es`
- `traitUsageNotes` si afecta a un rasgo concreto

La web dinámica lo mostrará en `clase.html` y `mecanicas.html`.


## Nota de versiones
La versión web/documentación no es la versión del mod. El selector de la web cambia la versión del mod analizada.


## Añadir o revisar Specialized Classes 2.2.2

Los datos de esta versión están en:

```text
data/mod_versions/2.2.2/classes_ES.js
data/mod_versions/2.2.2/traits_ES.js
data/mod_versions/2.2.2/categories_ES.js
data/mod_versions/2.2.2/recipes_summary_ES.js
data/mod_versions/2.2.2/usage_ES.js
```

El selector de versión se alimenta desde `data/mod_versions/catalog_ES.js`.


## Añadido en 2.4.2: Specialized Classes 2.2.2

La versión histórica del mod `2.2.2` queda añadida en:

```text
data/mod_versions/2.2.2/
```

Para seleccionarla en la web, usa el desplegable **Versión del mod analizada**.

