# Análisis de Specialized Classes 3.0.0-rc.1

Fuente analizada: ZIP `specializedclasses_3.0.0-rc.1.zip`. He revisado `modinfo.json`, `config/characterclasses.json`, `config/traits.json`, `lang/en.json`, recetas grid/workstation, objetos/bloques, parches y compatibilidad incluida. El comportamiento interno de la DLL se ha inferido por assets, atributos y símbolos; no se ha hecho decompilación IL completa.

## REVISION AÑADIDA — validación contra ZIP real

### Veredicto

El análisis original es **mayoritariamente correcto**: las 15 clases, la mayoría de traits, los conteos de recetas grid exclusivas, los conteos por estación, las tablas de Tierra mineral para batear y la compatibilidad por recetas coinciden con el ZIP.  
Pero **no está completo** y tiene **una corrección clara**.

### Corrección obligatoria

| Punto | En el análisis original | Corrección |
|---|---|---|
| Porcelain bowl/crock/vessel | Aparecen atribuidos a **Florist** en la tabla de objetos. | Sus recetas están en `assets/specializedclasses/recipes/grid/brickmaker/kitchenware.json` y requieren `brickmaker`. Por tanto, son de **Brickmaker**. Florist fabrica principalmente vasos/vasijas decorativas vanilla, pigmentos, flores, medicina y decoración. |

### Conteos validados

| Bloque | Resultado real del ZIP |
|---|---:|
| Clases nuevas | 15 |
| Traits definidos en `traits.json` | 107 |
| Traits usados por clases pero no definidos en `traits.json` | `bowyer`, `clothier`, `improviser`, `merciless`, `technical`, `tinkerer` |
| Itemtypes nuevos | 19 |
| Blocktypes nuevos | 23 |
| Recetas mesa normal exclusivas base por clase | 901 |
| Recetas workstation por clase | 179 |
| Recetas mesa normal genéricas no exclusivas | 92 |
| Recetas mesa normal para construir estaciones | 10 |
| Recetas barrel no exclusivas | 34 |
| Recetas de compatibilidad con otros mods | 103 |
| Carpetas de compatibilidad `specializedclasses` | 26 |
| Idiomas incluidos en SpecializedClasses | en.json, zh-cn.json |
| Idiomas incluidos en ClassModLib | en.json, zh-cn.json |

### Recetas no exclusivas que faltaban en el análisis

Estas recetas existen y no deberían mezclarse con las “recetas exclusivas por clase”:

- `assets/specializedclasses/recipes/grid/workstations.json`: **10 recetas** para construir estaciones. No tienen `requiresTrait`, así que las estaciones parecen crafteables por cualquiera.
- `assets/specializedclasses/recipes/grid/generic/tools.json`: **2 recetas genéricas**: `mortarandpestle` y `spindle`.
- `assets/specializedclasses/recipes/grid/generic/fruiting-bag.json`: **90 recetas genéricas** relacionadas con fruiting Bolsas y mochilas. El Vintner fabrica el `fruitingbag-empty`, pero el llenado/cosecha de bolsas de setas aparece como receta genérica.
- `assets/specializedclasses/recipes/barrel/cauldron-cleaning.json`: **1 receta** para limpiar `dirtiedceramiccauldron` con 10 L de agua.
- `assets/specializedclasses/recipes/barrel/pigment-dyes.json`: **33 recetas** de conversión dye → pigment. Incluye TODO interno.

### Fruiting bag: matiz importante

El análisis decía correctamente que Vintner tiene acceso al fruiting bag, pero faltaba precisión:

- El item `fruitingbag` tiene **45 variantes de seta** y sus versiones `-ripe`.
- El `fruitingbag-empty` sí es receta de Vintner.
- Las recetas para meter seta en la bolsa y cosechar la bolsa madura están en `grid/generic/fruiting-bag.json`, sin `requiresTrait`.
- Por diseño práctico de servidor: Vintner parece ser quien crea la infraestructura, pero luego otros jugadores podrían usar las bolsas si reciben una.

### Estaciones nuevas: modo de uso real

| Estación | Modo | Traits/uso |
|---|---|---|
| `Mesa de cartografía` | `browser` | Messenger, 12 recetas |
| `Cuba de mezclas y alquimia` | `browser` | Spelunker/Farmhand/Brickmaker/Butcher/Florist, 32 recetas |
| `Mesa de dibujo y planos` | `browser` | Archivist, 4 recetas |
| `Mesa de trabajo de cuero` | `browser` | Hunter/Messenger, 18 recetas |
| `Mesa de germinación` | `browser` | Farmhand/Florist/Forester/Vintner, 13 recetas |
| `Banco de corte de piedra` | `helditem` | Quarrier, 24 recetas |
| `swageblock` | `helditem` | Blackguard, 8 recetas |
| `Mesa de inventor/relojería` | `browser` | Clockmaker, 15 recetas |
| `Mesa de tallado de madera` | `helditem` | Forester, 53 recetas |

### Objetos importantes que faltaban o estaban poco explicados

| Objeto | Añadido/corrección |
|---|---|
| `clothingassemblykit` | Item de Tailor basado en `ClassModLibAssemblyKit`; permite kits genéricos y dirigidos por slot de ropa. Escanea prendas (`scanClothing: true`). |
| `fruitingbag` | Item de Vintner para cultivo de setas; 45 setas, ciclo de maduración y receta genérica de cosecha. |
| `pigment-*` | 11 pigmentos propios: black, blue, brown, gray, green, orange, pink, purple, red, white, yellow. |
| `icepack` | Restaura 75% del tiempo estable original, pero en stacks reparte la restauración entre comidas/items del stack. |
| `boat-raft-bamboo-angler` | Tiene 2 asientos, requiere herramienta de remo, speedMultiplier 1.5, pickup con clic derecho, 2 slots de cesta y slot de remo. |
| `porcelainbowl/crock/vessel` | Deben moverse mentalmente a **Brickmaker**, no Florist. |

### Señales de trabajo en curso / riesgos de RC

| Archivo | Señal |
|---|---|
| `assets/specializedclasses/recipes/grid/forester/fuel.json` | TODO: receta provisional de briquette/collier. |
| `assets/specializedclasses/recipes/barrel/pigment-dyes.json` | TODO: conversión pigment/dye placeholder hasta revisar sistema de tintes. |
| `assets/specializedclasses/recipes/grid/tailor/beds.json` | JSON vacío `[]`; no rompe, pero indica contenido pendiente o retirado. |
| `assets/specializedclasses/shapes/item/insulatedcrate.json` | JSON estricto detecta coma final antes de cerrar array. Si el parser de Vintage Story lo tolera, no rompe; si se valida con parser estricto, aparece como error. Conviene limpiarlo. |
| `modinfo.json` | No declara `dependencies`, `side`, `requiredOnClient/requiredOnServer` ni versión de juego. No es necesariamente fallo, pero para servidor reduce claridad de compatibilidad. |
| `SpecializedClasses.deps.json` | Apunta a `.NETCoreApp,Version=v10.0`. Importante si se intenta usar en versiones antiguas del juego. |

### Matices de balance que conviene añadir

1. **Commoner es más fuerte de lo que parece:** el patch añade `frugal`, que en `traits.json` es `hungerrate: -0.75`. Eso equivale a una reducción enorme del hambre. Para servidor, Commoner no es “sin clase”; es un generalista con economía de comida brutal.
2. **No todo está bloqueado por clase:** las estaciones, herramientas genéricas, barrel recipes y el flujo de fruiting Bolsas y mochilas tienen partes sin `requiresTrait`.
3. **El mod empuja cooperación, pero permite mercados secundarios:** si un especialista fabrica el objeto base, otros jugadores pueden beneficiarse mediante comercio/intercambio.
4. **Vintner y Florist tienen más economía de consumibles/decoración de lo que parece:** setas, pigmentos, tintes, flores, medicina y recipientes decorativos pueden sostener una economía social fuerte.
5. **Messenger no solo corre:** con bolsas, portable crate, vessel frame, caminos, cartography y Balsas y embarcaciones simples compatibility, es una clase de infraestructura logística, no solo movilidad.
6. **Brickmaker está infravalorado en el análisis original:** además de barro/arcilla, controla porcelain bowl/crock/vessel y parte de cocina/almacenamiento avanzado.

### Compatibilidad: precisión añadida

Además de las recetas de compatibilidad listadas, el ZIP incluye carpetas de patch/compat para:

`aculinaryartillery`, `alchemy`, `betterruins`, `bricklayers`, `butchering`, `combatoverhaul`, `combatoverhaulfork`, `expandedbeekeeping`, `foodshelves`, `fromgoldencombs`, `furry`, `hydrateordiedrate`, `lrc`, `millwright`, `morearrows`, `ndlmushroomgrowth`, `primitivesurvival`, `slowtox`, `stonequarryrepckfipil`, `substrate`, `tailorsdelight`, `thievery`, `toolsmith`, `toolsmithfork`, `xskills`, `xskillsfork`.

ClassModLib además incluye patches específicos para `ksrealisticfarming`.

### Conclusión corregida

El análisis original sirve como base y no está inventado: está bastante bien extraído del mod.  
La corrección más importante es **no atribuir porcelain bowl/crock/vessel a Florist**, sino a **Brickmaker**.  
Lo que más faltaba era separar claramente entre **recetas exclusivas por clase** y **recetas genéricas/no bloqueadas**, porque eso cambia mucho cómo se explotará el mod en un servidor.

## Diagnóstico rápido

- Este mod no añade “clases bonitas”: convierte el juego en especialización fuerte. Cada clase tiene buffs muy grandes, pero también huecos claros.
- Para servidor, obliga a cooperación: Farmhand/Forester/Butcher sostienen supervivencia; Quarrier/Brickmaker construyen; Spelunker/Blackguard/Clockmaker empujan progreso; Messenger une bases; Archivist/Florist/Tailor/Vintner crean valor estético, medicina y economía.
- En solitario puede sentirse castigador si eliges una clase demasiado estrecha. Commoner queda como generalista eficiente porque el patch le añade `frugal`.
- Balance: hay muchos +100% a drops/velocidades. En servidor cambia economía, roles y dependencia entre jugadores de forma radical.
- Nota de madurez: es `3.0.0-rc.1`; hay señales de trabajo en curso, por ejemplo un TODO en la receta de briquette y un archivo `tailor/beds.json` vacío.

