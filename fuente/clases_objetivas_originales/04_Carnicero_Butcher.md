# Carnicero / Butcher (`butcher`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- drop de carne: **+100%** (valor interno `1`)
- drop/rendimiento de animales: **+50%** (valor interno `0.5`)
- multiplicador de regeneración curativa: **+100%** (valor interno `1`)
- probabilidad de sal gema: **+10%** (valor interno `0.1`)
- probabilidad/drop de hielo de lago: **+100%** (valor interno `1`)
- rango de detección/agresión de animales: **-25%** (valor interno `-0.25`)
- saciedad de comidas preparadas: **+50%** (valor interno `0.5`)
- saciedad máxima: **+100%** (valor interno `1`)
- velocidad picando hielo: **+100%** (valor interno `1`)

### Malus objetivos
- daño contra animales: **-25%** (valor interno `-0.25`)
- drop de frutales: **-75%** (valor interno `-0.75`)
- drop de semillas cultivadas: **-75%** (valor interno `-0.75`)
- drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)
- saciedad de comida simple: **-25%** (valor interno `-0.25`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Saqueador | `reaver` | positivo | `healingRegenerationMul` = 1 → multiplicador de regeneración curativa: **+100%** (valor interno `1`) |
| Carnicero | `butcher` | positivo | Desbloquea sellador, paquete de hielo, curado manual de carnes, carne añejada, pienso universal, herramientas de rancho/cocina y caldero cerámico. |
| Conservador | `preserver` | positivo | `iceMiningSpeedMul` = 1 → velocidad picando hielo: **+100%** (valor interno `1`)<br>`lakeIceDropChance` = 1 → probabilidad/drop de hielo de lago: **+100%** (valor interno `1`)<br>`rockSaltDropChance` = 0.1 → probabilidad de sal gema: **+10%** (valor interno `0.1`) |
| Ganadero | `rancher` | positivo | `meatDropRate` = 1 → drop de carne: **+100%** (valor interno `1`)<br>`animalLootDropRate` = 0.5 → drop/rendimiento de animales: **+50%** (valor interno `0.5`)<br>`animalSeekingRange` = -0.25 → rango de detección/agresión de animales: **-25%** (valor interno `-0.25`) |
| Cocinero | `chef` | positivo | `mealSatietyMul` = 0.5 → saciedad de comidas preparadas: **+50%** (valor interno `0.5`)<br>`maxSatietyMul` = 1 → saciedad máxima: **+100%** (valor interno `1`) |
| Escrubidor | `scourer` | negativo | `cropSeedDropRate` = -0.75 → drop de semillas cultivadas: **-75%** (valor interno `-0.75`)<br>`treeSeedDropRate` = -0.75 → drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)<br>`fruitTreeDropRate` = -0.75 → drop de frutales: **-75%** (valor interno `-0.75`) |
| Goloso | `gourmand` | negativo | `animalDamageDealt` = -0.25 → daño contra animales: **-25%** (valor interno `-0.25`)<br>`simpleFoodSatietyMul` = -0.25 → saciedad de comida simple: **-25%** (valor interno `-0.25`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Paquete de hielo | `specializedclasses:icepack` | restauración de frescura: 75% del tiempo estable original<br>tamaño máximo de stack: 16 |
| Sellador | `specializedclasses:Selladores` | tamaño máximo de stack: 64<br>ítem de sellado/conservación; sin porcentaje propio declarado en itemtype |
| Pienso universal de herbívoros | `specializedclasses:universalherbivorefeed` | tamaño máximo de stack: 64<br>etiquetas de comida: puré de fruta, verdura sabrosa, hierba, soja, cacahuete, mandioca, fruta y dulce saqueable |
| Pienso universal de carnívoros | `specializedclasses:universalcarnivorefeed` | tamaño máximo de stack: 64<br>etiqueta de comida: carne |
| Caldero cerámico | `specializedclasses:ceramiccauldron` | capacidad de raciones: 64<br>puede quedar como caldero cerámico sucio y limpiarse en barril con agua |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **23**
- Recetas por estación con `requiredTrait`: **1**
- Recetas de compatibilidad opcional detectadas: **16**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Curado y secado | 6 |
| Comida para animales | 4 |
| Molienda | 1 |
| Utensilios de cocina | 1 |
| Conservación de alimentos | 3 |
| Molino manual | 1 |
| Ganadería | 6 |
| Selladores | 1 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Curado y secado | Salt ×4 | — |
| mesa de crafteo normal | Curado y secado | Bushmeat cured ×1 | — |
| mesa de crafteo normal | Curado y secado | Redmeat cured ×1 | — |
| mesa de crafteo normal | Curado y secado | Poultry cured ×1 | — |
| mesa de crafteo normal | Curado y secado | Fish cured ×1 | — |
| mesa de crafteo normal | Curado y secado | Redmeat vintage ×1 | — |
| mesa de crafteo normal | Comida para animales | Universalherbivorefeed ×8 | — |
| mesa de crafteo normal | Comida para animales | Universalherbivorefeed ×8 | — |
| mesa de crafteo normal | Comida para animales | Universalcarnivorefeed ×8 | — |
| mesa de crafteo normal | Comida para animales | Universalcarnivorefeed ×8 | — |
| mesa de crafteo normal | Molienda | Flour grain ×2 | — |
| mesa de crafteo normal | Utensilios de cocina | Ceramiccauldron color fired ×1 | — |
| mesa de crafteo normal | Conservación de alimentos | Icepack ×4 | — |
| mesa de crafteo normal | Conservación de alimentos | Icepack ×4 | — |
| mesa de crafteo normal | Conservación de alimentos | Icepack ×4 | — |
| mesa de crafteo normal | Molino manual | Quern piedra ×1 | — |
| mesa de crafteo normal | Ganadería | Trapcrate Madera y carpintería ×1 | — |
| mesa de crafteo normal | Ganadería | Stationarybasket este ×1 | — |
| mesa de crafteo normal | Ganadería | Stationarybasket este ×1 | — |
| mesa de crafteo normal | Ganadería | Trough genericwood small norte-sur ×1 | — |
| mesa de crafteo normal | Ganadería | Trough genericwood large casco norte ×1 | — |
| mesa de crafteo normal | Ganadería | Henbox ×1 | — |
| mesa de crafteo normal | Selladores | Sealant ×16 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Cuba de mezclas y alquimia | 1 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Cuba de mezclas y alquimia | Salt ×4 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| A Culinary Artillery: colgado y secado | 1 |
| Butchering: herramientas de carnicería | 8 |
| Food Shelves: almacenamiento en frío | 3 |
| Primitive Survival: curado | 4 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | A Culinary Artillery: colgado y secado | Meathooks Madera y carpintería metal este ×1 | — |
| receta de compatibilidad | Butchering: herramientas de carnicería | Butchertable primitive norte ×1 | — |
| receta de compatibilidad | Butchering: herramientas de carnicería | Butchertable simple norte ×1 | — |
| receta de compatibilidad | Butchering: herramientas de carnicería | Butchertable advanced norte ×1 | — |
| receta de compatibilidad | Butchering: herramientas de carnicería | Butcherhook sílex norte ×1 | — |
| receta de compatibilidad | Butchering: herramientas de carnicería | Butcherhook material norte ×1 | — |
| receta de compatibilidad | Butchering: herramientas de carnicería | Butcherhook iron norte ×1 | — |
| receta de compatibilidad | Butchering: herramientas de carnicería | Smokingrack copper norte ×1 | — |
| receta de compatibilidad | Butchering: herramientas de carnicería | Smokingrack iron norte ×1 | — |
| receta de compatibilidad | Food Shelves: almacenamiento en frío | Meatfreezer normal este ×1 | — |
| receta de compatibilidad | Food Shelves: almacenamiento en frío | Fruitcooler normal este ×1 | — |
| receta de compatibilidad | Food Shelves: almacenamiento en frío | Coolingcabinet normal este ×1 | — |
| receta de compatibilidad | Primitive Survival: curado | Curedsmokedmeat fish raw ×1 | — |
| receta de compatibilidad | Primitive Survival: curado | Curedsmokedmeat bushmeat raw ×1 | — |
| receta de compatibilidad | Primitive Survival: curado | Curedsmokedmeat poultry raw ×1 | — |
| receta de compatibilidad | Primitive Survival: curado | Curedsmokedmeat redmeat raw ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| aculinaryartillery | Compatibilidad: A Culinary Artillery | `butcheraculinaryartillery` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| butchering | Compatibilidad: Butchering | `butcherbutchering` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| combatoverhaul | CO: Reaver | `co-reaver` | replace | `healingRegenerationMul` = 1 → multiplicador de regeneración curativa: **+100%** (valor interno `1`)<br>`axesProficiency` = 0.25 → competencia con hachas: **+25%** (valor interno `0.25`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`twoHandedSwordsProficiency` = 0.25 → two handed swords proficiency: **+25%** (valor interno `0.25`) |
| combatoverhaulfork | CO: Reaver | `co-reaver` | replace | `healingRegenerationMul` = 1 → multiplicador de regeneración curativa: **+100%** (valor interno `1`)<br>`axesProficiency` = 0.25 → competencia con hachas: **+25%** (valor interno `0.25`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`twoHandedSwordsProficiency` = 0.25 → two handed swords proficiency: **+25%** (valor interno `0.25`) |
| foodshelves | Compatibilidad: Foodshelves | `butcherfoodshelves` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| primitivesurvival | Compatibilidad: Primitive Survival | `butcherprimitivesurvival` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| cooking | 0.6 | 60% |
| husbandry | 0.5 | 50% |
| fishing | 0.1 | 10% |

## 7. Análisis funcional breve
Análisis: soporte alimentario por carne/conservación. Necesita fauna, hielo o ganadería para brillar.
