# Specialized Classes 3.0.0-rc.1 — Datos objetivos de clases

**Enfoque:** estadísticas y datos reales de la versión actual del ZIP. La interpretación subjetiva se limita a una nota corta por clase.

## Fuentes utilizadas
- Mod original: `specializedclasses_3.0.0-rc.1.zip`.
- Configuración de clases: `assets/specializedclasses/config/characterclasses.json`.
- Configuración de rasgos/estadísticas: `assets/specializedclasses/config/traits.json`.
- Traducción ES usada: `assets/specializedclasses/lang/es-es.json` del paquete C4B, centrado en Specialized Classes.
- Análisis previo usado solo como apoyo de estructura, no como fuente de números.

## Cómo leer los números
- `0.50` se presenta como `+50%`; `-0.25` como `-25%`.
- En drops o velocidades con valor `+1.00`, se presenta como `+100%` porque el valor declarado equivale a una unidad completa de modificador.
- Capacidades como `canPickupClutter`, `canHandleHotItems` o `canOpenExtraTradeWindow` no son porcentajes: se traducen por significado jugable y aparecen como **activado (+1)**.
- El documento no decompila la DLL. Los números son los declarados en JSON; si la DLL aplica fórmulas internas especiales, eso requeriría análisis IL aparte.

## Resumen global
| Dato | Valor |
|---|---|
| Mod ID | specializedclasses |
| Versión | 3.0.0-rc.1 |
| Clases nuevas del mod | 15 |
| Plebeyo/Commoner modificado | sí, añade rasgo Ahorrativo / Frugal |
| Rasgos base definidos | 107 |
| Itemtypes nuevos | 19 |
| Blocktypes nuevos | 23 |
| Recetas base exclusivas de mesa normal | 901 |
| Recetas base por estación | 179 |
| Recetas genéricas no exclusivas | 92 |
| Recetas de estaciones no exclusivas | 10 |
| Recetas de barril no exclusivas | 34 |
| Recetas opcionales de compatibilidad | 103 |
| Carpetas de compatibilidad detectadas | 26 |

## Resumen por clase
| Clase ES | Clase EN | Código | Rasgos base | Bonus numéricos | Malus numéricos | Recetas mesa normal | Recetas estación | Recetas compat. |
|---|---|---|---|---|---|---|---|---|
| Archivista | Archivist | archivist | 7 | 7 | 4 | 239 | 4 | 1 |
| Guardia Negra | Blackguard | blackguard | 7 | 7 | 5 | 43 | 8 | 0 |
| Alfarero | Brickmaker | brickmaker | 7 | 12 | 5 | 65 | 3 | 2 |
| Carnicero | Butcher | butcher | 7 | 9 | 5 | 23 | 1 | 16 |
| Relojero | Clockmaker | clockmaker | 8 | 9 | 5 | 35 | 15 | 12 |
| Agricultor | Farmhand | farmhand | 9 | 17 | 5 | 51 | 10 | 10 |
| Florista | Florist | florist | 6 | 9 | 7 | 142 | 20 | 17 |
| Guardabosques | Forester | forester | 8 | 13 | 7 | 62 | 55 | 4 |
| Cazador | Hunter | hunter | 7 | 9 | 7 | 28 | 6 | 14 |
| Maleante | Malefactor | malefactor | 9 | 12 | 5 | 12 | 0 | 0 |
| Mensajero | Messenger | messenger | 6 | 7 | 6 | 54 | 24 | 2 |
| Cantero | Quarrier | quarrier | 7 | 13 | 6 | 38 | 24 | 8 |
| Espeleólogo | Spelunker | spelunker | 6 | 7 | 6 | 20 | 7 | 0 |
| Sastre | Tailor | tailor | 8 | 10 | 6 | 53 | 0 | 2 |
| Viticultor | Vintner | vintner | 7 | 11 | 6 | 36 | 2 | 15 |
| Plebeyo | Commoner | commoner | 1 | 1 | 0 | 0 | 0 | 0 |

## Clases incluidas

- **Archivista / Archivist** (`archivist`)
- **Guardia Negra / Blackguard** (`blackguard`)
- **Alfarero / Brickmaker** (`brickmaker`)
- **Carnicero / Butcher** (`butcher`)
- **Relojero / Clockmaker** (`clockmaker`)
- **Agricultor / Farmhand** (`farmhand`)
- **Florista / Florist** (`florist`)
- **Guardabosques / Forester** (`forester`)
- **Cazador / Hunter** (`hunter`)
- **Maleante / Malefactor** (`malefactor`)
- **Mensajero / Messenger** (`messenger`)
- **Cantero / Quarrier** (`quarrier`)
- **Espeleólogo / Spelunker** (`spelunker`)
- **Sastre / Tailor** (`tailor`)
- **Viticultor / Vintner** (`vintner`)
- **Plebeyo / Commoner** (`commoner`)

