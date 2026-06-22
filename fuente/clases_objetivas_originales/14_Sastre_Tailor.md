# Sastre / Tailor (`tailor`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de guadaña: **+75%** (valor interno `0.75`)
- drop de fibra de lino: **+100%** (valor interno `1`)
- drop de hierba: **+100%** (valor interno `1`)
- esquiva garantizada: enfriamiento: **60** (valor interno `60`)
- probabilidad de fibra de lino desde hierba: **+10%** (valor interno `0.1`)
- pérdida de durabilidad de armadura: **-80%** (valor interno `-0.8`)
- velocidad con plantas: **+100%** (valor interno `1`)
- velocidad con telas/fibras: **+100%** (valor interno `1`)
- velocidad de sprint: **+10%** (valor interno `0.1`)

### Malus objetivos
- afectación de armadura a velocidad: **+20%** (valor interno `0.2`)
- daño recibido por frío: **+400%** (valor interno `4`)
- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Esgrimista | `fencer` | positivo | `sprintSpeedMul` = 0.1 → velocidad de sprint: **+10%** (valor interno `0.1`)<br>`dodgeGuaranteedCooldown` = 60 → esquiva garantizada: enfriamiento: **60** (valor interno `60`)<br>`armorWalkSpeedAffectedness` = 0.2 → afectación de armadura a velocidad: **+20%** (valor interno `0.2`) |
| Sastre | `tailor` | positivo | Desbloquea kit de confección, huso, gambesones, costureros, ropa, fibras de lino/papiro, alfombras y tejados de paja. |
| Sastrería | `clothier` | desbloqueo/vanilla | Desbloquea gambesón a medida, costurero y numerosas prendas de vestir. |
| A Medida | `bespoke` | positivo | `armorDurabilityLoss` = -0.8 → pérdida de durabilidad de armadura: **-80%** (valor interno `-0.8`) |
| Triturador | `thresher` | positivo | `plantMiningSpeedMul` = 1 → velocidad con plantas: **+100%** (valor interno `1`)<br>`clothMiningSpeedMul` = 1 → velocidad con telas/fibras: **+100%** (valor interno `1`)<br>`scytheDurabilitySaveChance` = 0.75 → ahorro de durabilidad de guadaña: **+75%** (valor interno `0.75`)<br>`knifeDurabilitySaveChance` = 0.75 → ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`) |
| Tejedor | `weaver` | positivo | `grassFlaxFiberDropChance` = 0.1 → probabilidad de fibra de lino desde hierba: **+10%** (valor interno `0.1`)<br>`flaxFiberDropRate` = 1 → drop de fibra de lino: **+100%** (valor interno `1`)<br>`grassDropRate` = 1 → drop de hierba: **+100%** (valor interno `1`) |
| Delicado | `delicate` | negativo | `oreDropRate` = -0.1 → drop de mineral: **-10%** (valor interno `-0.1`)<br>`oreMiningSpeedMul` = -0.1 → velocidad al picar mineral: **-10%** (valor interno `-0.1`)<br>`stoneMiningSpeedMul` = -0.1 → velocidad al picar piedra: **-10%** (valor interno `-0.1`)<br>`stabilityLossMul` = 0.25 → pérdida de estabilidad temporal: **+25%** (valor interno `0.25`) |
| Puritano | `prude` | negativo | `frostDamageTaken` = 4 → daño recibido por frío: **+400%** (valor interno `4`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Kit de confección | `specializedclasses:clothingassemblykit` | escanea prendas: sí<br>kit de ensamblaje de ropa por ranuras |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **53**
- Recetas por estación con `requiredTrait`: **0**
- Recetas de compatibilidad opcional detectadas: **2**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Kits de ropa y costura | 19 |
| Fibras | 3 |
| Tejados y piezas de cubierta | 15 |
| Alfombras y tapices de suelo | 16 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit genérica ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit genérica ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit genérica ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit genérica ×4 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit genérica ×4 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit genérica ×4 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit casco ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit shoulder ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit upperbody ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit upperbodyover ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit lowerbody ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit foot ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit hand ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit neck ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit face ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit waist ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit arm ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit emblem ×1 | — |
| mesa de crafteo normal | Kits de ropa y costura | Clothingassemblykit emblem ×1 | — |
| mesa de crafteo normal | Fibras | Fibras de lino ×1 | — |
| mesa de crafteo normal | Fibras | Cordel de lino ×1 | — |
| mesa de crafteo normal | Fibras | Hay envejecido vertical ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado paja este libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado paja norte-sur libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado paja libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado paja este libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado paja este libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado paja envejecida este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado paja envejecida norte-sur libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado paja envejecida libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado paja envejecida este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado paja envejecida este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado paja este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado paja norte-sur libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado paja libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado paja este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado paja este libre ×16 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra azul diamante centro ×20 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra azul diamante esquina ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra azul diamante borde ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra azul diamante esquina con clavos ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra azul diamante borde con clavos ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra azul diamante centro ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra mediana negra norte-sur ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra mediana azul norte-sur ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra mediana turquesa norte-sur ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra pequeña negra ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra pequeña azul ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra pequeña marrón ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra pequeña morada ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra pequeña roja ×1 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra pequeña turquesa ×2 | — |
| mesa de crafteo normal | Alfombras y tapices de suelo | Alfombra pequeña turquesa 2 ×2 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Tailor's Delight: fibras | 2 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Tailor's Delight: fibras | Fibras de lino ×1 | — |
| receta de compatibilidad | Tailor's Delight: fibras | Cordel de lino ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Fencer | `co-fencer` | replace | `sprintSpeedMul` = 0.1 → velocidad de sprint: **+10%** (valor interno `0.1`)<br>`dodgeGuaranteedCooldown` = 60 → esquiva garantizada: enfriamiento: **60** (valor interno `60`)<br>`armorWalkSpeedAffectedness` = 0.2 → afectación de armadura a velocidad: **+20%** (valor interno `0.2`)<br>`armorHungerRateAffectedness` = 0.2 → afectación de armadura al hambre: **+20%** (valor interno `0.2`)<br>`armorManipulationSpeedAffectedness` = 0.2 → afectación de armadura a manipulación: **+20%** (valor interno `0.2`)<br>`bowsProficiency` = 0.45 → competencia con arcos: **+45%** (valor interno `0.45`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`spearsProficiency` = 0.25 → competencia con lanzas: **+25%** (valor interno `0.25`) |
| combatoverhaulfork | CO: Fencer | `co-fencer` | replace | `sprintSpeedMul` = 0.1 → velocidad de sprint: **+10%** (valor interno `0.1`)<br>`dodgeGuaranteedCooldown` = 60 → esquiva garantizada: enfriamiento: **60** (valor interno `60`)<br>`armorWalkSpeedAffectedness` = 0.2 → afectación de armadura a velocidad: **+20%** (valor interno `0.2`)<br>`armorHungerRateAffectedness` = 0.2 → afectación de armadura al hambre: **+20%** (valor interno `0.2`)<br>`armorManipulationSpeedAffectedness` = 0.2 → afectación de armadura a manipulación: **+20%** (valor interno `0.2`)<br>`bowsProficiency` = 0.45 → competencia con arcos: **+45%** (valor interno `0.45`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`spearsProficiency` = 0.25 → competencia con lanzas: **+25%** (valor interno `0.25`) |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| Alfarería y piezas de barro | 0.3 | 30% |
| cooking | 0.3 | 30% |
| farming | 0.6 | 60% |

## 7. Análisis funcional breve
Análisis: textil/equipo. Su mayor peligro objetivo es el frío.
