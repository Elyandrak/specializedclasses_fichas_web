# Análisis entendible de Specialized Classes 3.0.0-rc.1

**Objetivo de esta revisión:** limpiar el análisis anterior para que sea usable por jugadores y administradores de servidor. Se han eliminado claves internas difíciles de leer como nombres de habilidades, se han traducido los efectos a español comprensible y se han mantenido los nombres de las clases en **español / inglés**.

**Fuentes usadas:**

- ZIP del mod `specializedclasses_3.0.0-rc.1`.
- Análisis validado anterior `analisis_specializedclasses_3.0.0-rc.1_REV_validado.md`.
- Traducción `assets/specializedclasses/lang/es-es.json` incluida en `C4B_Traducciones-ES_mods_204.4.0.zip`.

> Nota importante: la traducción española aportada ayuda con nombres oficiales, pero algunas descripciones internas del mod siguen en inglés o parecen desfasadas respecto a las recetas reales. Por eso esta versión no copia frases ciegamente: usa la traducción para nombres y el ZIP del mod para validar efectos/recetas.

---

## 1. Veredicto limpio

Specialized Classes no añade solo clases cosméticas. Convierte el juego en un sistema de especialización fuerte: cada clase desbloquea recetas, mejora ciertas acciones y empeora otras. Para servidor, esto crea cooperación real: comida, madera, piedra, metal, ruinas, transporte, medicina, vidrio, textil y minería quedan repartidos entre jugadores.

La lectura correcta no es “qué clase tiene más bonus”, sino **qué economía desbloquea cada clase**.

---

## 2. Traducciones oficiales de clases usadas

Estas son las traducciones de clase tomadas del archivo español del mod:

| Español / Inglés | Rol principal |
|---|---|
| Archivista / Archivist | Ruinas, recuperación de objetos decorativos, papel, bloques envejecidos y estabilidad temporal. |
| Guardia Negra / Blackguard | Combate, metalurgia, reparación de equipo, piezas metálicas y armaduras raras. |
| Alfarero / Brickmaker | Arcilla, cerámica, barro, yeso, mortero, cal y construcción de obra civil. |
| Carnicero / Butcher | Carne, conservación, curado, alimentación animal, hielo, sal y cocina pesada. |
| Relojero / Clockmaker | Mecánica, tecnología Jonas, transporte de objetos, piezas metálicas y estabilidad temporal. |
| Agricultor / Farmhand | Agricultura, semillas, fertilidad, cuerdas, pesca y balsa de bambú. |
| Florista / Florist | Flores, medicina, apicultura, pigmentos, pintura, papel pintado y decoración cerámica. |
| Guardabosques / Forester | Madera, carbón, combustible, resina, brotes de árbol y carpintería. |
| Cazador / Hunter | Arcos, flechas, cuero, pieles, despiece y caza. |
| Maleante / Malefactor | Sigilo, comercio clandestino, chatarra, engranajes oxidados y saqueo de ruinas/nidos. |
| Mensajero / Messenger | Velocidad, caminos, bolsas, faroles, cartografía y transporte. |
| Cantero / Quarrier | Piedra, cantería, construcción pesada, grava/arena desde roca y banco de piedra. |
| Espeleólogo / Spelunker | Minería especializada, prospección, bateo, explosivos y procesamiento de minerales. |
| Sastre / Tailor | Ropa, kits de confección, gambesón, lino, papiro, alfombras y tejados de paja. |
| Viticultor / Vintner | Setas, fruta, esquejes, bebidas, vidrio, líquidos y fermentación. |
| Plebeyo / Commoner | No es una clase nueva del mod, pero el mod lo modifica. |

Cambios frente a fichas anteriores: **Brickmaker = Alfarero**, **Forester = Guardabosques**, **Farmhand = Agricultor**, **Vintner = Viticultor**, **Malefactor = Maleante**, **Commoner = Plebeyo**.

---

## 3. Qué modifica globalmente el mod

| Área | Qué cambia | Impacto real |
|---|---|---|
| Clases vanilla | Desactiva muchas clases vanilla y reorganiza el selector alrededor de estas clases. | El servidor pasa a depender de especialistas. |
| Plebeyo / Commoner | Recibe el rasgo Ahorrativo. | Consume mucha menos comida; no es una clase inútil. |
| Recetas por clase | Muchas recetas tienen requisito de clase. | Sin el especialista no puedes fabricar ciertos objetos, aunque luego puedas comerciarlos o usarlos. |
| Recetas genéricas | Hay recetas sin bloqueo por clase: estaciones, herramientas base, barriles y parte de las bolsas de setas. | No todo está bloqueado. Esto permite mercados secundarios. |
| Estaciones nuevas | Añade bancos y mesas de trabajo con recetas propias. | El crafteo se vuelve más industrial y especializado. |
| Botín y acciones | El mod altera drops, velocidades, daño, saciedad, estabilidad y durabilidad. | Los rasgos afectan el juego real, no solo el texto de selección. |
| Comercio | Maleante puede abrir inventario adicional en comerciantes compatibles. | Añade economía clandestina/comercial. |
| Ruinas | Archivista puede recuperar decoración y mejorar botín de ruinas/vasijas. | Las ruinas ganan valor económico y estético. |
| Bateo | Espeleólogo puede crear hallazgos de bateo especializados. | Permite orientar recompensas hacia carbón, cristales o metales. |

---

## 4. Separación crítica: exclusivo por clase vs genérico