## Recetas no exclusivas que cambian el uso real del mod
- Las estaciones se pueden fabricar con recetas de `grid/workstations.json` sin `requiresTrait` en el ZIP analizado.
- `mortarandpestle` y `spindle` son herramientas genéricas sin clase.
- Las recetas de `grid/generic/fruiting-bag.json` no tienen bloqueo de clase: el Viticultor crea la bolsa vacía, pero el llenado/cosecha es genérico si se obtiene la bolsa.
- Las recetas de barril de limpieza de caldero y conversión dye/pigment no están bloqueadas por clase en el análisis de assets.

## Compatibilidad opcional detectada
`aculinaryartillery`, `alchemy`, `betterruins`, `bricklayers`, `butchering`, `combatoverhaul`, `combatoverhaulfork`, `expandedbeekeeping`, `foodshelves`, `fromgoldencombs`, `furry`, `hydrateordiedrate`, `lrc`, `millwright`, `morearrows`, `ndlmushroomgrowth`, `primitivesurvival`, `slowtox`, `stonequarryrepckfipil`, `substrate`, `tailorsdelight`, `thievery`, `toolsmith`, `toolsmithfork`, `xskills`, `xskillsfork`

## Hallazgos de bateo / tierra mineral para batear añadidos
Probabilidades exactas declaradas en `patches/panning-drops.json`.
| tierra mineral para batear | Tipo | Salida | Chance avg | Porcentaje |
|---|---|---|---|---|
| Tierra mineral carbonosa | item | ore-lignite | 0.12 | 12% |
| Tierra mineral carbonosa | item | ore-bituminouscoal | 0.08 | 8% |
| Tierra mineral carbonosa | item | ore-anthracite | 0.04 | 4% |
| Tierra mineral carbonosa | item | clay-red | 0.02 | 2% |
| Tierra mineral carbonosa | item | clay-blue | 0.02 | 2% |
| Tierra mineral carbonosa | item | clay-fire | 0.01 | 1% |
| Tierra mineral carbonosa | item | stone-chalk | 0.02 | 2% |
| Tierra mineral carbonosa | item | ore-sulfur | 0.02 | 2% |
| Tierra mineral cristalina | item | ore-quartz | 0.12 | 12% |
| Tierra mineral cristalina | item | ore-lapislazuli | 0.05 | 5% |
| Tierra mineral cristalina | item | ore-borax | 0.04 | 4% |
| Tierra mineral cristalina | item | stone-obsidian | 0.04 | 4% |
| Tierra mineral cristalina | item | flint | 0.04 | 4% |
| Tierra mineral cristalina | item | ore-olivine | 0.04 | 4% |
| Tierra mineral cristalina | item | ore-alum | 0.03 | 3% |
| Tierra mineral cristalina | item | ore-sylvite | 0.02 | 2% |
| Tierra mineral cristalina | item | ore-cinnabar | 0.02 | 2% |
| Tierra mineral cristalina | item | clearquartz | 0.05 | 5% |
| Tierra mineral cristalina | item | rosequartz | 0.01 | 1% |
| Tierra mineral cristalina | item | amethyst | 0.01 | 1% |
| Tierra mineral cristalina | item | smokyquartz | 0.01 | 1% |
| Tierra mineral cristalina | item | gem-emerald-rough | 0.008 | 0.8% |
| Tierra mineral cristalina | item | gem-diamond-rough | 0.004 | 0.4% |
| Tierra mineral cristalina | item | gem-olivine_peridot-rough | 0.01 | 1% |
| Tierra mineral metálica | item | nugget-nativecopper | 0.12 | 12% |
| Tierra mineral metálica | item | nugget-nativegold | 0.03 | 3% |
| Tierra mineral metálica | item | nugget-nativesilver | 0.03 | 3% |
| Tierra mineral metálica | item | nugget-cassiterite | 0.05 | 5% |
| Tierra mineral metálica | item | nugget-galena | 0.05 | 5% |
| Tierra mineral metálica | item | nugget-sphalerite | 0.05 | 5% |
| Tierra mineral metálica | item | nugget-bismuthinite | 0.04 | 4% |
| Tierra mineral metálica | item | nugget-limonite | 0.04 | 4% |
| Tierra mineral metálica | item | nugget-magnetite | 0.04 | 4% |
| Tierra mineral metálica | item | nugget-hematite | 0.04 | 4% |
| Tierra mineral metálica | item | nugget-malachite | 0.05 | 5% |
| Tierra mineral metálica | item | stone-bauxite | 0.03 | 3% |
| Tierra mineral metálica | item | nugget-chromite | 0.02 | 2% |
| Tierra mineral metálica | item | nugget-ilmenite | 0.02 | 2% |
| Tierra mineral metálica | item | nugget-pentlandite | 0.02 | 2% |

## Archivos incluidos en este paquete
- `clases/`: una ficha Markdown por clase con estadísticas objetivas.
- `tablas/estadisticas_clases.csv`: todos los rasgos y atributos numéricos en formato tabla.
- `tablas/recetas_por_clase.csv`: salidas exactas de recetas por clase.
- `datos_objetivos_specializedclasses.json`: datos estructurados para reutilizar en futuras fichas visuales.