## Qué modifica globalmente

| Área | Cambio | Impacto |
|---|---|---|
| Clases vanilla | Desactiva las clases vanilla no comunes mediante patch y añade `frugal` al Commoner. | El selector pasa a girar alrededor de las 15 clases nuevas + Commoner eficiente. |
| Drops por stat | ClassModLib parchea drops de cultivos, animales, hojas, troncos, turba, arcilla, piedra, nidos de locust, drifters, etc. | Los traits no son cosméticos: alteran loot real del mundo. |
| Crafteo por clase | Muchas recetas tienen `requiresTrait`. | Un jugador sin esa clase no puede usar esos crafteos. |
| Estaciones nuevas | Añade estaciones con recetas propias: woodcarving, stonecutting, Moldes y estampas de forja, tinker, leatherworking, sprouting, compounding, drafting/cartography. | Crafteo más industrial, por lotes y bloqueado por profesión. |
| Traders | Añade diálogo extra para Malefactor/Smuggler con ventana de comercio “off the books”. | Malefactor gana rol económico/comercial único. |
| objetos decorativos de ruinas y loot Vasijas y recipientes cerámicos | Añade comportamiento de pickup a objetos decorativos de ruinas, banners, libros, loot Vasijas y recipientes cerámicos, etc. | El Archivist/Curator puede recuperar decoración/lore de ruinas. |
| Panning | Añade Tierra mineral para batear carbonaceous/crystalline/metallic con tablas de bateo propias. | Spelunker gana una vía de obtener minerales/gemas/combustibles por bateo. |
| Troughs | Añade universal herbivore/carnivore Comida para animales a troughs y ajusta incompatibilidades. | Butcher puede manejar alimentación animal más flexible. |
| Recetas vanilla | Quita una receta de reciclaje de techo de paja y añade agrupaciones de handbook para ropa/gambeson/shield. | Limpieza de handbook y cierre de una ruta de reciclaje. |

## Objetos y bloques nuevos importantes

| Objeto/bloque | Qué hace | Quién lo aprovecha |
|---|---|---|
| Mortar and pestle | Herramienta base para moler/procesar en varias recetas; se craftea genéricamente. | Farmhand, Butcher, Florist, Spelunker, Brickmaker. |
| Spindle | Herramienta para fibras/cuerda; receta genérica, Tailor/Farmhand la explotan. | Tailor, Farmhand. |
| Tool repair kit | Restaura 75% de durabilidad máxima a herramientas/armas, hasta el máximo. | Blackguard. |
| Armor repair kit | Restaura 75% de durabilidad máxima a armadura/escudos. | Blackguard. |
| Ice Pack | Restaura 75% del tiempo estable original a perecederos/meltables. | Butcher. |
| Sealant | Sellador barato para crocks/comidas, equivalente práctico a grasa/cera para conservación. | Butcher. |
| Universal herbivore/carnivore Comida para animales | Pienso estable para atraer/alimentar animales en troughs/trampas. | Butcher. |
| Messenger bag | Mochila compacta de 10 slots sin restricción. | Messenger. |
| Scroll case | 16 slots, pero stack máximo 8; útil para herramientas/lore/objetos decorativos de ruinas. | Messenger/Archivist. |
| Portable crate | 28 stacks pero solo de un tipo de item. Perfecto para acarreos dirigidos. | Messenger/logística. |
| Vessel frame | 4 slots con `transitionRateMul: 0.1`; reduce muchísimo el deterioro de comida. | Messenger, Hunter, viajeros. |
| Angler’s bamboo Balsas y embarcaciones simples | Balsa de bambú, 2 asientos, requiere remo, speedMultiplier 1.5. | Farmhand. |
| Briquette | Combustible 800°C / 60s. | Forester. |
| Treated firewood | 25°C / 3600s; no sirve para cocinar/procesar fuerte, sí para luz/calor prolongado. | Forester. |
| Porcelain bowl/crock/vessel | Bowl 2 porciones/2 L, crock 8 porciones, vessel 16 slots con conservación por categoría. | **Brickmaker**. |
| Ceramic cauldron | Olla masiva: 64 ingredientes / 64 comidas, puede quedar sucia y limpiarse en barril. | Butcher. |
| Asphalt road | Carretera cincelable/reforzable, receta de Messenger. | Messenger. |
| Spelunking lantern | Linterna reforzable de cueva. | Spelunker. |
| Carbonaceous / crystalline / metallic Tierra mineral para batear | Bloques pannable con drops temáticos. | Spelunker. |

## Clases: ventajas, desventajas y crafteos

### Archivist (`archivist`)

**Rol:** Ruinas, decoración, lore y estabilidad temporal. Especialista de arqueología/decoración. Excelente para recuperar objetos decorativos de ruinas y loot de ruinas; flojo para agricultura.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Custodian (`custodian`) | positive | daño recibido de criaturas de óxido -25%; pérdida de durabilidad de armadura -50%; probabilidad de no gastar durabilidad +50% |
| Archivist (`archivist`) | positive | Access to exclusive recipes pertaining to objetos decorativos de ruinas, Papel, pergaminos y documentos, wagon wheels, and Bloques envejecidos building blocks |
| Curator (`curator`) | positive | canPickupClutter +1 |
| Archeologist (`archeologist`) | positive | ruinedToolDurabilitySaveChance +1; vesselContentsDropRate +1 |
| Unphased (`unphased`) | positive | estabilidad temporal plana +40% |
| Scourer (`scourer`) | negative | drop de semillas cultivadas -75%; drop de semillas/saplings de árboles -75%; drop de frutales -75% |
| Stoic (`stoic`) | negative | ganancia de estabilidad temporal -20% |

**Recetas mesa normal exclusivas:** 239. Categorías: `Madera y piedra envejecida` (9), `Banderas y decoración colgante` (47), `Barriles y recipientes antiguos` (2), `Camas y mobiliario de dormitorio antiguo` (20), `Libros, estanterías y decoración de biblioteca` (58), `Velas y candelabros` (5), `Cajas y embalajes` (6), `Telas y tapices decorativos` (9), `Muebles de ruinas` (12), `Faroles y lámparas colgantes` (5), `Objetos de mercader y puesto comercial` (4), `Tuberías y piezas industriales decorativas` (20), `Ruedas y mecanismos decorativos` (5), `Lámparas Jonas y tecnología antigua` (26), `Vigas metálicas` (1), `Papel, pergaminos y documentos` (10).
**Recetas por estación:** `Mesa de dibujo y planos` (4).
**Ventaja estratégica:** Muy alto en servidores con ruinas/decoración/lore; bajo si juegas solo y necesitas comida.
**Desventaja/alerta:** No lo elijas como primer trabajador de supervivencia. Es clase de valor cultural/económico, no de base inicial.

### Blackguard (`blackguard`)

**Rol:** Combate, metalurgia y armaduras. El tanque/guerrero-smith. Muy fuerte en combate y producción metálica, pero peor superviviente salvaje.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Warlord (`warlord`) | positive | daño causado global +20%; penalización de velocidad por armadura -20%; vida máxima +20%; velocidad al caminar -5% |
| Blackguard (`blackguard`) | positive | Access to the exclusive tool and armor repair kits, and recipes pertaining to rare armor and weapons, metal building blocks, and common metalworking components |
| Merciless (`merciless`) | vanilla/recipe | Access to the exclusive blackguard sword and shield |
| Blacksmith (`blacksmith`) | positive | ahorro durabilidad martillo +75%; velocidad al trabajar/minar metal +1 |
| Heatproof (`heatproof`) | positive | puede manipular objetos calientes +1; daño recibido por fuego -80% |
| Sheltered (`sheltered`) | negative | drop de recolección/forraje -25%; drop de cultivos salvajes -25%; drop de animales -10% |
| Oathsworn (`oathsworn`) | negative | daño contra humanoides -10% |

**Recetas mesa normal exclusivas:** 43. Categorías: `Armaduras y piezas defensivas` (10), `Cadenas` (7), `Bloques metálicos` (10), `Trabajo de metal` (1), `Tejados y piezas de cubierta` (7), `Moldes y estampas de forja` (8).
**Recetas por estación:** `Moldes y estampas de forja` (8).
**Ventaja estratégica:** Clase fuerte y directa. Buen tanque y productor de metal; excelente para PvE duro.
**Desventaja/alerta:** Pierde valor si el servidor no usa combate/metal avanzado. Necesita minería ajena o logística.

### Brickmaker (`brickmaker`)

**Rol:** Tierra, arcilla, cerámica y obra civil. Constructor de barro/arcilla. Mueve tierra y fabrica materiales en masa; cuidado con el fuego.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Bruiser (`bruiser`) | positive | vida máxima +50%; daño recibido global -20%; penalización de velocidad por armadura +20% |
| Brickmaker (`brickmaker`) | positive | Access to exclusive recipes pertaining to bulk shaping of raw clay and earthen building blocks |
| Delver (`delver`) | positive | drop de arcilla +1; velocidad con cerámica/arcilla +1 |
| Excavator (`excavator`) | positive | ahorro durabilidad pala +75%; velocidad tierra +1; velocidad grava +1; velocidad arena +1; velocidad nieve +1 |
| Kilnhand (`kilnhand`) | positive | drop de hierba +25%; drop de turba +25%; drop de palos +25% |
| Scourer (`scourer`) | negative | drop de semillas cultivadas -75%; drop de semillas/saplings de árboles -75%; drop de frutales -75% |
| Flammable (`flammable`) | negative | daño recibido por fuego +1 |

**Recetas mesa normal exclusivas:** 65. Categorías: `Cerámica en lote` (8), `Ladrillos de arcilla` (6), `Adobe y enlucidos` (15), `Utensilios de cocina` (3), `Ladrillos de barro` (3), `Tierra compactada` (1), `Pastas y mezclas` (2), `Yeso y revestimientos` (20), `Tejados y piezas de cubierta` (7).
**Recetas por estación:** `Cuba de mezclas y alquimia` (3).
**Ventaja estratégica:** Brutal para crear materiales de construcción baratos y en masa.
**Desventaja/alerta:** Su penalización al fuego es seria. No lo pongas a cocinar/fundición sin cuidado.

### Butcher (`butcher`)

