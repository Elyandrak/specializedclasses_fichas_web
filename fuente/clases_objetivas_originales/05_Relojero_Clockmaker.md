# Relojero / Clockmaker (`clockmaker`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- altura de salto: **+20%** (valor interno `0.2`)
- daño a distancia: **+20%** (valor interno `0.2`)
- daño contra mecánicos: **+50%** (valor interno `0.5`)
- daño recibido de mecánicos: **-50%** (valor interno `-0.5`)
- drop de engranajes temporales: **+100%** (valor interno `1`)
- drop de grasa: **+100%** (valor interno `1`)
- ganancia de estabilidad temporal: **+50%** (valor interno `0.5`)
- probabilidad de resina desde hojas: **+1%** (valor interno `0.01`)
- velocidad al caminar: **+10%** (valor interno `0.1`)

### Malus objetivos
- daño recibido global: **+10%** (valor interno `0.1`)
- daño recibido por veneno: **+100%** (valor interno `1`)
- drop de frutales: **-75%** (valor interno `-0.75`)
- drop de semillas cultivadas: **-75%** (valor interno `-0.75`)
- drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Lancero | `lancer` | positivo | `jumpHeightMul` = 0.2 → altura de salto: **+20%** (valor interno `0.2`)<br>`rangedWeaponsDamage` = 0.2 → daño a distancia: **+20%** (valor interno `0.2`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`) |
| Relojero | `clockmaker` | positivo | Desbloquea potencia mecánica, transporte de objetos, piezas Jonas, piezas metálicas, teletransportador base y mesa de inventor/manitas. |
| Manitas | `tinkerer` | desbloqueo/vanilla | Desbloquea lanza de afinación. |
| Technical | `technical` | desbloqueo/vanilla | Rasgo/marcador técnico usado por el mod/juego; no declara atributos numéricos en el ZIP. |
| Ingeniero | `engineer` | positivo | `mechanicalDamageDealt` = 0.5 → daño contra mecánicos: **+50%** (valor interno `0.5`)<br>`mechanicalDamageTaken` = -0.5 → daño recibido de mecánicos: **-50%** (valor interno `-0.5`)<br>`fatDropRate` = 1 → drop de grasa: **+100%** (valor interno `1`)<br>`leavesResinDropChance` = 0.01 → probabilidad de resina desde hojas: **+1%** (valor interno `0.01`) |
| Armónico | `attuned` | positivo | `temporalGearDropRate` = 1 → drop de engranajes temporales: **+100%** (valor interno `1`)<br>`stabilityGainMul` = 0.5 → ganancia de estabilidad temporal: **+50%** (valor interno `0.5`) |
| Escrubidor | `scourer` | negativo | `cropSeedDropRate` = -0.75 → drop de semillas cultivadas: **-75%** (valor interno `-0.75`)<br>`treeSeedDropRate` = -0.75 → drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)<br>`fruitTreeDropRate` = -0.75 → drop de frutales: **-75%** (valor interno `-0.75`) |
| Delicado | `sensitive` | negativo | `poisonDamageTaken` = 1 → daño recibido por veneno: **+100%** (valor interno `1`) |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **35**
- Recetas por estación con `requiredTrait`: **15**
- Recetas de compatibilidad opcional detectadas: **12**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Piezas Jonas y componentes antiguos | 14 |
| Mecánica y transmisión de potencia | 19 |
| Teletransportadores | 2 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasparts connector01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasparts cylinder01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasparts cylinder02 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasparts tank01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasparts tank02 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasparts valve01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasframes gearbox01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasframes gearbox02 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasframes oscillator01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasframes spring01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasframes joint01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasframes gears01 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasframes gears02 ×1 | — |
| mesa de crafteo normal | Piezas Jonas y componentes antiguos | Jonasparts connector01 ×1 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Windmillrotor Madera y carpintería norte ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Woodenaxle vertical ×8 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Angledgears s ×4 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Brake norte ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Helvehammerbase norte ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Woodentoggle norte-sur ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Largegearsection Madera y carpintería ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Clutch norte ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Transmission norte-sur ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Archimedesscrew straight ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Archimedesscrew ported norte ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Spurgear s ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Windmillrotor metal norte ×2 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Hopper ×1 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Chute elbow abajo este ×4 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Chute straight norte-sur ×8 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Chute cross ground ×4 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Chute t norte-sur ×4 | — |
| mesa de crafteo normal | Mecánica y transmisión de potencia | Chute 3way abajo este ×4 | — |
| mesa de crafteo normal | Teletransportadores | Basereturnteleporter ×1 | — |
| mesa de crafteo normal | Teletransportadores | Gear temporal ×1 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Mesa de inventor/relojería | 15 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Mesa de inventor/relojería | Metal parts ×4 | — |
| estación especial | Mesa de inventor/relojería | Metal parts ×4 | — |
| estación especial | Mesa de inventor/relojería | Jonasframes gearbox01 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasframes gearbox02 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasframes oscillator01 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasframes spring01 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasframes joint01 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasframes gears01 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasframes gears02 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasparts connector01 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasparts cylinder01 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasparts cylinder02 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasparts tank01 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasparts tank02 ×1 | — |
| estación especial | Mesa de inventor/relojería | Jonasparts valve01 ×1 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Millwright: potencia mecánica | 12 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Millwright: potencia mecánica | Improvedaxlepassthroughfull ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor single norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor double norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor double norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor three norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor three norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor six norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor six norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor single norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotor single norte ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Windmillrotorud three up ×1 | — |
| receta de compatibilidad | Millwright: potencia mecánica | Brake norte ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Lancer | `co-lancer` | replace | `jumpHeightMul` = 0.2 → altura de salto: **+20%** (valor interno `0.2`)<br>`steadyAim` = 0.4 → puntería estable: **+40%** (valor interno `0.4`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`)<br>`spearsProficiency` = 0.25 → competencia con lanzas: **+25%** (valor interno `0.25`)<br>`crossbowsProficiency` = 0.45 → competencia con ballestas: **+45%** (valor interno `0.45`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Lancer | `co-lancer` | replace | `jumpHeightMul` = 0.2 → altura de salto: **+20%** (valor interno `0.2`)<br>`steadyAim` = 0.4 → puntería estable: **+40%** (valor interno `0.4`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`javelinsProficiency` = 0.25 → competencia con jabalinas: **+25%** (valor interno `0.25`)<br>`spearsProficiency` = 0.25 → competencia con lanzas: **+25%** (valor interno `0.25`)<br>`crossbowsProficiency` = 0.45 → competencia con ballestas: **+45%** (valor interno `0.45`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`) |
| millwright | Compatibilidad: Millwright | `clockmakermillwright` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| temporaladaptation | 0.3 | 30% |
| metalworking | 0.6 | 60% |
| forestry | 0.3 | 30% |

## 7. Análisis funcional breve
Análisis: técnico de late game. Sus desbloqueos pesan más que sus stats iniciales.
