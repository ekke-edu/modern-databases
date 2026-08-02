# Neo4j Alapok – Állatkert Gráf Projekt
Ez a mappa a Neo4j alapvető Cypher lekérdezési műveleteit (Node & Relationship creation) mutatja be egy egyszerű, állatokat és gazdáikat tartalmazó példán keresztül.

## Miről szól ez a labor?
A példakód (create-animals.cypher) bemutatja, hogyan modellezzük az adatokat egy gráfalapú adatbázisban. A középpontban Pajti (a kutya), Chili (a macska) és az őket összekötő kapcsolatok állnak.

## Bemutatott Gráf koncepciók:
* Csomópontok (Nodes): Az entitásokat (pl. Ember, Állat) körökként ábrázoljuk, saját címkékkel (:Person, :Animal).
* Kapcsolatok (Relationships): Az adatok közötti viszony nem egy idegen kulcs, hanem egy irányított él (-[:OWNS]->), amely saját tulajdonságokat is hordozhat (pl. mióta gazdája).
* Mintázatillesztés: A lekérdezés során nem táblákat kapcsolunk össze, hanem vizuális mintákat keresünk a gráfban (pl. (p:Person)-[r]->(a:Animal)).

## Futtatás folyamata
1. Előkészületek
Győződj meg róla, hogy fut a Neo4j DBMS szervered (helyileg a Neo4j Desktopban, felhőben, vagy Docker/Dev Container környezetben).
Ha a projekt Docker vagy Dev Container segítségével fut, a Neo4j a konténerben érhető el, és a parancsokat a container termináljából is futtathatod.

2. Futtatás Neo4j Browserben
Nyisd meg a Neo4j Desktop-ot és indítsd el az adatbázist.
Kattints az Open gombra a böngésző alapú felület megnyitásához.
Másold be a create-animals.cypher fájl tartalmát a felső parancssorba.
Nyomj Ctrl + Enter-t vagy kattints a kék Play ikonra.

3. Vizuális ellenőrzés
A futtatás után a bal oldali sávban kattints az ikonokra, vagy futtasd a MATCH (n) RETURN n parancsot, hogy lásd az elkészült gráfot.

## Tesztelési feladatok
Próbáld ki a következőket a kódban:
1. Módosítás: Írd át Pajti korát a SET parancs segítségével!
2. Új kapcsolat: Hozz létre egy Állatorvos csomópontot, és kösd össze Chilivel egy [:VISITED] kapcsolattal!
3. Lekérdezés: Keress rá az összes olyan gazdira, akinek "kutya" típusú állata van!
> Teszteld parancssorból hogy működik-e a kapcsolat: `cypher-shell -a bolt://neo4j:7687 -u neo4j -p examplepassword`
---
*Ez a modul a [Korszerű Adatbázisok] kurzus keretében készült.*
