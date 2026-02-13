# MongoDB Aggregációs Pipeline-ok
Ebben a fejezetben az adatok csoportosítását, elemzését és transzformálását gyakoroljuk. Az aggregáció lehetővé teszi, hogy komplex statisztikákat nyerjünk ki anélkül, hogy az összes adatot le kellene töltenünk a kliens oldalra.

## Használt operátorok (Stages)
* $match: Szűrés (hasonló a find-hoz). Mindig érdemes a pipeline elejére tenni, hogy kevesebb adattal kelljen dolgozni.
* $group: Az adatok csoportosítása egy közös kulcs (pl. species) alapján. Itt használhatunk matematikai műveleteket: $sum, $avg, $max, $min.
* $unwind: A legfontosabb trükk! A dokumentumban lévő tömböket (pl. tags) elemeire bontja, így minden elemhez külön rekord jön létre.
* $project: Az eredmény formázása. Itt nevezhetjük át a mezőket, vagy végezhetünk rajtuk számításokat (pl. nagybetűssé alakítás).
* $sort: Az eredmények sorbarendezése.