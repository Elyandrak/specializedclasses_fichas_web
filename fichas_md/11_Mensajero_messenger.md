# Mensajero / Messenger (`messenger`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **6**
- Bonus numéricos: **7**
- Malus numéricos: **6**
- Recetas mesa normal: **54**
- Recetas estación: **24**
- Recetas compatibilidad: **2**
- Lectura funcional: logística pura. Sus números mejoran movimiento/caminos/transporte; es frágil.

## Bonus objetivos

- ahorro de durabilidad de pala: **+50%** (valor interno `0.5`)
- velocidad al caminar: **+20%** (valor interno `0.2`)
- velocidad con arena: **+50%** (valor interno `0.5`)
- velocidad con grava: **+50%** (valor interno `0.5`)
- velocidad con nieve: **+50%** (valor interno `0.5`)
- velocidad con tierra: **+50%** (valor interno `0.5`)
- velocidad en caminos: **+20%** (valor interno `0.2`)

## Malus objetivos

- daño recibido global: **+10%** (valor interno `0.1`)
- drop de cultivos silvestres: **-25%** (valor interno `-0.25`)
- drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)
- drop/rendimiento de animales: **-10%** (valor interno `-0.1`)
- rango de detección/agresión de animales: **+50%** (valor interno `0.5`)
- saciedad máxima: **-20%** (valor interno `-0.2`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Hostigador | `harrier` | positivo | velocidad al caminar: **+20%** (interno `0.2`)<br>daño recibido global: **+10%** (interno `0.1`)<br>rango de detección/agresión de animales: **+50%** (interno `0.5`) |
| Mensajero | `messenger` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Pavimentador | `roadlayer` | positivo | ahorro de durabilidad de pala: **+50%** (interno `0.5`)<br>velocidad con grava: **+50%** (interno `0.5`)<br>velocidad con arena: **+50%** (interno `0.5`)<br>velocidad con nieve: **+50%** (interno `0.5`)<br>velocidad con tierra: **+50%** (interno `0.5`) |
| Ágil | `swift` | positivo | velocidad en caminos: **+20%** (interno `0.2`) |
| Protegido | `sheltered` | negativo | drop de forraje/recolección silvestre: **-25%** (interno `-0.25`)<br>drop de cultivos silvestres: **-25%** (interno `-0.25`)<br>drop/rendimiento de animales: **-10%** (interno `-0.1`) |
| Peso ligero | `lightweight` | negativo | saciedad máxima: **-20%** (interno `-0.2`) |

## Recetas / desbloqueos

- Mesa normal: **54**
- Estación: **24**
- Compatibilidad opcional: **2**

### Categorías humanizadas
- Bolsas y mochilas: **18**
- Mesa de cartografía: **12**
- Mesa de trabajo de cuero: **12**
- Faroles y linternas: **11**
- Lámparas de gas: **9**
- Caminos y senderos: **8**
- Velas: **5**
- Candelabros: **2**
- Primitive Survival: embarcaciones: **2**
- Carreteras de asfalto: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Carreteras de asfalto | `Asphaltroad libre ×32` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Basket normal reed ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Basket normal papyrus ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Hunterbackpack ×2` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Hunterbackpack ×2` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Hunterbackpack ×3` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Hunterbackpack ×4` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Hunterbackpack ×4` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Hunterbackpack ×4` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Linensack ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Backpack normal ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Backpack sturdy ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Messengerbag ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Scrollcase ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Scrollcase ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Portablecrate ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Portablecrate ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Vesselframe ×1` | — |
| mesa de crafteo normal | Bolsas y mochilas | `Vesselframe ×1` | — |
| mesa de crafteo normal | Velas | `Candle ×4` | — |
| mesa de crafteo normal | Velas | `Candle ×4` | — |
| mesa de crafteo normal | Velas | `Candle ×4` | — |
| mesa de crafteo normal | Velas | `Candle ×4` | — |
| mesa de crafteo normal | Velas | `Oillamp color up ×1` | — |
| mesa de crafteo normal | Candelabros | `Displaycase genérica ×1` | — |
| mesa de crafteo normal | Candelabros | `Talldisplaycase genérica ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Lámparas de gas | `Lámpara Jonas ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Farol de papel off ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Farol de papel encendido ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Farol de papel encendido ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Lantern small up ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Lantern small up ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Lantern small up ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Lantern small up ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Lantern large up ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Lantern large up ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Lantern large up ×1` | — |
| mesa de crafteo normal | Faroles y linternas | `Lantern large up ×1` | — |
| mesa de crafteo normal | Caminos y senderos | `Woodenpath envejecido norte-sur ×4` | — |
| mesa de crafteo normal | Caminos y senderos | `Stonepath libre ×4` | — |
| mesa de crafteo normal | Caminos y senderos | `Stonepathstairs up norte libre ×4` | — |
| mesa de crafteo normal | Caminos y senderos | `Stonepathslab libre ×4` | — |
| mesa de crafteo normal | Caminos y senderos | `Stonepath libre ×4` | — |
| mesa de crafteo normal | Caminos y senderos | `Stonepath libre ×4` | — |
| mesa de crafteo normal | Caminos y senderos | `Stonepath libre ×4` | — |
| mesa de crafteo normal | Caminos y senderos | `Woodenpath Madera y carpintería norte-sur ×4` | — |
| estación especial | Mesa de cartografía | `Asphaltroad libre ×64` | — |
| estación especial | Mesa de cartografía | `Woodenpath envejecido norte-sur ×2` | — |
| estación especial | Mesa de cartografía | `Stonepath libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepath libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepath libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepathstairs up norte libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepathstairs up norte libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepathstairs up norte libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepathslab libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepathslab libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepathslab libre ×2` | — |
| estación especial | Mesa de cartografía | `Stonepath libre ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Backpack normal ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Backpack sturdy ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Messengerbag ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Scrollcase ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Basket normal reed ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Basket normal papyrus ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Hunterbackpack ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Hunterbackpack ×2` | — |
| estación especial | Mesa de trabajo de cuero | `Hunterbackpack ×3` | — |
| estación especial | Mesa de trabajo de cuero | `Hunterbackpack ×4` | — |
| estación especial | Mesa de trabajo de cuero | `Hunterbackpack ×4` | — |
| estación especial | Mesa de trabajo de cuero | `Linensack ×1` | — |
| receta de compatibilidad | Primitive Survival: embarcaciones | `Floatingdock Madera y carpintería norte-sur ×2` | — |
| receta de compatibilidad | Primitive Survival: embarcaciones | `Raft norte ×1` | — |