**Rol:** Carne, comida, conservación y ganadería. Sostiene al grupo con carne, comida, hielo, curados y alimentación animal. Menos autosuficiente con cultivos.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Reaver (`reaver`) | positive | multiplicador de regeneración curativa +1 |
| Butcher (`butcher`) | positive | Access to the exclusive Sealant and Ice Pack, and recipes pertaining to Ganadería and food Conservación de alimentos |
| Preserver (`preserver`) | positive | velocidad picando hielo +1; drop de hielo de lago +1; probabilidad de sal gema +10% |
| Rancher (`rancher`) | positive | drop de carne +1; drop de animales +50%; rango de detección/atracción de animales -25% |
| Chef (`chef`) | positive | saciedad de comidas preparadas +50%; saciedad máxima +1 |
| Scourer (`scourer`) | negative | drop de semillas cultivadas -75%; drop de semillas/saplings de árboles -75%; drop de frutales -75% |
| Gourmand (`gourmand`) | negative | daño contra animales -25%; saciedad de comida simple -25% |

**Recetas mesa normal exclusivas:** 23. Categorías: `Curado y secado` (6), `Comida para animales` (4), `Molienda` (1), `Utensilios de cocina` (1), `Conservación de alimentos` (3), `Molino manual` (1), `Ganadería` (6), `Selladores` (1).
**Recetas por estación:** `Cuba de mezclas y alquimia` (1).
**Ventaja estratégica:** Una de las mejores clases comunitarias: convierte animales en comida, Comida para animales y conservación.
**Desventaja/alerta:** Si no hay caza/ganadería/hielo, baja mucho. Con cultivos es mediocre por Scourer.

### Clockmaker (`clockmaker`)

**Rol:** Mecánica, Jonas tech y temporal. Ingeniero late-game: piezas Jonas, potencia mecánica y estabilidad. No es buen granjero y sufre venenos.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Lancer (`lancer`) | positive | salto +20%; daño a distancia +20%; velocidad al caminar +10%; daño recibido global +10% |
| Clockmaker (`clockmaker`) | positive | Exclusive recipes pertaining to mechanical power, item transport and Jonas tech |
| Tinkerer (`tinkerer`) | vanilla/recipe | Exclusive recipe for the tuning spear |
| technical (`technical`) | vanilla/recipe | trait vanilla o marcador técnico usado por el juego/mod. |
| Engineer (`engineer`) | positive | daño contra mecánicos +50%; daño recibido de mecánicos -50%; drop de grasa +1; resina en hojas +1% |
| Attuned (`attuned`) | positive | drop de engranajes temporales +1; ganancia de estabilidad temporal +50% |
| Scourer (`scourer`) | negative | drop de semillas cultivadas -75%; drop de semillas/saplings de árboles -75%; drop de frutales -75% |
| Sensitive (`sensitive`) | negative | daño recibido por veneno +1 |

**Recetas mesa normal exclusivas:** 35. Categorías: `Piezas Jonas y componentes antiguos` (14), `Mecánica y transmisión de potencia` (19), `Teletransportadores` (2).
**Recetas por estación:** `Mesa de inventor/relojería` (15).
**Ventaja estratégica:** Late-game puro. Si el servidor quiere mecánica/Jonas, es imprescindible.
**Desventaja/alerta:** Al principio puede sentirse flojo. El veneno y el daño recibido lo castigan.

### Farmhand (`farmhand`)

**Rol:** Agricultura, semillas, fertilizante y pesca. El motor alimentario del servidor. Produce semillas/cosechas y logística fluvial; malo en minería y cuevas.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Militia (`militia`) | positive | velocidad al caminar +5%; daño recibido global -10%; daño causado global +10% |
| Farmhand (`farmhand`) | positive | Access to the exclusive Angler's Bamboo Raft, and recipes pertaining to fertilizer, rope, and fishing |
| Fisherman (`fisherman`) | positive | velocidad nadando +50%; ahorro de durabilidad de caña +75% |
| Harvester (`harvester`) | positive | drop de cosecha +50%; drop de semillas cultivadas +1; drop de cultivos salvajes +1; semillas de cultivos jóvenes +1 |
| Shipwright (`shipwright`) | positive | probabilidad de estacas de bambú en hojas +5%; probabilidad de lianas en hojas +5% |
| Tiller (`tiller`) | positive | velocidad tierra +1; velocidad con plantas +1; ahorro durabilidad azada +75%; ahorro durabilidad guadaña +75% |
| Fertilizer (`fertilizer`) | positive | permanencia del fertilizante +25%; probabilidad de restos vegetales de hierba +10% |
| Delicate (`delicate`) | negative | drop de mineral -10%; velocidad minando mineral -10%; velocidad minando piedra -10%; pérdida de estabilidad temporal +25% |
| Sunkissed (`sunkissed`) | negative | estabilidad temporal en interiores -20% |

**Recetas mesa normal exclusivas:** 51. Categorías: `Fertilizantes` (4), `Balsas y embarcaciones simples` (2), `Tejados y piezas de cubierta` (7), `Raíces` (2), `Cuerdas y cordajes` (17), `Putrefacción y compostaje` (5), `Tierra y sustratos` (4), `Cebos olorosos` (10).
**Recetas por estación:** `Cuba de mezclas y alquimia` (4), `Mesa de germinación` (6).
**Ventaja estratégica:** Probablemente la clase más importante para estabilidad de un servidor: comida, semillas, compost, cuerda, pesca.
**Desventaja/alerta:** No lo mandes a minar ni a cuevas. Su valor está en campo y producción repetible.

### Florist (`florist`)

**Rol:** Medicina, abejas, flores, tintes y cerámica fina. Soporte/healer/crafter estético. Mucho valor económico; combate flojo.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Wanderer (`wanderer`) | positive | daño cuerpo a cuerpo -25%; daño a distancia -25%; velocidad al caminar +10%; salto +20%; regeneración pasiva +10% |
| Florist (`florist`) | positive | Exclusive recipes pertaining to Flores, dyeing, Medicina, and decorative containers |
| Apiarist (`apiarist`) | positive | eficiencia al cosechar colmenas/skep +1 |
| Herbalist (`herbalist`) | positive | probabilidad de cola de caballo +20%; drop de hierba +50%; velocidad con plantas +50%; ahorro durabilidad cuchillo +75%; ahorro durabilidad guadaña +75% |
| Delicate (`delicate`) | negative | drop de mineral -10%; velocidad minando mineral -10%; velocidad minando piedra -10%; pérdida de estabilidad temporal +25% |
| Sympathetic (`sympathetic`) | negative | daño contra humanoides -20% |

**Recetas mesa normal exclusivas:** 142. Categorías: `Apicultura` (1), `Flores` (4), `Medicina` (4), `Cuadros y pinturas` (25), `Mezcla de pigmentos` (6), `Pigmentos y tintes` (38), `Alfarería y piezas de barro` (21), `Vasijas y recipientes cerámicos` (34), `Papeles pintados` (9).
**Recetas por estación:** `Cuba de mezclas y alquimia` (17), `Mesa de germinación` (3).
**Ventaja estratégica:** Subestimada: medicina, tintes, flores, abejas y decoración pueden ser economía real.
**Desventaja/alerta:** En combate y minería se queda corta; no debe jugar como guerrero.

### Forester (`forester`)

**Rol:** Madera, carbón, combustible y carpintería. Base de madera y combustible. Muy bueno para infraestructura; algo más frágil y peor en minería.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Berserker (`berserker`) | positive | velocidad al caminar +5%; daño cuerpo a cuerpo +30%; daño recibido global +10% |
| Forester (`forester`) | positive | Access to the exclusive briquette and treated firewood, and recipes pertaining to fuels, storage, and carpentry |
| Collier (`collier`) | positive | drop de carbón vegetal +1; drop de turba +1 |
| Lumberjack (`lumberjack`) | positive | velocidad talando madera +1; velocidad en hojas +1; ahorro durabilidad hacha +75%; ahorro durabilidad tijeras +75%; ahorro durabilidad sierra +75%; restos vegetales de hojas +5% |
| Nurseryworker (`nurseryworker`) | positive | drop de semillas/saplings de árboles +3 |
| Carpenter (`carpenter`) | positive | drop de troncos +50%; probabilidad de resina en troncos +2% |
| Delicate (`delicate`) | negative | drop de mineral -10%; velocidad minando mineral -10%; velocidad minando piedra -10%; pérdida de estabilidad temporal +25% |
| Herbivorous (`herbivorous`) | negative | saciedad de proteína -10%; saciedad de lácteos -10% |

**Recetas mesa normal exclusivas:** 62. Categorías: `Camas` (2), `Cofres y almacenamiento` (1), `Puertas` (7), `Combustibles` (8), `Hojas` (1), `Empalizadas y defensas de madera` (10), `Tejados y piezas de cubierta` (7), `Plantones de árbol` (1), `Envejecido de madera` (10), `Procesado de madera` (6), `Madera y carpintería` (9).
**Recetas por estación:** `Mesa de germinación` (2), `Mesa de tallado de madera` (53).
**Ventaja estratégica:** Top para infraestructura: madera, carbón, resina, combustible y carpintería.
**Desventaja/alerta:** La subida de daño recibido del Berserker engaña: pega más, pero también cae antes.

### Hunter (`hunter`)

**Rol:** Arcos, animales, cuero y pieles. DPS a distancia y cuero. Fantástico para caza; menos versátil fuera de animales/pieles.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Marksman (`marksman`) | positive | precisión a distancia +75%; daño a distancia +20%; velocidad al caminar +10% |
| Hunter (`hunter`) | positive | Exclusive recipes pertaining to leatherworking and fletching |
| Bowyer (`bowyer`) | vanilla/recipe | Exclusive access to the recurve bow and crude arrow |
| Ranger (`ranger`) | positive | daño contra animales +50%; daño recibido de animales -25% |
| Carver (`carver`) | positive | tiempo al desollar/cosechar animales -50%; drop de animales +25%; drop de pieles +1; ahorro durabilidad cuchillo +75% |
| Delicate (`delicate`) | negative | drop de mineral -10%; velocidad minando mineral -10%; velocidad minando piedra -10%; pérdida de estabilidad temporal +25% |
| Carnivorous (`carnivorous`) | negative | saciedad de grano -10%; saciedad de verdura -10%; saciedad de fruta -10% |

