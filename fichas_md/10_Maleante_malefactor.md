# Maleante / Malefactor (`malefactor`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **9**
- Bonus numéricos: **12**
- Malus numéricos: **5**
- Recetas mesa normal: **12**
- Recetas estación: **0**
- Recetas compatibilidad: **0**
- Lectura funcional: exploración, comercio y saqueo. Depende de ruinas/traders para expresar su ventaja.

## Bonus objetivos

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

## Malus objetivos

- daño recibido global: **+10%** (valor interno `0.1`)
- drop de frutales: **-75%** (valor interno `-0.75`)
- drop de semillas cultivadas: **-75%** (valor interno `-0.75`)
- drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)
- saciedad de comidas preparadas: **-10%** (valor interno `-0.1`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Pícaro | `rogue` | positivo | rango de detección/agresión de animales: **-75%** (interno `-0.75`)<br>daño recibido global: **+10%** (interno `0.1`)<br>daño causado global: **+10%** (interno `0.1`) |
| Maleante | `malefactor` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Improvisador | `improviser` | desbloqueo/vanilla | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Contrabandista | `smuggler` | positivo | puede abrir ventana extra de comercio: **activado (+1)** (interno `1`) |
| Acechador | `sneak` | positivo | daño contra humanoides: **+50%** (interno `0.5`)<br>velocidad agachado: **+50%** (interno `0.5`) |
| Ladrón | `thief` | positivo | alcance para recoger objetos: **+100%** (interno `1`)<br>drop de engranajes oxidados: **+100%** (interno `1`) |
| Desguazador | `scrapper` | positivo | drop de nidos de langosta: **+100%** (interno `1`)<br>daño con honda: **+50%** (interno `0.5`)<br>daño con herramientas de chatarra: **+50%** (interno `0.5`)<br>ahorro de durabilidad de herramientas de chatarra: **+100%** (interno `1`)<br>ahorro de durabilidad de honda: **+100%** (interno `1`) |
| Recolector pobre | `scourer` | negativo | drop de semillas cultivadas: **-75%** (interno `-0.75`)<br>drop de semillas/brotes de árbol: **-75%** (interno `-0.75`)<br>drop de frutales: **-75%** (interno `-0.75`) |
| Insípido | `flavorless` | negativo | saciedad de comidas preparadas: **-10%** (interno `-0.1`) |

## Recetas / desbloqueos

- Mesa normal: **12**
- Estación: **0**
- Compatibilidad opcional: **0**

### Categorías humanizadas
- Recuperación de chatarra y piezas: **11**
- Comercio: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Scrapweaponkit ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Torchholder ruined empty norte ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Torchholder envejecido empty norte ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Torchholder envejecido empty norte ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Torchholder envejecido empty norte ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Metal scraps ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Axe scrap scrap ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Club scrap scrap ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Club scrapmace scrap ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Hoja scrap scrap ×1` | — |
| mesa de crafteo normal | Recuperación de chatarra y piezas | `Lanza scrap scrap ×1` | — |
| mesa de crafteo normal | Comercio | `Gear rusty ×8` | — |