Este punto era donde el análisis anterior era más confuso.

| Tipo de receta | Cantidad validada | Cómo interpretarlo |
|---|---:|---|
| Recetas exclusivas de mesa normal por clase | 901 | Crafteos bloqueados por especialización. |
| Recetas por estación con clase | 179 | Crafteos especiales dentro de estaciones nuevas. |
| Recetas genéricas de mesa normal | 92 | No requieren clase; incluyen herramientas base y bolsas de setas. |
| Recetas para construir estaciones | 10 | Las estaciones parecen crafteables por cualquiera. |
| Recetas de barril no exclusivas | 34 | Limpieza/conversión de materiales; no son de clase. |
| Recetas de compatibilidad con otros mods | 103 | Añaden integración si esos mods están presentes. |

**Consecuencia para servidor:** un especialista puede fabricar la infraestructura y venderla. El objeto resultante puede beneficiar a otros aunque ellos no tengan esa clase, salvo que el uso también esté bloqueado por rasgo.

---

## 5. Objetos y bloques nuevos importantes

| Nombre en español | Qué hace | Clase que más lo aprovecha |
|---|---|---|
| Mortero y Maja | Herramienta base para moler/procesar recetas. | Genérico; lo explotan Agricultor, Carnicero, Florista, Espeleólogo y Alfarero. |
| Husillo | Herramienta para fibras/cuerda. | Genérico; lo explotan Sastre y Agricultor. |
| Kit de reparación de herramientas | Restaura gran parte de la durabilidad de herramientas/armas. | Guardia Negra. |
| Kit de reparación de armadura | Restaura gran parte de la durabilidad de armaduras/escudos. | Guardia Negra. |
| Paquete de hielo | Recupera parte del tiempo de conservación de perecederos. | Carnicero. |
| Sellador | Conservación barata para comida/recipientes. | Carnicero. |
| Pienso Universal para Herbívoros | Alimentación estable para herbívoros. | Carnicero. |
| Pienso Universal para Carnívoros | Alimentación estable para carnívoros. | Carnicero. |
| Bandolera | Bolsa compacta de mensajero. | Mensajero. |
| Estuche para Rollos | Almacenamiento especializado de pergaminos/objetos pequeños. | Mensajero. |
| Caja de Transporte | Caja portátil para mover muchos stacks de un mismo tipo. | Mensajero. |
| Soporte de Vasija | Marco de transporte/conservación para vasijas/comida. | Mensajero. |
| Balsa de bambú de pescador | Balsa rápida de bambú con 2 asientos y remo. | Agricultor. |
| Briqueta | Combustible propio. | Guardabosques. |
| Leña tratada | Combustible de larga duración y baja temperatura. | Guardabosques. |
| Cuenco/Olla/Vasija de Porcelana | Recipientes de porcelana y almacenamiento. | Alfarero. |
| Caldero Cerámico | Cocina masiva; puede quedar sucio y limpiarse. | Carnicero. |
| Camino Asfaltado | Carretera avanzada/cincelable. | Mensajero. |
| Linterna para Espeleología | Linterna reforzada para cueva. | Espeleólogo. |
| Hallazgo Carbonífero/Cristalino/Metálico | Materiales de bateo orientados a ciertos drops. | Espeleólogo. |
| Bolsa de Fructificación | Infraestructura para cultivo de setas. | Viticultor crea la bolsa vacía; el llenado/cosecha es genérico. |
| Pigmentos | Colores propios para pintura/decoración. | Florista. |
| Conjunto de Ropa | Kit de confección por ranura. | Sastre. |

---

## 6. Análisis clase por clase


### Archivista / Archivist

**Rol real:** Ruinas, recuperación de objetos decorativos, papel, bloques envejecidos y estabilidad temporal.

**Lectura útil:** Es una clase de arqueología y decoración. Su valor no está en producir comida ni materiales básicos, sino en convertir ruinas, lore y objetos decorativos en recursos reutilizables y estética de servidor.

**Qué puede hacer:**
- Recoger o restaurar objetos decorativos de ruinas que normalmente no se podrían aprovechar.
- Reciclar objetos de lore/papel y trabajar con pergamino y faroles de papel.
- Crear bloques de madera y piedra envejecida para decoración avanzada.
- Mejorar el botín de vasijas y herramientas arruinadas.
- Aguantar mejor zonas temporalmente inestables gracias a una estabilidad base superior.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Guardián | positivo | Recibe menos daño de criaturas de óxido y gasta menos armadura al combatirlas. |
| Archivista | desbloqueo | Desbloquea recetas de objetos decorativos, papel, ruedas, bloques envejecidos y decoración de ruinas. |
| Conservador | positivo | Puede recoger/reparar objetos decorativos de ruinas con el cincel; en términos prácticos, es un recolector de ruinas. |
| Arqueólogo | positivo | Mejora la recuperación de herramientas arruinadas y aumenta el contenido obtenido de vasijas. |
| Imperturbable | positivo | Aumenta la estabilidad temporal base. |
| Escrubidor | negativo | Reduce muchísimo la obtención de semillas cultivadas, brotes de árbol y frutales. |
| Estoico | negativo | Gana menos estabilidad temporal al recuperarse. |

**Crafteos y estaciones:** 239 recetas exclusivas de mesa normal: objetos decorativos de ruinas, banners, barriles, camas, libros, velas, cajas, telas, muebles, faroles, objetos de mercader, pipas, ruedas, lámparas Jonas, vigas metálicas, papel y bloques envejecidos. Además, 4 recetas en Mesa de Diseño.

