![Neo4j](https://img.shields.io/badge/Neo4j-018bff?style=flat&logo=neo4j&logoColor=white)
![DevContainers](https://img.shields.io/badge/DevContainers-0078D4?style=flat&logo=visualstudiocode&logoColor=white)

# Neo4j Alapok – Állatkert Gráf Projekt
Ez a mappa a Neo4j alapvető Cypher lekérdezési műveleteit mutatja be egy egyszerű, állatokat és gazdáikat tartalmazó példán keresztül.

## Miről szól ez a labor?
A bemutatott példa fájl (create-animals.cypher) szemlélteti, hogyan modellezhetünk adatokat egy gráfalapú adatbázisban. A középpontban Pajti (a kutya), Chili (a macska) és az őket összekötő kapcsolatok állnak.

## Bemutatott gráf koncepciók:
* Csomópontok (Nodes): Az entitásokat, például embert vagy állatot, külön címkékkel jelöljük, mint például :Person vagy :Animal.
* Kapcsolatok (Relationships): Az adatbeli összefüggést nem idegen kulcsokkal, hanem irányított élekkel ábrázoljuk, például -[:OWNS]->, amelyek saját tulajdonságokat is hordozhatnak.
* Mintázatillesztés: A lekérdezés során nem táblákat kötünk össze, hanem a gráfban megjelenő vizuális mintákat keresünk, például (p:Person)-[r]->(a:Animal).

## Futtatás folyamata
1. Előkészületek
Győződj meg róla, hogy a Neo4j DBMS szerver fut (helyi telepítésen, a Neo4j Desktopban, felhőben vagy Docker/Dev Container környezetben). Ha a projekt Docker vagy Dev Container segítségével fut, akkor a Neo4j a konténerben érhető el, és a parancsokat a container termináljából is futtathatod.

2. Futtatás Neo4j Browserben
Nyisd meg a Neo4j Desktop alkalmazást, és indítsd el az adatbázist. Kattints az Open gombra a böngészőalapú felület megnyitásához. Másold be a create-animals.cypher fájl tartalmát a felső parancssorba, majd nyomd meg a Ctrl + Enter billentyűkombinációt, vagy kattints a kék Play ikonra.

3. Vizuális ellenőrzés
A futtatás után a bal oldali sávban kattinthatsz a különböző ikonokra, vagy futtathatod a MATCH (n) RETURN n parancsot, hogy megtekintsd az elkészült gráfot.

## Tesztelési feladatok
Próbáld ki a következőket a példában:
1. Módosítás: Írd át Pajti korát a SET parancs segítségével!
2. Új kapcsolat: Hozz létre egy Állatorvos csomópontot, és kösd össze Chilivel egy [:VISITED] kapcsolattal!
3. Lekérdezés: Keress rá az összes olyan gazdira, akinek "kutya" típusú állata van!
> Teszteld parancssorból, hogy működik-e a kapcsolat: `cypher-shell -a bolt://neo4j:7687 -u neo4j -p examplepassword`

1. Neo4j Browser (A legjobb vizuális felület)
A Neo4j konténer egy beépített, kifejezetten gráfok vizuális megjelenítésére tervezett webes felületet biztosít.

Nyiss meg egy böngészőt, és menj erre a címre: http://localhost:7474

Használd a megadott belépési adatokat (alapértelmezetten a felhasználónév neo4j, a jelszó pedig az, amit a Compose-ban megadtál, például examplepassword).

Itt nemcsak lekérdezéseket futtathatsz, hanem grafikusan is láthatod a csomópontokat (nodes) és az éleket (relationships) összekötve.

2. Cypher Shell (CLI-ből)
Ha inkább a terminálban szeretnél maradni:
---
*Ez a modul a [Korszerű Adatbázisok] kurzus keretében készült.*
