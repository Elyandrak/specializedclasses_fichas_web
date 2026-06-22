# Viticultor / Vintner (`vintner`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de tijeras: **+75%** (valor interno `0.75`)
- cosecha suave de horno bajo/bloomery: **activado (+1)** (valor interno `1`)
- curación recibida: **+25%** (valor interno `0.25`)
- daño recibido por veneno: **-90%** (valor interno `-0.9`)
- drop de forraje/recolección silvestre: **+100%** (valor interno `1`)
- drop de frutales: **+100%** (valor interno `1`)
- drop de semillas/brotes de árbol: **+100%** (valor interno `1`)
- saciedad de bebidas: **+100%** (valor interno `1`)
- velocidad con hojas: **+100%** (valor interno `1`)
- velocidad con plantas: **+100%** (valor interno `1`)

### Malus objetivos
- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- saciedad de comida simple: **-10%** (valor interno `-0.1`)
- saciedad de comidas preparadas: **-10%** (valor interno `-0.1`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Mitridatista | `mithridatist` | positivo | `poisonDamageTaken` = -0.9 → daño recibido por veneno: **-90%** (valor interno `-0.9`)<br>`drinkSatietyMul` = 1 → saciedad de bebidas: **+100%** (valor interno `1`)<br>`healingReceivedMul` = 0.25 → curación recibida: **+25%** (valor interno `0.25`) |
| Viticultor | `vintner` | positivo | Desbloquea bolsa de fructificación vacía, esquejes de árboles/arbustos, frutales, trabajo de vidrio, tintes para vidrio, líquidos y fermentación. |
| Recolector | `gatherer` | positivo | `forageDropRate` = 1 → drop de forraje/recolección silvestre: **+100%** (valor interno `1`)<br>`fruitTreeDropRate` = 1 → drop de frutales: **+100%** (valor interno `1`)<br>`treeSeedDropRate` = 1 → drop de semillas/brotes de árbol: **+100%** (valor interno `1`) |
| Fundidor | `bloomer` | positivo | `gentleHarvestBloomery` = 1 → cosecha suave de horno bajo/bloomery: **activado (+1)** (valor interno `1`) |
| Selector | `picker` | positivo | `leavesMiningSpeedMul` = 1 → velocidad con hojas: **+100%** (valor interno `1`)<br>`plantMiningSpeedMul` = 1 → velocidad con plantas: **+100%** (valor interno `1`)<br>`shearsDurabilitySaveChance` = 0.75 → ahorro de durabilidad de tijeras: **+75%** (valor interno `0.75`)<br>`knifeDurabilitySaveChance` = 0.75 → ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`) |
| Delicado | `delicate` | negativo | `oreDropRate` = -0.1 → drop de mineral: **-10%** (valor interno `-0.1`)<br>`oreMiningSpeedMul` = -0.1 → velocidad al picar mineral: **-10%** (valor interno `-0.1`)<br>`stoneMiningSpeedMul` = -0.1 → velocidad al picar piedra: **-10%** (valor interno `-0.1`)<br>`stabilityLossMul` = 0.25 → pérdida de estabilidad temporal: **+25%** (valor interno `0.25`) |
| Dependiente | `dependent` | negativo | `mealSatietyMul` = -0.1 → saciedad de comidas preparadas: **-10%** (valor interno `-0.1`)<br>`simpleFoodSatietyMul` = -0.1 → saciedad de comida simple: **-10%** (valor interno `-0.1`) |

## 3. Objetos/bloques propios con números relevantes
| Objeto/Bloque | Código | Datos exactos |
|---|---|---|
| Bolsa de fructificación | `specializedclasses:fruitingbag` | 45 tipos de seta base + versiones maduras<br>tiempo medio de maduración: 48 h para cada variante |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **36**
- Recetas por estación con `requiredTrait`: **2**
- Recetas de compatibilidad opcional detectadas: **15**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Arbustos | 1 |
| Esquejes y recortes de plantas | 12 |
| Bolsa de fructificación | 1 |
| Tintado de vidrio | 10 |
| Trabajo de vidrio | 2 |
| Líquidos y recipientes | 5 |
| Tejados y piezas de cubierta | 5 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Arbustos | Fruitingbushcutting berrytype libre ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | Fruittree cutting ×1 | — |
| mesa de crafteo normal | Bolsa de fructificación | Fruitingbag empty ×1 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass azul ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass violet ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass roja ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass yellow ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass marrón ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass pink ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass green ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass vintage ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass cuarzo ×8 | — |
| mesa de crafteo normal | Tintado de vidrio | Glass smoky ×8 | — |
| mesa de crafteo normal | Trabajo de vidrio | Cuarzo transparente ×1 | — |
| mesa de crafteo normal | Trabajo de vidrio | Glasspane leaded Madera y carpintería este-oeste ×4 | — |
| mesa de crafteo normal | Líquidos y recipientes | Barrel ×1 | — |
| mesa de crafteo normal | Líquidos y recipientes | Woodbucket ×1 | — |
| mesa de crafteo normal | Líquidos y recipientes | Fruitpress norte-sur ×1 | — |
| mesa de crafteo normal | Líquidos y recipientes | Verticalboiler oeste ×1 | — |
| mesa de crafteo normal | Líquidos y recipientes | Condenser oeste ×1 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Tejado inclinado sod este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Cumbrera de tejado sod norte-sur libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Punta de tejado sod libre ×2 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina interior de tejado sod este libre ×16 | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | Esquina exterior de tejado sod este libre ×16 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Mesa de germinación | 2 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Mesa de germinación | Fruittree cutting ×1 | — |
| estación especial | Mesa de germinación | Fruitingbushcutting berrytype libre ×1 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| A Culinary Artillery: embotellado | 3 |
| Alchemy: vidrio de alquimia | 4 |
| Food Shelves: almacenamiento de líquidos | 4 |
| NDL Mushroom Growth: cultivo | 2 |
| Substrate: cultivo | 2 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | A Culinary Artillery: embotellado | Bottlerack envejecido envejecido norte ×2 | — |
| receta de compatibilidad | A Culinary Artillery: embotellado | Bottle glass color fired ×8 | — |
| receta de compatibilidad | A Culinary Artillery: embotellado | Cork genérica ×16 | — |
| receta de compatibilidad | Alchemy: vidrio de alquimia | Herbrack Madera y carpintería metal ×2 | — |
| receta de compatibilidad | Alchemy: vidrio de alquimia | Potionflask normal liso ×2 | — |
| receta de compatibilidad | Alchemy: vidrio de alquimia | Potionflask round liso ×2 | — |
| receta de compatibilidad | Alchemy: vidrio de alquimia | Potionflask tube liso ×2 | — |
| receta de compatibilidad | Food Shelves: almacenamiento de líquidos | Tunrack normal norte ×1 | — |
| receta de compatibilidad | Food Shelves: almacenamiento de líquidos | Tun normal ×1 | — |
| receta de compatibilidad | Food Shelves: almacenamiento de líquidos | Barrelrack normal este ×1 | — |
| receta de compatibilidad | Food Shelves: almacenamiento de líquidos | Buckethook normal este ×1 | — |
| receta de compatibilidad | NDL Mushroom Growth: cultivo | Basetrough ×1 | — |
| receta de compatibilidad | NDL Mushroom Growth: cultivo | Mushroomspores mushroom ×1 | — |
| receta de compatibilidad | Substrate: cultivo | Growbed ×1 | — |
| receta de compatibilidad | Substrate: cultivo | Fruitingbag ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| aculinaryartillery | Compatibilidad: A Culinary Artillery | `vintneraculinaryartillery` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| alchemy | Compatibilidad: Alchemy | `vintneralchemy` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| combatoverhaul | CO: Mithridatist | `co-mithridatist` | replace | `poisonDamageTaken` = -0.9 → daño recibido por veneno: **-90%** (valor interno `-0.9`)<br>`drinkSatietyMul` = 1 → saciedad de bebidas: **+100%** (valor interno `1`)<br>`healingReceivedMul` = 0.25 → curación recibida: **+25%** (valor interno `0.25`) |
| combatoverhaulfork | CO: Mithridatist | `co-mithridatist` | replace | `poisonDamageTaken` = -0.9 → daño recibido por veneno: **-90%** (valor interno `-0.9`)<br>`drinkSatietyMul` = 1 → saciedad de bebidas: **+100%** (valor interno `1`)<br>`healingReceivedMul` = 0.25 → curación recibida: **+25%** (valor interno `0.25`) |
| foodshelves | Compatibilidad: Foodshelves | `vintnerfoodshelves` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| hydrateordiedrate | Hidratado | `hydrated` | add | `HoD:ThirstRateMul` = -0.25 → ritmo de sed (Hydrate or Diedrate): **-25%** (valor interno `-0.25`) |
| ndlmushroomgrowth | Compatibilidad: NDL Mushroom Growth | `vintnerndlmushroomgrowth` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| slowtox | Calmado | `composed` | add | `slowtox:benefitMult` = 1 → beneficio SlowTox: **+100%** (valor interno `1`) |
| substrate | Compatibilidad: Substrate | `vintnersubstrate` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| cooking | 0.6 | 60% |
| farming | 0.6 | 60% |

## 7. Análisis funcional breve
Análisis: setas, fruta, vidrio y bebidas. Crea infraestructura y consumibles de valor.
