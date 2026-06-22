# Guardabosques / Forester (`forester`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **8**
- Bonus numéricos: **13**
- Malus numéricos: **7**
- Recetas mesa normal: **62**
- Recetas estación: **55**
- Recetas compatibilidad: **4**
- Lectura funcional: infraestructura de madera/combustible. Pega más, pero recibe más daño.

## Bonus objetivos

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

## Malus objetivos

- daño recibido global: **+10%** (valor interno `0.1`)
- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- saciedad de lácteos: **-10%** (valor interno `-0.1`)
- saciedad de proteína/carne: **-10%** (valor interno `-0.1`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Bárbaro | `berserker` | positivo | velocidad al caminar: **+5%** (interno `0.05`)<br>daño cuerpo a cuerpo: **+30%** (interno `0.3`)<br>daño recibido global: **+10%** (interno `0.1`) |
| Guardabosques | `forester` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Carbonero | `collier` | positivo | drop de carbón vegetal: **+100%** (interno `1`)<br>drop de turba: **+100%** (interno `1`) |
| Leñador | `lumberjack` | positivo | velocidad al trabajar madera: **+100%** (interno `1`)<br>velocidad con hojas: **+100%** (interno `1`)<br>ahorro de durabilidad de hacha: **+75%** (interno `0.75`)<br>ahorro de durabilidad de tijeras: **+75%** (interno `0.75`)<br>ahorro de durabilidad de sierra: **+75%** (interno `0.75`)<br>probabilidad de restos vegetales desde hojas: **+5%** (interno `0.05`) |
| Técnico de Viveros | `nurseryworker` | positivo | drop de semillas/brotes de árbol: **+300%** (interno `3`) |
| Carpintero | `carpenter` | positivo | drop de troncos: **+50%** (interno `0.5`)<br>probabilidad de resina desde troncos: **+2%** (interno `0.02`) |
| Delicado | `delicate` | negativo | drop de mineral: **-10%** (interno `-0.1`)<br>velocidad al picar mineral: **-10%** (interno `-0.1`)<br>velocidad al picar piedra: **-10%** (interno `-0.1`)<br>pérdida de estabilidad temporal: **+25%** (interno `0.25`) |
| Herbívoro | `herbivorous` | negativo | saciedad de proteína/carne: **-10%** (interno `-0.1`)<br>saciedad de lácteos: **-10%** (interno `-0.1`) |

## Recetas / desbloqueos

- Mesa normal: **62**
- Estación: **55**
- Compatibilidad opcional: **4**

### Categorías humanizadas
- Mesa de tallado de madera: **53**
- Empalizadas y defensas de madera: **10**
- Envejecido de madera: **10**
- Madera y carpintería: **9**
- Combustibles: **8**
- Puertas: **7**
- Tejados y piezas de cubierta: **7**
- Procesado de madera: **6**
- Camas: **2**
- Mesa de germinación: **2**
- Toolsmith: mangos de herramienta: **2**
- Toolsmith Fork: mangos de herramienta: **2**
- Cofres y almacenamiento: **1**
- Hojas: **1**
- Plantones de árbol: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Camas | `Bed woodaged casco norte ×1` | — |
| mesa de crafteo normal | Camas | `Bed village casco norte ×1` | — |
| mesa de crafteo normal | Cofres y almacenamiento | `Chest este ×1` | — |
| mesa de crafteo normal | Puertas | `Door ruined rough1 ×1` | — |
| mesa de crafteo normal | Puertas | `Door ruined rough2 ×1` | — |
| mesa de crafteo normal | Puertas | `Door ruined rough3 ×1` | — |
| mesa de crafteo normal | Puertas | `Door ruined windowed1 ×1` | — |
| mesa de crafteo normal | Puertas | `Door ruined windowed2 ×1` | — |
| mesa de crafteo normal | Puertas | `Door ruined windowed3 ×1` | — |
| mesa de crafteo normal | Puertas | `Door sleek windowed Madera y carpintería ×1` | — |
| mesa de crafteo normal | Combustibles | `Firewood ×16` | — |
| mesa de crafteo normal | Combustibles | `Firewood ×12` | — |
| mesa de crafteo normal | Combustibles | `Firewood ×16` | — |
| mesa de crafteo normal | Combustibles | `Agedfirewood ×16` | — |
| mesa de crafteo normal | Combustibles | `Firewood treated ×1` | — |
| mesa de crafteo normal | Combustibles | `Coal contaminated ×4` | — |
| mesa de crafteo normal | Combustibles | `Charcoal ×8` | — |
| mesa de crafteo normal | Combustibles | `Briquette ×4` | — |
| mesa de crafteo normal | Hojas | `Leaves colocado Madera y carpintería ×4` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall cuádruple lower cornerin oeste ×8` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall three height wall oeste ×1` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall cuádruple height wall oeste ×1` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall cuádruple height cornerout oeste ×1` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall cuádruple parte superior type oeste ×1` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall cuádruple halftop type oeste ×1` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall three parte superior type oeste ×1` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall three halftop type oeste ×1` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall amount toproped wall oeste ×8` | — |
| mesa de crafteo normal | Empalizadas y defensas de madera | `Palisadewall cuádruple lowerspiked wall oeste ×1` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Tejado inclinado Madera y carpintería este libre ×4` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Cumbrera de tejado Madera y carpintería norte-sur libre ×4` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Punta de tejado Madera y carpintería libre ×4` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Esquina interior de tejado Madera y carpintería este libre ×4` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Esquina exterior de tejado Madera y carpintería este libre ×4` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Beam ridge Madera y carpintería libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Beam plane Madera y carpintería libre ×16` | — |
| mesa de crafteo normal | Plantones de árbol | `Sapling Madera y carpintería libre ×1` | — |
| mesa de crafteo normal | Madera y carpintería | `Carvedlog acacia envejecido bottom liso vertical ×1` | — |
| mesa de crafteo normal | Madera y carpintería | `Carvedlog acacia envejecido parte superior fancy vertical ×1` | — |
| mesa de crafteo normal | Madera y carpintería | `Carvedlog acacia envejecido middle fancy vertical ×1` | — |
| mesa de crafteo normal | Madera y carpintería | `Carvedlog acacia envejecido bottom fancy vertical ×1` | — |
| mesa de crafteo normal | Madera y carpintería | `Carvedlog acacia envejecido middle liso vertical ×1` | — |
| mesa de crafteo normal | Madera y carpintería | `Carvedlog acacia envejecido parte superior liso vertical ×1` | — |
| mesa de crafteo normal | Madera y carpintería | `Objeto decorativo de ruinas ×1` | — |
| mesa de crafteo normal | Madera y carpintería | `Objeto decorativo de ruinas ×16` | — |
| mesa de crafteo normal | Madera y carpintería | `Viga de soporte Madera y carpintería ×16` | — |
| mesa de crafteo normal | Envejecido de madera | `Carvedlog acacia envejecido bottom liso vertical ×1` | — |
| mesa de crafteo normal | Envejecido de madera | `Carvedlog acacia envejecido middle liso vertical ×1` | — |
| mesa de crafteo normal | Envejecido de madera | `Carvedlog acacia envejecido parte superior liso vertical ×1` | — |
| mesa de crafteo normal | Envejecido de madera | `Carvedlog acacia envejecido part fancy vertical ×1` | — |
| mesa de crafteo normal | Envejecido de madera | `Tablones ébano envejecido vertical ×8` | — |
| mesa de crafteo normal | Envejecido de madera | `Tablones ébano podrido vertical ×8` | — |
| mesa de crafteo normal | Envejecido de madera | `Tronco colocado envejecido vertical ×8` | — |
| mesa de crafteo normal | Envejecido de madera | `Tronco sin corteza muy envejecido vertical ×8` | — |
| mesa de crafteo normal | Envejecido de madera | `Tronco sin corteza podrido vertical ×8` | — |
| mesa de crafteo normal | Envejecido de madera | `Tronco sin corteza muy podrido vertical ×8` | — |
| mesa de crafteo normal | Procesado de madera | `Plank Madera y carpintería ×4` | — |
| mesa de crafteo normal | Procesado de madera | `Plank Madera y carpintería ×16` | — |
| mesa de crafteo normal | Procesado de madera | `Plank Madera y carpintería ×4` | — |
| mesa de crafteo normal | Procesado de madera | `Plank Madera y carpintería ×16` | — |
| mesa de crafteo normal | Procesado de madera | `Stick ×1` | — |
| mesa de crafteo normal | Procesado de madera | `Stick ×1` | — |
| estación especial | Mesa de germinación | `Sapling Madera y carpintería libre ×1` | — |
| estación especial | Mesa de germinación | `Sapling Madera y carpintería libre ×1` | — |
| estación especial | Mesa de tallado de madera | `Tronco colocado envejecido vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Firewood ×8` | — |
| estación especial | Mesa de tallado de madera | `Agedfirewood ×8` | — |
| estación especial | Mesa de tallado de madera | `Stick ×64` | — |
| estación especial | Mesa de tallado de madera | `Plank Madera y carpintería ×16` | — |
| estación especial | Mesa de tallado de madera | `Logquad colocado Madera y carpintería vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Logquad barkedcorner Madera y carpintería norte ×1` | — |
| estación especial | Mesa de tallado de madera | `Logquad debarked Madera y carpintería vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Logquad debarkedcorner Madera y carpintería norte ×1` | — |
| estación especial | Mesa de tallado de madera | `Tronco sin corteza Madera y carpintería vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Viga de soporte Madera y carpintería ×3` | — |
| estación especial | Mesa de tallado de madera | `Tablones Madera y carpintería vertical ×3` | — |
| estación especial | Mesa de tallado de madera | `Plankslab Madera y carpintería abajo libre ×6` | — |
| estación especial | Mesa de tallado de madera | `Plankstairs Madera y carpintería up norte libre ×4` | — |
| estación especial | Mesa de tallado de madera | `Tronco sin corteza muy envejecido vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Viga de soporte muy envejecido ×3` | — |
| estación especial | Mesa de tallado de madera | `Tronco sin corteza podrido vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Viga de soporte podrido ×3` | — |
| estación especial | Mesa de tallado de madera | `Tronco sin corteza muy podrido vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Viga de soporte muy podrido ×3` | — |
| estación especial | Mesa de tallado de madera | `Woodenfence Madera y carpintería este-oeste libre ×16` | — |
| estación especial | Mesa de tallado de madera | `Woodenfencegate Madera y carpintería n closed left libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Roughhewnfence Madera y carpintería este-oeste libre ×4` | — |
| estación especial | Mesa de tallado de madera | `Roughhewnfencegate Madera y carpintería n closed libre ×1` | — |
| estación especial | Mesa de tallado de madera | `Woodenpath Madera y carpintería norte-sur ×6` | — |
| estación especial | Mesa de tallado de madera | `Trapdoor solid Madera y carpintería 1 ×2` | — |
| estación especial | Mesa de tallado de madera | `Trapdoor window Madera y carpintería 1 ×2` | — |
| estación especial | Mesa de tallado de madera | `Door solid Madera y carpintería ×2` | — |
| estación especial | Mesa de tallado de madera | `Door sleek windowed Madera y carpintería ×1` | — |
| estación especial | Mesa de tallado de madera | `Tejado inclinado Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Slantedroofingbottom Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Slantedroofingtop Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Slantedroofinghalfleft Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Slantedroofinghalfright Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Cumbrera de tejado Madera y carpintería norte-sur libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Slantedroofingridgeend Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Slantedroofingridgehalfleft Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Slantedroofingridgehalfright Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Punta de tejado Madera y carpintería libre ×1` | — |
| estación especial | Mesa de tallado de madera | `Esquina interior de tejado Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Esquina exterior de tejado Madera y carpintería este libre ×2` | — |
| estación especial | Mesa de tallado de madera | `Carvedlog acacia envejecido bottom liso vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Carvedlog acacia envejecido bottom fancy vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Carvedlog acacia envejecido middle liso vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Carvedlog acacia envejecido middle fancy vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Carvedlog acacia envejecido parte superior liso vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Carvedlog acacia envejecido parte superior fancy vertical ×1` | — |
| estación especial | Mesa de tallado de madera | `Ladder Madera y carpintería norte ×6` | — |
| estación especial | Mesa de tallado de madera | `Sign ground norte ×4` | — |
| estación especial | Mesa de tallado de madera | `Signpost ×4` | — |
| estación especial | Mesa de tallado de madera | `Moldrack normal este ×2` | — |
| estación especial | Mesa de tallado de madera | `Shelf normal este ×3` | — |
| estación especial | Mesa de tallado de madera | `Table normal ×1` | — |
| receta de compatibilidad | Toolsmith: mangos de herramienta | `Handle ×1` | — |
| receta de compatibilidad | Toolsmith: mangos de herramienta | `Carpentedhandle ×1` | — |
| receta de compatibilidad | Toolsmith Fork: mangos de herramienta | `Handle ×1` | — |
| receta de compatibilidad | Toolsmith Fork: mangos de herramienta | `Carpentedhandle ×1` | — |