**Estaciones implicadas:** Mesa de Diseño.

**Alerta de balance:** No es buena primera clase si el servidor necesita comida. Es fuerte cuando hay ruinas, decoración, comercio y construcción estética.

### Guardia Negra / Blackguard

**Rol real:** Combate, metalurgia, reparación de equipo, piezas metálicas y armaduras raras.

**Lectura útil:** Es el combatiente/forjador pesado. Aporta defensa, daño y reparación de equipo, pero depende de otros para comida, recolección y logística.

**Qué puede hacer:**
- Fabricar kits de reparación de herramientas, armas, armaduras y escudos.
- Crear o recuperar armaduras y armas raras asociadas a Guardia Negra/Forlorn.
- Trabajar mejor el metal y transformar bits metálicos en componentes mediante el Bloque de Estampación de Latón.
- Manipular objetos calientes sin tenazas.
- Construir bloques, cadenas, vigas y tejados metálicos/cobre con recetas propias.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Guerrero | positivo | Aumenta daño global y vida máxima; reduce parte de la penalización por armadura, pero camina algo más lento. |
| Guardia Negra | desbloqueo | Desbloquea kits de reparación, armaduras/armas raras, bloques metálicos y componentes de metal. |
| Despiadado | desbloqueo | Da acceso a espada y escudo exclusivos de Guardia Negra. |
| Herrero | positivo | Gran ahorro de martillo y mucha más velocidad al trabajar metal. |
| Termorresistente | positivo | Puede manipular objetos calientes y recibe mucho menos daño por fuego. |
| Protegido | negativo | Obtiene menos recursos de forraje, cultivos salvajes y animales. |
| Juramento | negativo | Hace menos daño contra humanoides. |

**Crafteos y estaciones:** 43 recetas exclusivas de mesa normal: reparación, armaduras, armas raras, cadenas, bloques metálicos, tejados de cobre y componentes de metal. Además, 8 recetas en Bloque de Estampación de Latón.

**Estaciones implicadas:** Bloque de Estampación de Latón.

**Alerta de balance:** Muy fuerte si el servidor tiene combate y metal avanzado. Pierde valor si no hay minería, exploración peligrosa o economía de equipo.

### Alfarero / Brickmaker

**Rol real:** Arcilla, cerámica, barro, yeso, mortero, cal y construcción de obra civil.

**Lectura útil:** Es el especialista de materiales de construcción baratos y masivos. En el análisis anterior lo importante era corregir que los recipientes de porcelana son suyos, no del Florista.

**Qué puede hacer:**
- Fabricar ladrillos, tejas, Adobe y enlucidos, barro compactado, mortero, cal y yeso con mejor rendimiento.
- Trabajar arcilla y cerámica mucho mejor que otros jugadores.
- Crear cuenco, olla/crock y vasija de porcelana.
- Hacer materiales de construcción en masa para bases grandes.
- Usar el Depósito de Mezclado para mortero, yeso y cal.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Luchador | positivo | Aumenta muchísimo la vida y reduce daño recibido, aunque aumenta la penalización de armadura. |
| Alfarero | desbloqueo | Desbloquea recetas de arcilla, cerámica, barro y bloques de tierra/obra. |
| Divisor | positivo | Aumenta la obtención de arcilla y la velocidad al romper cerámica/arcilla. |
| Escavador | positivo | Gran ahorro de pala y mucha velocidad con tierra, grava, arena y nieve. |
| Operario de Horno | positivo | Mejora la obtención de hierba, turba y palos. |
| Escrubidor | negativo | Reduce muchísimo semillas cultivadas, brotes de árbol y frutales. |
| Inflamable | negativo | Recibe mucho más daño por fuego. |

**Crafteos y estaciones:** 65 recetas exclusivas de mesa normal: cerámica por lotes, ladrillos de arcilla, Adobe y enlucidos, cocina/porcelana, ladrillos de barro, tierra compactada, pastas, yeso y tejados de arcilla. Además, 3 recetas en Depósito de Mezclado.

**Estaciones implicadas:** Depósito de Mezclado.

**Alerta de balance:** Clase infravalorada. En servidor, desbloquea construcción barata a gran escala y recipientes de porcelana. Hay que protegerlo del fuego.

### Carnicero / Butcher

**Rol real:** Carne, conservación, curado, alimentación animal, hielo, sal y cocina pesada.

**Lectura útil:** Es una de las clases más comunitarias. Convierte animales, hielo y sal en comida útil y conservación estable.

**Qué puede hacer:**
- Curar carnes manualmente y producir carne añejada.
- Fabricar sellador para conservar comidas/ollas/crocks de forma barata.
- Crear paquetes de hielo que restauran parte del tiempo de conservación de perecederos.
- Fabricar pienso universal para herbívoros y carnívoros.
- Crear caldero cerámico y herramientas tempranas de cocina/ganadería.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Saqueador | positivo | Mejora mucho la regeneración curativa. |
| Carnicero | desbloqueo | Desbloquea sellador, paquete de hielo, recetas de rancho, conservación y comida. |
| Conservador | positivo | Pica hielo más rápido, obtiene hielo de lago y puede obtener sal gema. |
| Ganadero | positivo | Obtiene más carne y más rendimiento de animales; los animales lo detectan menos. |
| Cocinero | positivo | Las comidas preparadas sacian mucho más y aumenta la saciedad máxima. |
| Escrubidor | negativo | Reduce muchísimo semillas cultivadas, brotes de árbol y frutales. |
| Goloso | negativo | Hace menos daño a animales y la comida simple sacia menos. |

