# Espeleólogo / Spelunker (`spelunker`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de pico: **+50%** (valor interno `0.5`)
- daño recibido por aplastamiento: **-90%** (valor interno `-0.9`)
- daño recibido por explosión: **-90%** (valor interno `-0.9`)
- drop de mineral: **+100%** (valor interno `1`)
- salida/rendimiento al batear: **+100%** (valor interno `1`)
- velocidad al batear: **+100%** (valor interno `1`)
- velocidad al picar mineral: **+50%** (valor interno `0.5`)

### Malus objetivos
- daño con herramientas de piedra: **-20%** (valor interno `-0.2`)
- drop de cultivos silvestres: **-25%** (valor interno `-0.25`)
- drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)
- drop/rendimiento de animales: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)
- velocidad de minado con herramientas de piedra: **-20%** (valor interno `-0.2`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Zapador | `sapper` | positivo | `explosionDamageTaken` = -0.9 → daño recibido por explosión: **-90%** (valor interno `-0.9`)<br>`crushingDamageTaken` = -0.9 → daño recibido por aplastamiento: **-90%** (valor interno `-0.9`) |
| Espeleólogo | `spelunker` | positivo | Desbloquea hallazgos de bateo carbonífero/cristalino/metálico, procesado de minerales, salitre, bombas y farol de espeleología. |
| Bateador | `panner` | positivo | `panningOutputMul` = 1 → salida/rendimiento al batear: **+100%** (valor interno `1`)<br>`panningSpeedMul` = 1 → velocidad al batear: **+100%** (valor interno `1`) |
| Prospector | `prospector` | positivo | `oreDropRate` = 1 → drop de mineral: **+100%** (valor interno `1`)<br>`oreMiningSpeedMul` = 0.5 → velocidad al picar mineral: **+50%** (valor interno `0.5`)<br>`pickaxeDurabilitySaveChance` = 0.5 → ahorro de durabilidad de pico: **+50%** (valor interno `0.5`) |
| Petrofóbico | `petrophobe` | negativo | `stoneMiningSpeedMul` = -0.1 → velocidad al picar piedra: **-10%** (valor interno `-0.1`)<br>`stoneToolMiningSpeedMul` = -0.2 → velocidad de minado con herramientas de piedra: **-20%** (valor interno `-0.2`)<br>`stoneToolDamageDealt` = -0.2 → daño con herramientas de piedra: **-20%** (valor interno `-0.2`) |
| Protegido | `sheltered` | negativo | `forageDropRate` = -0.25 → drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)<br>`wildCropDropRate` = -0.25 → drop de cultivos silvestres: **-25%** (valor interno `-0.25`)<br>`animalLootDropRate` = -0.1 → drop/rendimiento de animales: **-10%** (valor interno `-0.1`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Farol de espeleología | `specializedclasses:spelunkinglantern` | bloque/linterna reforzable de cueva; sin porcentaje propio declarado como stat de clase |
| Hallazgo carbonífero/cristalino/metálico | `specializedclasses:*Tierra mineral para batear` | bloques bateables; drops detallados en documento global |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **20**
- Recetas por estación con `requiredTrait`: **7**
- Recetas de compatibilidad opcional detectadas: **0**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Bombas y explosivos | 5 |
| Molienda | 11 |
| Faroles y linternas | 1 |
| Tierra mineral para batear | 3 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Bombas y explosivos | Bomb mineral ×8 | — |
| mesa de crafteo normal | Bombas y explosivos | Bomb piedra ×8 | — |
| mesa de crafteo normal | Bombas y explosivos | Bomb scrap ×8 | — |
| mesa de crafteo normal | Bombas y explosivos | Bomb scrap ×8 | — |
| mesa de crafteo normal | Bombas y explosivos | Bomb scrap ×8 | — |
| mesa de crafteo normal | Molienda | Lime ×2 | — |
| mesa de crafteo normal | Molienda | Salt ×4 | — |
| mesa de crafteo normal | Molienda | Powder oretype ×4 | — |
| mesa de crafteo normal | Molienda | Saltpeter ×2 | — |
| mesa de crafteo normal | Molienda | Powder sílex ×2 | — |
| mesa de crafteo normal | Molienda | Powder alumbre ×2 | — |
| mesa de crafteo normal | Molienda | Powder charcoal ×2 | — |
| mesa de crafteo normal | Molienda | Bonemeal ×2 | — |
| mesa de crafteo normal | Molienda | Bonemeal ×1 | — |
| mesa de crafteo normal | Molienda | Powder iron oxide ×4 | — |
| mesa de crafteo normal | Molienda | Powder iron oxide ×4 | — |
| mesa de crafteo normal | Faroles y linternas | Spelunkinglantern ×1 | — |
| mesa de crafteo normal | Tierra mineral para batear | Tierra mineral carbonosa ×1 | — |
| mesa de crafteo normal | Tierra mineral para batear | Tierra mineral cristalina ×1 | — |
| mesa de crafteo normal | Tierra mineral para batear | Tierra mineral metálica ×1 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Cuba de mezclas y alquimia | 7 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Cuba de mezclas y alquimia | Tierra mineral carbonosa ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Tierra mineral cristalina ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Tierra mineral metálica ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Lime ×4 | — |
| estación especial | Cuba de mezclas y alquimia | Saltpeter ×8 | — |
| estación especial | Cuba de mezclas y alquimia | Salt ×4 | — |
| estación especial | Cuba de mezclas y alquimia | Powder oretype ×4 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Sapper | `co-sapper` | replace | `explosionDamageTaken` = -0.9 → daño recibido por explosión: **-90%** (valor interno `-0.9`)<br>`crushingDamageTaken` = -0.9 → daño recibido por aplastamiento: **-90%** (valor interno `-0.9`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`)<br>`spearsProficiency` = 0.25 → competencia con lanzas: **+25%** (valor interno `0.25`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Sapper | `co-sapper` | replace | `explosionDamageTaken` = -0.9 → daño recibido por explosión: **-90%** (valor interno `-0.9`)<br>`crushingDamageTaken` = -0.9 → daño recibido por aplastamiento: **-90%** (valor interno `-0.9`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`)<br>`spearsProficiency` = 0.25 → competencia con lanzas: **+25%** (valor interno `0.25`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`) |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| mining | 0.7 | 70% |
| digging | 0.5 | 50% |

## 7. Análisis funcional breve
Análisis: minero de riesgo. Muy fuerte en mineral/bateo/explosivos; no sostiene comida.