**Recetas mesa normal exclusivas:** 28. Categorías: `Flechas` (2), `Procesado de materiales` (25), `Curtido` (1).
**Recetas por estación:** `Mesa de trabajo de cuero` (6).
**Ventaja estratégica:** Muy buena si hay fauna/piel/cuero. Gran clase de exploración/caza.
**Desventaja/alerta:** Menos útil en servidores centrados en construcción/industria sin economía de pieles.

### Malefactor (`malefactor`)

**Rol:** Sigilo, comercio negro, Recuperación de chatarra y piezas y ruinas. Rogue económico. Explora, vende/tradea mejor y recupera scrap/gears; penaliza comida de calidad.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Rogue (`rogue`) | positive | rango de detección/atracción de animales -75%; daño recibido global +10%; daño causado global +10% |
| Malefactor (`malefactor`) | positive | Recipes pertaining to scrap, rusty gears, and torch-holders |
| Improviser (`improviser`) | vanilla/recipe | Access to the exclusive sling |
| Smuggler (`smuggler`) | positive | canOpenExtraTradeWindow +1 |
| Sneak (`sneak`) | positive | daño contra humanoides +50%; velocidad agachado +50% |
| Thief (`thief`) | positive | rango de recoger objetos +1; drop de engranajes oxidados +1 |
| Scrapper (`scrapper`) | positive | drop de nidos de langosta +1; daño con honda +50%; daño con herramientas scrap +50%; ahorro durabilidad herramientas scrap +1; ahorro durabilidad honda +1 |
| Scourer (`scourer`) | negative | drop de semillas cultivadas -75%; drop de semillas/saplings de árboles -75%; drop de frutales -75% |
| Flavorless (`flavorless`) | negative | saciedad de comidas preparadas -10% |

**Recetas mesa normal exclusivas:** 12. Categorías: `Recuperación de chatarra y piezas` (11), `Comercio` (1).
**Ventaja estratégica:** Excelente para ruinas, comercio y recuperación de materiales raros.
**Desventaja/alerta:** No es clase noble ni autosuficiente: si no hay traders/ruinas, se diluye.

### Messenger (`messenger`)

**Rol:** Velocidad, caminos, bolsas y logística. La clase logística. Corre, transporta y construye carreteras; recibe más daño y tiene poca capacidad alimentaria.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Harrier (`harrier`) | positive | velocidad al caminar +20%; daño recibido global +10%; rango de detección/atracción de animales +50% |
| Messenger (`messenger`) | positive | Exclusive access to the exclusive scroll tube and messenger bag, and recipes pertaining to lighting, roads, and personal storage |
| Roadlayer (`roadlayer`) | positive | ahorro durabilidad pala +50%; velocidad grava +50%; velocidad arena +50%; velocidad nieve +50%; velocidad tierra +50% |
| Swift (`swift`) | positive | bono de velocidad en caminos +20% |
| Sheltered (`sheltered`) | negative | drop de recolección/forraje -25%; drop de cultivos salvajes -25%; drop de animales -10% |
| Lightweight (`lightweight`) | negative | saciedad máxima -20% |

**Recetas mesa normal exclusivas:** 54. Categorías: `Carreteras de asfalto` (1), `Bolsas y mochilas` (18), `Velas` (5), `Candelabros` (2), `Lámparas de gas` (9), `Faroles y linternas` (11), `Caminos y senderos` (8).
**Recetas por estación:** `Mesa de cartografía` (12), `Mesa de trabajo de cuero` (12).
**Ventaja estratégica:** El rey de logística. Carreteras + bolsas + velocidad = servidor más conectado.
**Desventaja/alerta:** Es frágil: +10% daño recibido, menor saciedad máxima y peor forraje.

### Quarrier (`quarrier`)

**Rol:** Piedra, cantería y construcción pesada. Especialista en piedra. Trabaja con armadura sin sufrir casi penalización; lento y torpe con loot fino.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Laborer (`laborer`) | positive | penalización de velocidad por armadura -75%; vida máxima +10%; velocidad al caminar -5% |
| Quarrier (`quarrier`) | positive | Recipes pertaining to stone building blocks, and breaking rock down to stone, gravel, and sand |
| Ascetic (`ascetic`) | positive | estabilidad temporal en interiores +30%; daño con herramientas de piedra +50%; ahorro durabilidad herramientas piedra +1; velocidad minado con herramienta piedra +50% |
| Stonecutter (`stonecutter`) | positive | probabilidad de piedra suelta +50%; drop de piedra +25% |
| Tunneler (`tunneler`) | positive | velocidad minando piedra +1; velocidad minando mineral +150%; ahorro durabilidad pico +75%; ahorro durabilidad martillo +75%; ahorro durabilidad cincel +75% |
| Sheltered (`sheltered`) | negative | drop de recolección/forraje -25%; drop de cultivos salvajes -25%; drop de animales -10% |
| Clumsy (`clumsy`) | negative | drop de mineral -10%; vesselContentsDropRate -25% |

**Recetas mesa normal exclusivas:** 38. Categorías: `Bloques envejecidos` (9), `Montaje de piezas` (7), `Procesado de materiales` (3), `Cuarzo y cristales` (5), `Tejados y piezas de cubierta` (7), `Formaciones de cueva` (7).
**Recetas por estación:** `Banco de corte de piedra` (24).
**Ventaja estratégica:** El obrero pesado. Para megaconstrucciones de piedra es casi obligatorio.
**Desventaja/alerta:** Muy lento y con penalización de drops finos; no es buscador de tesoros.

### Spelunker (`spelunker`)

**Rol:** Minas, prospección, bateo y explosivos. Explorador minero. tierra mineral para batear, bombas y minerales; fuera de cueva aporta menos a comida/base.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Sapper (`sapper`) | positive | daño recibido por explosión -90%; daño recibido por aplastamiento -90% |
| Spelunker (`spelunker`) | positive | Exclusive recipes for carbonaceous, metallic, and crystalline Tierra mineral para batear, and recipes pertaining to mineral Procesado de materiales and explosives |
| Panner (`panner`) | positive | salida al batear +1; velocidad al batear +1 |
| Prospector (`prospector`) | positive | drop de mineral +1; velocidad minando mineral +50%; ahorro durabilidad pico +50% |
| Petrophobe (`petrophobe`) | negative | velocidad minando piedra -10%; velocidad minado con herramienta piedra -20%; daño con herramientas de piedra -20% |
| Sheltered (`sheltered`) | negative | drop de recolección/forraje -25%; drop de cultivos salvajes -25%; drop de animales -10% |

**Recetas mesa normal exclusivas:** 20. Categorías: `Bombas y explosivos` (5), `Molienda` (11), `Faroles y linternas` (1), `Tierra mineral para batear` (3).
**Recetas por estación:** `Cuba de mezclas y alquimia` (7).
**Ventaja estratégica:** El minero especializado: minerales, bateo y bombas.
**Desventaja/alerta:** Riesgo alto/recompensa alta. No da mucha comida ni confort base.

### Tailor (`tailor`)

**Rol:** Ropa, fibras, lino, alfombras y protección ligera. Produce ropa/armadura textil y kits. Buen movimiento/esquiva, pero vulnerable al frío.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Fencer (`fencer`) | positive | velocidad sprint +10%; cooldown/esquiva garantizada 60; penalización de velocidad por armadura +20% |
| Tailor (`tailor`) | positive | Exclusive access to the clothing Montaje de piezas kit, and recipes pertaining to carpets, thatch Tejados y piezas de cubierta, and flax Fibras |
| Clothier (`clothier`) | vanilla/recipe | Exclusive access to tailored gambeson, sewing kits, and numerous articles of clothing |
| Bespoke (`bespoke`) | positive | pérdida de durabilidad de armadura -80% |
| Thresher (`thresher`) | positive | velocidad con plantas +1; clothMiningSpeedMul +1; ahorro durabilidad guadaña +75%; ahorro durabilidad cuchillo +75% |
| Weaver (`weaver`) | positive | fibra de lino desde hierba +10%; drop de fibra de lino +1; drop de hierba +1 |
| Delicate (`delicate`) | negative | drop de mineral -10%; velocidad minando mineral -10%; velocidad minando piedra -10%; pérdida de estabilidad temporal +25% |
| Prude (`prude`) | negative | frostDamageTaken 4 |

**Recetas mesa normal exclusivas:** 53. Categorías: `Kits de ropa y costura` (19), `Fibras` (3), `Tejados y piezas de cubierta` (15), `Alfombras y tapices de suelo` (16).
**Ventaja estratégica:** Clave para ropa, fibras y kits; hace el equipo visual/útil de la comunidad.
**Desventaja/alerta:** El frío lo castiga muchísimo. Mala elección para zonas frías si va mal equipado.

### Vintner (`vintner`)

**Rol:** Bebidas, setas, fruta, vidrio y recolección. Recolector/fermentador. Muy bueno en naturaleza, setas y líquidos; depende de comida mejor preparada.

| Trait | Tipo | Efecto real extraído |
|---|---:|---|
| Mithridatist (`mithridatist`) | positive | daño recibido por veneno -90%; saciedad de bebidas +1; curación recibida +25% |
| Vintner (`vintner`) | positive | Exclusive access to the fruiting bag to grow mushrooms. Access to recipes pertaining to trees and Arbustos, glassblowing, and liquid Procesado de materiales |
| Gatherer (`gatherer`) | positive | drop de recolección/forraje +1; drop de frutales +1; drop de semillas/saplings de árboles +1 |
| Bloomer (`bloomer`) | positive | cosecha suave de bloomery +1 |
| Picker (`picker`) | positive | velocidad en hojas +1; velocidad con plantas +1; ahorro durabilidad tijeras +75%; ahorro durabilidad cuchillo +75% |
| Delicate (`delicate`) | negative | drop de mineral -10%; velocidad minando mineral -10%; velocidad minando piedra -10%; pérdida de estabilidad temporal +25% |
| Dependent (`dependent`) | negative | saciedad de comidas preparadas -10%; saciedad de comida simple -10% |

**Recetas mesa normal exclusivas:** 36. Categorías: `Arbustos` (1), `Esquejes y recortes de plantas` (12), `Bolsa de fructificación` (1), `Tintado de vidrio` (10), `Trabajo de vidrio` (2), `Líquidos y recipientes` (5), `Tejados y piezas de cubierta` (5).
**Recetas por estación:** `Mesa de germinación` (2).
**Ventaja estratégica:** Muy fuerte para setas, fruta, vidrio y fermentación; buen soporte de exploración natural.
**Desventaja/alerta:** Depende de mejores comidas/bebidas; si no hay cocina/fermentación, su pico tarda.

