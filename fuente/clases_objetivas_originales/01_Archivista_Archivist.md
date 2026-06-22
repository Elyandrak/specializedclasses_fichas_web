# Archivista / Archivist (`archivist`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- contenido obtenido de vasijas: **+100%** (valor interno `1`)
- daño recibido de criaturas de óxido: **-25%** (valor interno `-0.25`)
- estabilidad temporal base: **+40%** (valor interno `0.4`)
- probabilidad global de ahorrar durabilidad: **+50%** (valor interno `0.5`)
- pérdida de durabilidad de armadura: **-50%** (valor interno `-0.5`)
- recolector de ruinas: puede recoger objetos decorativos de ruinas: **activado (+1)** (valor interno `1`)
- recuperación/conservación de herramientas arruinadas: **+100%** (valor interno `1`)

### Malus objetivos
- drop de frutales: **-75%** (valor interno `-0.75`)
- drop de semillas cultivadas: **-75%** (valor interno `-0.75`)
- drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)
- ganancia de estabilidad temporal: **-20%** (valor interno `-0.2`)

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Guardián | `custodian` | positivo | `rustCreatureDamageTaken` = -0.25 → daño recibido de criaturas de óxido: **-25%** (valor interno `-0.25`)<br>`armorDurabilityLoss` = -0.5 → pérdida de durabilidad de armadura: **-50%** (valor interno `-0.5`)<br>`globalDurabilitySaveChance` = 0.5 → probabilidad global de ahorrar durabilidad: **+50%** (valor interno `0.5`) |
| Archivista | `archivist` | positivo | Desbloquea recetas de objetos decorativos de ruinas, papel, pergamino, faroles de papel, ruedas, bloques envejecidos y tubo de pergaminos. |
| Conservador | `curator` | positivo | `canPickupClutter` = 1 → recolector de ruinas: puede recoger objetos decorativos de ruinas: **activado (+1)** (valor interno `1`) |
| Arqueólogo | `archeologist` | positivo | `ruinedToolDurabilitySaveChance` = 1 → recuperación/conservación de herramientas arruinadas: **+100%** (valor interno `1`)<br>`vesselContentsDropRate` = 1 → contenido obtenido de vasijas: **+100%** (valor interno `1`) |
| Imperturbable | `unphased` | positivo | `stabilityOffset` = 0.4 → estabilidad temporal base: **+40%** (valor interno `0.4`) |
| Escrubidor | `scourer` | negativo | `cropSeedDropRate` = -0.75 → drop de semillas cultivadas: **-75%** (valor interno `-0.75`)<br>`treeSeedDropRate` = -0.75 → drop de semillas/brotes de árbol: **-75%** (valor interno `-0.75`)<br>`fruitTreeDropRate` = -0.75 → drop de frutales: **-75%** (valor interno `-0.75`) |
| Estoico | `stoic` | negativo | `stabilityGainMul` = -0.2 → ganancia de estabilidad temporal: **-20%** (valor interno `-0.2`) |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **239**
- Recetas por estación con `requiredTrait`: **4**
- Recetas de compatibilidad opcional detectadas: **1**

### 4.1 Categorías de mesa normal
| Categoría legible | Cantidad |
|---|---|
| Madera y piedra envejecida | 9 |
| Banderas y decoración colgante | 47 |
| Barriles y recipientes antiguos | 2 |
| Camas y mobiliario de dormitorio antiguo | 20 |
| Libros, estanterías y decoración de biblioteca | 58 |
| Velas y candelabros | 5 |
| Cajas y embalajes | 6 |
| Telas y tapices decorativos | 9 |
| Muebles de ruinas | 12 |
| Faroles y lámparas colgantes | 5 |
| Objetos de mercader y puesto comercial | 4 |
| Tuberías y piezas industriales decorativas | 20 |
| Ruedas y mecanismos decorativos | 5 |
| Lámparas Jonas y tecnología antigua | 26 |
| Vigas metálicas | 1 |
| Papel, pergaminos y documentos | 10 |

