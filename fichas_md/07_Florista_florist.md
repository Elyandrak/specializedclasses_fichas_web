# Florista / Florist (`florist`)

> Ficha corregida desde `objetivas_ES`. Los números salen de los datos declarados del mod; el análisis funcional es secundario.

## Resumen rápido

- Rasgos base: **6**
- Bonus numéricos: **9**
- Malus numéricos: **7**
- Recetas mesa normal: **142**
- Recetas estación: **20**
- Recetas compatibilidad: **17**
- Lectura funcional: soporte de medicina, abejas y decoración. Bajo combate y minería.

## Bonus objetivos

- ahorro de durabilidad de cuchillo: **+75%** (valor interno `0.75`)
- ahorro de durabilidad de guadaña: **+75%** (valor interno `0.75`)
- altura de salto: **+20%** (valor interno `0.2`)
- cosecha suave/eficiencia de colmenas y skeps: **+100%** (valor interno `1`)
- drop de hierba: **+50%** (valor interno `0.5`)
- probabilidad de cola de caballo desde hierba: **+20%** (valor interno `0.2`)
- regeneración pasiva por segundo: **0.1** (valor interno `0.1`)
- velocidad al caminar: **+10%** (valor interno `0.1`)
- velocidad con plantas: **+50%** (valor interno `0.5`)

## Malus objetivos

- daño a distancia: **-25%** (valor interno `-0.25`)
- daño contra humanoides: **-20%** (valor interno `-0.2`)
- daño cuerpo a cuerpo: **-25%** (valor interno `-0.25`)
- drop de mineral: **-10%** (valor interno `-0.1`)
- pérdida de estabilidad temporal: **+25%** (valor interno `0.25`)
- velocidad al picar mineral: **-10%** (valor interno `-0.1`)
- velocidad al picar piedra: **-10%** (valor interno `-0.1`)

## Rasgos oficiales / efectos reales

| Rasgo | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Senderista | `wanderer` | positivo | daño cuerpo a cuerpo: **-25%** (interno `-0.25`)<br>daño a distancia: **-25%** (interno `-0.25`)<br>velocidad al caminar: **+10%** (interno `0.1`)<br>altura de salto: **+20%** (interno `0.2`)<br>regeneración pasiva por segundo: **0.1** (interno `0.1`) |
| Florista | `florist` | positivo | sin atributos numéricos en traits.json; desbloqueo/rasgo de receta |
| Apicultor | `apiarist` | positivo | cosecha suave/eficiencia de colmenas y skeps: **+100%** (interno `1`) |
| Herbalista | `herbalist` | positivo | probabilidad de cola de caballo desde hierba: **+20%** (interno `0.2`)<br>drop de hierba: **+50%** (interno `0.5`)<br>velocidad con plantas: **+50%** (interno `0.5`)<br>ahorro de durabilidad de cuchillo: **+75%** (interno `0.75`)<br>ahorro de durabilidad de guadaña: **+75%** (interno `0.75`) |
| Delicado | `delicate` | negativo | drop de mineral: **-10%** (interno `-0.1`)<br>velocidad al picar mineral: **-10%** (interno `-0.1`)<br>velocidad al picar piedra: **-10%** (interno `-0.1`)<br>pérdida de estabilidad temporal: **+25%** (interno `0.25`) |
| Comprensivo | `sympathetic` | negativo | daño contra humanoides: **-20%** (interno `-0.2`) |

## Recetas / desbloqueos

- Mesa normal: **142**
- Estación: **20**
- Compatibilidad opcional: **17**

### Categorías humanizadas
- Pigmentos y tintes: **38**
- Vasijas y recipientes cerámicos: **34**
- Cuadros y pinturas: **25**
- Alfarería y piezas de barro: **21**
- Cuba de mezclas y alquimia: **17**
- Papeles pintados: **9**
- From Golden Combs: apicultura: **9**
- Mezcla de pigmentos: **6**
- Expanded Beekeeping: apicultura: **6**
- Flores: **4**
- Medicina: **4**
- Mesa de germinación: **3**
- Alchemy: medicina: **2**
- Apicultura: **1**

