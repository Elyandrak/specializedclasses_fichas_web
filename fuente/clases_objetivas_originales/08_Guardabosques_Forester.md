# Guardabosques / Forester (`forester`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de hacha: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de sierra: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de tijeras: **+75%** (valor interno `0.75`)
- daño cuerpo a cuerpo: **+30%** (valor interno `0.3`)
- drop de carbón vegetal: **+100%** (valor interno `1`)
- drop de semillas/brotes de árbol: **+300%** (valor interno `3`)
- drop de troncos: **+50%** (valor interno `0.5`)
- drop de turba: **+100%** (valor interno `1`)
- probabilidad de resina desde troncos: **+2%** (valor interno `0.02`)
- probabilidad de restos vegetales desde hojas: **+5%** (valor interno `0.05`)
- velocidad al caminar: **+5%** (valor interno `0.05`)
- velocidad al trabajar madera: **+100%** (valor interno `1`)
- velocidad con hojas: **+100%** (valor interno `1`)

### Malus objetivos
- daño recibido global: **+10%** (valor interno `0.1`)
- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- saciedad de lácteos: **-10%** (valor interno `-0.1`)
- saciedad de proteína/carne: **-10%** (valor interno `-0.1`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Bárbaro | `berserker` | positivo | `walkspeed` = 0.05 → velocidad al caminar: **+5%** (valor interno `0.05`)<br>`meleeWeaponsDamage` = 0.3 → daño cuerpo a cuerpo: **+30%** (valor interno `0.3`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`) |
| Guardabosques | `forester` | positivo | Desbloquea briquetas, leña tratada, carbón directo, madera envejecida, carpintería, cofres, puertas, empalizadas y mesa de talla en madera. |
| Carbonero | `collier` | positivo | `charcoalDropRate` = 1 → drop de carbón vegetal: **+100%** (valor interno `1`)<br>`peatDropRate` = 1 → drop de turba: **+100%** (valor interno `1`) |
| Leñador | `lumberjack` | positivo | `woodMiningSpeedMul` = 1 → velocidad al trabajar madera: **+100%** (valor interno `1`)<br>`leavesMiningSpeedMul` = 1 → velocidad con hojas: **+100%** (valor interno `1`)<br>`axeDurabilitySaveChance` = 0.75 → ahorro de durabilidad de hacha: **+75%** (valor interno `0.75`)<br>`shearsDurabilitySaveChance` = 0.75 → ahorro de durabilidad de tijeras: **+75%** (valor interno `0.75`)<br>`sawDurabilitySaveChance` = 0.75 → ahorro de durabilidad de sierra: **+75%** (valor interno `0.75`)<br>`leavesLeafyDebrisDropChance` = 0.05 → probabilidad de restos vegetales desde hojas: **+5%** (valor interno `0.05`) |
| Técnico de Viveros | `nurseryworker` | positivo | `treeSeedDropRate` = 3 → drop de semillas/brotes de árbol: **+300%** (valor interno `3`) |
| Carpintero | `carpenter` | positivo | `logDropRate` = 0.5 → drop de troncos: **+50%** (valor interno `0.5`)<br>`logResinDropChance` = 0.02 → probabilidad de resina desde troncos: **+2%** (valor interno `0.02`) |
| Delicado | `delicate` | negativo | `oreDropRate` = -0.1 → drop de mineral: **-10%** (valor interno `-0.1`)<br>`oreMiningSpeedMul` = -0.1 → velocidad al picar mineral: **-10%** (valor interno `-0.1`)<br>`stoneMiningSpeedMul` = -0.1 → velocidad al picar piedra: **-10%** (valor interno `-0.1`)<br>`stabilityLossMul` = 0.25 → pérdida de estabilidad temporal: **+25%** (valor interno `0.25`) |
| Herbívoro | `herbivorous` | negativo | `proteinSatietyMul` = -0.1 → saciedad de proteína/carne: **-10%** (valor interno `-0.1`)<br>`dairySatietyMul` = -0.1 → saciedad de lácteos: **-10%** (valor interno `-0.1`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Briqueta | `specializedclasses:briquette` | temperatura de combustión: 800 °C<br>duración de combustión: 60 s<br>tamaño máximo de stack: 64 |
| Leña tratada | `specializedclasses:firewood-treated` | temperatura de combustión: 25 °C<br>duración de combustión: 3600 s<br>tamaño máximo de stack: 32 |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **62**
- Recetas por estación con `requiredTrait`: **55**
- Recetas de compatibilidad opcional detectadas: **4**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Camas | 2 |
| Cofres y almacenamiento | 1 |
| Puertas | 7 |
| Combustibles | 8 |
| Hojas | 1 |
| Empalizadas y defensas de madera | 10 |
| Tejados y piezas de cubierta | 7 |
| Plantones de árbol | 1 |
| Madera y carpintería | 9 |
| Envejecido de madera | 10 |
| Procesado de madera | 6 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Camas | Bed woodaged casco norte ×1 | — |
| mesa de crafteo normal | Camas | Bed village casco norte ×1 | — |
| mesa de crafteo normal | Cofres y almacenamiento | Chest este ×1 | — |
| mesa de crafteo normal | Puertas | Door ruined rough1 ×1 | — |
| mesa de crafteo normal | Puertas | Door ruined rough2 ×1 | — |
| mesa de crafteo normal | Puertas | Door ruined rough3 ×1 | — |
| mesa de crafteo normal | Puertas | Door ruined windowed1 ×1 | — |
| mesa de crafteo normal | Puertas | Door ruined windowed2 ×1 | — |
| mesa de crafteo normal | Puertas | Door ruined windowed3 ×1 | — |
| mesa de crafteo normal | Puertas | Door sleek windowed Madera y carpintería ×1 | — |
| mesa de crafteo normal | Combustibles | Firewood ×16 | — |
| mesa de crafteo normal | Combustibles | Firewood ×12 | — |
| mesa de crafteo normal | Combustibles | Firewood ×16 | — |
| mesa de crafteo normal | Combustibles | Agedfirewood ×16 | — |
| mesa de crafteo normal | Combustibles | Firewood treated ×1 | — |
| mesa de crafteo normal | Combustibles | Coal contaminated ×4 | — |
| mesa de crafteo normal | Combustibles | Charcoal ×8 | — |
| mesa de crafteo normal | Combustibles | Briquette ×4 | — |
| mesa de crafteo normal | Hojas | Leaves colocado Madera y carpintería ×4 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall cuádruple lower cornerin oeste ×8 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall three height wall oeste ×1 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall cuádruple height wall oeste ×1 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall cuádruple height cornerout oeste ×1 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall cuádruple parte superior type oeste ×1 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall cuádruple halftop type oeste ×1 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall three parte superior type oeste ×1 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall three halftop type oeste ×1 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall amount toproped wall oeste ×8 | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | Palisadewall cuádruple lowerspiked wall oeste ×1 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado Madera y carpintería este libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado Madera y carpintería norte-sur libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado Madera y carpintería libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado Madera y carpintería este libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado Madera y carpintería este libre ×4 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam ridge Madera y carpintería libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Beam plane Madera y carpintería libre ×16 | — |
| mesa de crafteo normal | Plantones de árbol | Sapling Madera y carpintería libre ×1 | — |
| mesa de crafteo normal | Madera y carpintería | Carvedlog acacia envejecido bottom liso vertical ×1 | — |
| mesa de crafteo normal | Madera y carpintería | Carvedlog acacia envejecido parte superior fancy vertical ×1 | — |
| mesa de crafteo normal | Madera y carpintería | Carvedlog acacia envejecido middle fancy vertical ×1 | — |
| mesa de crafteo normal | Madera y carpintería | Carvedlog acacia envejecido bottom fancy vertical ×1 | — |
| mesa de crafteo normal | Madera y carpintería | Carvedlog acacia envejecido middle liso vertical ×1 | — |
| mesa de crafteo normal | Madera y carpintería | Carvedlog acacia envejecido parte superior liso vertical ×1 | — |
| mesa de crafteo normal | Madera y carpintería | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Madera y carpintería | Objeto decorativo de ruinas ×16 | — |
| mesa de crafteo normal | Madera y carpintería | Viga de soporte Madera y carpintería ×16 | — |
| mesa de crafteo normal | Envejecido de madera | Carvedlog acacia envejecido bottom liso vertical ×1 | — |
| mesa de crafteo normal | Envejecido de madera | Carvedlog acacia envejecido middle liso vertical ×1 | — |
| mesa de crafteo normal | Envejecido de madera | Carvedlog acacia envejecido parte superior liso vertical ×1 | — |
| mesa de crafteo normal | Envejecido de madera | Carvedlog acacia envejecido part fancy vertical ×1 | — |
| mesa de crafteo normal | Envejecido de madera | Tablones ébano envejecido vertical ×8 | — |
| mesa de crafteo normal | Envejecido de madera | Tablones ébano podrido vertical ×8 | — |
| mesa de crafteo normal | Envejecido de madera | Tronco colocado envejecido vertical ×8 | — |
| mesa de crafteo normal | Envejecido de madera | Tronco sin corteza muy envejecido vertical ×8 | — |
| mesa de crafteo normal | Envejecido de madera | Tronco sin corteza podrido vertical ×8 | — |
| mesa de crafteo normal | Envejecido de madera | Tronco sin corteza muy podrido vertical ×8 | — |
| mesa de crafteo normal | Procesado de madera | Plank Madera y carpintería ×4 | — |
| mesa de crafteo normal | Procesado de madera | Plank Madera y carpintería ×16 | — |
| mesa de crafteo normal | Procesado de madera | Plank Madera y carpintería ×4 | — |
| mesa de crafteo normal | Procesado de madera | Plank Madera y carpintería ×16 | — |
| mesa de crafteo normal | Procesado de madera | Stick ×1 | — |
| mesa de crafteo normal | Procesado de madera | Stick ×1 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Mesa de germinación | 2 |
| Mesa de tallado de madera | 53 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Mesa de germinación | Sapling Madera y carpintería libre ×1 | — |
| estación especial | Mesa de germinación | Sapling Madera y carpintería libre ×1 | — |
| estación especial | Mesa de tallado de madera | Tronco colocado envejecido vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Firewood ×8 | — |
| estación especial | Mesa de tallado de madera | Agedfirewood ×8 | — |
| estación especial | Mesa de tallado de madera | Stick ×64 | — |
| estación especial | Mesa de tallado de madera | Plank Madera y carpintería ×16 | — |
| estación especial | Mesa de tallado de madera | Logquad colocado Madera y carpintería vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Logquad barkedcorner Madera y carpintería norte ×1 | — |
| estación especial | Mesa de tallado de madera | Logquad debarked Madera y carpintería vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Logquad debarkedcorner Madera y carpintería norte ×1 | — |
| estación especial | Mesa de tallado de madera | Tronco sin corteza Madera y carpintería vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Viga de soporte Madera y carpintería ×3 | — |
| estación especial | Mesa de tallado de madera | Tablones Madera y carpintería vertical ×3 | — |
| estación especial | Mesa de tallado de madera | Plankslab Madera y carpintería abajo libre ×6 | — |
| estación especial | Mesa de tallado de madera | Plankstairs Madera y carpintería up norte libre ×4 | — |
| estación especial | Mesa de tallado de madera | Tronco sin corteza muy envejecido vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Viga de soporte muy envejecido ×3 | — |
| estación especial | Mesa de tallado de madera | Tronco sin corteza podrido vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Viga de soporte podrido ×3 | — |
| estación especial | Mesa de tallado de madera | Tronco sin corteza muy podrido vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Viga de soporte muy podrido ×3 | — |
| estación especial | Mesa de tallado de madera | Woodenfence Madera y carpintería este-oeste libre ×16 | — |
| estación especial | Mesa de tallado de madera | Woodenfencegate Madera y carpintería n closed left libre ×2 | — |
| estación especial | Mesa de tallado de madera | Roughhewnfence Madera y carpintería este-oeste libre ×4 | — |
| estación especial | Mesa de tallado de madera | Roughhewnfencegate Madera y carpintería n closed libre ×1 | — |
| estación especial | Mesa de tallado de madera | Woodenpath Madera y carpintería norte-sur ×6 | — |
| estación especial | Mesa de tallado de madera | Trapdoor solid Madera y carpintería 1 ×2 | — |
| estación especial | Mesa de tallado de madera | Trapdoor window Madera y carpintería 1 ×2 | — |
| estación especial | Mesa de tallado de madera | Door solid Madera y carpintería ×2 | — |
| estación especial | Mesa de tallado de madera | Door sleek windowed Madera y carpintería ×1 | — |
| estación especial | Mesa de tallado de madera | Tejado inclinado Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Slantedroofingbottom Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Slantedroofingtop Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Slantedroofinghalfleft Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Slantedroofinghalfright Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Cumbrera de tejado Madera y carpintería norte-sur libre ×2 | — |
| estación especial | Mesa de tallado de madera | Slantedroofingridgeend Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Slantedroofingridgehalfleft Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Slantedroofingridgehalfright Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Punta de tejado Madera y carpintería libre ×1 | — |
| estación especial | Mesa de tallado de madera | Esquina interior de tejado Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Esquina exterior de tejado Madera y carpintería este libre ×2 | — |
| estación especial | Mesa de tallado de madera | Carvedlog acacia envejecido bottom liso vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Carvedlog acacia envejecido bottom fancy vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Carvedlog acacia envejecido middle liso vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Carvedlog acacia envejecido middle fancy vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Carvedlog acacia envejecido parte superior liso vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Carvedlog acacia envejecido parte superior fancy vertical ×1 | — |
| estación especial | Mesa de tallado de madera | Ladder Madera y carpintería norte ×6 | — |
| estación especial | Mesa de tallado de madera | Sign ground norte ×4 | — |
| estación especial | Mesa de tallado de madera | Signpost ×4 | — |
| estación especial | Mesa de tallado de madera | Moldrack normal este ×2 | — |
| estación especial | Mesa de tallado de madera | Shelf normal este ×3 | — |
| estación especial | Mesa de tallado de madera | Table normal ×1 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Toolsmith: mangos de herramienta | 2 |
| Toolsmith Fork: mangos de herramienta | 2 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Toolsmith: mangos de herramienta | Handle ×1 | — |
| receta de compatibilidad | Toolsmith: mangos de herramienta | Carpentedhandle ×1 | — |
| receta de compatibilidad | Toolsmith Fork: mangos de herramienta | Handle ×1 | — |
| receta de compatibilidad | Toolsmith Fork: mangos de herramienta | Carpentedhandle ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Berserker | `co-berserker` | replace | `walkspeed` = 0.05 → velocidad al caminar: **+5%** (valor interno `0.05`)<br>`meleeWeaponsDamage` = 0.3 → daño cuerpo a cuerpo: **+30%** (valor interno `0.3`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`axesProficiency` = 0.25 → competencia con hachas: **+25%** (valor interno `0.25`)<br>`halberdsProficiency` = 0.25 → competencia con alabardas: **+25%** (valor interno `0.25`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`) |
| combatoverhaulfork | CO: Berserker | `co-berserker` | replace | `walkspeed` = 0.05 → velocidad al caminar: **+5%** (valor interno `0.05`)<br>`meleeWeaponsDamage` = 0.3 → daño cuerpo a cuerpo: **+30%** (valor interno `0.3`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`axesProficiency` = 0.25 → competencia con hachas: **+25%** (valor interno `0.25`)<br>`halberdsProficiency` = 0.25 → competencia con alabardas: **+25%** (valor interno `0.25`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`) |
| toolsmith | Compatibilidad: Toolsmith | `forestertoolsmith` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| toolsmithfork | Compatibilidad: Toolsmith | `forestertoolsmithfork` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| survival | 0.2 | 20% |
| husbandry | 0.1 | 10% |
| forestry | 0.7 | 70% |
| farming | 0.1 | 10% |
| fishing | 0.1 | 10% |

## 7. Análisis funcional breve
Análisis: infraestructura de madera/combustible. Pega más, pero recibe más daño.
