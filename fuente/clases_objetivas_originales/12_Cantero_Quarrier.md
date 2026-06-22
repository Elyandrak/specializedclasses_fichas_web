# Cantero / Quarrier (`quarrier`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- afectación de armadura a velocidad: **-75%** (valor interno `-0.75`)
- ahorro de durabilidad de cincel: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de herramientas de piedra: **+100%** (valor interno `1`)
- ahorro de durabilidad de martillo: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de pico: **+75%** (valor interno `0.75`)
- daño con herramientas de piedra: **+50%** (valor interno `0.5`)
- drop de piedra: **+25%** (valor interno `0.25`)
- estabilidad temporal en interiores: **+30%** (valor interno `0.3`)
- probabilidad de roca/piedra suelta: **+50%** (valor interno `0.5`)
- velocidad al picar mineral: **+150%** (valor interno `1.5`)
- velocidad al picar piedra: **+100%** (valor interno `1`)
- velocidad de minado con herramientas de piedra: **+50%** (valor interno `0.5`)
- vida máxima: **+10%** (valor interno `0.1`)

### Malus objetivos
- contenido obtenido de vasijas: **-25%** (valor interno `-0.25`)
- drop de cultivos silvestres: **-25%** (valor interno `-0.25`)
- drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)
- drop de mineral: **-10%** (valor interno `-0.1`)
- drop/rendimiento de animales: **-10%** (valor interno `-0.1`)
- velocidad al caminar: **-5%** (valor interno `-0.05`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Obrero | `laborer` | positivo | `armorWalkSpeedAffectedness` = -0.75 → afectación de armadura a velocidad: **-75%** (valor interno `-0.75`)<br>`maxHealthMul` = 0.1 → vida máxima: **+10%** (valor interno `0.1`)<br>`walkspeed` = -0.05 → velocidad al caminar: **-5%** (valor interno `-0.05`) |
| Cantero | `quarrier` | positivo | Desbloquea bloques de piedra raros/envejecidos, procesado de roca en piedras/grava/arena, recomposición de roca y banco de cantería. |
| Ascético | `ascetic` | positivo | `stabilityIndoorOffset` = 0.3 → estabilidad temporal en interiores: **+30%** (valor interno `0.3`)<br>`stoneToolDamageDealt` = 0.5 → daño con herramientas de piedra: **+50%** (valor interno `0.5`)<br>`stoneToolDurabilitySaveChance` = 1 → ahorro de durabilidad de herramientas de piedra: **+100%** (valor interno `1`)<br>`stoneToolMiningSpeedMul` = 0.5 → velocidad de minado con herramientas de piedra: **+50%** (valor interno `0.5`) |
| Cantero | `stonecutter` | positivo | `rockDropChance` = 0.5 → probabilidad de roca/piedra suelta: **+50%** (valor interno `0.5`)<br>`stoneDropRate` = 0.25 → drop de piedra: **+25%** (valor interno `0.25`) |
| Tunelador | `tunneler` | positivo | `stoneMiningSpeedMul` = 1 → velocidad al picar piedra: **+100%** (valor interno `1`)<br>`oreMiningSpeedMul` = 1.5 → velocidad al picar mineral: **+150%** (valor interno `1.5`)<br>`pickaxeDurabilitySaveChance` = 0.75 → ahorro de durabilidad de pico: **+75%** (valor interno `0.75`)<br>`hammerDurabilitySaveChance` = 0.75 → ahorro de durabilidad de martillo: **+75%** (valor interno `0.75`)<br>`chiselDurabilitySaveChance` = 0.75 → ahorro de durabilidad de cincel: **+75%** (valor interno `0.75`) |
| Protegido | `sheltered` | negativo | `forageDropRate` = -0.25 → drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)<br>`wildCropDropRate` = -0.25 → drop de cultivos silvestres: **-25%** (valor interno `-0.25`)<br>`animalLootDropRate` = -0.1 → drop/rendimiento de animales: **-10%** (valor interno `-0.1`) |
| Torpe | `clumsy` | negativo | `oreDropRate` = -0.1 → drop de mineral: **-10%** (valor interno `-0.1`)<br>`vesselContentsDropRate` = -0.25 → contenido obtenido de vasijas: **-25%** (valor interno `-0.25`) |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **38**
- Recetas por estación con `requiredTrait`: **24**
- Recetas de compatibilidad opcional detectadas: **8**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Bloques envejecidos | 9 |
| Montaje de piezas | 7 |
| Procesado de materiales | 3 |
| Cuarzo y cristales | 5 |
| Tejados y piezas de cubierta | 7 |
| Formaciones de cueva | 7 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Bloques envejecidos | Overlay damagedstone ×16 | — |
| mesa de crafteo normal | Bloques envejecidos | Ladrillos de piedra envejecidos rock ×1 | — |
| mesa de crafteo normal | Bloques envejecidos | Roca pulida antigua bloque completo rock ×1 | — |
| mesa de crafteo normal | Bloques envejecidos | Roca pulida antigua adoquinado rock ×1 | — |
| mesa de crafteo normal | Bloques envejecidos | Crackedstonebricks rock ×1 | — |
| mesa de crafteo normal | Bloques envejecidos | Diamante piedra clean envejecido ×4 | — |
| mesa de crafteo normal | Bloques envejecidos | Diamante piedra dark envejecido ×4 | — |
| mesa de crafteo normal | Bloques envejecidos | Diamante piedra light envejecido ×4 | — |
| mesa de crafteo normal | Bloques envejecidos | Diamante piedra mixed envejecido ×4 | — |
| mesa de crafteo normal | Montaje de piezas | Rock tipo de piedra ×1 | — |
| mesa de crafteo normal | Montaje de piezas | Stonebrick tipo de piedra ×1 | — |
| mesa de crafteo normal | Montaje de piezas | Stonebricks tipo de piedra ×2 | — |
| mesa de crafteo normal | Montaje de piezas | Tile 2x2 liso travertine ×4 | — |
| mesa de crafteo normal | Montaje de piezas | Stonebrickslab tipo de piedra abajo libre ×2 | — |
| mesa de crafteo normal | Montaje de piezas | Tileslab 2x2 liso travertine abajo libre ×2 | — |
| mesa de crafteo normal | Montaje de piezas | Stonebrickstairs tipo de piedra up norte libre ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Piedra tipo de roca ×4 | — |
| mesa de crafteo normal | Procesado de materiales | Gravel tipo de piedra ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Sand graveltype ×1 | — |
| mesa de crafteo normal | Cuarzo y cristales | Cuarzo liso ×1 | — |
| mesa de crafteo normal | Cuarzo y cristales | Cuarzo ornate ×1 | — |
| mesa de crafteo normal | Cuarzo y cristales | Quartzpillar vertical ×1 | — |
| mesa de crafteo normal | Cuarzo y cristales | Quartzslab abajo libre ×4 | — |
| mesa de crafteo normal | Cuarzo y cristales | Quartzstairs up norte libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado slate este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado slate norte-sur libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado slate libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado slate este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado slate este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam ridge slate libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam plane slate libre ×16 | — |
| mesa de crafteo normal | Formaciones de cueva | Stalagsection rock 14 ×8 | — |
| mesa de crafteo normal | Formaciones de cueva | Stalagsection rock 12 ×8 | — |
| mesa de crafteo normal | Formaciones de cueva | Stalagsection rock 10 ×8 | — |
| mesa de crafteo normal | Formaciones de cueva | Stalagsection rock 08 ×8 | — |
| mesa de crafteo normal | Formaciones de cueva | Stalagsection rock 06 ×8 | — |
| mesa de crafteo normal | Formaciones de cueva | Stalagsection rock 04 ×8 | — |
| mesa de crafteo normal | Formaciones de cueva | Crackedrock rock ×1 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Banco de corte de piedra | 24 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Banco de corte de piedra | Piedra piedra ×4 | — |
| estación especial | Banco de corte de piedra | Gravel piedra ×1 | — |
| estación especial | Banco de corte de piedra | Sand piedra ×1 | — |
| estación especial | Banco de corte de piedra | Sandwavy piedra ×1 | — |
| estación especial | Banco de corte de piedra | Cobbleskull piedra ×1 | — |
| estación especial | Banco de corte de piedra | Cobblestoneslab piedra abajo libre ×2 | — |
| estación especial | Banco de corte de piedra | Cobblestone piedra ×1 | — |
| estación especial | Banco de corte de piedra | Cobblestonestairs piedra up norte libre ×1 | — |
| estación especial | Banco de corte de piedra | Rockpolished piedra ×1 | — |
| estación especial | Banco de corte de piedra | Polishedrockslab piedra abajo libre ×2 | — |
| estación especial | Banco de corte de piedra | Tile 2x2 liso travertine ×2 | — |
| estación especial | Banco de corte de piedra | Tileslab 2x2 liso travertine abajo libre ×4 | — |
| estación especial | Banco de corte de piedra | Stonebricks piedra ×1 | — |
| estación especial | Banco de corte de piedra | Stonebrickslab piedra abajo libre ×2 | — |
| estación especial | Banco de corte de piedra | Stonebrickstairs piedra up norte libre ×1 | — |
| estación especial | Banco de corte de piedra | Drystone piedra ×1 | — |
| estación especial | Banco de corte de piedra | Drystonefence piedra este-oeste libre ×1 | — |
| estación especial | Banco de corte de piedra | Crackedrock piedra ×1 | — |
| estación especial | Banco de corte de piedra | Cobblestonefan piedra norte ×1 | — |
| estación especial | Banco de corte de piedra | Roca pulida antigua bloque completo piedra ×1 | — |
| estación especial | Banco de corte de piedra | Roca pulida antigua adoquinado piedra ×1 | — |
| estación especial | Banco de corte de piedra | Ladrillos de piedra envejecidos piedra ×1 | — |
| estación especial | Banco de corte de piedra | Crackedstonebricks piedra ×1 | — |
| estación especial | Banco de corte de piedra | Rock piedra ×1 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Bricklayers: montaje de ladrillos | 7 |
| Stone Quarry: cantería | 1 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Bricklayers: montaje de ladrillos | Stonetile normal piedra ×1 | — |
| receta de compatibilidad | Bricklayers: montaje de ladrillos | Stonetile shiny piedra ×1 | — |
| receta de compatibilidad | Bricklayers: montaje de ladrillos | Stonetiles dull piedra ×1 | — |
| receta de compatibilidad | Bricklayers: montaje de ladrillos | Stonetiles polished piedra ×1 | — |
| receta de compatibilidad | Bricklayers: montaje de ladrillos | Smallstonebricks piedra ×2 | — |
| receta de compatibilidad | Bricklayers: montaje de ladrillos | Smallstonebrickslab piedra abajo libre ×2 | — |
| receta de compatibilidad | Bricklayers: montaje de ladrillos | Smallstonebrickstairs piedra up norte libre ×2 | — |
| receta de compatibilidad | Stone Quarry: cantería | Plugandfeather metal 0 abajo norte ×4 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Laborer | `co-laborer` | replace | `armorWalkSpeedAffectedness` = -0.75 → afectación de armadura a velocidad: **-75%** (valor interno `-0.75`)<br>`armorHungerRateAffectedness` = -0.75 → afectación de armadura al hambre: **-75%** (valor interno `-0.75`)<br>`armorManipulationSpeedAffectedness` = -0.75 → afectación de armadura a manipulación: **-75%** (valor interno `-0.75`)<br>`maxHealthMul` = 0.1 → vida máxima: **+10%** (valor interno `0.1`)<br>`walkspeed` = -0.05 → velocidad al caminar: **-5%** (valor interno `-0.05`)<br>`axesProficiency` = 0.25 → competencia con hachas: **+25%** (valor interno `0.25`)<br>`clubsProficiency` = 0.25 → competencia con garrotes: **+25%** (valor interno `0.25`)<br>`macesProficiency` = 0.25 → competencia con mazas: **+25%** (valor interno `0.25`) |
| combatoverhaulfork | CO: Laborer | `co-laborer` | replace | `armorWalkSpeedAffectedness` = -0.75 → afectación de armadura a velocidad: **-75%** (valor interno `-0.75`)<br>`armorHungerRateAffectedness` = -0.75 → afectación de armadura al hambre: **-75%** (valor interno `-0.75`)<br>`armorManipulationSpeedAffectedness` = -0.75 → afectación de armadura a manipulación: **-75%** (valor interno `-0.75`)<br>`maxHealthMul` = 0.1 → vida máxima: **+10%** (valor interno `0.1`)<br>`walkspeed` = -0.05 → velocidad al caminar: **-5%** (valor interno `-0.05`)<br>`axesProficiency` = 0.25 → competencia con hachas: **+25%** (valor interno `0.25`)<br>`clubsProficiency` = 0.25 → competencia con garrotes: **+25%** (valor interno `0.25`)<br>`macesProficiency` = 0.25 → competencia con mazas: **+25%** (valor interno `0.25`) |
| stonequarryrepckfipil | Compatibilidad: Stone Quarry | `quarriestonequarry` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| stonequarryrepckfipil | Compatibilidad: Stone Quarry | Thumper | `quarrierstonequarryplugs` | addmerge | `canHammerAllPlugsAtOnce` = 1 → puede martillear todos los plugs a la vez: **activado (+1)** (valor interno `1`) |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| temporaladaptation | 0.2 | 20% |
| combat | 0.2 | 20% |
| mining | 0.8 | 80% |

## 7. Análisis funcional breve
Análisis: piedra y construcción pesada. No es saqueador fino; es obrero de roca.