### Resultados legibles
| Modo | Categoría legible | Resultado legible | Nota |
|---|---|---|---|
| mesa de crafteo normal | Apicultura | `Beenade closed ×1` | — |
| mesa de crafteo normal | Flores | `Flower flowertype libre ×2` | — |
| mesa de crafteo normal | Flores | `Flower flowertype libre ×2` | — |
| mesa de crafteo normal | Flores | `Flower flowertype libre ×5` | — |
| mesa de crafteo normal | Flores | `Flower flowertype libre ×17` | — |
| mesa de crafteo normal | Medicina | `Poultice lino horsetail ×4` | — |
| mesa de crafteo normal | Medicina | `Poultice lino honey azufre ×4` | — |
| mesa de crafteo normal | Medicina | `Poultice reed horsetail ×4` | — |
| mesa de crafteo normal | Medicina | `Poultice reed honey azufre ×4` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting bogfort norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting castleruin norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting cow norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting hunterintheforest norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting seraph norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting sunkenruin norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting traveler norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting howl norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting elk norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting underwater norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting prey norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting forestdawn norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting fishandtherain norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting family1 norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting butterfly norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting glam norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting hunter norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting iris norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting sleepingwolf norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting sodhouse norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting thunderlord norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting trout norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting oldvillage norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting lastday norte ×1` | — |
| mesa de crafteo normal | Cuadros y pinturas | `Painting uncle1 norte ×1` | — |
| mesa de crafteo normal | Mezcla de pigmentos | `Pigment orange ×1` | — |
| mesa de crafteo normal | Mezcla de pigmentos | `Pigment green ×1` | — |
| mesa de crafteo normal | Mezcla de pigmentos | `Pigment morada ×1` | — |
| mesa de crafteo normal | Mezcla de pigmentos | `Pigment pink ×1` | — |
| mesa de crafteo normal | Mezcla de pigmentos | `Pigment gray ×1` | — |
| mesa de crafteo normal | Mezcla de pigmentos | `Pigment marrón ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment negra ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment gray ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment white ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment white ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment marrón ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment pink ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment pink ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment morada ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment morada ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment azul ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment green ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment green ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment roja ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment roja ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment orange ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment orange ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment yellow ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment green ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment azul ×8` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment roja ×8` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment green ×8` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment roja ×8` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment orange ×8` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment negra ×8` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment yellow ×8` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment azul ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment morada ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment orange ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment yellow ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment roja ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment pink ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment green ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment negra ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment yellow ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment gray ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment roja ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment orange ×1` | — |
| mesa de crafteo normal | Pigmentos y tintes | `Pigment white ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot amber ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot boneash ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot celadon ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot copper ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot earthern ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot moss ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot ochre ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot rutile ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot seasalt ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Flowerpot tenmoku ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter amber ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter ashforest ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter copper ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter cthonic ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter earthern ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter loam ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter ochre ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter rime ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter seasalt ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter tenmoku ×1` | — |
| mesa de crafteo normal | Alfarería y piezas de barro | `Clayplanter undergrowth ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel ashforest ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel chthonic ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel copper ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel earthen ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel rain ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel cowrie ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel rime ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel oxblood ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel loam ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel undergrowth ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel beehive ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel harvest ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel honeydew ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel rutile ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel seasalt ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel springflowers ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel volcanic ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel cloisonne ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel cornflower ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel talik ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel caveaurora ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel collonade ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel rattlesnake ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel waves ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel wintersea ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel abyss ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel Cadenas ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel entrenched ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel golden ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel motheaten ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel patina ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel pine ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel serpents ×1` | — |
| mesa de crafteo normal | Vasijas y recipientes cerámicos | `Storagevessel void ×1` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper blue4 ×4` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper green1 ×4` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper grey1 ×4` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper marrón ×4` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper walnut ×4` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper darkpurple ×4` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper yellow ×4` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper pink ×4` | — |
| mesa de crafteo normal | Papeles pintados | `Wallpaper lightgreen ×4` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment negra ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment gray ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment white ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment white ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment marrón ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment pink ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment pink ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment morada ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment morada ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment azul ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment green ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment roja ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment roja ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment orange ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment orange ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment yellow ×1` | — |
| estación especial | Cuba de mezclas y alquimia | `Pigment yellow ×1` | — |
| estación especial | Mesa de germinación | `Flower flower libre ×16` | — |
| estación especial | Mesa de germinación | `Leaves colocado Madera y carpintería ×32` | — |
| estación especial | Mesa de germinación | `Leavesbranchy colocado Madera y carpintería ×16` | — |
| receta de compatibilidad | Alchemy: medicina | `Potionbase basic ×1` | — |
| receta de compatibilidad | Alchemy: medicina | `Herbball potiontype ×4` | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | `Hiveframe empty ×2` | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | `Hiveframe empty ×2` | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | `Broodbox ×1` | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | `Broodbox ×1` | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | `Apiary ×1` | — |
| receta de compatibilidad | Expanded Beekeeping: apicultura | `Hivesmoker copper empty ×1` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Langstrothside Madera y carpintería ×8` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Langstrothside envejecido ×8` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Beeframe envejecido empty ×2` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Frameliner ×4` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Waxedflaxtwine ×8` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Framerack envejecido envejecido este ×1` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Langstrothbase envejecido envejecido este ×1` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Langstrothsuper closed envejecido envejecido este ×1` | — |
| receta de compatibilidad | From Golden Combs: apicultura | `Langstrothbroodtop envejecido envejecido ×1` | — |