### 4.2 Salidas exactas de mesa normal
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Madera y piedra envejecida | Tablones ébano envejecido vertical ×16 | — |
| mesa de crafteo normal | Madera y piedra envejecida | Tablones ébano podrido vertical ×16 | — |
| mesa de crafteo normal | Madera y piedra envejecida | Tronco colocado envejecido vertical ×16 | — |
| mesa de crafteo normal | Madera y piedra envejecida | Tronco sin corteza muy envejecido vertical ×16 | — |
| mesa de crafteo normal | Madera y piedra envejecida | Tronco sin corteza podrido vertical ×16 | — |
| mesa de crafteo normal | Madera y piedra envejecida | Tronco sin corteza muy podrido vertical ×16 | — |
| mesa de crafteo normal | Madera y piedra envejecida | Ladrillos de piedra envejecidos tipo de piedra ×16 | — |
| mesa de crafteo normal | Madera y piedra envejecida | Roca pulida antigua bloque completo tipo de roca ×16 | — |
| mesa de crafteo normal | Madera y piedra envejecida | Roca pulida antigua adoquinado tipo de roca ×16 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera segmento ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Banderas y decoración colgante | Bandera bandera ×1 | — |
| mesa de crafteo normal | Barriles y recipientes antiguos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Barriles y recipientes antiguos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Camas y mobiliario de dormitorio antiguo | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Libros, estanterías y decoración de biblioteca | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Velas y candelabros | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Velas y candelabros | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Velas y candelabros | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Velas y candelabros | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Velas y candelabros | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Cajas y embalajes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Cajas y embalajes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Cajas y embalajes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Cajas y embalajes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Cajas y embalajes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Cajas y embalajes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Telas y tapices decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Muebles de ruinas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Faroles y lámparas colgantes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Faroles y lámparas colgantes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Faroles y lámparas colgantes | Candelabro sin velas ×1 | — |
| mesa de crafteo normal | Faroles y lámparas colgantes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Faroles y lámparas colgantes | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Objetos de mercader y puesto comercial | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Objetos de mercader y puesto comercial | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Objetos de mercader y puesto comercial | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Objetos de mercader y puesto comercial | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×4 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Tuberías y piezas industriales decorativas | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Ruedas y mecanismos decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Ruedas y mecanismos decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Ruedas y mecanismos decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Ruedas y mecanismos decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Ruedas y mecanismos decorativos | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Objeto decorativo de ruinas ×1 | — |
| mesa de crafteo normal | Lámparas Jonas y tecnología antigua | Lámpara Jonas ×1 | — |
| mesa de crafteo normal | Vigas metálicas | Viga de soporte metal deslustrado metal ×16 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Papel pergamino ×4 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Tamiz lino ×1 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Farol de papel encendido ×1 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Papel pergamino ×1 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Papel pergamino ×1 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Papel plano rasgado ×8 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Papel levantado rasgado ×1 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Papel rollo rasgado ×1 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Papel roto rasgado ×1 | — |
| mesa de crafteo normal | Papel, pergaminos y documentos | Papel plano rasgado ×1 | — |

### 4.3 Recetas por estación
| Estación | Cantidad |
|---|---|
| Mesa de dibujo y planos | 4 |

| Modo | Estación | Resultado legible | Nota |
|---|---|---|---|
| estación especial | Mesa de dibujo y planos | Objeto decorativo de ruinas ×1 | — |
| estación especial | Mesa de dibujo y planos | Objeto decorativo de ruinas ×1 | — |
| estación especial | Mesa de dibujo y planos | Objeto decorativo de ruinas ×1 | — |
| estación especial | Mesa de dibujo y planos | Objeto decorativo de ruinas ×1 | — |

## 5. Recetas de compatibilidad opcional
| Mod/categoría | Cantidad |
|---|---|
| BetterRuins: planos y esquemas | 1 |

| Modo | Mod/categoría | Resultado legible | Nota |
|---|---|---|---|
| receta de compatibilidad | BetterRuins: planos y esquemas | Plano/esquema de BetterRuins ×1 | — |

## 6. Estadísticas de compatibilidad opcional
| Mod opcional | Rasgo | Código | Operación | Datos objetivos |
|---|---|---|---|---|
| betterruins | Compatibilidad: Better Ruins | `archivistbetterruins` | addmerge | Sin atributos numéricos; añade recetas/compatibilidad. |
| combatoverhaul | CO: Custodian | `co-custodian` | replace | `rustCreatureDamageTaken` = -0.25 → daño recibido de criaturas de óxido: **-25%** (valor interno `-0.25`)<br>`armorDurabilityLoss` = -0.5 → pérdida de durabilidad de armadura: **-50%** (valor interno `-0.5`)<br>`globalDurabilitySaveChance` = 0.5 → probabilidad global de ahorrar durabilidad: **+50%** (valor interno `0.5`)<br>`clubsProficiency` = 0.25 → competencia con garrotes: **+25%** (valor interno `0.25`)<br>`quarterstaffProficiency` = 0.25 → competencia con bastones: **+25%** (valor interno `0.25`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`) |
| combatoverhaulfork | CO: Custodian | `co-custodian` | replace | `rustCreatureDamageTaken` = -0.25 → daño recibido de criaturas de óxido: **-25%** (valor interno `-0.25`)<br>`armorDurabilityLoss` = -0.5 → pérdida de durabilidad de armadura: **-50%** (valor interno `-0.5`)<br>`globalDurabilitySaveChance` = 0.5 → probabilidad global de ahorrar durabilidad: **+50%** (valor interno `0.5`)<br>`clubsProficiency` = 0.25 → competencia con garrotes: **+25%** (valor interno `0.25`)<br>`quarterstaffProficiency` = 0.25 → competencia con bastones: **+25%** (valor interno `0.25`)<br>`firearmsProficiency` = 0.45 → competencia con armas de fuego: **+45%** (valor interno `0.45`) |

### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| temporaladaptation | 0.7 | 70% |
| Alfarería y piezas de barro | 0.2 | 20% |
| survival | 0.3 | 30% |

## 7. Análisis funcional breve
Análisis: clase objetiva de ruinas/decoración. No destaca en comida; destaca en convertir ruinas y objetos decorativos de ruinas en valor útil.