**Crafteos y estaciones:** 23 recetas exclusivas de mesa normal: curado, pienso, molienda, caldero cerámico, paquete de hielo, molino de mano, rancho/comederos/trampas y sellador. Además, 1 receta en Depósito de Mezclado.

**Estaciones implicadas:** Depósito de Mezclado.

**Alerta de balance:** Brutal si hay caza, ganadería, hielo o cocina organizada. No sustituye al agricultor: con cultivos es malo.

### Relojero / Clockmaker

**Rol real:** Mecánica, tecnología Jonas, transporte de objetos, piezas metálicas y estabilidad temporal.

**Lectura útil:** Clase de progreso avanzado. Al principio puede parecer floja, pero en late game controla mecanismos, piezas Jonas y parte de la infraestructura técnica.

**Qué puede hacer:**
- Fabricar piezas Jonas y componentes mecánicos avanzados.
- Duplicar rendimiento de componentes de potencia mecánica y transporte de objetos.
- Crear piezas metálicas y Jonas desde cuproníquel en la Mesa de Trabajo de Mecánico.
- Convertir teletransportador base frito y engranaje oxidado en engranaje temporal, según receta del mod.
- Ganar más estabilidad temporal y conseguir más engranajes temporales.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Lancero | positivo | Aumenta salto, daño a distancia y velocidad al caminar, pero recibe algo más de daño. |
| Relojero | desbloqueo | Desbloquea potencia mecánica, transporte de objetos y tecnología Jonas. |
| Manitas | desbloqueo | Da acceso a la lanza de afinación. |
| Técnico | marcador | Rasgo técnico usado por juego/mod; no aparece como efecto directo propio en el archivo principal de rasgos. |
| Ingeniero | positivo | Hace más daño a mecánicos, recibe menos daño de ellos, y mejora obtención de grasa/resina. |
| Armónico | positivo | Obtiene más engranajes temporales y gana más estabilidad temporal. |
| Escrubidor | negativo | Reduce muchísimo semillas cultivadas, brotes de árbol y frutales. |
| Delicado | negativo | Recibe mucho más daño por veneno. |

**Crafteos y estaciones:** 35 recetas exclusivas de mesa normal: piezas Jonas, potencia mecánica, transporte de objetos y teletransportadores. Además, 15 recetas en Mesa de Trabajo de Mecánico.

**Estaciones implicadas:** Mesa de Trabajo de Mecánico.

**Alerta de balance:** No es una clase de inicio cómoda. Necesita materiales avanzados y otras clases que le suministren comida, metal y exploración.

### Agricultor / Farmhand

**Rol real:** Agricultura, semillas, fertilidad, cuerdas, pesca y balsa de bambú.

**Lectura útil:** Es el motor alimentario del servidor. Si nadie elige Agricultor, la economía de semillas, cosecha y fertilidad se vuelve mucho más dura.

**Qué puede hacer:**
- Obtener más cosecha y muchas más semillas cultivadas/silvestres.
- Crear fertilizantes y mejorar tierras de forma eficiente.
- Fabricar cuerdas, escaleras de cuerda, cebos de pesca y raíces útiles.
- Fabricar balsa de bambú de pescador y remo de bambú.
- Usar la Tabla de Siembra para convertir cultivos/frutas/legumbres/granos en semillas.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Milicia | positivo | Camina algo más rápido, recibe menos daño y causa algo más de daño. |
| Agricultor | desbloqueo | Desbloquea balsa de bambú de pescador, fertilizantes, cuerda y pesca. |
| Pescador | positivo | Nada mucho más rápido y ahorra gran parte de la durabilidad de la caña. |
| Cosechador | positivo | Más cosecha, muchas más semillas y posibilidad de obtener semillas de cultivos jóvenes. |
| Carpintero Naval | positivo | Puede obtener estacas de bambú y lianas desde hojas. |
| Cultivador | positivo | Trabaja tierra y plantas mucho más rápido; ahorra azada y guadaña. |
| Fertilizador | positivo | Los fertilizantes duran más y puede obtener restos vegetales de hierba. |
| Delicado | negativo | Peor minería, peor piedra y más pérdida de estabilidad temporal. |
| Bronceado | negativo | Tiene menos estabilidad temporal en interiores. |

**Crafteos y estaciones:** 51 recetas exclusivas de mesa normal: fertilizantes, balsa, tejados de bambú, raíces, cuerdas, podredumbre rápida, mejoras de suelo y cebos de pesca. Además, 4 recetas en Depósito de Mezclado y 6 en Tabla de Siembra.

**Estaciones implicadas:** Depósito de Mezclado y Tabla de Siembra.

**Alerta de balance:** No lo mandes a minas. Su sitio natural es campo, semillas, pesca y producción repetible.

### Florista / Florist

**Rol real:** Flores, medicina, apicultura, pigmentos, pintura, papel pintado y decoración cerámica.

**Lectura útil:** No es solo estética. Aporta medicina, tintes/pigmentos, abejas y una economía decorativa fuerte.

