# Alfarero / Brickmaker (`brickmaker`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **7**
- Bonus numéricos: **12**
- Malus numéricos: **5**
- Recetas mesa normal: **65**
- Recetas estación: **3**
- Recetas compatibilidad: **2**
- Lectura funcional: constructor material. Objetivamente fuerte para arcilla, tierra y porcelana; vulnerable al fuego.

## Bonus objetivos

- ahorro de durabilidad de pala: **+75%** (valor interno `0.75`)
- daño recibido global: **-20%** (valor interno `-0.2`)
- drop de arcilla: **+100%** (valor interno `1`)
- drop de hierba: **+25%** (valor interno `0.25`)
- drop de palos: **+25%** (valor interno `0.25`)
- drop de turba: **+25%** (valor interno `0.25`)
- velocidad con arcilla/cerámica: **+100%** (valor interno `1`)
- velocidad con arena: **+100%** (valor interno `1`)
- velocidad con grava: **+100%** (valor interno `1`)
- velocidad con nieve: **+100%** (valor interno `1`)
- velocidad con tierra: **+100%** (valor interno `1`)
- vida máxima: **+50%** (valor interno `0.5`)

## Malus objetivos

- afectación de armadura a velocidad: **+20%** (valor interno `0.2`)
- daño recibido por fuego: **+100%** (valor interno `1`)
- drop de frutales: **-75%** (valor interno `-0.75`)
- drop de semillas cultivadas: **-75%** (valor interno `-0.75`)
- drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Luchador | `bruiser` | positivo | vida máxima: **+50%** (interno `0.5`)<br>daño recibido global: **-20%** (interno `-0.2`)<br>afectación de armadura a velocidad: **+20%** (interno `0.2`) |
| Alfarero | `brickmaker` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Excavador de arcilla | `delver` | positivo | drop de arcilla: **+100%** (interno `1`)<br>velocidad con arcilla/cerámica: **+100%** (interno `1`) |
| Excavador | `excavator` | positivo | ahorro de durabilidad de pala: **+75%** (interno `0.75`)<br>velocidad con tierra: **+100%** (interno `1`)<br>velocidad con grava: **+100%** (interno `1`)<br>velocidad con arena: **+100%** (interno `1`)<br>velocidad con nieve: **+100%** (interno `1`) |
| Operario de Horno | `kilnhand` | positivo | drop de hierba: **+25%** (interno `0.25`)<br>drop de turba: **+25%** (interno `0.25`)<br>drop de palos: **+25%** (interno `0.25`) |
| Recolector pobre | `scourer` | negativo | drop de semillas cultivadas: **-75%** (interno `-0.75`)<br>drop de semillas/brotes de árbol: **-75%** (interno `-0.75`)<br>drop de frutales: **-75%** (interno `-0.75`) |
| Inflamable | `flammable` | negativo | daño recibido por fuego: **+100%** (interno `1`) |

## Recetas / desbloqueos

- Mesa normal: **65**
- Estación: **3**
- Compatibilidad opcional: **2**

### Categorías humanizadas
- Yeso y revestimientos: **20**
- Adobe y enlucidos: **15**
- Cerámica en lote: **8**
- Tejados y piezas de cubierta: **7**
- Ladrillos de arcilla: **6**
- Utensilios de cocina: **3**
- Ladrillos de barro: **3**
- Cuba de mezclas y alquimia: **3**
- Pastas y mezclas: **2**
- Bricklayers: cerámica en lote: **2**
- Tierra compactada: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Cerámica en lote | `Rawbrick arcilla ×4` | — |
| mesa de crafteo normal | Cerámica en lote | `Refractorybrick raw tier1 ×2` | — |
| mesa de crafteo normal | Cerámica en lote | `Refractorybrick raw tier2 ×2` | — |
| mesa de crafteo normal | Cerámica en lote | `Refractorybrick raw tier3 ×2` | — |
| mesa de crafteo normal | Cerámica en lote | `Refractorybrick raw tier3 ×2` | — |
| mesa de crafteo normal | Cerámica en lote | `Shingle raw arcilla ×32` | — |
| mesa de crafteo normal | Cerámica en lote | `Claytile raw liso arcilla ×12` | — |
| mesa de crafteo normal | Cerámica en lote | `Oillamp genie arcilla raw ×4` | — |
| mesa de crafteo normal | Ladrillos de arcilla | `Claybricks uneven cuádruple running arcilla ×16` | — |
| mesa de crafteo normal | Ladrillos de arcilla | `Claybricks uneven cuádruple soldier arcilla ×16` | — |
| mesa de crafteo normal | Ladrillos de arcilla | `Claybricks uneven cuádruple header arcilla ×16` | — |
| mesa de crafteo normal | Ladrillos de arcilla | `Claybricks uneven cuádruple running refractaria ×16` | — |
| mesa de crafteo normal | Ladrillos de arcilla | `Claybricks uneven cuádruple soldier refractaria ×16` | — |
| mesa de crafteo normal | Ladrillos de arcilla | `Brickruin irregular arcilla ×1` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw ash ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw ash ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw browngolden ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw marrón ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw browngolden ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw brownlight ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw brownlight ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw browngolden ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw brownweathered ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw green ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw orange ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw tan ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw tan ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw browngolden ×16` | — |
| mesa de crafteo normal | Adobe y enlucidos | `Daubraw yellow ×16` | — |
| mesa de crafteo normal | Utensilios de cocina | `Porcelainbowl ×1` | — |
| mesa de crafteo normal | Utensilios de cocina | `Porcelaincrock ×1` | — |
| mesa de crafteo normal | Utensilios de cocina | `Porcelainvessel ×1` | — |
| mesa de crafteo normal | Ladrillos de barro | `Mudbrick light ×8` | — |
| mesa de crafteo normal | Ladrillos de barro | `Mudbrick dark ×8` | — |
| mesa de crafteo normal | Ladrillos de barro | `Mudbrickslab dark abajo libre ×8` | — |
| mesa de crafteo normal | Tierra compactada | `Packeddirt ×2` | — |
| mesa de crafteo normal | Pastas y mezclas | `Lime ×4` | — |
| mesa de crafteo normal | Pastas y mezclas | `Mortar ×8` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Plaster liso ×8` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white normal ×16` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellow normal ×16` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellow normal ×16` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellow normal ×16` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellow normal ×16` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white normal ×16` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white parte superior rim ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white zigzag ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white bottom rim ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white cracked ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white damaged ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white crumbled ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos white normal ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellow zigzag ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellow parte superior rim ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellowwhite bottom rim ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellowwhite zigzag ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellow bottom rim ×1` | — |
| mesa de crafteo normal | Yeso y revestimientos | `Overlay Yeso y revestimientos yellow normal ×1` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Tejado inclinado materialclay este libre ×8` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Cumbrera de tejado materialclay norte-sur libre ×8` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Punta de tejado materialclay libre ×8` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Esquina interior de tejado materialclay este libre ×8` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Esquina exterior de tejado materialclay este libre ×8` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Beam ridge materialclay libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Beam plane materialclay libre ×16` | — |
| estación especial | Cuba de mezclas y alquimia | `Mortar ×8` | — |
| estación especial | Cuba de mezclas y alquimia | `Plaster liso ×8` | — |
| estación especial | Cuba de mezclas y alquimia | `Lime ×4` | — |
| receta de compatibilidad | Bricklayers: cerámica en lote | `Clayrawtile raw arcilla ×2` | — |
| receta de compatibilidad | Bricklayers: cerámica en lote | `Clayshingle raw malaquita ×32` | — |