## tierra mineral para batear añadido al bateo

### `Tierra mineral carbonosa`
ore-lignite (0.12), ore-bituminouscoal (0.08), ore-anthracite (0.04), clay-red (0.02), clay-blue (0.02), clay-fire (0.01), stone-chalk (0.02), ore-sulfur (0.02)

### `Tierra mineral cristalina`
ore-quartz (0.12), ore-lapislazuli (0.05), ore-borax (0.04), stone-obsidian (0.04), flint (0.04), ore-olivine (0.04), ore-alum (0.03), ore-sylvite (0.02), ore-cinnabar (0.02), clearquartz (0.05), rosequartz (0.01), amethyst (0.01), smokyquartz (0.01), gem-emerald-rough (0.008), gem-diamond-rough (0.004), gem-olivine_peridot-rough (0.01)

### `Tierra mineral metálica`
nugget-nativecopper (0.12), nugget-nativegold (0.03), nugget-nativesilver (0.03), nugget-cassiterite (0.05), nugget-galena (0.05), nugget-sphalerite (0.05), nugget-bismuthinite (0.04), nugget-limonite (0.04), nugget-magnetite (0.04), nugget-hematite (0.04), nugget-malachite (0.05), stone-bauxite (0.03), nugget-chromite (0.02), nugget-ilmenite (0.02), nugget-pentlandite (0.02)

## Compatibilidad incluida

- **aculinaryartillery**: butcher 1 recetas, vintner 3 recetas.
- **alchemy**: florist 2 recetas, vintner 4 recetas.
- **betterruins**: archivist 1 recetas.
- **bricklayers**: brickmaker 2 recetas, quarrier 7 recetas.
- **butchering**: butcher 8 recetas, hunter 8 recetas.
- **expandedbeekeeping**: florist 6 recetas.
- **foodshelves**: butcher 3 recetas, farmhand 1 recetas, vintner 4 recetas.
- **fromgoldencombs**: florist 9 recetas.
- **millwright**: clockmaker 12 recetas.
- **morearrows**: hunter 3 recetas.
- **ndlmushroomgrowth**: vintner 2 recetas.
- **primitivesurvival**: butcher 4 recetas, farmhand 2 recetas, hunter 3 recetas, messenger 2 recetas.
- **stonequarryrepckfipil**: quarrier 1 recetas.
- **substrate**: vintner 2 recetas.
- **tailorsdelight**: farmhand 7 recetas, tailor 2 recetas.
- **toolsmith**: forester 2 recetas.
- **toolsmithfork**: forester 2 recetas.

También incluye traits/parches para Combat Overhaul/fork, Hydrate or Diedrate, SlowTox, Thievery, XSkills/fork, Furry/LRC race class patches y otros. En esos casos el mod añade stats o integra restricciones, no siempre recetas nuevas.

## Anexo: salidas de recetas por clase

Formato: `categoría: código xcantidad`. He quitado duplicados exactos para que sea legible; cuando aparece `{metal}`, `{wood}`, `{stone}` o `*`, la receta tiene variantes.

### archivist
- **Madera y piedra envejecida**: `game:planks-agedebony-ud` x16, `game:planks-rottenebony-ud` x16, `game:log-placed-aged-ud` x16, `game:debarkedlog-veryaged-ud` x16, `game:debarkedlog-rotten-ud` x16, `game:debarkedlog-veryrotten-ud` x16, `game:agedstonebricks-{stonetype}` x16, `game:polishedrockold-full-{rocktype}` x16, `game:polishedrockold-cobbled-{rocktype}` x16
- **Banderas y decoración colgante**: `game:objetos decorativos de ruinas` x1, `game:banner-segment` x1, `game:banner-banner` x1
- **Barriles y recipientes antiguos**: `game:objetos decorativos de ruinas` x1
- **Camas y mobiliario de dormitorio antiguo**: `game:objetos decorativos de ruinas` x1
- **Libros, estanterías y decoración de biblioteca**: `game:objetos decorativos de ruinas` x1
- **Velas y candelabros**: `game:objetos decorativos de ruinas` x1
- **Cajas y embalajes**: `game:objetos decorativos de ruinas` x1
- **Telas y tapices decorativos**: `game:objetos decorativos de ruinas` x1
- **Muebles de ruinas**: `game:objetos decorativos de ruinas` x1
- **Faroles y lámparas colgantes**: `game:objetos decorativos de ruinas` x1, `game:chandelier-candle0` x1
- **Objetos de mercader y puesto comercial**: `game:objetos decorativos de ruinas` x1
- **Tuberías y piezas industriales decorativas**: `game:objetos decorativos de ruinas` x4, `game:objetos decorativos de ruinas` x1
- **Ruedas y mecanismos decorativos**: `game:objetos decorativos de ruinas` x1
- **Lámparas Jonas y tecnología antigua**: `game:jonas-lamp` x1, `game:objetos decorativos de ruinas` x1
- **Vigas metálicas**: `game:supportbeam-tarnishedmetal-{metal}` x16
- **Papel, pergaminos y documentos**: `game:paper-parchment` x4, `game:sieve-linen` x1, `game:paperlantern-on` x1, `game:paper-parchment` x1, `game:paper-flat-ragged` x8, `game:paper-lifted-ragged` x1, `game:paper-roll-ragged` x1, `game:paper-tear-ragged` x1, `game:paper-flat-ragged` x1
- **workstation:Mesa de dibujo y planos**: `game:objetos decorativos de ruinas` x1

### blackguard
- **Armaduras y piezas defensivas**: `specializedclasses:armorrepairkit` x3, `game:armor-head-antique-blackguard-broken` x1, `game:armor-body-antique-blackguard-broken` x1, `game:armor-legs-antique-blackguard-broken` x1, `game:armor-head-antique-forlorn-broken` x1, `game:armor-body-antique-forlorn-broken` x1, `game:armor-legs-antique-forlorn-broken` x1, `game:blade-forlorn-iron` x1, `game:spear-generic-ornategold` x1, `game:spear-generic-ornatesilver` x1
- **Cadenas**: `game:supportchain-two` x64, `game:supportchain-four` x64, `game:supportchain-twonew` x64, `game:supportchain-fournew` x64, `game:ironfence-base-ew` x32, `game:ironfence-top-ew` x1, `game:ironfence-base-ew` x1
- **Bloques metálicos**: `game:metalblock-new-riveted-{metal}` x1, `game:metalblock-corroded-riveted-{metal}` x1, `game:metalblock-new-plain-{metal}` x1, `game:metalblock-corroded-plain-{metal}` x1, `game:metalblock-corroded-sheet-{metal}` x1, `game:supportbeam-tarnishedmetal-{metal}` x16, `game:metalsheet-{metal}-down` x1, `game:metalblock-corroded-plain-rusty-iron` x1
- **Trabajo de metal**: `specializedclasses:toolrepairkit` x1
- **Tejados y piezas de cubierta**: `game:slantedroofing-copper-east-free` x16, `game:slantedroofingridge-copper-ns-free` x16, `game:slantedroofingtip-copper-free` x16, `game:slantedroofingcornerinner-copper-east-free` x16, `game:slantedroofingcornerouter-copper-east-free` x16, `game:beam-ridge-copper-free` x16, `game:beam-plane-copper-free` x16
- **Moldes y estampas de forja**: `game:ingot-{metal}` x1, `game:metalplate-{metal}` x1, `game:metalchain-{metal}` x1, `game:metallamellae-{metal}` x2, `game:metalscale-{metal}` x2, `game:rod-{metal}` x1, `game:metalnailsandstrips-{metal}` x4, `game:arrowhead-{metal}` x9
- **workstation:Moldes y estampas de forja**: `game:ingot-{metal}` x1, `game:rod-{metal}` x1, `game:metalnailsandstrips-{metal}` x4, `game:arrowhead-{metal}` x9, `game:metalscale-{metal}` x1, `game:metalplate-{metal}` x1, `game:metalchain-{metal}` x1, `game:metallamellae-{metal}` x1

### brickmaker
- **Cerámica en lote**: `game:rawbrick-{clay}` x4, `game:refractorybrick-raw-tier1` x2, `game:refractorybrick-raw-tier2` x2, `game:refractorybrick-raw-tier3` x2, `game:shingle-raw-{clay}` x32, `game:claytile-raw-plain-{clay}` x12, `game:oillamp-genie-{clay}-raw` x4
- **Ladrillos de arcilla**: `game:claybricks-uneven-four-running-{clay}` x16, `game:claybricks-uneven-four-soldier-{clay}` x16, `game:claybricks-uneven-four-header-{clay}` x16, `game:claybricks-uneven-four-running-fire` x16, `game:claybricks-uneven-four-soldier-fire` x16, `game:brickruin-irregular-{clay}` x1
- **Adobe y enlucidos**: `game:daubraw-ash` x16, `game:daubraw-browngolden` x16, `game:daubraw-brown` x16, `game:daubraw-brownlight` x16, `game:daubraw-brownweathered` x16, `game:daubraw-green` x16, `game:daubraw-orange` x16, `game:daubraw-tan` x16, `game:daubraw-yellow` x16
- **Utensilios de cocina**: `specializedclasses:porcelainbowl` x1, `specializedclasses:porcelaincrock` x1, `specializedclasses:porcelainvessel` x1
- **Ladrillos de barro**: `game:mudbrick-light` x8, `game:mudbrick-dark` x8, `game:mudbrickslab-dark-down-free` x8
- **Tierra compactada**: `game:packeddirt` x2
- **Pastas y mezclas**: `game:lime` x4, `game:mortar` x8
- **Yeso y revestimientos**: `game:plaster-plain` x8, `game:overlay-plaster-white-normal` x16, `game:overlay-plaster-yellow-normal` x16, `game:overlay-plaster-white-top-rim` x1, `game:overlay-plaster-white-zigzag` x1, `game:overlay-plaster-white-bottom-rim` x1, `game:overlay-plaster-white-cracked` x1, `game:overlay-plaster-white-damaged` x1, `game:overlay-plaster-white-crumbled` x1, `game:overlay-plaster-white-normal` x1, `game:overlay-plaster-yellow-zigzag` x1, `game:overlay-plaster-yellow-top-rim` x1, `game:overlay-plaster-yellowwhite-bottom-rim` x1, `game:overlay-plaster-yellowwhite-zigzag` x1, `game:overlay-plaster-yellow-bottom-rim` x1, `game:overlay-plaster-yellow-normal` x1
- **Tejados y piezas de cubierta**: `game:slantedroofing-{material}clay-east-free` x8, `game:slantedroofingridge-{material}clay-ns-free` x8, `game:slantedroofingtip-{material}clay-free` x8, `game:slantedroofingcornerinner-{material}clay-east-free` x8, `game:slantedroofingcornerouter-{material}clay-east-free` x8, `game:beam-ridge-{material}clay-free` x16, `game:beam-plane-{material}clay-free` x16
- **workstation:Cuba de mezclas y alquimia**: `game:mortar` x8, `game:plaster-plain` x8, `game:lime` x4