**Qué puede hacer:**
- Crear pigmentos y mezclas de color.
- Pintar cuadros, macetas, jardineras, vasijas decorativas y papeles pintados.
- Crear medicinas/poultices más baratos y beenades llenas.
- Propagar flores y generar hojas mediante la Tabla de Siembra.
- Trabajar mejor plantas, hierba, miel y apicultura.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Senderista | positivo/mixto | Camina y salta mejor y regenera pasivamente, pero hace menos daño cuerpo a cuerpo y a distancia. |
| Florista | desbloqueo | Desbloquea flores, tintes, medicina y recipientes decorativos. |
| Apicultor | positivo | Cosecha colmenas/skep con mejor eficiencia. |
| Herbalista | positivo | Más cola de caballo, más hierba, más velocidad con plantas y gran ahorro de cuchillo/guadaña. |
| Delicado | negativo | Peor minería, peor piedra y más pérdida de estabilidad temporal. |
| Comprensivo | negativo | Hace menos daño contra humanoides. |

**Crafteos y estaciones:** 142 recetas exclusivas de mesa normal: apicultura, flores, medicina, pinturas, pigmentos, mezcla de pigmentos, macetas/jardineras, vasijas decorativas y papeles pintados. Además, 17 recetas en Depósito de Mezclado y 3 en Tabla de Siembra.

**Estaciones implicadas:** Depósito de Mezclado y Tabla de Siembra.

**Alerta de balance:** Mucho valor social/económico; poco valor como minero o guerrero. Ojo: los recipientes de porcelana no son suyos, son del Alfarero.

### Guardabosques / Forester

**Rol real:** Madera, carbón, combustible, resina, brotes de árbol y carpintería.

**Lectura útil:** Es la clase que convierte el bosque en infraestructura. Sostiene combustible, madera, resina y construcción de madera.

**Qué puede hacer:**
- Obtener más troncos, carbón vegetal, turba, resina y brotes de árbol.
- Cortar madera y hojas mucho más rápido con gran ahorro de herramientas.
- Crear briquetas, leña tratada, carbón directo y madera envejecida.
- Fabricar puertas, cofres, empalizadas, tejados de madera y piezas de carpintería.
- Usar el Taller de Tallado en Madera para convertir troncos en muchos bloques/objetos de madera.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Bárbaro | positivo/mixto | Hace mucho más daño cuerpo a cuerpo y camina algo más rápido, pero recibe algo más de daño. |
| Guardabosques | desbloqueo | Desbloquea briquetas, leña tratada, combustible, almacenamiento y carpintería. |
| Carbonero | positivo | Obtiene más carbón vegetal y turba. |
| Leñador | positivo | Corta madera y hojas mucho más rápido; ahorra hacha, tijeras y sierra. |
| Técnico de Viveros | positivo | Obtiene muchísimos más brotes/semillas de árboles. |
| Carpintero | positivo | Obtiene más troncos y más resina de troncos. |
| Delicado | negativo | Peor minería, peor piedra y más pérdida de estabilidad temporal. |
| Herbívoro | negativo | Proteína y lácteos sacian menos. |

**Crafteos y estaciones:** 62 recetas exclusivas de mesa normal: camas, cofres, puertas, combustible, hojas, empalizadas, tejados, brotes, madera envejecida, procesado de madera y soportes. Además, 2 recetas en Tabla de Siembra y 53 en Taller de Tallado en Madera.

**Estaciones implicadas:** Tabla de Siembra y Taller de Tallado en Madera.

**Alerta de balance:** Es infraestructura pura. Fuerte, pero no debe jugar como tanque: su rasgo ofensivo también lo vuelve más frágil.

### Cazador / Hunter

**Rol real:** Arcos, flechas, cuero, pieles, despiece y caza.

**Lectura útil:** Especialista de animales y combate a distancia. Produce cuero/pieles y mata fauna con mucha eficiencia.

**Qué puede hacer:**
- Acceder a arco recurvo, flecha rudimentaria y flechas de hueso.
- Transformar pieles en pieles raspadas y cuero con mejores rutas.
- Despiezar animales más rápido y obtener más pieles/botín animal.
- Usar juncos como emplumado para flechas.
- Usar Taller de Marroquinería para procesado de piel/cuero.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Francotirador | positivo | Gran precisión, más daño a distancia y más velocidad al caminar. |
| Cazador | desbloqueo | Desbloquea peletería, curtido y emplumado/flechas. |
| Tirador | desbloqueo | Da acceso a arco recurvo y flecha rudimentaria. |
| Guardabosques | positivo | Hace mucho más daño a animales y recibe menos daño de ellos. |
| Tallador | positivo | Despiezado más rápido, más botín animal, más pieles y gran ahorro de cuchillo. |
| Delicado | negativo | Peor minería, peor piedra y más pérdida de estabilidad temporal. |
| Carnívoro | negativo | Grano, verdura y fruta sacian menos. |

**Crafteos y estaciones:** 28 recetas exclusivas de mesa normal: flechas, procesado de pieles y curtido. Además, 6 recetas en Taller de Marroquinería.

**Estaciones implicadas:** Taller de Marroquinería.

**Alerta de balance:** Muy fuerte con fauna y cuero. Menos útil si el servidor no usa economía de pieles, arcos o caza.

### Maleante / Malefactor

**Rol real:** Sigilo, comercio clandestino, chatarra, engranajes oxidados y saqueo de ruinas/nidos.

