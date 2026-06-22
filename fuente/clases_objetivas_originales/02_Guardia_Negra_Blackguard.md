# Guardia Negra / Blackguard (`blackguard`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- afectación de armadura a velocidad: **-20%** (valor interno `-0.2`)
- ahorro de durabilidad de martillo: **+75%** (valor interno `0.75`)
- daño causado global: **+20%** (valor interno `0.2`)
- daño recibido por fuego: **-80%** (valor interno `-0.8`)
- puede manipular objetos calientes: **activado (+1)** (valor interno `1`)
- velocidad al trabajar metal: **+100%** (valor interno `1`)
- vida máxima: **+20%** (valor interno `0.2`)

### Malus objetivos
- daño contra humanoides: **-10%** (valor interno `-0.1`)
- drop de cultivos silvestres: **-25%** (valor interno `-0.25`)
- drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)
- drop/rendimiento de animales: **-10%** (valor interno `-0.1`)
- velocidad al caminar: **-5%** (valor interno `-0.05`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Guerrero | `warlord` | positivo | `globalDamageDealt` = 0.2 → daño causado global: **+20%** (valor interno `0.2`)<br>`armorWalkSpeedAffectedness` = -0.2 → afectación de armadura a velocidad: **-20%** (valor interno `-0.2`)<br>`maxHealthMul` = 0.2 → vida máxima: **+20%** (valor interno `0.2`)<br>`walkspeed` = -0.05 → velocidad al caminar: **-5%** (valor interno `-0.05`) |
| Guardia Negra | `blackguard` | positivo | Desbloquea kits de reparación, armaduras y armas raras, forjas/fuelles más baratos, bloques metálicos y componentes de metal por lotes con el bloque de estampación. |
| Despiadado | `merciless` | desbloqueo/vanilla | Desbloquea espada y escudo exclusivos de Guardia Negra. |
| Herrero | `blacksmith` | positivo | `hammerDurabilitySaveChance` = 0.75 → ahorro de durabilidad de martillo: **+75%** (valor interno `0.75`)<br>`metalMiningSpeedMul` = 1 → velocidad al trabajar metal: **+100%** (valor interno `1`) |
| Termorresistente | `heatproof` | positivo | `canHandleHotItems` = 1 → puede manipular objetos calientes: **activado (+1)** (valor interno `1`)<br>`fireDamageTaken` = -0.8 → daño recibido por fuego: **-80%** (valor interno `-0.8`) |
| Protegido | `sheltered` | negativo | `forageDropRate` = -0.25 → drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)<br>`wildCropDropRate` = -0.25 → drop de cultivos silvestres: **-25%** (valor interno `-0.25`)<br>`animalLootDropRate` = -0.1 → drop/rendimiento de animales: **-10%** (valor interno `-0.1`) |
| Juramento | `oathsworn` | negativo | `humanoidDamageDealt` = -0.1 → daño contra humanoides: **-10%** (valor interno `-0.1`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Kit de reparación de herramientas | `specializedclasses:toolrepairkit` | restauración máxima: 75% de la durabilidad máxima<br>tamaño máximo de stack: 4 |
| Kit de reparación de armadura | `specializedclasses:armorrepairkit` | restauración máxima: 75% de la durabilidad máxima<br>tamaño máximo de stack: 4 |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **43**
- Recetas por estación con `requiredTrait`: **8**
- Recetas de compatibilidad opcional detectadas: **0**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Armaduras y piezas defensivas | 10 |
| Cadenas | 7 |
| Bloques metálicos | 10 |
| Trabajo de metal | 1 |
| Tejados y piezas de cubierta | 7 |
| Moldes y estampas de forja | 8 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Armaduras y piezas defensivas | Kit de reparación de armadura ×3 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Armadura casco antigua guardia negra rota ×1 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Armadura pechera antigua guardia negra rota ×1 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Armadura grebas antigua guardia negra rota ×1 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Armadura casco antigua forlorn rota ×1 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Armadura pechera antigua forlorn rota ×1 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Armadura grebas antigua forlorn rota ×1 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Hoja forlorn iron ×1 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Lanza genérica ornamentada de oro ×1 | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | Lanza genérica ornamentada de plata ×1 | — |
| mesa de crafteo normal | Cadenas | Cadena de soporte doble ×64 | — |
| mesa de crafteo normal | Cadenas | Cadena de soporte cuádruple ×64 | — |
| mesa de crafteo normal | Cadenas | Cadena de soporte doble nueva ×64 | — |
| mesa de crafteo normal | Cadenas | Cadena de soporte cuádruple nueva ×64 | — |
| mesa de crafteo normal | Cadenas | Valla de hierro base este-oeste ×32 | — |
| mesa de crafteo normal | Cadenas | Valla de hierro parte superior este-oeste ×1 | — |
| mesa de crafteo normal | Cadenas | Valla de hierro base este-oeste ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Bloque metálico nuevo remachado metal ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Bloque metálico corroído remachado metal ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Bloque metálico nuevo liso metal ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Bloque metálico nuevo remachado metal ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Bloque metálico corroído liso metal ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Bloque metálico corroído lámina metal ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Viga de soporte metal deslustrado metal ×16 | — |
| mesa de crafteo normal | Bloques metálicos | Lámina de metal metal abajo ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Bloque metálico corroído liso metal ×1 | — |
| mesa de crafteo normal | Bloques metálicos | Bloque metálico corroído liso rusty iron ×1 | — |
| mesa de crafteo normal | Trabajo de metal | Toolrepairkit ×1 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado copper este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado copper norte-sur libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado copper libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado copper este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado copper este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam ridge copper libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam plane copper libre ×16 | — |
| mesa de crafteo normal | Moldes y estampas de forja | Ingot metal ×1 | — |
| mesa de crafteo normal | Moldes y estampas de forja | Metalplate metal ×1 | — |
| mesa de crafteo normal | Moldes y estampas de forja | Metalchain metal ×1 | — |
| mesa de crafteo normal | Moldes y estampas de forja | Metallamellae metal ×2 | — |
| mesa de crafteo normal | Moldes y estampas de forja | Metalscale metal ×2 | — |
| mesa de crafteo normal | Moldes y estampas de forja | Rod metal ×1 | — |
| mesa de crafteo normal | Moldes y estampas de forja | Metalnailsandstrips metal ×4 | — |
| mesa de crafteo normal | Moldes y estampas de forja | Arrowhead metal ×9 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Moldes y estampas de forja | 8 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Moldes y estampas de forja | Ingot metal ×1 | — |
| estación especial | Moldes y estampas de forja | Rod metal ×1 | — |
| estación especial | Moldes y estampas de forja | Metalnailsandstrips metal ×4 | — |
| estación especial | Moldes y estampas de forja | Arrowhead metal ×9 | — |
| estación especial | Moldes y estampas de forja | Metalscale metal ×1 | — |
| estación especial | Moldes y estampas de forja | Metalplate metal ×1 | — |
| estación especial | Moldes y estampas de forja | Metalchain metal ×1 | — |
| estación especial | Moldes y estampas de forja | Metallamellae metal ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Warlord | `co-warlord` | replace | `globalDamageDealt` = 0.2 → daño causado global: **+20%** (valor interno `0.2`)<br>`armorWalkSpeedAffectedness` = -0.2 → afectación de armadura a velocidad: **-20%** (valor interno `-0.2`)<br>`armorHungerRateAffectedness` = -0.2 → afectación de armadura al hambre: **-20%** (valor interno `-0.2`)<br>`armorManipulationSpeedAffectedness` = -0.2 → afectación de armadura a manipulación: **-20%** (valor interno `-0.2`)<br>`maxHealthMul` = 0.2 → vida máxima: **+20%** (valor interno `0.2`)<br>`walkspeed` = -0.05 → velocidad al caminar: **-5%** (valor interno `-0.05`)<br>`halberdsProficiency` = 0.25 → competencia con alabardas: **+25%** (valor interno `0.25`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`twoHandedSwordsProficiency` = 0.25 → two handed swords proficiency: **+25%** (valor interno `0.25`)<br>`bowsProficiency` = 0.45 → competencia con arcos: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Warlord | `co-warlord` | replace | `globalDamageDealt` = 0.2 → daño causado global: **+20%** (valor interno `0.2`)<br>`armorWalkSpeedAffectedness` = -0.2 → afectación de armadura a velocidad: **-20%** (valor interno `-0.2`)<br>`armorHungerRateAffectedness` = -0.2 → afectación de armadura al hambre: **-20%** (valor interno `-0.2`)<br>`armorManipulationSpeedAffectedness` = -0.2 → afectación de armadura a manipulación: **-20%** (valor interno `-0.2`)<br>`maxHealthMul` = 0.2 → vida máxima: **+20%** (valor interno `0.2`)<br>`walkspeed` = -0.05 → velocidad al caminar: **-5%** (valor interno `-0.05`)<br>`halberdsProficiency` = 0.25 → competencia con alabardas: **+25%** (valor interno `0.25`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`twoHandedSwordsProficiency` = 0.25 → two handed swords proficiency: **+25%** (valor interno `0.25`)<br>`bowsProficiency` = 0.45 → competencia con arcos: **+45%** (valor interno `0.45`) |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| metalworking | 0.6 | 60% |
| combat | 0.5 | 50% |
| mining | 0.1 | 10% |

## 7. Análisis funcional breve
Análisis: combatiente-forjador. Sus números favorecen combate y metal, pero penalizan recolección y autosuficiencia.
