# Viticultor / Vintner (`vintner`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **7**
- Bonus numéricos: **11**
- Malus numéricos: **6**
- Recetas mesa normal: **36**
- Recetas estación: **2**
- Recetas compatibilidad: **15**
- Lectura funcional: setas, fruta, vidrio y bebidas. Crea infraestructura y consumibles de valor.

## Bonus objetivos

- ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de tijeras: **+75%** (valor interno `0.75`)
- cosecha suave de horno bajo/bloomery: **activado (+1)** (valor interno `1`)
- curación recibida: **+25%** (valor interno `0.25`)
- daño recibido por veneno: **-90%** (valor interno `-0.9`)
- drop de forraje/recolección silvestre: **+100%** (valor interno `1`)
- drop de frutales: **+100%** (valor interno `1`)
- drop de semillas/brotes de árbol: **+100%** (valor interno `1`)
- saciedad de bebidas: **+100%** (valor interno `1`)
- velocidad con hojas: **+100%** (valor interno `1`)
- velocidad con plantas: **+100%** (valor interno `1`)

## Malus objetivos

- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- saciedad de comida simple: **-10%** (valor interno `-0.1`)
- saciedad de comidas preparadas: **-10%** (valor interno `-0.1`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Mitridatista | `mithridatist` | positivo | daño recibido por veneno: **-90%** (interno `-0.9`)<br>saciedad de bebidas: **+100%** (interno `1`)<br>curación recibida: **+25%** (interno `0.25`) |
| Viticultor | `vintner` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Recolector | `gatherer` | positivo | drop de forraje/recolección silvestre: **+100%** (interno `1`)<br>drop de frutales: **+100%** (interno `1`)<br>drop de semillas/brotes de árbol: **+100%** (interno `1`) |
| Fundidor | `bloomer` | positivo | cosecha suave de horno bajo/bloomery: **activado (+1)** (interno `1`) |
| Selector | `picker` | positivo | velocidad con hojas: **+100%** (interno `1`)<br>velocidad con plantas: **+100%** (interno `1`)<br>ahorro de durabilidad de tijeras: **+75%** (interno `0.75`)<br>ahorro de durabilidad de cuchillo: **+75%** (interno `0.75`) |
| Delicado | `delicate` | negativo | drop de mineral: **-10%** (interno `-0.1`)<br>velocidad al picar mineral: **-10%** (interno `-0.1`)<br>velocidad al picar piedra: **-10%** (interno `-0.1`)<br>pérdida de estabilidad temporal: **+25%** (interno `0.25`) |
| Dependiente | `dependent` | negativo | saciedad de comidas preparadas: **-10%** (interno `-0.1`)<br>saciedad de comida simple: **-10%** (interno `-0.1`) |

## Recetas / desbloqueos

- Mesa normal: **36**
- Estación: **2**
- Compatibilidad opcional: **15**

### Categorías humanizadas
- Esquejes y recortes de plantas: **12**
- Tintado de vidrio: **10**
- Líquidos y recipientes: **5**
- Tejados y piezas de cubierta: **5**
- Alchemy: vidrio de alquimia: **4**
- Food Shelves: almacenamiento de líquidos: **4**
- A Culinary Artillery: embotellado: **3**
- Trabajo de vidrio: **2**
- Mesa de germinación: **2**
- NDL Mushroom Growth: cultivo: **2**
- Substrate: cultivo: **2**
- Arbustos: **1**
- Bolsa de fructificación: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Arbustos | `Fruitingbushcutting berrytype libre ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Esquejes y recortes de plantas | `Fruittree cutting ×1` | — |
| mesa de crafteo normal | Bolsa de fructificación | `Fruitingbag empty ×1` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass azul ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass violet ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass roja ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass yellow ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass marrón ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass pink ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass green ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass vintage ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass cuarzo ×8` | — |
| mesa de crafteo normal | Tintado de vidrio | `Glass smoky ×8` | — |
| mesa de crafteo normal | Trabajo de vidrio | `Cuarzo transparente ×1` | — |
| mesa de crafteo normal | Trabajo de vidrio | `Glasspane leaded Madera y carpintería este-oeste ×4` | — |
| mesa de crafteo normal | Líquidos y recipientes | `Barrel ×1` | — |
| mesa de crafteo normal | Líquidos y recipientes | `Woodbucket ×1` | — |
| mesa de crafteo normal | Líquidos y recipientes | `Fruitpress norte-sur ×1` | — |
| mesa de crafteo normal | Líquidos y recipientes | `Verticalboiler oeste ×1` | — |
| mesa de crafteo normal | Líquidos y recipientes | `Condenser oeste ×1` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Tejado inclinado sod este libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Cumbrera de tejado sod norte-sur libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Punta de tejado sod libre ×2` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Esquina interior de tejado sod este libre ×16` | — |
| mesa de crafteo normal | Tejados y piezas de cubierta | `Esquina exterior de tejado sod este libre ×16` | — |
| estación especial | Mesa de germinación | `Fruittree cutting ×1` | — |
| estación especial | Mesa de germinación | `Fruitingbushcutting berrytype libre ×1` | — |
| receta de compatibilidad | A Culinary Artillery: embotellado | `Bottlerack envejecido envejecido norte ×2` | — |
| receta de compatibilidad | A Culinary Artillery: embotellado | `Bottle glass color fired ×8` | — |
| receta de compatibilidad | A Culinary Artillery: embotellado | `Cork genérica ×16` | — |
| receta de compatibilidad | Alchemy: vidrio de alquimia | `Herbrack Madera y carpintería metal ×2` | — |
| receta de compatibilidad | Alchemy: vidrio de alquimia | `Potionflask normal liso ×2` | — |
| receta de compatibilidad | Alchemy: vidrio de alquimia | `Potionflask round liso ×2` | — |
| receta de compatibilidad | Alchemy: vidrio de alquimia | `Potionflask tube liso ×2` | — |
| receta de compatibilidad | Food Shelves: almacenamiento de líquidos | `Tunrack normal norte ×1` | — |
| receta de compatibilidad | Food Shelves: almacenamiento de líquidos | `Tun normal ×1` | — |
| receta de compatibilidad | Food Shelves: almacenamiento de líquidos | `Barrelrack normal este ×1` | — |
| receta de compatibilidad | Food Shelves: almacenamiento de líquidos | `Buckethook normal este ×1` | — |
| receta de compatibilidad | NDL Mushroom Growth: cultivo | `Basetrough ×1` | — |
| receta de compatibilidad | NDL Mushroom Growth: cultivo | `Mushroomspores mushroom ×1` | — |
| receta de compatibilidad | Substrate: cultivo | `Growbed ×1` | — |
| receta de compatibilidad | Substrate: cultivo | `Fruitingbag ×1` | — |