**Lectura útil:** Es un pícaro económico. No brilla por producción estable, sino por recuperar valor de basura, ruinas, comerciantes y combate contra humanoides.

**Qué puede hacer:**
- Crear kits de armas de chatarra y herramientas/armas de chatarra.
- Fabricar soportes de antorcha envejecidos y reciclar engranajes oxidados en chatarra metálica.
- Usar honda exclusiva y mejorar daño con honda/herramientas de chatarra.
- Abrir una ventana extra de comercio con algunos comerciantes.
- Obtener más engranajes oxidados y más botín de nidos de langosta.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Pícaro | positivo/mixto | Los animales lo detectan mucho menos; hace más daño global, pero recibe más daño global. |
| Maleante | desbloqueo | Desbloquea recetas de chatarra, engranajes oxidados y soportes de antorcha. |
| Improvisador | desbloqueo | Da acceso a la honda exclusiva. |
| Contrabandista | positivo | Puede acceder al inventario adicional de comerciantes. |
| Acechador | positivo | Hace mucho más daño a humanoides y se mueve más rápido agachado. |
| Ladrón | positivo | Aumenta alcance de recogida y botín de engranajes oxidados. |
| Desguazador | positivo | Mejora botín de nidos de langosta y daño/ahorro de herramientas de chatarra y honda. |
| Escrubidor | negativo | Reduce muchísimo semillas cultivadas, brotes de árbol y frutales. |
| Insípido | negativo | Las comidas preparadas sacian menos. |

**Crafteos y estaciones:** 12 recetas exclusivas de mesa normal: salvamento/chatarra y comercio. No usa estación propia en el bloque base.

**Estaciones implicadas:** Sin estación propia en el bloque base.

**Alerta de balance:** Depende mucho de ruinas, comerciantes, nidos de langosta y economía de objetos. Si no hay esos sistemas, se queda corto.

### Mensajero / Messenger

**Rol real:** Velocidad, caminos, bolsas, faroles, cartografía y transporte.

**Lectura útil:** No es solo una clase rápida. Es la clase que hace que un servidor grande funcione: rutas, transporte, almacenamiento móvil y conexión entre bases.

**Qué puede hacer:**
- Fabricar Bandolera, Estuche para Rollos, Caja de Transporte y Soporte de Vasija.
- Crear recetas más baratas de bolsas normales y mochilas.
- Fabricar faroles, lámparas de gas, caminos y carretera de asfalto mejorada.
- Usar Escritorio de Cartógrafo para recetas de caminos/mapas/infraestructura.
- Transportar cargas dirigidas con cajas/vasijas/bolsas especializadas.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Halcón | positivo/mixto | Camina mucho más rápido, pero recibe más daño y atrae/detecta más a animales. |
| Mensajero | desbloqueo | Desbloquea bolsas especiales, iluminación, caminos y almacenamiento personal. |
| Extendedor | positivo | Ahorra pala y trabaja grava, arena, nieve y tierra más rápido. |
| Ágil | positivo | Se mueve más rápido por caminos. |
| Protegido | negativo | Obtiene menos recursos de forraje, cultivos salvajes y animales. |
| Ligero | negativo | Tiene menos saciedad máxima. |

**Crafteos y estaciones:** 54 recetas exclusivas de mesa normal: carretera de asfalto, bolsas, velas, vitrinas/lámparas, faroles, lámparas de gas y caminos. Además, 12 recetas en Escritorio de Cartógrafo y 12 en Taller de Marroquinería.

**Estaciones implicadas:** Escritorio de Cartógrafo y Taller de Marroquinería.

**Alerta de balance:** Clase logística top. Es frágil y come peor por saciedad máxima baja; no debe quedarse aislado en combate.

### Cantero / Quarrier

**Rol real:** Piedra, cantería, construcción pesada, grava/arena desde roca y banco de piedra.

**Lectura útil:** Especialista de megaconstrucción en piedra. Es lento, pesado y poco fino con botín, pero nadie mueve piedra como él.

**Qué puede hacer:**
- Crear bloques de piedra raros, envejecidos y decorativos.
- Romper roca en piedras, grava y arena; y recomponer piedras en roca sólida.
- Usar arcilla en lugar de mortero en algunas rutas de ladrillos de piedra.
- Trabajar con herramientas de piedra mejor que otros.
- Usar Banco para Tallar Piedra para fabricar bloques de construcción directamente.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Obrero | positivo/mixto | Reduce muchísimo la penalización de velocidad por armadura y aumenta vida, pero camina algo más lento. |
| Cantero | desbloqueo | Desbloquea bloques de piedra, procesado de roca, grava y arena. |
| Ascético | positivo | Más estabilidad temporal en interiores y mejores herramientas de piedra. |
| Cantero | positivo | Más piedra suelta y más rendimiento al trabajar piedra. |
| Tunelador | positivo | Gran velocidad con piedra y mineral; gran ahorro de pico, martillo y cincel. |
| Protegido | negativo | Obtiene menos recursos de forraje, cultivos salvajes y animales. |
| Torpe | negativo | Peor botín de mineral y peor contenido de vasijas. |

**Crafteos y estaciones:** 38 recetas exclusivas de mesa normal: piedra envejecida, ensamblaje, procesado de roca, cuarzo, tejados de piedra y espeleotemas. Además, 24 recetas en Banco para Tallar Piedra.

**Estaciones implicadas:** Banco para Tallar Piedra.

**Alerta de balance:** No es buscador de tesoros: es obrero pesado. Muy bueno para construcción, menos para botín fino.

