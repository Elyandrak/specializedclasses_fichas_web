# Agricultor / Farmhand (`farmhand`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de azada: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de caña de pescar: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de guadaña: **+75%** (valor interno `0.75`)
- daño causado global: **+10%** (valor interno `0.1`)
- daño recibido global: **-10%** (valor interno `-0.1`)
- drop de cosecha cultivada: **+50%** (valor interno `0.5`)
- drop de cultivos silvestres: **+100%** (valor interno `1`)
- drop de semillas cultivadas: **+100%** (valor interno `1`)
- permanencia del fertilizante: **+25%** (valor interno `0.25`)
- probabilidad de estacas de bambú desde hojas: **+5%** (valor interno `0.05`)
- probabilidad de lianas desde hojas: **+5%** (valor interno `0.05`)
- probabilidad de restos vegetales desde hierba: **+10%** (valor interno `0.1`)
- probabilidad de semilla en cultivos jóvenes: **+100%** (valor interno `1`)
- velocidad al caminar: **+5%** (valor interno `0.05`)
- velocidad con plantas: **+100%** (valor interno `1`)
- velocidad con tierra: **+100%** (valor interno `1`)
- velocidad nadando: **+50%** (valor interno `0.5`)

### Malus objetivos
- drop de mineral: **-10%** (valor interno `-0.1`)
- estabilidad temporal en interiores: **-20%** (valor interno `-0.2`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Milicia | `militia` | positivo | `walkspeed` = 0.05 → velocidad al caminar: **+5%** (valor interno `0.05`)<br>`globalDamageTaken` = -0.1 → daño recibido global: **-10%** (valor interno `-0.1`)<br>`globalDamageDealt` = 0.1 → daño causado global: **+10%** (valor interno `0.1`) |
| Agricultor | `farmhand` | positivo | Desbloquea fertilizantes, mejora permanente de tierras, cuerdas, cebo de pesca, balsa de bambú de pescador y recetas agrícolas. |
| Pescador | `fisherman` | positivo | `swimSpeedMul` = 0.5 → velocidad nadando: **+50%** (valor interno `0.5`)<br>`fishingPoleDurabilitySaveChance` = 0.75 → ahorro de durabilidad de caña de pescar: **+75%** (valor interno `0.75`) |
| Cosechador | `harvester` | positivo | `cropProduceDropRate` = 0.5 → drop de cosecha cultivada: **+50%** (valor interno `0.5`)<br>`cropSeedDropRate` = 1 → drop de semillas cultivadas: **+100%** (valor interno `1`)<br>`wildCropDropRate` = 1 → drop de cultivos silvestres: **+100%** (valor interno `1`)<br>`youngSeedDropChance` = 1 → probabilidad de semilla en cultivos jóvenes: **+100%** (valor interno `1`) |
| Carpintero Naval | `shipwright` | positivo | `leavesBambooStakeDropChance` = 0.05 → probabilidad de estacas de bambú desde hojas: **+5%** (valor interno `0.05`)<br>`leavesVineDropChance` = 0.05 → probabilidad de lianas desde hojas: **+5%** (valor interno `0.05`) |
| Cultivador | `tiller` | positivo | `soilMiningSpeedMul` = 1 → velocidad con tierra: **+100%** (valor interno `1`)<br>`plantMiningSpeedMul` = 1 → velocidad con plantas: **+100%** (valor interno `1`)<br>`hoeDurabilitySaveChance` = 0.75 → ahorro de durabilidad de azada: **+75%** (valor interno `0.75`)<br>`scytheDurabilitySaveChance` = 0.75 → ahorro de durabilidad de guadaña: **+75%** (valor interno `0.75`) |
| Fertilizador | `fertilizer` | positivo | `fertilizerPermanencePercentage` = 0.25 → permanencia del fertilizante: **+25%** (valor interno `0.25`)<br>`grassLeafyDebrisDropChance` = 0.1 → probabilidad de restos vegetales desde hierba: **+10%** (valor interno `0.1`) |
| Delicado | `delicate` | negativo | `oreDropRate` = -0.1 → drop de mineral: **-10%** (valor interno `-0.1`)<br>`oreMiningSpeedMul` = -0.1 → velocidad al picar mineral: **-10%** (valor interno `-0.1`)<br>`stoneMiningSpeedMul` = -0.1 → velocidad al picar piedra: **-10%** (valor interno `-0.1`)<br>`stabilityLossMul` = 0.25 → pérdida de estabilidad temporal: **+25%** (valor interno `0.25`) |
| Bronceado | `sunkissed` | negativo | `stabilityIndoorOffset` = -0.2 → estabilidad temporal en interiores: **-20%** (valor interno `-0.2`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Balsa de bambú de pescador | `specializedclasses:boat-raft-bamboo-angler` | multiplicador de velocidad: 1.5<br>asientos: 2<br>almacenamiento de entidad: 2 ranuras de cesta y 1 ranura de remo |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **51**
- Recetas por estación con `requiredTrait`: **10**
- Recetas de compatibilidad opcional detectadas: **10**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Fertilizantes | 4 |
| Balsas y embarcaciones simples | 2 |
| Tejados y piezas de cubierta | 7 |
| Raíces | 2 |
| Cuerdas y cordajes | 17 |
| Putrefacción y compostaje | 5 |
| Tierra y sustratos | 4 |
| Cebos olorosos | 10 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Fertilizantes | Potash ×4 | — |
| mesa de crafteo normal | Fertilizantes | Bonemeal ×2 | — |
| mesa de crafteo normal | Fertilizantes | Powder charcoal ×2 | — |
| mesa de crafteo normal | Fertilizantes | Compost ×2 | — |
| mesa de crafteo normal | Balsas y embarcaciones simples | Boat Balsas y embarcaciones simples bamboo angler ×1 | — |
| mesa de crafteo normal | Balsas y embarcaciones simples | Oar bamboo ×1 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado bamboo este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado bamboo norte-sur libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado bamboo libre ×1 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado bamboo este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado bamboo este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam ridge bamboo libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam plane bamboo libre ×16 | — |
| mesa de crafteo normal | Raíces | Cattailroot ×1 | — |
| mesa de crafteo normal | Raíces | Papyrusroot ×1 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Supportrope one nuevo ×32 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Supportrope doble nuevo ×32 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Supportrope three nuevo ×32 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Supportrope one old ×32 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Supportrope doble old ×32 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Supportrope three old ×32 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Rope ×1 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Rope ×16 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Ladder rope norte ×6 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Boat Balsas y embarcaciones simples Madera y carpintería ×1 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Boat Balsas y embarcaciones simples Madera y carpintería ×1 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Boat Balsas y embarcaciones simples bamboo ×1 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Ratlines ×2 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Figurehead eidolon ×1 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Figurehead erel ×1 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Figurehead seamonster ×1 | — |
| mesa de crafteo normal | Cuerdas y cordajes | Figurehead thunderlord ×1 | — |
| mesa de crafteo normal | Putrefacción y compostaje | Rot ×2 | — |
| mesa de crafteo normal | Putrefacción y compostaje | Rot ×2 | — |
| mesa de crafteo normal | Putrefacción y compostaje | Rot ×2 | — |
| mesa de crafteo normal | Putrefacción y compostaje | Rot ×2 | — |
| mesa de crafteo normal | Putrefacción y compostaje | Rot ×2 | — |
| mesa de crafteo normal | Tierra y sustratos | Soil low none ×64 | — |
| mesa de crafteo normal | Tierra y sustratos | Soil medium none ×16 | — |
| mesa de crafteo normal | Tierra y sustratos | Soil compost none ×4 | — |
| mesa de crafteo normal | Tierra y sustratos | Soil high none ×1 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait dough ×6 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait dough ×6 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait redmeat ×8 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait redmeat ×8 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait bushmeat ×6 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait bushmeat ×6 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait fishmeat ×6 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait fishmeat ×6 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait poultry ×8 | — |
| mesa de crafteo normal | Cebos olorosos | Fishingbait poultry ×8 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Cuba de mezclas y alquimia | 4 |
| Mesa de germinación | 6 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Cuba de mezclas y alquimia | Potash ×4 | — |
| estación especial | Cuba de mezclas y alquimia | Bonemeal ×2 | — |
| estación especial | Cuba de mezclas y alquimia | Powder charcoal ×2 | — |
| estación especial | Cuba de mezclas y alquimia | Compost ×3 | — |
| estación especial | Mesa de germinación | Seeds grain ×1 | — |
| estación especial | Mesa de germinación | Seeds vegetable ×1 | — |
| estación especial | Mesa de germinación | Seeds cassava ×1 | — |
| estación especial | Mesa de germinación | Seeds licorice ×1 | — |
| estación especial | Mesa de germinación | Seeds fruit ×1 | — |
| estación especial | Mesa de germinación | Seeds legume ×1 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Food Shelves: almacenamiento agrícola | 1 |
| Primitive Survival: pesca | 1 |
| Primitive Survival: lombrices | 1 |
| Tailor's Delight: cuerdas | 7 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Food Shelves: almacenamiento agrícola | Floursack normal este ×1 | — |
| receta de compatibilidad | Primitive Survival: pesca | Fishbasket norte ×1 | — |
| receta de compatibilidad | Primitive Survival: lombrices | Earthwormcastings ×1 | — |
| receta de compatibilidad | Tailor's Delight: cuerdas | Supportrope one nuevo ×32 | — |
| receta de compatibilidad | Tailor's Delight: cuerdas | Supportrope doble nuevo ×32 | — |
| receta de compatibilidad | Tailor's Delight: cuerdas | Supportrope three nuevo ×32 | — |
| receta de compatibilidad | Tailor's Delight: cuerdas | Rope ×1 | — |
| receta de compatibilidad | Tailor's Delight: cuerdas | Rope ×16 | — |
| receta de compatibilidad | Tailor's Delight: cuerdas | Ladder rope norte ×6 | — |
| receta de compatibilidad | Tailor's Delight: cuerdas | Ratlines ×2 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Militia | `co-militia` | replace | `walkspeed` = 0.05 → velocidad al caminar: **+5%** (valor interno `0.05`)<br>`globalDamageTaken` = -0.1 → daño recibido global: **-10%** (valor interno `-0.1`)<br>`globalDamageDealt` = 0.1 → daño causado global: **+10%** (valor interno `0.1`)<br>`clubsProficiency` = 0.25 → competencia con garrotes: **+25%** (valor interno `0.25`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`)<br>`spearsProficiency` = 0.25 → competencia con lanzas: **+25%** (valor interno `0.25`)<br>`crossbowsProficiency` = 0.45 → competencia con ballestas: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Militia | `co-militia` | replace | `walkspeed` = 0.05 → velocidad al caminar: **+5%** (valor interno `0.05`)<br>`globalDamageTaken` = -0.1 → daño recibido global: **-10%** (valor interno `-0.1`)<br>`globalDamageDealt` = 0.1 → daño causado global: **+10%** (valor interno `0.1`)<br>`clubsProficiency` = 0.25 → competencia con garrotes: **+25%** (valor interno `0.25`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`)<br>`spearsProficiency` = 0.25 → competencia con lanzas: **+25%** (valor interno `0.25`)<br>`crossbowsProficiency` = 0.45 → competencia con ballestas: **+45%** (valor interno `0.45`) |
| hydrateordiedrate | Sombreado | `shaded` | add | `HoD:CoolingMul` = 0.5 → enfriamiento/sombra (Hydrate or Diedrate): **+50%** (valor interno `0.5`) |
| primitivesurvival | Compatibilidad: Primitive Survival | `farmhandprimitivesurvival` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| digging | 0.1 | 10% |
| farming | 0.6 | 60% |
| fishing | 0.5 | 50% |

## 7. Análisis funcional breve
Análisis: base alimentaria del servidor. Muy fuerte en cultivos/semillas; malo para minería.