### butcher
- **Curado y secado**: `game:salt` x4, `game:bushmeat-cured` x1, `game:redmeat-cured` x1, `game:poultry-cured` x1, `game:fish-cured` x1, `game:redmeat-vintage` x1
- **Comida para animales**: `specializedclasses:universalherbivorefeed` x8, `specializedclasses:universalcarnivorefeed` x8
- **Molienda**: `game:flour-{grain}` x2
- **Utensilios de cocina**: `specializedclasses:ceramiccauldron-{color}-fired` x1
- **Conservación de alimentos**: `specializedclasses:icepack` x4
- **Molino manual**: `game:quern-{stone}` x1
- **Ganadería**: `game:trapcrate-wood` x1, `game:stationarybasket-east` x1, `game:trough-genericwood-small-ns` x1, `game:trough-genericwood-large-head-north` x1, `game:henbox` x1
- **Selladores**: `specializedclasses:Selladores` x16
- **workstation:Cuba de mezclas y alquimia**: `game:salt` x4

### clockmaker
- **Piezas Jonas y componentes antiguos**: `game:jonasparts-connector01` x1, `game:jonasparts-cylinder01` x1, `game:jonasparts-cylinder02` x1, `game:jonasparts-tank01` x1, `game:jonasparts-tank02` x1, `game:jonasparts-valve01` x1, `game:jonasframes-gearbox01` x1, `game:jonasframes-gearbox02` x1, `game:jonasframes-oscillator01` x1, `game:jonasframes-spring01` x1, `game:jonasframes-joint01` x1, `game:jonasframes-gears01` x1, `game:jonasframes-gears02` x1
- **Mecánica y transmisión de potencia**: `game:windmillrotor-wood-north` x2, `game:woodenaxle-ud` x8, `game:angledgears-s` x4, `game:brake-north` x2, `game:helvehammerbase-north` x2, `game:woodentoggle-ns` x2, `game:largegearsection-wood` x2, `game:clutch-north` x2, `game:transmission-ns` x2, `game:archimedesscrew-straight` x2, `game:archimedesscrew-ported-north` x2, `game:spurgear-s` x2, `game:windmillrotor-metal-north` x2, `game:hopper` x1, `game:chute-elbow-down-east` x4, `game:chute-straight-ns` x8, `game:chute-cross-ground` x4, `game:chute-t-ns` x4, `game:chute-3way-down-east` x4
- **Teletransportadores**: `game:basereturnteleporter` x1, `game:gear-temporal` x1
- **workstation:Mesa de inventor/relojería**: `game:metal-parts` x4, `game:jonasframes-gearbox01` x1, `game:jonasframes-gearbox02` x1, `game:jonasframes-oscillator01` x1, `game:jonasframes-spring01` x1, `game:jonasframes-joint01` x1, `game:jonasframes-gears01` x1, `game:jonasframes-gears02` x1, `game:jonasparts-connector01` x1, `game:jonasparts-cylinder01` x1, `game:jonasparts-cylinder02` x1, `game:jonasparts-tank01` x1, `game:jonasparts-tank02` x1, `game:jonasparts-valve01` x1

### farmhand
- **Fertilizantes**: `game:potash` x4, `game:bonemeal` x2, `game:powder-charcoal` x2, `game:compost` x2
- **Balsas y embarcaciones simples**: `specializedclasses:boat-raft-bamboo-angler` x1, `specializedclasses:oar-bamboo` x1
- **Tejados y piezas de cubierta**: `game:slantedroofing-bamboo-east-free` x8, `game:slantedroofingridge-bamboo-ns-free` x8, `game:slantedroofingtip-bamboo-free` x1, `game:slantedroofingcornerinner-bamboo-east-free` x8, `game:slantedroofingcornerouter-bamboo-east-free` x8, `game:beam-ridge-bamboo-free` x16, `game:beam-plane-bamboo-free` x16
- **Raíces**: `game:cattailroot` x1, `game:papyrusroot` x1
- **Cuerdas y cordajes**: `game:supportrope-one-new` x32, `game:supportrope-two-new` x32, `game:supportrope-three-new` x32, `game:supportrope-one-old` x32, `game:supportrope-two-old` x32, `game:supportrope-three-old` x32, `game:rope` x1, `game:rope` x16, `game:ladder-rope-north` x6, `game:boat-raft-{wood}` x1, `game:boat-raft-bamboo` x1, `game:ratlines` x2, `game:figurehead-eidolon` x1, `game:figurehead-erel` x1, `game:figurehead-seamonster` x1, `game:figurehead-thunderlord` x1
- **Putrefacción y compostaje**: `game:Putrefacción y compostaje` x2
- **Tierra y sustratos**: `game:soil-low-none` x64, `game:soil-medium-none` x16, `game:soil-compost-none` x4, `game:soil-high-none` x1
- **Cebos olorosos**: `game:fishingbait-dough` x6, `game:fishingbait-redmeat` x8, `game:fishingbait-bushmeat` x6, `game:fishingbait-fishmeat` x6, `game:fishingbait-poultry` x8
- **workstation:Cuba de mezclas y alquimia**: `game:potash` x4, `game:bonemeal` x2, `game:powder-charcoal` x2, `game:compost` x3
- **workstation:Mesa de germinación**: `game:seeds-{grain}` x1, `game:seeds-{vegetable}` x1, `game:seeds-cassava` x1, `game:seeds-licorice` x1, `game:seeds-{fruit}` x1, `game:seeds-{legume}` x1

### florist
- **Apicultura**: `game:beenade-closed` x1
- **Flores**: `game:flower-{flowertype}-free` x2, `game:flower-{flowertype}-free` x5, `game:flower-{flowertype}-free` x17
- **Medicina**: `game:poultice-linen-horsetail` x4, `game:poultice-linen-honey-sulfur` x4, `game:poultice-reed-horsetail` x4, `game:poultice-reed-honey-sulfur` x4
- **Cuadros y pinturas**: `game:painting-bogfort-north` x1, `game:painting-castleruin-north` x1, `game:painting-cow-north` x1, `game:painting-hunterintheforest-north` x1, `game:painting-seraph-north` x1, `game:painting-sunkenruin-north` x1, `game:painting-traveler-north` x1, `game:painting-howl-north` x1, `game:painting-elk-north` x1, `game:painting-underwater-north` x1, `game:painting-prey-north` x1, `game:painting-forestdawn-north` x1, `game:painting-fishandtherain-north` x1, `game:painting-family1-north` x1, `game:painting-butterfly-north` x1, `game:painting-glam-north` x1, `game:painting-hunter-north` x1, `game:painting-iris-north` x1, `game:painting-sleepingwolf-north` x1, `game:painting-sodhouse-north` x1, `game:painting-thunderlord-north` x1, `game:painting-trout-north` x1, `game:painting-oldvillage-north` x1, `game:painting-lastday-north` x1, `game:painting-uncle1-north` x1
- **Mezcla de pigmentos**: `specializedclasses:pigment-orange` x1, `specializedclasses:pigment-green` x1, `specializedclasses:pigment-purple` x1, `specializedclasses:pigment-pink` x1, `specializedclasses:pigment-gray` x1, `specializedclasses:pigment-brown` x1
- **Pigmentos y tintes**: `specializedclasses:pigment-black` x1, `specializedclasses:pigment-gray` x1, `specializedclasses:pigment-white` x1, `specializedclasses:pigment-brown` x1, `specializedclasses:pigment-pink` x1, `specializedclasses:pigment-purple` x1, `specializedclasses:pigment-blue` x1, `specializedclasses:pigment-green` x1, `specializedclasses:pigment-red` x1, `specializedclasses:pigment-orange` x1, `specializedclasses:pigment-yellow` x1, `specializedclasses:pigment-blue` x8, `specializedclasses:pigment-red` x8, `specializedclasses:pigment-green` x8, `specializedclasses:pigment-orange` x8, `specializedclasses:pigment-black` x8, `specializedclasses:pigment-yellow` x8
- **Alfarería y piezas de barro**: `game:flowerpot-amber` x1, `game:flowerpot-boneash` x1, `game:flowerpot-celadon` x1, `game:flowerpot-copper` x1, `game:flowerpot-earthern` x1, `game:flowerpot-moss` x1, `game:flowerpot-ochre` x1, `game:flowerpot-rutile` x1, `game:flowerpot-seasalt` x1, `game:flowerpot-tenmoku` x1, `game:clayplanter-amber` x1, `game:clayplanter-ashforest` x1, `game:clayplanter-copper` x1, `game:clayplanter-cthonic` x1, `game:clayplanter-earthern` x1, `game:clayplanter-loam` x1, `game:clayplanter-ochre` x1, `game:clayplanter-rime` x1, `game:clayplanter-seasalt` x1, `game:clayplanter-tenmoku` x1, `game:clayplanter-undergrowth` x1
- **Vasijas y recipientes cerámicos**: `game:storagevessel-ashforest` x1, `game:storagevessel-chthonic` x1, `game:storagevessel-copper` x1, `game:storagevessel-earthen` x1, `game:storagevessel-rain` x1, `game:storagevessel-cowrie` x1, `game:storagevessel-rime` x1, `game:storagevessel-oxblood` x1, `game:storagevessel-loam` x1, `game:storagevessel-undergrowth` x1, `game:storagevessel-beehive` x1, `game:storagevessel-harvest` x1, `game:storagevessel-honeydew` x1, `game:storagevessel-rutile` x1, `game:storagevessel-seasalt` x1, `game:storagevessel-springflowers` x1, `game:storagevessel-volcanic` x1, `game:storagevessel-cloisonne` x1, `game:storagevessel-cornflower` x1, `game:storagevessel-talik` x1, `game:storagevessel-caveaurora` x1, `game:storagevessel-collonade` x1, `game:storagevessel-rattlesnake` x1, `game:storagevessel-waves` x1, `game:storagevessel-wintersea` x1, `game:storagevessel-abyss` x1, `game:storagevessel-chains` x1, `game:storagevessel-entrenched` x1, `game:storagevessel-golden` x1, `game:storagevessel-motheaten` x1, `game:storagevessel-patina` x1, `game:storagevessel-pine` x1, `game:storagevessel-serpents` x1, `game:storagevessel-void` x1
- **Papeles pintados**: `game:wallpaper-blue4` x4, `game:wallpaper-green1` x4, `game:wallpaper-grey1` x4, `game:wallpaper-brown` x4, `game:wallpaper-walnut` x4, `game:wallpaper-darkpurple` x4, `game:wallpaper-yellow` x4, `game:wallpaper-pink` x4, `game:wallpaper-lightgreen` x4
- **workstation:Cuba de mezclas y alquimia**: `specializedclasses:pigment-black` x1, `specializedclasses:pigment-gray` x1, `specializedclasses:pigment-white` x1, `specializedclasses:pigment-brown` x1, `specializedclasses:pigment-pink` x1, `specializedclasses:pigment-purple` x1, `specializedclasses:pigment-blue` x1, `specializedclasses:pigment-green` x1, `specializedclasses:pigment-red` x1, `specializedclasses:pigment-orange` x1, `specializedclasses:pigment-yellow` x1
- **workstation:Mesa de germinación**: `game:flower-{flower}-free` x16, `game:leaves-placed-{wood}` x32, `game:leavesbranchy-placed-{wood}` x16

