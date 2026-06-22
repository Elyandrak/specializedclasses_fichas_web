# Maleante / Malefactor (`malefactor`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de herramientas de chatarra: **+100%** (valor interno `1`)
- ahorro de durabilidad de honda: **+100%** (valor interno `1`)
- alcance para recoger objetos: **+100%** (valor interno `1`)
- daño causado global: **+10%** (valor interno `0.1`)
- daño con herramientas de chatarra: **+50%** (valor interno `0.5`)
- daño con honda: **+50%** (valor interno `0.5`)
- daño contra humanoides: **+50%** (valor interno `0.5`)
- drop de engranajes oxidados: **+100%** (valor interno `1`)
- drop de nidos de langosta: **+100%** (valor interno `1`)
- puede abrir ventana extra de comercio: **activado (+1)** (valor interno `1`)
- rango de detección/agresión de animales: **-75%** (valor interno `-0.75`)
- velocidad agachado: **+50%** (valor interno `0.5`)

### Malus objetivos
- daño recibido global: **+10%** (valor interno `0.1`)
- drop de frutales: **-75%** (valor interno `-0.75`)
- drop de semillas cultivadas: **-75%** (valor interno `-0.75`)
- drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)
- saciedad de comidas preparadas: **-10%** (valor interno `-0.1`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Pícaro | `rogue` | positivo | `animalSeekingRange` = -0.75 → rango de detección/agresión de animales: **-75%** (valor interno `-0.75`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`globalDamageDealt` = 0.1 → daño causado global: **+10%** (valor interno `0.1`) |
| Maleante | `malefactor` | positivo | Desbloquea kit de arma de chatarra, soportes de antorcha envejecidos, reciclaje de engranajes oxidados, chatarra y herramientas/armas de chatarra. |
| Improvisador | `improviser` | desbloqueo/vanilla | Desbloquea honda exclusiva. |
| Contrabandista | `smuggler` | positivo | `canOpenExtraTradeWindow` = 1 → puede abrir ventana extra de comercio: **activado (+1)** (valor interno `1`) |
| Acechador | `sneak` | positivo | `humanoidDamageDealt` = 0.5 → daño contra humanoides: **+50%** (valor interno `0.5`)<br>`sneakSpeedMul` = 0.5 → velocidad agachado: **+50%** (valor interno `0.5`) |
| Ladrón | `thief` | positivo | `pickupRangeMul` = 1 → alcance para recoger objetos: **+100%** (valor interno `1`)<br>`rustyGearDropRate` = 1 → drop de engranajes oxidados: **+100%** (valor interno `1`) |
| Desguazador | `scrapper` | positivo | `locustNestDropRate` = 1 → drop de nidos de langosta: **+100%** (valor interno `1`)<br>`slingDamageDealt` = 0.5 → daño con honda: **+50%** (valor interno `0.5`)<br>`scrapToolDamageDealt` = 0.5 → daño con herramientas de chatarra: **+50%** (valor interno `0.5`)<br>`scrapToolDurabilitySaveChance` = 1 → ahorro de durabilidad de herramientas de chatarra: **+100%** (valor interno `1`)<br>`slingDurabilitySaveChance` = 1 → ahorro de durabilidad de honda: **+100%** (valor interno `1`) |
| Escrubidor | `scourer` | negativo | `cropSeedDropRate` = -0.75 → drop de semillas cultivadas: **-75%** (valor interno `-0.75`)<br>`treeSeedDropRate` = -0.75 → drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)<br>`fruitTreeDropRate` = -0.75 → drop de frutales: **-75%** (valor interno `-0.75`) |
| Insípido | `flavorless` | negativo | `mealSatietyMul` = -0.1 → saciedad de comidas preparadas: **-10%** (valor interno `-0.1`) |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **12**
- Recetas por estación con `requiredTrait`: **0**
- Recetas de compatibilidad opcional detectadas: **0**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Recuperación de chatarra y piezas | 11 |
| Comercio | 1 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Recuperación de chatarra y piezas | Scrapweaponkit ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Torchholder ruined empty norte ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Torchholder envejecido empty norte ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Torchholder envejecido empty norte ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Torchholder envejecido empty norte ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Metal scraps ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Axe scrap scrap ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Club scrap scrap ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Club scrapmace scrap ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Hoja scrap scrap ×1 | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | Lanza scrap scrap ×1 | — |
| mesa de crafteo normal | Comercio | Gear rusty ×8 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| combatoverhaul | CO: Rogue | `co-rogue` | replace | `animalSeekingRange` = -0.75 → rango de detección/agresión de animales: **-75%** (valor interno `-0.75`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`globalDamageDealt` = 0.1 → daño causado global: **+10%** (valor interno `0.1`)<br>`macesProficiency` = 0.25 → competencia con mazas: **+25%** (valor interno `0.25`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`)<br>`slingsProficiency` = 0.45 → competencia con hondas: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Rogue | `co-rogue` | replace | `animalSeekingRange` = -0.75 → rango de detección/agresión de animales: **-75%** (valor interno `-0.75`)<br>`globalDamageTaken` = 0.1 → daño recibido global: **+10%** (valor interno `0.1`)<br>`globalDamageDealt` = 0.1 → daño causado global: **+10%** (valor interno `0.1`)<br>`macesProficiency` = 0.25 → competencia con mazas: **+25%** (valor interno `0.25`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`)<br>`slingsProficiency` = 0.45 → competencia con hondas: **+45%** (valor interno `0.45`) |
| thievery | Compatibilidad: Thievery | `pilferer` | add | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| Alfarería y piezas de barro | 0.3 | 30% |
| survival | 0.6 | 60% |
| combat | 0.3 | 30% |

## 7. Análisis funcional breve
Análisis: exploración, comercio y saqueo. Depende de ruinas/traders para expresar su ventaja.
