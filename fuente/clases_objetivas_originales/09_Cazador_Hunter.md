# Cazador / Hunter (`hunter`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`)
- daño a distancia: **+20%** (valor interno `0.2`)
- daño contra animales: **+50%** (valor interno `0.5`)
- daño recibido de animales: **-25%** (valor interno `-0.25`)
- drop de pieles: **+100%** (valor interno `1`)
- drop/rendimiento de animales: **+25%** (valor interno `0.25`)
- precisión a distancia: **+75%** (valor interno `0.75`)
- tiempo de despiece/cosecha animal: **-50%** (valor interno `-0.5`)
- velocidad al caminar: **+10%** (valor interno `0.1`)

### Malus objetivos
- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- saciedad de fruta: **-10%** (valor interno `-0.1`)
- saciedad de grano: **-10%** (valor interno `-0.1`)
- saciedad de verdura: **-10%** (valor interno `-0.1`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Francotirador | `marksman` | positivo | `rangedWeaponsAcc` = 0.75 → precisión a distancia: **+75%** (valor interno `0.75`)<br>`rangedWeaponsDamage` = 0.2 → daño a distancia: **+20%** (valor interno `0.2`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`) |
| Cazador | `hunter` | positivo | Desbloquea recetas de flechas, flechas de hueso, curtido, cuero, pieles raspadas y trabajo de peletería. |
| Tirador | `bowyer` | desbloqueo/vanilla | Desbloquea arco recurvo y flecha rudimentaria. |
| Guardabosques | `ranger` | positivo | `animalDamageDealt` = 0.5 → daño contra animales: **+50%** (valor interno `0.5`)<br>`animalDamageTaken` = -0.25 → daño recibido de animales: **-25%** (valor interno `-0.25`) |
| Tallador | `carver` | positivo | `animalHarvestingTime` = -0.5 → tiempo de despiece/cosecha animal: **-50%** (valor interno `-0.5`)<br>`animalLootDropRate` = 0.25 → drop/rendimiento de animales: **+25%** (valor interno `0.25`)<br>`hideDropRate` = 1 → drop de pieles: **+100%** (valor interno `1`)<br>`knifeDurabilitySaveChance` = 0.75 → ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`) |
| Delicado | `delicate` | negativo | `oreDropRate` = -0.1 → drop de mineral: **-10%** (valor interno `-0.1`)<br>`oreMiningSpeedMul` = -0.1 → velocidad al picar mineral: **-10%** (valor interno `-0.1`)<br>`stoneMiningSpeedMul` = -0.1 → velocidad al picar piedra: **-10%** (valor interno `-0.1`)<br>`stabilityLossMul` = 0.25 → pérdida de estabilidad temporal: **+25%** (valor interno `0.25`) |
| Carnívoro | `carnivorous` | negativo | `grainSatietyMul` = -0.1 → saciedad de grano: **-10%** (valor interno `-0.1`)<br>`vegetableSatietyMul` = -0.1 → saciedad de verdura: **-10%** (valor interno `-0.1`)<br>`fruitSatietyMul` = -0.1 → saciedad de fruta: **-10%** (valor interno `-0.1`) |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **28**
- Recetas por estación con `requiredTrait`: **6**
- Recetas de compatibilidad opcional detectadas: **14**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Flechas | 2 |
| Procesado de materiales | 25 |
| Curtido | 1 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Flechas | Arrow metal ×1 | — |
| mesa de crafteo normal | Flechas | Arrow bone ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide scraped small ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide scraped medium ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide scraped large ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide scraped huge ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Leather normal liso ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Leather normal liso ×2 | — |
| mesa de crafteo normal | Procesado de materiales | Leather normal liso ×3 | — |
| mesa de crafteo normal | Procesado de materiales | Leather normal liso ×5 | — |
| mesa de crafteo normal | Procesado de materiales | Leather sturdy liso ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×4 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×3 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×2 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×2 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×4 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×3 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×2 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×2 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×1 | — |
| mesa de crafteo normal | Procesado de materiales | Hide oiled species ×1 | — |
| mesa de crafteo normal | Curtido | Leather ×1 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Mesa de trabajo de cuero | 6 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Mesa de trabajo de cuero | Hide scraped size ×1 | — |
| estación especial | Mesa de trabajo de cuero | Hide scraped huge ×3 | — |
| estación especial | Mesa de trabajo de cuero | Hide scraped huge ×2 | — |
| estación especial | Mesa de trabajo de cuero | Hide scraped size ×2 | — |
| estación especial | Mesa de trabajo de cuero | Hide scraped huge ×6 | — |
| estación especial | Mesa de trabajo de cuero | Hide scraped huge ×4 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Butchering: flechas | 1 |
| Butchering: bolsas y equipo | 7 |
| More Arrows: flechas | 3 |
| Primitive Survival: cecina | 3 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Butchering: flechas | Arrow bone ×1 | — |
| receta de compatibilidad | Butchering: bolsas y equipo | Butcherybag standard ×1 | — |
| receta de compatibilidad | Butchering: bolsas y equipo | Butcherybag standard ×1 | — |
| receta de compatibilidad | Butchering: bolsas y equipo | Butcherybag standard ×1 | — |
| receta de compatibilidad | Butchering: bolsas y equipo | Butcherybag standard ×1 | — |
| receta de compatibilidad | Butchering: bolsas y equipo | Butcherybag leather ×1 | — |
| receta de compatibilidad | Butchering: bolsas y equipo | Butcherybag primitive ×1 | — |
| receta de compatibilidad | Butchering: bolsas y equipo | Butcherybag sturdyleather ×1 | — |
| receta de compatibilidad | More Arrows: flechas | Arrow barbed metal ×1 | — |
| receta de compatibilidad | More Arrows: flechas | Arrow blunt metal ×1 | — |
| receta de compatibilidad | More Arrows: flechas | Arrow bodkin metal ×1 | — |
| receta de compatibilidad | Primitive Survival: cecina | Jerky bushmeat raw ×8 | — |
| receta de compatibilidad | Primitive Survival: cecina | Jerky redmeat raw ×8 | — |
| receta de compatibilidad | Primitive Survival: cecina | Jerky fish raw ×8 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| butchering | Compatibilidad: Butchering | `hunterbutchering` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| butchering | Compatibilidad: Butchering | Hauler | `hauler` | addmerge | `animalCarryingEfficiencyMul` = 0.5 → eficiencia cargando animales: **+50%** (valor interno `0.5`) |
| combatoverhaul | CO: Ranger | `co-ranger` | replace | `rangedWeaponsAcc` = 0.75 → precisión a distancia: **+75%** (valor interno `0.75`)<br>`steadyAim` = 0.75 → puntería estable: **+75%** (valor interno `0.75`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`)<br>`bowsProficiency` = 0.45 → competencia con arcos: **+45%** (valor interno `0.45`)<br>`crossbowsProficiency` = 0.45 → competencia con ballestas: **+45%** (valor interno `0.45`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Ranger | `co-ranger` | replace | `rangedWeaponsAcc` = 0.75 → precisión a distancia: **+75%** (valor interno `0.75`)<br>`steadyAim` = 0.75 → puntería estable: **+75%** (valor interno `0.75`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`)<br>`bowsProficiency` = 0.45 → competencia con arcos: **+45%** (valor interno `0.45`)<br>`crossbowsProficiency` = 0.45 → competencia con ballestas: **+45%** (valor interno `0.45`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`) |
| morearrows | Compatibilidad: More Arrows | `huntermorearrows` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| primitivesurvival | Compatibilidad: Primitive Survival | `hunterprimitivesurvival` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| survival | 0.1 | 10% |
| combat | 0.3 | 30% |
| husbandry | 0.6 | 60% |
| fishing | 0.2 | 20% |

## 7. Análisis funcional breve
Análisis: cazador real: daño a distancia, animales, pieles y cuero. Pierde valor donde no haya fauna/economía de cuero.