### forester
- **Camas**: `game:bed-woodaged-head-north` x1, `game:bed-village-head-north` x1
- **Cofres y almacenamiento**: `game:chest-east` x1
- **Puertas**: `game:door-ruined-rough1` x1, `game:door-ruined-rough2` x1, `game:door-ruined-rough3` x1, `game:door-ruined-windowed1` x1, `game:door-ruined-windowed2` x1, `game:door-ruined-windowed3` x1, `game:door-sleek-windowed-{wood}` x1
- **Combustibles**: `game:firewood` x16, `game:firewood` x12, `game:agedfirewood` x16, `specializedclasses:firewood-treated` x1, `game:coal-contaminated` x4, `game:charcoal` x8, `specializedclasses:briquette` x4
- **Hojas**: `game:leaves-placed-{wood}` x4
- **Empalizadas y defensas de madera**: `game:palisadewall-four-lower-cornerin-west` x8, `game:palisadewall-three-{height}-wall-west` x1, `game:palisadewall-four-{height}-wall-west` x1, `game:palisadewall-four-{height}-cornerout-west` x1, `game:palisadewall-four-top-{type}-west` x1, `game:palisadewall-four-halftop-{type}-west` x1, `game:palisadewall-three-top-{type}-west` x1, `game:palisadewall-three-halftop-{type}-west` x1, `game:palisadewall-{amount}-toproped-wall-west` x8, `game:palisadewall-four-lowerspiked-wall-west` x1
- **Tejados y piezas de cubierta**: `game:slantedroofing-{wood}-east-free` x4, `game:slantedroofingridge-{wood}-ns-free` x4, `game:slantedroofingtip-{wood}-free` x4, `game:slantedroofingcornerinner-{wood}-east-free` x4, `game:slantedroofingcornerouter-{wood}-east-free` x4, `game:beam-ridge-{wood}-free` x16, `game:beam-plane-{wood}-free` x16
- **Plantones de árbol**: `game:sapling-{wood}-free` x1
- **Madera y carpintería**: `game:carvedlog-acacia-aged-bottom-plain-ud` x1, `game:carvedlog-acacia-aged-top-fancy-ud` x1, `game:carvedlog-acacia-aged-middle-fancy-ud` x1, `game:carvedlog-acacia-aged-bottom-fancy-ud` x1, `game:carvedlog-acacia-aged-middle-plain-ud` x1, `game:carvedlog-acacia-aged-top-plain-ud` x1, `game:objetos decorativos de ruinas` x1, `game:objetos decorativos de ruinas` x16, `game:supportbeam-{wood}` x16
- **Envejecido de madera**: `game:carvedlog-acacia-aged-bottom-plain-ud` x1, `game:carvedlog-acacia-aged-middle-plain-ud` x1, `game:carvedlog-acacia-aged-top-plain-ud` x1, `game:carvedlog-acacia-aged-{part}-fancy-ud` x1, `game:planks-agedebony-ud` x8, `game:planks-rottenebony-ud` x8, `game:log-placed-aged-ud` x8, `game:debarkedlog-veryaged-ud` x8, `game:debarkedlog-rotten-ud` x8, `game:debarkedlog-veryrotten-ud` x8
- **Procesado de madera**: `game:plank-{wood}` x4, `game:plank-{wood}` x16, `game:stick` x1
- **workstation:Mesa de germinación**: `game:sapling-{wood}-free` x1
- **workstation:Mesa de tallado de madera**: `game:log-placed-aged-ud` x1, `game:firewood` x8, `game:agedfirewood` x8, `game:stick` x64, `game:plank-{wood}` x16, `game:logquad-placed-{wood}-ud` x1, `game:logquad-barkedcorner-{wood}-north` x1, `game:logquad-debarked-{wood}-ud` x1, `game:logquad-debarkedcorner-{wood}-north` x1, `game:debarkedlog-{wood}-ud` x1, `game:supportbeam-{wood}` x3, `game:planks-{wood}-ud` x3, `game:plankslab-{wood}-down-free` x6, `game:plankstairs-{wood}-up-north-free` x4, `game:debarkedlog-veryaged-ud` x1, `game:supportbeam-veryaged` x3, `game:debarkedlog-rotten-ud` x1, `game:supportbeam-rotten` x3, `game:debarkedlog-veryrotten-ud` x1, `game:supportbeam-veryrotten` x3, `game:woodenfence-{wood}-ew-free` x16, `game:woodenfencegate-{wood}-n-closed-left-free` x2, `game:roughhewnfence-{wood}-ew-free` x4, `game:roughhewnfencegate-{wood}-n-closed-free` x1, `game:woodenpath-{wood}-ns` x6, `game:trapdoor-solid-{wood}-1` x2, `game:trapdoor-window-{wood}-1` x2, `game:door-solid-{wood}` x2, `game:door-sleek-windowed-{wood}` x1, `game:slantedroofing-{wood}-east-free` x2, `game:slantedroofingbottom-{wood}-east-free` x2, `game:slantedroofingtop-{wood}-east-free` x2, `game:slantedroofinghalfleft-{wood}-east-free` x2, `game:slantedroofinghalfright-{wood}-east-free` x2, `game:slantedroofingridge-{wood}-ns-free` x2, `game:slantedroofingridgeend-{wood}-east-free` x2, `game:slantedroofingridgehalfleft-{wood}-east-free` x2, `game:slantedroofingridgehalfright-{wood}-east-free` x2, `game:slantedroofingtip-{wood}-free` x1, `game:slantedroofingcornerinner-{wood}-east-free` x2, `game:slantedroofingcornerouter-{wood}-east-free` x2, `game:carvedlog-acacia-aged-bottom-plain-ud` x1, `game:carvedlog-acacia-aged-bottom-fancy-ud` x1, `game:carvedlog-acacia-aged-middle-plain-ud` x1, `game:carvedlog-acacia-aged-middle-fancy-ud` x1, `game:carvedlog-acacia-aged-top-plain-ud` x1, `game:carvedlog-acacia-aged-top-fancy-ud` x1, `game:ladder-wood-north` x6, `game:sign-ground-north` x4, `game:signpost` x4, `game:moldrack-normal-east` x2, `game:shelf-normal-east` x3, `game:table-normal` x1

### hunter
- **Flechas**: `game:arrow-{metal}` x1, `game:arrow-bone` x1
- **Procesado de materiales**: `game:hide-scraped-small` x1, `game:hide-scraped-medium` x1, `game:hide-scraped-large` x1, `game:hide-scraped-huge` x1, `game:leather-normal-plain` x1, `game:leather-normal-plain` x2, `game:leather-normal-plain` x3, `game:leather-normal-plain` x5, `game:leather-sturdy-plain` x1, `game:hide-oiled-{species}` x4, `game:hide-oiled-{species}` x3, `game:hide-oiled-{species}` x2, `game:hide-oiled-{species}` x1
- **Curtido**: `game:leather` x1
- **workstation:Mesa de trabajo de cuero**: `game:hide-scraped-{size}` x1, `game:hide-scraped-huge` x3, `game:hide-scraped-huge` x2, `game:hide-scraped-{size}` x2, `game:hide-scraped-huge` x6, `game:hide-scraped-huge` x4

### malefactor
- **Recuperación de chatarra y piezas**: `game:scrapweaponkit` x1, `game:torchholder-ruined-empty-north` x1, `game:torchholder-aged-empty-north` x1, `game:metal-scraps` x1, `game:axe-scrap-scrap` x1, `game:club-scrap-scrap` x1, `game:club-scrapmace-scrap` x1, `game:blade-scrap-scrap` x1, `game:spear-scrap-scrap` x1
- **Comercio**: `game:gear-rusty` x8

