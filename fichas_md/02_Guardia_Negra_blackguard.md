# Guardia Negra / Blackguard (`blackguard`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **7**
- Bonus numéricos: **7**
- Malus numéricos: **5**
- Recetas mesa normal: **43**
- Recetas estación: **8**
- Recetas compatibilidad: **0**
- Lectura funcional: combatiente-forjador. Sus números favorecen combate y metal, pero penalizan recolección y autosuficiencia.

## Bonus objetivos

- afectación de armadura a velocidad: **-20%** (valor interno `-0.2`)
- ahorro de durabilidad de martillo: **+75%** (valor interno `0.75`)
- daño causado global: **+20%** (valor interno `0.2`)
- daño recibido por fuego: **-80%** (valor interno `-0.8`)
- puede manipular objetos calientes: **activado (+1)** (valor interno `1`)
- velocidad al trabajar metal: **+100%** (valor interno `1`)
- vida máxima: **+20%** (valor interno `0.2`)

## Malus objetivos

- daño contra humanoides: **-10%** (valor interno `-0.1`)
- drop de cultivos silvestres: **-25%** (valor interno `-0.25`)
- drop de forraje/recolección silvestre: **-25%** (valor interno `-0.25`)
- drop/rendimiento de animales: **-10%** (valor interno `-0.1`)
- velocidad al caminar: **-5%** (valor interno `-0.05`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Guerrero | `warlord` | positivo | daño causado global: **+20%** (interno `0.2`)<br>afectación de armadura a velocidad: **-20%** (interno `-0.2`)<br>vida máxima: **+20%** (interno `0.2`)<br>velocidad al caminar: **-5%** (interno `-0.05`) |
| Guardia Negra | `blackguard` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Despiadado | `merciless` | desbloqueo/vanilla | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Herrero | `blacksmith` | positivo | ahorro de durabilidad de martillo: **+75%** (interno `0.75`)<br>velocidad al trabajar metal: **+100%** (interno `1`) |
| Termorresistente | `heatproof` | positivo | puede manipular objetos calientes: **activado (+1)** (interno `1`)<br>daño recibido por fuego: **-80%** (interno `-0.8`) |
| Protegido | `sheltered` | negativo | drop de forraje/recolección silvestre: **-25%** (interno `-0.25`)<br>drop de cultivos silvestres: **-25%** (interno `-0.25`)<br>drop/rendimiento de animales: **-10%** (interno `-0.1`) |
| Juramentado | `oathsworn` | negativo | daño contra humanoides: **-10%** (interno `-0.1`) |

## Recetas / desbloqueos

- Mesa normal: **43**
- Estación: **8**
- Compatibilidad opcional: **0**

### Categorías humanizadas
- Moldes y estampas de forja: **16**
- Armaduras y piezas defensivas: **10**
- Bloques metálicos: **10**
- Cadenas: **7**
- Tejados y piezas de cubierta: **7**
- Trabajo de metal: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Armaduras y piezas defensivas | `Kit de reparación de armadura ×3` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Armadura casco antigua guardia negra rota ×1` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Armadura pechera antigua guardia negra rota ×1` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Armadura grebas antigua guardia negra rota ×1` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Armadura casco antigua forlorn rota ×1` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Armadura pechera antigua forlorn rota ×1` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Armadura grebas antigua forlorn rota ×1` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Hoja forlorn iron ×1` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Lanza genérica ornamentada de oro ×1` | — |
| mesa de crafteo normal | Armaduras y piezas defensivas | `Lanza genérica ornamentada de plata ×1` | — |
| mesa de crafteo normal | Cadenas | `Cadena de soporte doble ×64` | — |
| mesa de crafteo normal | Cadenas | `Cadena de soporte cuádruple ×64` | — |
| mesa de crafteo normal | Cadenas | `Cadena de soporte doble nueva ×64` | — |
| mesa de crafteo normal | Cadenas | `Cadena de soporte cuádruple nueva ×64` | — |
| mesa de crafteo normal | Cadenas | `Valla de hierro base este-oeste ×32` | — |
| mesa de crafteo normal | Cadenas | `Valla de hierro parte superior este-oeste ×1` | — |
| mesa de crafteo normal | Cadenas | `Valla de hierro base este-oeste ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Bloque metálico nuevo remachado metal ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Bloque metálico corroído remachado metal ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Bloque metálico nuevo liso metal ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Bloque metálico nuevo remachado metal ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Bloque metálico corroído liso metal ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Bloque metálico corroído lámina metal ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Viga de soporte metal deslustrado metal ×16` | — |
| mesa de crafteo normal | Bloques metálicos | `Lámina de metal metal abajo ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Bloque metálico corroído liso metal ×1` | — |
| mesa de crafteo normal | Bloques metálicos | `Bloque metálico corroído liso rusty iron ×1` | — |
| mesa de crafteo normal | Trabajo de metal | `Toolrepairkit ×1` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Tejado inclinado copper este libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Cumbrera de tejado copper norte-sur libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Punta de tejado copper libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Esquina interior de tejado copper este libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Esquina exterior de tejado copper este libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Beam ridge copper libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Beam plane copper libre ×16` | — |
| mesa de crafteo normal | Moldes y estampas de forja | `Ingot metal ×1` | — |
| mesa de crafteo normal | Moldes y estampas de forja | `Metalplate metal ×1` | — |
| mesa de crafteo normal | Moldes y estampas de forja | `Metalchain metal ×1` | — |
| mesa de crafteo normal | Moldes y estampas de forja | `Metallamellae metal ×2` | — |
| mesa de crafteo normal | Moldes y estampas de forja | `Metalscale metal ×2` | — |
| mesa de crafteo normal | Moldes y estampas de forja | `Rod metal ×1` | — |
| mesa de crafteo normal | Moldes y estampas de forja | `Metalnailsandstrips metal ×4` | — |
| mesa de crafteo normal | Moldes y estampas de forja | `Arrowhead metal ×9` | — |
| estación especial | Moldes y estampas de forja | `Ingot metal ×1` | — |
| estación especial | Moldes y estampas de forja | `Rod metal ×1` | — |
| estación especial | Moldes y estampas de forja | `Metalnailsandstrips metal ×4` | — |
| estación especial | Moldes y estampas de forja | `Arrowhead metal ×9` | — |
| estación especial | Moldes y estampas de forja | `Metalscale metal ×1` | — |
| estación especial | Moldes y estampas de forja | `Metalplate metal ×1` | — |
| estación especial | Moldes y estampas de forja | `Metalchain metal ×1` | — |
| estación especial | Moldes y estampas de forja | `Metallamellae metal ×1` | — |