### Espeleólogo / Spelunker

**Rol real:** Minería especializada, prospección, bateo, explosivos y procesamiento de minerales.

**Lectura útil:** Especialista de cueva. Aporta minerales, bombas y materiales de bateo dirigidos, pero no sostiene comida ni confort base.

**Qué puede hacer:**
- Crear hallazgo carbonífero, cristalino y metálico para orientar recompensas de bateo.
- Procesar minerales como azufre, cal, sal, bórax y salitre de forma eficiente.
- Fabricar bombas con menos lino.
- Picar mineral mejor y obtener más mineral.
- Resistir explosiones y aplastamiento de forma extrema.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Zapador | positivo | Recibe muchísimo menos daño por explosiones y aplastamiento. |
| Espeleólogo | desbloqueo | Desbloquea hallazgos de bateo, procesado de minerales y explosivos. |
| Bateador | positivo | Mejora salida y velocidad al batear. |
| Prospector | positivo | Obtiene más mineral, pica mineral más rápido y ahorra pico. |
| Petrofóbico | negativo | Peor velocidad con piedra normal y peores herramientas de piedra. |
| Protegido | negativo | Obtiene menos recursos de forraje, cultivos salvajes y animales. |

**Crafteos y estaciones:** 20 recetas exclusivas de mesa normal: bombas, molienda/procesado, farol de espeleología y hallazgos de bateo. Además, 7 recetas en Depósito de Mezclado.

**Estaciones implicadas:** Depósito de Mezclado.

**Alerta de balance:** Alto riesgo/alta recompensa. Necesita soporte de comida, luz y logística.

### Sastre / Tailor

**Rol real:** Ropa, kits de confección, gambesón, lino, papiro, alfombras y tejados de paja.

**Lectura útil:** Clase de equipo textil y estética funcional. Produce ropa, kits y materiales blandos; su gran problema es el frío.

**Qué puede hacer:**
- Crear kits de confección por ranura de ropa.
- Fabricar gambesón, costureros, ropa y artículos textiles.
- Convertir hierba/lino/papiro en fibras, cuerda y materiales de confección.
- Crear alfombras y tejados de paja.
- Ahorrar muchísimo desgaste de armadura.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Esgrimista | positivo/mixto | Más sprint y esquiva garantizada, pero más penalización por armadura. |
| Sastre | desbloqueo | Desbloquea kit de confección, alfombras, tejados de paja y fibras. |
| Sastrería | desbloqueo | Da acceso a gambesones a medida, costurero y muchas prendas. |
| A Medida | positivo | Reduce muchísimo la pérdida de durabilidad de armadura. |
| Triturador | positivo | Trabaja plantas y telas mucho más rápido; ahorra guadaña y cuchillo. |
| Tejedor | positivo | Obtiene fibra de lino desde hierba y aumenta fibra/hierba obtenida. |
| Delicado | negativo | Peor minería, peor piedra y más pérdida de estabilidad temporal. |
| Puritano | negativo | Recibe muchísimo más daño por frío. |

**Crafteos y estaciones:** 53 recetas exclusivas de mesa normal: kits de confección, fibras, tejados de paja y alfombras. El archivo de camas existe pero está vacío en esta versión.

**Estaciones implicadas:** Sin estación propia base en el análisis principal.

**Alerta de balance:** Muy útil para ropa/equipo. Mala elección para climas fríos si no va bien equipado.

### Viticultor / Vintner

**Rol real:** Setas, fruta, esquejes, bebidas, vidrio, líquidos y fermentación.

**Lectura útil:** Clase de naturaleza avanzada y líquidos. Su punto clave es crear infraestructura de setas/frutales/vidrio, no ser agricultor puro.

**Qué puede hacer:**
- Fabricar Bolsa de Fructificación vacía para cultivo de setas.
- Crear esquejes de árboles y arbustos desde fruta/berries y tierra fértil/compost.
- Trabajar vidrio, tintes de vidrio, líquidos y fermentación.
- Recolectar mejor frutos, brotes de árbol y forraje.
- Resistir venenos y beneficiarse mucho de bebidas.

**Rasgos y efectos entendibles:**

| Rasgo | Tipo | Qué significa en juego |
|---|---|---|
| Mitridatista | positivo | Recibe muchísimo menos daño por veneno, las bebidas sacian mucho más y recibe más curación. |
| Viticultor | desbloqueo | Desbloquea bolsa de setas, árboles/arbustos, vidrio y procesado de líquidos. |
| Recolector | positivo | Más forraje, más frutales y más brotes/semillas de árbol. |
| Fundidor | positivo | Permite cosecha suave de bloomery. |
| Selector | positivo | Trabaja hojas y plantas más rápido; ahorra tijeras y cuchillo. |
| Delicado | negativo | Peor minería, peor piedra y más pérdida de estabilidad temporal. |
| Dependiente | negativo | Tanto comida simple como preparada sacian menos. |

**Crafteos y estaciones:** 36 recetas exclusivas de mesa normal: arbustos, esquejes, bolsa de fructificación vacía, tintes de vidrio, trabajo de vidrio, líquidos y tejados. Además, 2 recetas en Tabla de Siembra.

**Estaciones implicadas:** Tabla de Siembra.

**Alerta de balance:** Matiz importante: el Viticultor fabrica la bolsa vacía; el llenado y cosecha de bolsas de setas aparece como receta genérica sin bloqueo por clase. Puede crear la infraestructura y venderla.