### messenger
- **Carreteras de asfalto**: `specializedclasses:asphaltroad-free` x32
- **Bolsas y mochilas**: `game:basket-normal-reed` x1, `game:basket-normal-papyrus` x1, `game:hunterbackpack` x2, `game:hunterbackpack` x3, `game:hunterbackpack` x4, `game:linensack` x1, `game:backpack-normal` x1, `game:backpack-sturdy` x1, `specializedclasses:messengerbag` x1, `specializedclasses:scrollcase` x1, `specializedclasses:portablecrate` x1, `specializedclasses:vesselframe` x1
- **Velas**: `game:candle` x4, `game:oillamp-{color}-up` x1
- **Candelabros**: `game:displaycase-generic` x1, `game:talldisplaycase-generic` x1
- **Lámparas de gas**: `game:jonas-lamp` x1
- **Faroles y linternas**: `game:paperlantern-off` x1, `game:paperlantern-on` x1, `game:lantern-small-up` x1, `game:lantern-large-up` x1
- **Caminos y senderos**: `game:woodenpath-aged-ns` x4, `game:stonepath-free` x4, `game:stonepathstairs-up-north-free` x4, `game:stonepathslab-free` x4, `game:woodenpath-{wood}-ns` x4
- **workstation:Mesa de cartografía**: `specializedclasses:asphaltroad-free` x64, `game:woodenpath-aged-ns` x2, `game:stonepath-free` x2, `game:stonepathstairs-up-north-free` x2, `game:stonepathslab-free` x2, `game:stonepath-free` x1
- **workstation:Mesa de trabajo de cuero**: `game:backpack-normal` x1, `game:backpack-sturdy` x1, `specializedclasses:messengerbag` x1, `specializedclasses:scrollcase` x1, `game:basket-normal-reed` x1, `game:basket-normal-papyrus` x1, `game:hunterbackpack` x1, `game:hunterbackpack` x2, `game:hunterbackpack` x3, `game:hunterbackpack` x4, `game:linensack` x1

### quarrier
- **Bloques envejecidos**: `game:overlay-damagedstone` x16, `game:agedstonebricks-{rock}` x1, `game:polishedrockold-full-{rock}` x1, `game:polishedrockold-cobbled-{rock}` x1, `game:crackedstonebricks-{rock}` x1, `game:diamond-stone-clean-aged` x4, `game:diamond-stone-dark-aged` x4, `game:diamond-stone-light-aged` x4, `game:diamond-stone-mixed-aged` x4
- **Montaje de piezas**: `game:rock-{stonetype}` x1, `game:stonebrick-{stonetype}` x1, `game:stonebricks-{stonetype}` x2, `game:tile-2x2-plain-travertine` x4, `game:stonebrickslab-{stonetype}-down-free` x2, `game:tileslab-2x2-plain-travertine-down-free` x2, `game:stonebrickstairs-{stonetype}-up-north-free` x1
- **Procesado de materiales**: `game:stone-{rocktype}` x4, `game:gravel-{stonetype}` x1, `game:sand-{graveltype}` x1
- **Cuarzo y cristales**: `game:quartz-plain` x1, `game:quartz-ornate` x1, `game:quartzpillar-ud` x1, `game:quartzslab-down-free` x4, `game:quartzstairs-up-north-free` x4
- **Tejados y piezas de cubierta**: `game:slantedroofing-slate-east-free` x8, `game:slantedroofingridge-slate-ns-free` x8, `game:slantedroofingtip-slate-free` x8, `game:slantedroofingcornerinner-slate-east-free` x8, `game:slantedroofingcornerouter-slate-east-free` x8, `game:beam-ridge-slate-free` x16, `game:beam-plane-slate-free` x16
- **Formaciones de cueva**: `game:stalagsection-{rock}-14` x8, `game:stalagsection-{rock}-12` x8, `game:stalagsection-{rock}-10` x8, `game:stalagsection-{rock}-08` x8, `game:stalagsection-{rock}-06` x8, `game:stalagsection-{rock}-04` x8, `game:crackedrock-{rock}` x1
- **workstation:Banco de corte de piedra**: `game:stone-{stone}` x4, `game:gravel-{stone}` x1, `game:sand-{stone}` x1, `game:sandwavy-{stone}` x1, `game:cobbleskull-{stone}` x1, `game:cobblestoneslab-{stone}-down-free` x2, `game:cobblestone-{stone}` x1, `game:cobblestonestairs-{stone}-up-north-free` x1, `game:rockpolished-{stone}` x1, `game:polishedrockslab-{stone}-down-free` x2, `game:tile-2x2-plain-travertine` x2, `game:tileslab-2x2-plain-travertine-down-free` x4, `game:stonebricks-{stone}` x1, `game:stonebrickslab-{stone}-down-free` x2, `game:stonebrickstairs-{stone}-up-north-free` x1, `game:drystone-{stone}` x1, `game:drystonefence-{stone}-ew-free` x1, `game:crackedrock-{stone}` x1, `game:cobblestonefan-{stone}-north` x1, `game:polishedrockold-full-{stone}` x1, `game:polishedrockold-cobbled-{stone}` x1, `game:agedstonebricks-{stone}` x1, `game:crackedstonebricks-{stone}` x1, `game:rock-{stone}` x1

### spelunker
- **Bombas y explosivos**: `game:bomb-ore` x8, `game:bomb-stone` x8, `game:bomb-scrap` x8
- **Molienda**: `game:lime` x2, `game:salt` x4, `game:powder-{oretype}` x4, `game:saltpeter` x2, `game:powder-flint` x2, `game:powder-alum` x2, `game:powder-charcoal` x2, `game:bonemeal` x2, `game:bonemeal` x1, `game:powder-iron-oxide` x4
- **Faroles y linternas**: `specializedclasses:spelunkinglantern` x1
- **Tierra mineral para batear**: `Tierra mineral carbonosa` x1, `Tierra mineral cristalina` x1, `Tierra mineral metálica` x1
- **workstation:Cuba de mezclas y alquimia**: `Tierra mineral carbonosa` x1, `Tierra mineral cristalina` x1, `Tierra mineral metálica` x1, `game:lime` x4, `game:saltpeter` x8, `game:salt` x4, `game:powder-{oretype}` x4

### tailor
- **Kits de ropa y costura**: `specializedclasses:clothingassemblykit-generic` x1, `specializedclasses:clothingassemblykit-generic` x4, `specializedclasses:clothingassemblykit-head` x1, `specializedclasses:clothingassemblykit-shoulder` x1, `specializedclasses:clothingassemblykit-upperbody` x1, `specializedclasses:clothingassemblykit-upperbodyover` x1, `specializedclasses:clothingassemblykit-lowerbody` x1, `specializedclasses:clothingassemblykit-foot` x1, `specializedclasses:clothingassemblykit-hand` x1, `specializedclasses:clothingassemblykit-neck` x1, `specializedclasses:clothingassemblykit-face` x1, `specializedclasses:clothingassemblykit-waist` x1, `specializedclasses:clothingassemblykit-arm` x1, `specializedclasses:clothingassemblykit-emblem` x1
- **Fibras**: `game:flaxfibers` x1, `game:flaxtwine` x1, `game:hay-aged-ud` x16
- **Tejados y piezas de cubierta**: `game:slantedroofing-thatch-east-free` x4, `game:slantedroofingridge-thatch-ns-free` x4, `game:slantedroofingtip-thatch-free` x4, `game:slantedroofingcornerinner-thatch-east-free` x4, `game:slantedroofingcornerouter-thatch-east-free` x4, `game:slantedroofing-agedthatch-east-free` x16, `game:slantedroofingridge-agedthatch-ns-free` x16, `game:slantedroofingtip-agedthatch-free` x16, `game:slantedroofingcornerinner-agedthatch-east-free` x16, `game:slantedroofingcornerouter-agedthatch-east-free` x16, `game:slantedroofing-thatch-east-free` x16, `game:slantedroofingridge-thatch-ns-free` x16, `game:slantedroofingtip-thatch-free` x16, `game:slantedroofingcornerinner-thatch-east-free` x16, `game:slantedroofingcornerouter-thatch-east-free` x16
- **Alfombras y tapices de suelo**: `game:rug-blue-diamond-center` x20, `game:rug-blue-diamond-corner` x1, `game:rug-blue-diamond-edge` x1, `game:rug-blue-diamond-cornernails` x1, `game:rug-blue-diamond-edgenails` x1, `game:rug-blue-diamond-center` x1, `game:mediumcarpet-black-ns` x1, `game:mediumcarpet-blue-ns` x1, `game:mediumcarpet-turqoise-ns` x1, `game:smallcarpet-black` x1, `game:smallcarpet-blue` x1, `game:smallcarpet-brown` x1, `game:smallcarpet-purple` x1, `game:smallcarpet-red` x1, `game:smallcarpet-turqoise` x2, `game:smallcarpet-turqoise2` x2

### vintner
- **Arbustos**: `game:fruitingbushcutting-{berrytype}-free` x1
- **Esquejes y recortes de plantas**: `game:fruittree-cutting` x1
- **Bolsa de fructificación**: `specializedclasses:fruitingbag-empty` x1
- **Tintado de vidrio**: `game:glass-blue` x8, `game:glass-violet` x8, `game:glass-red` x8, `game:glass-yellow` x8, `game:glass-brown` x8, `game:glass-pink` x8, `game:glass-green` x8, `game:glass-vintage` x8, `game:glass-quartz` x8, `game:glass-smoky` x8
- **Trabajo de vidrio**: `game:clearquartz` x1, `game:glasspane-leaded-{wood}-ew` x4
- **Líquidos y recipientes**: `game:barrel` x1, `game:woodbucket` x1, `game:fruitpress-ns` x1, `game:verticalboiler-west` x1, `game:condenser-west` x1
- **Tejados y piezas de cubierta**: `game:slantedroofing-sod-east-free` x16, `game:slantedroofingridge-sod-ns-free` x16, `game:slantedroofingtip-sod-free` x2, `game:slantedroofingcornerinner-sod-east-free` x16, `game:slantedroofingcornerouter-sod-east-free` x16
- **workstation:Mesa de germinación**: `game:fruittree-cutting` x1, `game:fruitingbushcutting-{berrytype}-free` x1

## Lectura dura para balance de servidor

1. Si todos eligen clases “cool” como Blackguard, Clockmaker o Spelunker, el servidor sufrirá comida/materiales básicos. Farmhand, Forester y Butcher son el esqueleto.
2. Archivist, Florist, Tailor y Vintner parecen menos urgentes, pero son los que convierten un asentamiento pobre en uno con medicina, decoración, ropa, tintes, conservación y economía.
3. Quarrier + Brickmaker juntos pueden reventar el coste de megaconstrucciones. Si hay economía, vigila inflación de materiales de construcción.
4. Messenger no parece fuerte en combate, pero reduce fricción del servidor: caminos, bolsas, transporte y rutas. Eso aumenta actividad real.
5. Malefactor necesita traders/ruinas/salvage para brillar. Sin eso, se queda en fantasía de rogue con poca producción estructural.
