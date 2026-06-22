# Florista / Florist (`florist`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de guadaña: **+75%** (valor interno `0.75`)
- altura de salto: **+20%** (valor interno `0.2`)
- cosecha suave/eficiencia de colmenas y skeps: **+100%** (valor interno `1`)
- drop de hierba: **+50%** (valor interno `0.5`)
- probabilidad de cola de caballo desde hierba: **+20%** (valor interno `0.2`)
- regeneración pasiva por segundo: **0.1** (valor interno `0.1`)
- velocidad al caminar: **+10%** (valor interno `0.1`)
- velocidad con plantas: **+50%** (valor interno `0.5`)

### Malus objetivos
- daño a distancia: **-25%** (valor interno `-0.25`)
- daño contra humanoides: **-20%** (valor interno `-0.2`)
- daño cuerpo a cuerpo: **-25%** (valor interno `-0.25`)
- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Senderista | `wanderer` | positivo | `meleeWeaponsDamage` = -0.25 → daño cuerpo a cuerpo: **-25%** (valor interno `-0.25`)<br>`rangedWeaponsDamage` = -0.25 → daño a distancia: **-25%** (valor interno `-0.25`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`)<br>`jumpHeightMul` = 0.2 → altura de salto: **+20%** (valor interno `0.2`)<br>`healthRegenPerSec` = 0.1 → regeneración pasiva por segundo: **0.1** (valor interno `0.1`) |
| Florista | `florist` | positivo | Desbloquea flores, pigmentos, pinturas, medicina, macetas, vasijas decoradas, papeles pintados, beenades y propagación vegetal. |
| Apicultor | `apiarist` | positivo | `gentleHarvestSkepEfficiency` = 1 → cosecha suave/eficiencia de colmenas y skeps: **+100%** (valor interno `1`) |
| Herbalista | `herbalist` | positivo | `grassHorsetailDropChance` = 0.2 → probabilidad de cola de caballo desde hierba: **+20%** (valor interno `0.2`)<br>`grassDropRate` = 0.5 → drop de hierba: **+50%** (valor interno `0.5`)<br>`plantMiningSpeedMul` = 0.5 → velocidad con plantas: **+50%** (valor interno `0.5`)<br>`knifeDurabilitySaveChance` = 0.75 → ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`)<br>`scytheDurabilitySaveChance` = 0.75 → ahorro de durabilidad de guadaña: **+75%** (valor interno `0.75`) |
| Delicado | `delicate` | negativo | `oreDropRate` = -0.1 → drop de mineral: **-10%** (valor interno `-0.1`)<br>`oreMiningSpeedMul` = -0.1 → velocidad al picar mineral: **-10%** (valor interno `-0.1`)<br>`stoneMiningSpeedMul` = -0.1 → velocidad al picar piedra: **-10%** (valor interno `-0.1`)<br>`stabilityLossMul` = 0.25 → pérdida de estabilidad temporal: **+25%** (valor interno `0.25`) |
| Comprensivo | `sympathetic` | negativo | `humanoidDamageDealt` = -0.2 → daño contra humanoides: **-20%** (valor interno `-0.2`) |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **142**
- Recetas por estación con `requiredTrait`: **20**
- Recetas de compatibilidad opcional detectadas: **17**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Apicultura | 1 |
| Flores | 4 |
| Medicina | 4 |
| Cuadros y pinturas | 25 |
| Mezcla de pigmentos | 6 |
| Pigmentos y tintes | 38 |
| Alfarería y piezas de barro | 21 |
| Vasijas y recipientes cerámicos | 34 |
| Papeles pintados | 9 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Apicultura | Beenade closed ×1 | — |
| mesa de crafteo normal | Flores | Flower flowertype libre ×2 | — |
| mesa de crafteo normal | Flores | Flower flowertype libre ×2 | — |
| mesa de crafteo normal | Flores | Flower flowertype libre ×5 | — |
| mesa de crafteo normal | Flores | Flower flowertype libre ×17 | — |
| mesa de crafteo normal | Medicina | Poultice lino horsetail ×4 | — |
| mesa de crafteo normal | Medicina | Poultice lino honey azufre ×4 | — |
| mesa de crafteo normal | Medicina | Poultice reed horsetail ×4 | — |
| mesa de crafteo normal | Medicina | Poultice reed honey azufre ×4 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting bogfort norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting castleruin norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting cow norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting hunterintheforest norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting seraph norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting sunkenruin norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting traveler norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting howl norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting elk norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting underwater norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting prey norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting forestdawn norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting fishandtherain norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting family1 norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting butterfly norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting glam norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting hunter norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting iris norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting sleepingwolf norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting sodhouse norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting thunderlord norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting trout norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting oldvillage norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting lastday norte ×1 | — |
| mesa de crafteo normal | Cuadros y pinturas | Painting uncle1 norte ×1 | — |
| mesa de crafteo normal | Mezcla de pigmentos | Pigment orange ×1 | — |
| mesa de crafteo normal | Mezcla de pigmentos | Pigment green ×1 | — |
| mesa de crafteo normal | Mezcla de pigmentos | Pigment morada ×1 | — |
| mesa de crafteo normal | Mezcla de pigmentos | Pigment pink ×1 | — |
| mesa de crafteo normal | Mezcla de pigmentos | Pigment gray ×1 | — |
| mesa de crafteo normal | Mezcla de pigmentos | Pigment marrón ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment negra ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment gray ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment white ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment white ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment marrón ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment pink ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment pink ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment morada ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment morada ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment azul ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment green ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment green ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment roja ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment roja ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment orange ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment orange ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment yellow ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment green ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment azul ×8 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment roja ×8 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment green ×8 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment roja ×8 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment orange ×8 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment negra ×8 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment yellow ×8 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment azul ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment morada ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment orange ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment yellow ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment roja ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment pink ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment green ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment negra ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment yellow ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment gray ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment roja ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment orange ×1 | — |
| mesa de crafteo normal | Pigmentos y tintes | Pigment white ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot amber ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot boneash ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot celadon ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot copper ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot earthern ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot moss ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot ochre ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot rutile ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot seasalt ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Flowerpot tenmoku ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter amber ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter ashforest ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter copper ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter cthonic ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter earthern ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter loam ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter ochre ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter rime ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter seasalt ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter tenmoku ×1 | — |
| mesa de crafteo normal | Alfarería y piezas de barro | Clayplanter undergrowth ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel ashforest ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel chthonic ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel copper ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel earthen ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel rain ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel cowrie ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel rime ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel oxblood ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel loam ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel undergrowth ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel beehive ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel harvest ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel honeydew ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel rutile ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel seasalt ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel springflowers ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel volcanic ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel cloisonne ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel cornflower ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel talik ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel caveaurora ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel collonade ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel rattlesnake ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel waves ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel wintersea ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel abyss ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel Cadenas ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel entrenched ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel golden ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel motheaten ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel patina ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel pine ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel serpents ×1 | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | Storagevessel void ×1 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper blue4 ×4 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper green1 ×4 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper grey1 ×4 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper marrón ×4 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper walnut ×4 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper darkpurple ×4 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper yellow ×4 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper pink ×4 | — |
| mesa de crafteo normal | Papeles pintados | Wallpaper lightgreen ×4 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Cuba de mezclas y alquimia | 17 |
| Mesa de germinación | 3 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Cuba de mezclas y alquimia | Pigment negra ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment gray ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment white ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment white ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment marrón ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment pink ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment pink ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment morada ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment morada ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment azul ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment green ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment roja ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment roja ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment orange ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment orange ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment yellow ×1 | — |
| estación especial | Cuba de mezclas y alquimia | Pigment yellow ×1 | — |
| estación especial | Mesa de germinación | Flower flower libre ×16 | — |
| estación especial | Mesa de germinación | Leaves colocado Madera y carpintería ×32 | — |
| estación especial | Mesa de germinación | Leavesbranchy colocado Madera y carpintería ×16 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| Alchemy: medicina | 2 |
| Expanded Beekeeping: apicultura | 6 |
| From Golden Combs: apicultura | 9 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | Alchemy: medicina | Potionbase basic ×1 | — |
| receta de compatibilidad | Alchemy: medicina | Herbball potiontype ×4 | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | Hiveframe empty ×2 | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | Hiveframe empty ×2 | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | Broodbox ×1 | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | Broodbox ×1 | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | Apiary ×1 | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | Hivesmoker copper empty ×1 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Langstrothside Madera y carpintería ×8 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Langstrothside envejecido ×8 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Beeframe envejecido empty ×2 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Frameliner ×4 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Waxedflaxtwine ×8 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Framerack envejecido envejecido este ×1 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Langstrothbase envejecido envejecido este ×1 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Langstrothsuper closed envejecido envejecido este ×1 | — |
| receta de compatibilidad | From Golden Combs: apicultura | Langstrothbroodtop envejecido envejecido ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| alchemy | Compatibilidad: Alchemy | `floristalchemy` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| combatoverhaul | CO: Wanderer | `co-wanderer` | replace | `meleeWeaponsDamage` = -0.25 → daño cuerpo a cuerpo: **-25%** (valor interno `-0.25`)<br>`steadyAim` = -0.5 → puntería estable: **-50%** (valor interno `-0.5`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`)<br>`jumpHeightMul` = 0.2 → altura de salto: **+20%** (valor interno `0.2`)<br>`healthRegenPerSec` = 0.1 → regeneración pasiva por segundo: **0.1** (valor interno `0.1`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`quarterstaffProficiency` = 0.25 → competencia con bastones: **+25%** (valor interno `0.25`)<br>`bowsProficiency` = 0.45 → competencia con arcos: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Wanderer | `co-wanderer` | replace | `meleeWeaponsDamage` = -0.25 → daño cuerpo a cuerpo: **-25%** (valor interno `-0.25`)<br>`steadyAim` = -0.5 → puntería estable: **-50%** (valor interno `-0.5`)<br>`walkspeed` = 0.1 → velocidad al caminar: **+10%** (valor interno `0.1`)<br>`jumpHeightMul` = 0.2 → altura de salto: **+20%** (valor interno `0.2`)<br>`healthRegenPerSec` = 0.1 → regeneración pasiva por segundo: **0.1** (valor interno `0.1`)<br>`oneHandedSwordsProficiency` = 0.25 → competencia con espadas de una mano: **+25%** (valor interno `0.25`)<br>`quarterstaffProficiency` = 0.25 → competencia con bastones: **+25%** (valor interno `0.25`)<br>`bowsProficiency` = 0.45 → competencia con arcos: **+45%** (valor interno `0.45`) |
| expandedbeekeeping | Compatibilidad: Expanded Beekeeping | `floristexpandedbeekeeping` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| fromgoldencombs | Compatibilidad: From Golden Combs | `floristfromgoldencombs` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| digging | 0.2 | 20% |
| cooking | 0.2 | 20% |
| forestry | 0.3 | 30% |
| farming | 0.5 | 50% |

## 7. Análisis funcional breve
Análisis: soporte de medicina, abejas y decoración. Bajo combate y minería.
