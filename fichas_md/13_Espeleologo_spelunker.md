# Espeleólogo / Spelunker (`spelunker`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **6**
- Bonus numéricos: **7**
- Malus numéricos: **6**
- Recetas mesa normal: **20**
- Recetas estación: **7**
- Recetas compatibilidad: **0**
- Lectura funcional: minero de riesgo. Muy fuerte en mineral/bateo/explosivos; no sostiene comida.

## Bonus objetivos

- ahorro de durabilidad de pico: **+50%** (valor interno `0.5`)
- daño recibido por aplastamiento: **-90%** (valor interno `-0.9`)
- daño recibido por explosión: **-90%** (valor interno `-0.9`)
- drop de mineral: **+100%** (valor interno `1`)
- salida/rendimiento al batear: **+100%** (valor interno `1`)
- velocidad al batear: **+100%** (valor interno `1`)
- velocidad al picar mineral: **+50%** (valor interno `0.5`)

## Malus objetivos

- daño con herramientas de piedra: **-20%** (valor interno `-0.2`)
- drop de cultivos silvestres: **-25%** (valor interno `-0.25`)
- drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)
- drop/rendimiento de animales: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)
- velocidad de minado con herramientas de piedra: **-20%** (valor interno `-0.2`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Zapador | `sapper` | positivo | daño recibido por explosión: **-90%** (interno `-0.9`)<br>daño recibido por aplastamiento: **-90%** (interno `-0.9`) |
| Espeleólogo | `spelunker` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Bateador | `panner` | positivo | salida/rendimiento al batear: **+100%** (interno `1`)<br>velocidad al batear: **+100%** (interno `1`) |
| Prospector | `prospector` | positivo | drop de mineral: **+100%** (interno `1`)<br>velocidad al picar mineral: **+50%** (interno `0.5`)<br>ahorro de durabilidad de pico: **+50%** (interno `0.5`) |
| Petrofóbico | `petrophobe` | negativo | velocidad al picar piedra: **-10%** (interno `-0.1`)<br>velocidad de minado con herramientas de piedra: **-20%** (interno `-0.2`)<br>daño con herramientas de piedra: **-20%** (interno `-0.2`) |
| Protegido | `sheltered` | negativo | drop de forraje/recolección silvestre: **-25%** (interno `-0.25`)<br>drop de cultivos silvestres: **-25%** (interno `-0.25`)<br>drop/rendimiento de animales: **-10%** (interno `-0.1`) |

## Recetas / desbloqueos

- Mesa normal: **20**
- Estación: **7**
- Compatibilidad opcional: **0**

### Categorías humanizadas
- Molienda: **11**
- Cuba de mezclas y alquimia: **7**
- Bombas y explosivos: **5**
- Tierra mineral para batear: **3**
- Faroles y linternas: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Bombas y explosivos | `Bomb mineral ×8` | — |
| mesa de crafteo normal | Bombas y explosivos | `Bomb piedra ×8` | — |
| mesa de crafteo normal | Bombas y explosivos | `Bomb scrap ×8` | — |
| mesa de crafteo normal | Bombas y explosivos | `Bomb scrap ×8` | — |
| mesa de crafteo normal | Bombas y explosivos | `Bomb scrap ×8` | — |
| mesa de crafteo normal | Molienda | `Lime ×2` | — |
| mesa de crafteo normal | Molienda | `Salt ×4` | — |
| mesa de crafteo normal | Molienda | `Powder oretype ×4` | — |
| mesa de crafteo normal | Molienda | `Saltpeter ×2` | — |
| mesa de crafteo normal | Molienda | `Powder sílex ×2` | — |
| mesa de crafteo normal | Molienda | `Powder alumbre ×2` | — |
| mesa de crafteo normal | Molienda | `Powder charcoal ×2` | — |
| mesa de crafteo normal | Molienda | `Bonemeal ×2` | — |
| mesa de crafteo normal | Molienda | `Bonemeal ×1` | — |
| mesa de crafteo normal | Molienda | `Powder iron oxide ×4` | — |
| mesa de crafteo normal | Molienda | `Powder iron oxide ×4` | — |
| mesa de crafteo normal | Faroles y linternas | `Spelunkinglantern ×1` | — |
| mesa de crafteo normal | Tierra mineral para batear | `Tierra mineral carbonosa ×1` | — |
| mesa de crafteo normal | Tierra mineral para batear | `Tierra mineral cristalina ×1` | — |
| mesa de crafteo normal | Tierra mineral para batear | `Tierra mineral metálica ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Tierra mineral carbonosa ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Tierra mineral cristalina ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Tierra mineral metálica ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Lime ×4` | — |
| estación especial | Cuba de mezclas y alquimia | `Saltpeter ×8` | — |
| estación especial | Cuba de mezclas y alquimia | `Salt ×4` | — |
| estación especial | Cuba de mezclas y alquimia | `Powder oretype ×4` | — |