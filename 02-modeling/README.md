# Neo4j Gráfmodellezés – Tulajdonságok és Irányok
A gráfmodellezés lényege, hogy az adatokat Node-ok (főnevek) és Relationship-ek (igék) formájában fejezzük ki. Ebben a részben a gazdik, állatok és városok közötti összefüggéseket modellezzük.

## Modellezési elvek a gráfban
1. Csomópontok (Nodes)
Olyan entitások, amelyek önmagukban is értelmezhetőek.
Példa: :Person, :Animal, :City.

2. Kapcsolatok (Relationships)
Mindig van típusa (pl. OWNS, LIVES_IN) és iránya.
A gráfban az irány jelzi a logikai összefüggést: (Gazdi)-[:OWNS]->(Állat).
A kapcsolatok segítségével elkerüljük az SQL-ben megszokott bonyolult kapcsolótáblákat (Join tables).

3. Kapcsolati tulajdonságok
A kapcsolatok is tárolhatnak adatot!
Példa: [:OWNS {since: 2020}] – Nem az állaté és nem a gazdié a dátum, hanem a kapcsolaté.

## Mit tanulhatunk ebből a példából?
Hogyan kezeljük a több-a-többhöz kapcsolatokat (pl. Pajtinak két gazdája is van: János és Anna).
Hogyan kössünk össze különböző típusú entitásokat (Ember -> Város).
Hogyan szűrjünk a kapcsolatok tulajdonságai alapján (pl. "Ki a kedvenc állata Jánosnak?").