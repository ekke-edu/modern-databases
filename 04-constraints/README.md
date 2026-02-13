# Neo4j Kényszerek és Indexek
Ebben a részben az adatminőséget és a lekérdezések optimalizálását vizsgáljuk. A Neo4j-ban a sémát "on-the-fly" alakíthatjuk, de a fontos mezőkre érdemes szabályokat hozni.

## Kényszerek (Constraints)
A kényszerek biztosítják, hogy az adatok megfeleljenek bizonyos üzleti szabályoknak:
* Uniqueness (Egyediség): Megakadályozza a duplikációkat (pl. egyedi Chip ID vagy Email). Neo4j Manual: Constraints
* Key Constraints: Több tulajdonság együttes egyediségét garantálja.
* Property Existence: Kötelezővé teszi egy mező kitöltését (csak Enterprise verzióban elérhető, de a szintaxisát érdemes ismerni).

## Indexek (Indexes)
Az indexek célja a keresési sebesség növelése. A gráfban az indexek segítenek gyorsan megtalálni a kezdőpontot (Starting point), ahonnan a bejárás indul.
* Range Index: Értéktartományok (pl. kor > 5) vagy pontos egyezés keresésére.
* Full-text Index: Szöveges kereséshez, ahol nem pontos egyezésre, hanem kulcsszavakra keresünk. Neo4j Manual: Full-text Search