### Plebeyo / Commoner

**Rol real:** No es una clase nueva del mod, pero el mod lo modifica.

**Lectura útil:** El mod añade el rasgo Ahorrativo, que reduce muchísimo el hambre. Por eso Plebeyo no es simplemente 'sin clase': es un generalista muy eficiente en comida.

**Qué puede hacer:**
- No tiene recetas exclusivas.
- Consume mucha menos comida por el rasgo Ahorrativo.
- Sirve como elección segura para jugadores que no quieren especialización fuerte.

**Alerta de balance:** En servidor puede ser más fuerte de lo que parece para juego en solitario, pero no desbloquea economía de crafteos especiales.

---

## 7. Estaciones nuevas y uso

| Estación | Nombre entendible | Modo | Clases que la usan |
|---|---|---|---|
| Mesa de Diseño | Mesa para planos, papel y decoración recuperada. | Menú | Archivista |
| Depósito de Mezclado | Molino + cuba para mezclar/moler materiales. | Menú | Espeleólogo, Agricultor, Alfarero, Carnicero, Florista |
| Tabla de Siembra | Mesa húmeda para semillas, brotes, flores y esquejes. | Menú | Agricultor, Florista, Guardabosques, Viticultor |
| Taller de Tallado en Madera | Banco para transformar troncos en objetos/bloques de madera. | Objeto en mano | Guardabosques |
| Banco para Tallar Piedra | Banco para transformar roca en bloques de construcción. | Objeto en mano | Cantero |
| Bloque de Estampación de Latón | Mesa para convertir bits metálicos en piezas por lotes. | Objeto en mano | Guardia Negra |
| Mesa de Trabajo de Mecánico | Banco para piezas metálicas/Jonas. | Menú | Relojero |
| Taller de Marroquinería | Banco para pieles, cuero y bolsas. | Menú | Cazador, Mensajero |
| Escritorio de Cartógrafo | Mesa para caminos, rutas y cartografía. | Menú | Mensajero |

---

## 8. Hallazgos de bateo del Espeleólogo

El Espeleólogo añade tres materiales de bateo especializados. La idea es orientar lo que buscas:

| Hallazgo | Enfoque |
|---|---|
| Carbonífero | Carbones, arcillas y algunos materiales minerales secundarios. |
| Cristalino | Cuarzo, borax, obsidiana, gemas y cristales. |
| Metálico | Pepitas y minerales metálicos. |

Esto no garantiza un drop concreto: cambia la tabla de posibilidades de bateo.

---

## 9. Compatibilidad incluida

El ZIP incluye recetas o parches para otros mods, entre ellos: A Culinary Artillery, Alchemy, Better Ruins, Bricklayers, Butchering, Expanded Beekeeping, Food Shelves, From Golden Combs, Millwright, More Arrows, Primitive Survival, Stone Quarry, Substrate, Tailor’s Delight, Toolsmith, XSkills, Combat Overhaul, Hydrate or Diedrate, SlowTox y Thievery.

No todas esas compatibilidades añaden recetas visibles; algunas añaden rasgos, restricciones o ajustes de stats.

---

## 10. Riesgos y señales de versión candidata

| Punto | Lectura |
|---|---|
| Versión `3.0.0-rc.1` | Es candidata, no necesariamente final. |
| Briqueta | Hay comentario TODO en receta de combustible de Guardabosques. |
| Pigmentos/tintes | Hay comentario TODO en conversión de tintes a pigmentos. |
| Sastre/camas | Existe archivo de recetas de camas vacío. |
| Recipiente aislado | Se detectó coma final en una shape; si el parser del juego la tolera no rompe, pero un validador estricto puede marcar error. |
| `modinfo.json` | No declara dependencias, lado ni versión de juego con claridad. |
| `.NET` | El archivo de dependencias apunta a .NET 10. |

---

## 11. Conclusión estratégica para servidor

- **Base de comida:** Agricultor + Carnicero.
- **Base de materiales:** Guardabosques + Cantero + Alfarero.
- **Progreso técnico:** Guardia Negra + Relojero + Espeleólogo.
- **Economía social/estética:** Archivista + Florista + Sastre + Viticultor.
- **Conexión del servidor:** Mensajero.
- **Economía de riesgo/ruinas/comercio:** Maleante.
- **Generalista barato en comida:** Plebeyo.

La decisión dura: si el servidor quiere cooperación real, este mod encaja. Si quiere que cada jugador sea autosuficiente, puede sentirse castigador. La clave será explicar bien las clases antes de que la gente elija, porque una mala elección puede hacer que un jugador se sienta inútil durante muchas horas.

---

## 12. Correcciones principales frente al análisis anterior

1. Se elimina el uso de claves internas como si fueran texto de jugador.
2. Las clases aparecen en español e inglés usando la traducción del mod.
3. Se corrige la atribución de porcelana: **Alfarero / Brickmaker**, no Florista.
4. Se separan recetas exclusivas, recetas de estación y recetas genéricas.
5. Se aclara que el Viticultor crea la Bolsa de Fructificación vacía, pero parte del flujo de setas es genérico.
6. Se aclara que Plebeyo/Commoner consume muchísima menos comida y no debe tratarse como “sin clase inútil”.
7. Se evita copiar descripciones inglesas o confusas del archivo de traducción cuando no coinciden con recetas reales.
