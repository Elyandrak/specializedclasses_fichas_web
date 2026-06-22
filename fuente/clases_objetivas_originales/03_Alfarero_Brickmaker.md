# Alfarero / Brickmaker (`brickmaker`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de pala: **+75%** (valor interno `0.75`)
- daño recibido global: **-20%** (valor interno `-0.2`)
- drop de arcilla: **+100%** (valor interno `1`)
- drop de hierba: **+25%** (valor interno `0.25`)
- drop de palos: **+25%** (valor interno `0.25`)
- drop de turba: **+25%** (valor interno `0.25`)
- velocidad con arcilla/cerámica: **+100%** (valor interno `1`)
- velocidad con arena: **+100%** (valor interno `1`)
- velocidad con grava: **+100%** (valor interno `1`)
- velocidad con nieve: **+100%** (valor interno `1`)
- velocidad con tierra: **+100%** (valor interno `1`)
- vida máxima: **+50%** (valor interno `0.5`)

### Malus objetivos
- afectación de armadura a velocidad: **+20%** (valor interno `0.2`)
- daño recibido por fuego: **+100%** (valor interno `1`)
- drop de frutales: **-75%** (valor interno `-0.75`)
- drop de semillas cultivadas: **-75%** (valor interno `-0.75`)
- drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Luchador | `bruiser` | positivo | `maxHealthMul` = 0.5 → vida máxima: **+50%** (valor interno `0.5`)<br>`globalDamageTaken` = -0.2 → daño recibido global: **-20%** (valor interno `-0.2`)<br>`armorWalkSpeedAffectedness` = 0.2 → afectación de armadura a velocidad: **+20%** (valor interno `0.2`) |
| Alfarero | `brickmaker` | positivo | Desbloquea recetas de arcilla y cerámica por lotes: ladrillos, tejas, Adobe y enlucidos, mortero, cal, yeso, barro compactado y recipientes de porcelana. |
| Divisor | `delver` | positivo | `clayDropRate` = 1 → drop de arcilla: **+100%** (valor interno `1`)<br>`ceramicMiningSpeedMul` = 1 → velocidad con arcilla/cerámica: **+100%** (valor interno `1`) |
| Escavador | `excavator` | positivo | `shovelDurabilitySaveChance` = 0.75 → ahorro de durabilidad de pala: **+75%** (valor interno `0.75`)<br>`soilMiningSpeedMul` = 1 → velocidad con tierra: **+100%** (valor interno `1`)<br>`gravelMiningSpeedMul` = 1 → velocidad con grava: **+100%** (valor interno `1`)<br>`sandMiningSpeedMul` = 1 → velocidad con arena: **+100%** (valor interno `1`)<br>`snowMiningSpeedMul` = 1 → velocidad con nieve: **+100%** (valor interno `1`) |
| Operario de Horno | `kilnhand` | positivo | `grassDropRate` = 0.25 → drop de hierba: **+25%** (valor interno `0.25`)<br>`peatDropRate` = 0.25 → drop de turba: **+25%** (valor interno `0.25`)<br>`stickDropRate` = 0.25 → drop de palos: **+25%** (valor interno `0.25`) |
| Escrubidor | `scourer` | negativo | `cropSeedDropRate` = -0.75 → drop de semillas cultivadas: **-75%** (valor interno `-0.75`)<br>`treeSeedDropRate` = -0.75 → drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)<br>`fruitTreeDropRate` = -0.75 → drop de frutales: **-75%** (valor interno `-0.75`) |
| Inflamable | `flammable` | negativo | `fireDamageTaken` = 1 → daño recibido por fuego: **+100%** (valor interno `1`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Cuenco de porcelana | `specializedclasses:porcelainbowl` | capacidad: 2 L<br>capacidad de raciones: 2<br>tamaño máximo de stack: 8 |
| Crock/Olla de porcelana | `specializedclasses:porcelaincrock` | capacidad de raciones: 8<br>tamaño máximo de stack: 1 |
| Vasija de porcelana | `specializedclasses:porcelainvessel` | ranuras normales: 16<br>tamaño máximo de stack: 4 |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **65**
- Recetas por estación con `requiredTrait`: **3**
- Recetas de compatibilidad opcional detectadas: **2**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Cerámica en lote | 8 |
| Ladrillos de arcilla | 6 |
| Adobe y enlucidos | 15 |
| Utensilios de cocina | 3 |
| Ladrillos de barro | 3 |
| Tierra compactada | 1 |
| Pastas y mezclas | 2 |
| Yeso y revestimientos | 20 |
| Tejados y piezas de cubierta | 7 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Cerámica en lote | Rawbrick arcilla ×4 | — |
| mesa de crafteo normal | Cerámica en lote | Refractorybrick raw tier1 ×2 | — |
| mesa de crafteo normal | Cerámica en lote | Refractorybrick raw tier2 ×2 | — |
| mesa de crafteo normal | Cerámica en lote | Refractorybrick raw tier3 ×2 | — |
| mesa de crafteo normal | Cerámica en lote | Refractorybrick raw tier3 ×2 | — |
| mesa de crafteo normal | Cerámica en lote | Shingle raw arcilla ×32 | — |
| mesa de crafteo normal | Cerámica en lote | Claytile raw liso arcilla ×12 | — |
| mesa de crafteo normal | Cerámica en lote | Oillamp genie arcilla raw ×4 | — |
| mesa de crafteo normal | Ladrillos de arcilla | Claybricks uneven cuádruple running arcilla ×16 | — |
| mesa de crafteo normal | Ladrillos de arcilla | Claybricks uneven cuádruple soldier arcilla ×16 | — |
| mesa de crafteo normal | Ladrillos de arcilla | Claybricks uneven cuádruple header arcilla ×16 | — |
| mesa de crafteo normal | Ladrillos de arcilla | Claybricks uneven cuádruple running refractaria ×16 | — |
| mesa de crafteo normal | Ladrillos de arcilla | Claybricks uneven cuádruple soldier refractaria ×16 | — |
| mesa de crafteo normal | Ladrillos de arcilla | Brickruin irregular arcilla ×1 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw ash ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw ash ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw browngolden ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw marrón ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw browngolden ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw brownlight ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw brownlight ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw browngolden ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw brownweathered ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw green ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw orange ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw tan ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw tan ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw browngolden ×16 | — |
| mesa de crafteo normal | Adobe y enlucidos | Daubraw yellow ×16 | — |
| mesa de crafteo normal | Utensilios de cocina | Porcelainbowl ×1 | — |
| mesa de crafteo normal | Utensilios de cocina | Porcelaincrock ×1 | — |
| mesa de crafteo normal | Utensilios de cocina | Porcelainvessel ×1 | — |
| mesa de crafteo normal | Ladrillos de barro | Mudbrick light ×8 | — |
| mesa de crafteo normal | Ladrillos de barro | Mudbrick dark ×8 | — |
| mesa de crafteo normal | Ladrillos de barro | Mudbrickslab dark abajo libre ×8 | — |
| mesa de crafteo normal | Tierra compactada | Packeddirt ×2 | — |
| mesa de crafteo normal | Pastas y mezclas | Lime ×4 | — |
| mesa de crafteo normal | Pastas y mezclas | Mortar ×8 | — |
| mesa de crafteo normal | Yeso y revestimientos | Plaster liso ×8 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white normal ×16 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellow normal ×16 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellow normal ×16 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellow normal ×16 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellow normal ×16 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white normal ×16 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white parte superior rim ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white zigzag ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white bottom rim ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white cracked ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white damaged ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white crumbled ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos white normal ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellow zigzag ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellow parte superior rim ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellowwhite bottom rim ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellowwhite zigzag ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellow bottom rim ×1 | — |
| mesa de crafteo normal | Yeso y revestimientos | Overlay Yeso y revestimientos yellow normal ×1 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado materialclay este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado materialclay norte-sur libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado materialclay libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado materialclay este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado materialclay este libre ×8 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam ridge materialclay libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam plane materialclay libre ×16 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Cuba de mezclas y alquimia | 3 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Cuba de mezclas y alquimia | Mortar ×8 | — |
| estación especial | Cuba de mezclas y alquimia | Plaster liso ×8 | — |
| estación especial | Cuba de mezclas y alquimia | Lime ×4 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Bricklayers: cerámica en lote | 2 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Bricklayers: cerámica en lote | Clayrawtile raw arcilla ×2 | — |
| receta de compatibilidad | Bricklayers: cerámica en lote | Clayshingle raw malaquita ×32 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Bruiser | `co-bruiser` | replace | `maxHealthMul` = 0.5 → vida máxima: **+50%** (valor interno `0.5`)<br>`globalDamageTaken` = -0.2 → daño recibido global: **-20%** (valor interno `-0.2`)<br>`armorWalkSpeedAffectedness` = 0.2 → afectación de armadura a velocidad: **+20%** (valor interno `0.2`)<br>`armorHungerRateAffectedness` = 0.2 → afectación de armadura al hambre: **+20%** (valor interno `0.2`)<br>`armorManipulationSpeedAffectedness` = 0.2 → afectación de armadura a manipulación: **+20%** (valor interno `0.2`)<br>`slingsProficiency` = 0.45 → competencia con hondas: **+45%** (valor interno `0.45`)<br>`clubsProficiency` = 0.25 → competencia con garrotes: **+25%** (valor interno `0.25`)<br>`macesProficiency` = 0.25 → competencia con mazas: **+25%** (valor interno `0.25`) |
| combatoverhaulfork | CO: Bruiser | `co-bruiser` | replace | `maxHealthMul` = 0.5 → vida máxima: **+50%** (valor interno `0.5`)<br>`globalDamageTaken` = -0.2 → daño recibido global: **-20%** (valor interno `-0.2`)<br>`armorWalkSpeedAffectedness` = 0.2 → afectación de armadura a velocidad: **+20%** (valor interno `0.2`)<br>`armorHungerRateAffectedness` = 0.2 → afectación de armadura al hambre: **+20%** (valor interno `0.2`)<br>`armorManipulationSpeedAffectedness` = 0.2 → afectación de armadura a manipulación: **+20%** (valor interno `0.2`)<br>`slingsProficiency` = 0.45 → competencia con hondas: **+45%** (valor interno `0.45`)<br>`clubsProficiency` = 0.25 → competencia con garrotes: **+25%** (valor interno `0.25`)<br>`macesProficiency` = 0.25 → competencia con mazas: **+25%** (valor interno `0.25`) |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| Alfarería y piezas de barro | 0.6 | 60% |
| digging | 0.6 | 60% |

## 7. Análisis funcional breve
Análisis: constructor material. Objetivamente fuerte para arcilla, tierra y porcelana; vulnerable al fuego.
