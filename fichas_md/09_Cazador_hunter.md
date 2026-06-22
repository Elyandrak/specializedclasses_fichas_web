# Cazador / Hunter (`hunter`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **7**
- Bonus numéricos: **9**
- Malus numéricos: **7**
- Recetas mesa normal: **28**
- Recetas estación: **6**
- Recetas compatibilidad: **14**
- Lectura funcional: cazador real: daño a distancia, animales, pieles y cuero. Pierde valor donde no haya fauna/economía de cuero.

## Bonus objetivos

- ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`)
- daño a distancia: **+20%** (valor interno `0.2`)
- daño contra animales: **+50%** (valor interno `0.5`)
- daño recibido de animales: **-25%** (valor interno `-0.25`)
- drop de pieles: **+100%** (valor interno `1`)
- drop/rendimiento de animales: **+25%** (valor interno `0.25`)
- precisión a distancia: **+75%** (valor interno `0.75`)
- tiempo de despiece/cosecha animal: **-50%** (valor interno `-0.5`)
- velocidad al caminar: **+10%** (valor interno `0.1`)

## Malus objetivos

- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- saciedad de fruta: **-10%** (valor interno `-0.1`)
- saciedad de grano: **-10%** (valor interno `-0.1`)
- saciedad de verdura: **-10%** (valor interno `-0.1`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Francotirador | `marksman` | positivo | precisión a distancia: **+75%** (interno `0.75`)<br>daño a distancia: **+20%** (interno `0.2`)<br>velocidad al caminar: **+10%** (interno `0.1`) |
| Cazador | `hunter` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Tirador | `bowyer` | desbloqueo/vanilla | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Guardabosques | `ranger` | positivo | daño contra animales: **+50%** (interno `0.5`)<br>daño recibido de animales: **-25%** (interno `-0.25`) |
| Tallador | `carver` | positivo | tiempo de despiece/cosecha animal: **-50%** (interno `-0.5`)<br>drop/rendimiento de animales: **+25%** (interno `0.25`)<br>drop de pieles: **+100%** (interno `1`)<br>ahorro de durabilidad de cuchillo: **+75%** (interno `0.75`) |
| Delicado | `delicate` | negativo | drop de mineral: **-10%** (interno `-0.1`)<br>velocidad al picar mineral: **-10%** (interno `-0.1`)<br>velocidad al picar piedra: **-10%** (interno `-0.1`)<br>pérdida de estabilidad temporal: **+25%** (interno `0.25`) |
| Carnívoro | `carnivorous` | negativo | saciedad de grano: **-10%** (interno `-0.1`)<br>saciedad de verdura: **-10%** (interno `-0.1`)<br>saciedad de fruta: **-10%** (interno `-0.1`) |

## Recetas / desbloqueos

- Mesa normal: **28**
- Estación: **6**
- Compatibilidad opcional: **14**

### Categorías humanizadas
- Procesado de materiales: **25**
- Butchering: bolsas y equipo: **7**
- Mesa de trabajo de cuero: **6**
- More Arrows: flechas: **3**
- Primitive Survival: cecina: **3**
- Flechas: **2**
- Curtido: **1**
- Butchering: flechas: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Flechas | `Arrow metal ×1` | — |
| mesa de crafteo normal | Flechas | `Arrow bone ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide scraped small ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide scraped medium ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide scraped large ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide scraped huge ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Leather normal liso ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Leather normal liso ×2` | — |
| mesa de crafteo normal | Procesado de materiales | `Leather normal liso ×3` | — |
| mesa de crafteo normal | Procesado de materiales | `Leather normal liso ×5` | — |
| mesa de crafteo normal | Procesado de materiales | `Leather sturdy liso ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×4` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×3` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×2` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×2` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×4` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×3` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×2` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×2` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×1` | — |
| mesa de crafteo normal | Procesado de materiales | `Hide oiled species ×1` | — |
| mesa de crafteo normal | Curtido | `Leather ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Hide scraped size ×1` | — |
| estación especial | Mesa de trabajo de cuero | `Hide scraped huge ×3` | — |
| estación especial | Mesa de trabajo de cuero | `Hide scraped huge ×2` | — |
| estación especial | Mesa de trabajo de cuero | `Hide scraped size ×2` | — |
| estación especial | Mesa de trabajo de cuero | `Hide scraped huge ×6` | — |
| estación especial | Mesa de trabajo de cuero | `Hide scraped huge ×4` | — |
| receta de compatibilidad | Butchering: flechas | `Arrow bone ×1` | — |
| receta de compatibilidad | Butchering: bolsas y equipo | `Butcherybag standard ×1` | — |
| receta de compatibilidad | Butchering: bolsas y equipo | `Butcherybag standard ×1` | — |
| receta de compatibilidad | Butchering: bolsas y equipo | `Butcherybag standard ×1` | — |
| receta de compatibilidad | Butchering: bolsas y equipo | `Butcherybag standard ×1` | — |
| receta de compatibilidad | Butchering: bolsas y equipo | `Butcherybag leather ×1` | — |
| receta de compatibilidad | Butchering: bolsas y equipo | `Butcherybag primitive ×1` | — |
| receta de compatibilidad | Butchering: bolsas y equipo | `Butcherybag sturdyleather ×1` | — |
| receta de compatibilidad | More Arrows: flechas | `Arrow barbed metal ×1` | — |
| receta de compatibilidad | More Arrows: flechas | `Arrow blunt metal ×1` | — |
| receta de compatibilidad | More Arrows: flechas | `Arrow bodkin metal ×1` | — |
| receta de compatibilidad | Primitive Survival: cecina | `Jerky bushmeat raw ×8` | — |
| receta de compatibilidad | Primitive Survival: cecina | `Jerky redmeat raw ×8` | — |
| receta de compatibilidad | Primitive Survival: cecina | `Jerky fish raw ×8` | — |