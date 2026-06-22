# Mensajero / Messenger (`messenger`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de pala: **+50%** (valor interno `0.5`)
- velocidad al caminar: **+20%** (valor interno `0.2`)
- velocidad con arena: **+50%** (valor interno `0.5`)
- velocidad con grava: **+50%** (valor interno `0.5`)
- velocidad con nieve: **+50%** (valor interno `0.5`)
- velocidad con tierra: **+50%** (valor interno `0.5`)
- velocidad en caminos: **+20%** (valor interno `0.2`)

### Malus objetivos
- daño recibido global: **+10%** (valor interno `0.1`)
- drop de cultivos silvestres: **-25%** (valor interno `-0.25`)
- drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)
- drop/rendimiento de animales: **-10%** (valor interno `-0.1`)
- rango de detección/agresión de animales: **+50%** (valor interno `0.5`)
- saciedad máxima: **-20%** (valor interno `-0.2`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Halcón | `harrier` | positivo | `walkspeed` = 0.2 → velocidad al caminar: **+20%** (valor interno `0.2`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`animalSeekingRange` = 0.5 → rango de detección/agresión de animales: **+50%** (valor interno `0.5`) |
| Mensajero | `messenger` | positivo | Desbloquea bolsas especiales, bolsa de mensajero de 10 ranuras, tubo de pergaminos, caja portátil, armazón de vasija, faroles, lámparas, caminos y carretera de asfalto 1.5x. |
| Extendedor | `roadlayer` | positivo | `shovelDurabilitySaveChance` = 0.5 → ahorro de durabilidad de pala: **+50%** (valor interno `0.5`)<br>`gravelMiningSpeedMul` = 0.5 → velocidad con grava: **+50%** (valor interno `0.5`)<br>`sandMiningSpeedMul` = 0.5 → velocidad con arena: **+50%** (valor interno `0.5`)<br>`snowMiningSpeedMul` = 0.5 → velocidad con nieve: **+50%** (valor interno `0.5`)<br>`soilMiningSpeedMul` = 0.5 → velocidad con tierra: **+50%** (valor interno `0.5`) |
| Ágil | `swift` | positivo | `pathSpeedMul` = 0.2 → velocidad en caminos: **+20%** (valor interno `0.2`) |
| Protegido | `sheltered` | negativo | `forageDropRate` = -0.25 → drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)<br>`wildCropDropRate` = -0.25 → drop de cultivos silvestres: **-25%** (valor interno `-0.25`)<br>`animalLootDropRate` = -0.1 → drop/rendimiento de animales: **-10%** (valor interno `-0.1`) |
| Ligero | `lightweight` | negativo | `maxSatietyMul` = -0.2 → saciedad máxima: **-20%** (valor interno `-0.2`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Bolsa de mensajero | `specializedclasses:messengerbag` | ranuras: 10<br>tamaño máximo de stack: 1 |
| Tubo de pergaminos | `specializedclasses:scrollcase` | ranuras: 16<br>máximo por ranura: 8<br>tamaño máximo de stack: 1 |
| Caja portátil | `specializedclasses:portablecrate` | ranuras: 28<br>solo permite un mismo tipo de objeto<br>tamaño máximo de stack: 1 |
| Armazón de vasija | `specializedclasses:vesselframe` | ranuras: 4<br>multiplicador de deterioro: 0.1 = 10% de la velocidad normal |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **54**
- Recetas por estación con `requiredTrait`: **24**
- Recetas de compatibilidad opcional detectadas: **2**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Carreteras de asfalto | 1 |
| Bolsas y mochilas | 18 |
| Velas | 5 |
| Candelabros | 2 |
| Lámparas de gas | 9 |
| Faroles y linternas | 11 |
| Caminos y senderos | 8 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Carreteras de asfalto | Asphaltroad libre ×32 | — |
| mesa de crafteo normal | Bolsas y mochilas | Basket normal reed ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Basket normal papyrus ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Hunterbackpack ×2 | — |
| mesa de crafteo normal | Bolsas y mochilas | Hunterbackpack ×2 | — |
| mesa de crafteo normal | Bolsas y mochilas | Hunterbackpack ×3 | — |
| mesa de crafteo normal | Bolsas y mochilas | Hunterbackpack ×4 | — |
| mesa de crafteo normal | Bolsas y mochilas | Hunterbackpack ×4 | — |
| mesa de crafteo normal | Bolsas y mochilas | Hunterbackpack ×4 | — |
| mesa de crafteo normal | Bolsas y mochilas | Linensack ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Backpack normal ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Backpack sturdy ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Messengerbag ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Scrollcase ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Scrollcase ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Portablecrate ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Portablecrate ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Vesselframe ×1 | — |
| mesa de crafteo normal | Bolsas y mochilas | Vesselframe ×1 | — |
| mesa de crafteo normal | Velas | Candle ×4 | — |
| mesa de crafteo normal | Velas | Candle ×4 | — |
| mesa de crafteo normal | Velas | Candle ×4 | — |
| mesa de crafteo normal | Velas | Candle ×4 | — |
| mesa de crafteo normal | Velas | Oillamp color up ×1 | — |
| mesa de crafteo normal | Candelabros | Displaycase genérica ×1 | — |
| mesa de crafteo normal | Candelabros | Talldisplaycase genérica ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas de gas | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Farol de papel off ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Farol de papel encendido ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Farol de papel encendido ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Lantern small up ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Lantern small up ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Lantern small up ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Lantern small up ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Lantern large up ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Lantern large up ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Lantern large up ×1 | — |
| mesa de crafteo normal | Faroles y linternas | Lantern large up ×1 | — |
| mesa de crafteo normal | Caminos y senderos | Woodenpath envejecido norte-sur ×4 | — |
| mesa de crafteo normal | Caminos y senderos | Stonepath libre ×4 | — |
| mesa de crafteo normal | Caminos y senderos | Stonepathstairs up norte libre ×4 | — |
| mesa de crafteo normal | Caminos y senderos | Stonepathslab libre ×4 | — |
| mesa de crafteo normal | Caminos y senderos | Stonepath libre ×4 | — |
| mesa de crafteo normal | Caminos y senderos | Stonepath libre ×4 | — |
| mesa de crafteo normal | Caminos y senderos | Stonepath libre ×4 | — |
| mesa de crafteo normal | Caminos y senderos | Woodenpath Madera y carpintería norte-sur ×4 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Mesa de cartografía | 12 |
| Mesa de trabajo de cuero | 12 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Mesa de cartografía | Asphaltroad libre ×64 | — |
| estación especial | Mesa de cartografía | Woodenpath envejecido norte-sur ×2 | — |
| estación especial | Mesa de cartografía | Stonepath libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepath libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepath libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepathstairs up norte libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepathstairs up norte libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepathstairs up norte libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepathslab libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepathslab libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepathslab libre ×2 | — |
| estación especial | Mesa de cartografía | Stonepath libre ×1 | — |
| estación especial | Mesa de trabajo de cuero | Backpack normal ×1 | — |
| estación especial | Mesa de trabajo de cuero | Backpack sturdy ×1 | — |
| estación especial | Mesa de trabajo de cuero | Messengerbag ×1 | — |
| estación especial | Mesa de trabajo de cuero | Scrollcase ×1 | — |
| estación especial | Mesa de trabajo de cuero | Basket normal reed ×1 | — |
| estación especial | Mesa de trabajo de cuero | Basket normal papyrus ×1 | — |
| estación especial | Mesa de trabajo de cuero | Hunterbackpack ×1 | — |
| estación especial | Mesa de trabajo de cuero | Hunterbackpack ×2 | — |
| estación especial | Mesa de trabajo de cuero | Hunterbackpack ×3 | — |
| estación especial | Mesa de trabajo de cuero | Hunterbackpack ×4 | — |
| estación especial | Mesa de trabajo de cuero | Hunterbackpack ×4 | — |
| estación especial | Mesa de trabajo de cuero | Linensack ×1 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Primitive Survival: embarcaciones | 2 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Primitive Survival: embarcaciones | Floatingdock Madera y carpintería norte-sur ×2 | — |
| receta de compatibilidad | Primitive Survival: embarcaciones | Raft norte ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Harrier | `co-harrier` | replace | `walkspeed` = 0.2 → velocidad al caminar: **+20%** (valor interno `0.2`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`animalSeekingRange` = 0.5 → rango de detección/agresión de animales: **+50%** (valor interno `0.5`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`quarterstaffProficiency` = 0.25 → competencia con bastones: **+25%** (valor interno `0.25`)<br>`crossbowsProficiency` = 0.45 → competencia con ballestas: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Harrier | `co-harrier` | replace | `walkspeed` = 0.2 → velocidad al caminar: **+20%** (valor interno `0.2`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`animalSeekingRange` = 0.5 → rango de detección/agresión de animales: **+50%** (valor interno `0.5`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`quarterstaffProficiency` = 0.25 → competencia con bastones: **+25%** (valor interno `0.25`)<br>`crossbowsProficiency` = 0.45 → competencia con ballestas: **+45%** (valor interno `0.45`) |
| primitivesurvival | Compatibilidad: Primitive Survival | `messengerprimitivesurvival` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| survival | 0.6 | 60% |
| combat | 0.3 | 30% |
| digging | 0.3 | 30% |

## 7. Análisis funcional breve
Análisis: logística pura. Sus números mejoran movimiento/caminos/transporte; es frágil.
