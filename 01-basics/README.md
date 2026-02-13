# Neo4j Alapok – Gráf Építés
Ez a mappa a gráfadatbázisok "Hello World"-jét tartalmazza. Megtanuljuk, hogyan hozzunk létre csomópontokat (Nodes) és hogyan kössük össze őket kapcsolatokkal (Relationships).

## Alapfogalmak
A Neo4j-ban nem táblákban gondolkodunk, hanem mintázatokban:
* Node (Csomópont): Egy entitás (pl. egy Állat vagy egy Gazdi). Jelölése: ( )
* Label (Címke): A csomópont típusa (pl. :Animal).
* Relationship (Kapcsolat): Az entitások közötti él. Jelölése: -[ ]->
*Property (Tulajdonság): Kulcs-érték párok a csomópontokon vagy éleken. Jelölése: { }

## query.cypher tartalma
A script az alábbi lépéseket hajtja végre:
1. Törlés: MATCH (n) DETACH DELETE n – Kiüríti a teljes adatbázist, hogy ne legyenek duplikációk a tesztelés során.
2. Létrehozás (CREATE):
    - Létrejön Pajti és Chili mint :Animal node.
    - Létrejön Kovács János mint :Person node.
3. Kapcsolatépítés: Összekötjük Jánost az állataival egy :OWNS kapcsolattal.
4. Lekérdezés (MATCH): Visszakérjük az összes adatot, hogy vizuálisan is lássuk a gráfot.

## Futtatás a Neo4j Browserben
1. Nyisd meg a Neo4j Desktop-ot és indítsd el az adatbázisod.
2. Kattints az Open gombra.
3. Másold be a query.cypher fájl tartalmát a felső villogó kurzorhoz.
4. Nyomj Ctrl + Enter-t vagy kattints a kék Play ikonra.