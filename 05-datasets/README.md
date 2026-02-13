# Neo4j Adatimportálás – CSV alapok
Ebben a szakaszban megtanuljuk, hogyan töltsünk be külső táblázatos adatokat (CSV) a gráfunkba. Ez a módszer elengedhetetlen, ha több ezer rekorddal kell dolgoznunk.

## Előkészületek (Windows / Neo4j Desktop)
A Neo4j biztonsági okokból alapértelmezés szerint csak egy kijelölt mappából enged fájlokat beolvasni. 
1. Nyisd meg a Neo4j Desktop-ot.
2. Válaszd ki az aktív projektet, majd kattints a három pontra (...) vagy a "Open folder" menüre, és válaszd az "Import" mappát.
3. Másold be ide az data.csv fájlt. 

## Importálás folyamata
1. Indítsd el az adatbázist és nyisd meg a Neo4j Browser-t.
2. Futtasd a LOAD CSV WITH HEADERS parancsot a file:///data.csv elérési úttal.
3. A MERGE parancs használata ajánlott a CREATE helyett, mert így elkerülheted a duplikált csomópontok létrehozását, ha többször futtatod a scriptet. 
