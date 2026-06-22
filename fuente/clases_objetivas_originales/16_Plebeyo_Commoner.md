# Plebeyo / Commoner (`commoner`)

**Documento objetivo.** Los números salen de `assets/specializedclasses/config/traits.json` y de las recetas del ZIP `specializedclasses_3.0.0-rc.1.zip`. Las clases se mantienen en español / inglés; el resto se documenta en español.

## 1. Estadísticas base agregadas de la clase

Agregado por suma de los rasgos base declarados para esta clase. Los valores tipo `+0.50` se muestran como `+50%`. Capacidades como `canPickupClutter` se muestran por significado jugable, por ejemplo recolector de ruinas activado.

### Bonus objetivos
- ritmo de hambre: **-75%** (valor interno `-0.75`)

### Malus objetivos
- No hay malus numéricos base declarados.

## 2. Rasgos exactos de la clase
| Rasgo ES | Código | Tipo | Datos objetivos |
|---|---|---|---|
| Ahorrativo | `frugal` | positivo | `hungerrate` = -0.75 → ritmo de hambre: **-75%** (valor interno `-0.75`) |

## 4. Recetas base bloqueadas por clase
- Recetas de mesa normal con `requiresTrait`: **0**
- Recetas por estación con `requiredTrait`: **0**
- Recetas de compatibilidad opcional detectadas: **0**

## 6. Estadísticas de compatibilidad opcional
### XSkills / XSkillsFork: `classexpmult`
Valores configurados en el patch opcional de XSkills. Se muestran como porcentaje del valor declarado en el campo `classexpmult`.
| Skill | Valor exacto | Mostrado como |
|---|---|---|
| temporaladaptation | 0.1 | 10% |
| Alfarería y piezas de barro | 0.1 | 10% |
| survival | 0.1 | 10% |
| metalworking | 0.1 | 10% |
| combat | 0.1 | 10% |
| mining | 0.1 | 10% |
| digging | 0.1 | 10% |
| cooking | 0.1 | 10% |
| husbandry | 0.1 | 10% |
| forestry | 0.1 | 10% |
| farming | 0.1 | 10% |
| fishing | 0.1 | 10% |

## 7. Análisis funcional breve
Análisis: no es clase nueva, pero el mod lo mejora con hambre -75%. Es simple y muy eficiente en comida.
