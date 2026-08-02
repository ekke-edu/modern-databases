# MongoDB Alapok – Állatkert Projekt
Ez a mappa a MongoDB alapvető CRUD műveleteit (Create, Read, Update, Delete) mutatja be egy egyszerű, állatokat tartalmazó példán keresztül.

## Miről szól ez a labor?

A bemutatott példafájl (mongosh.js) megmutatja, hogyan kezelhetünk adatokat egy dokumentumalapú adatbázisban. A középpontban Pajti (a kutya) és Chili (a macska) állnak.

### Bemutatott NoSQL fogalmak
* Sémamentesség: A kutyák és macskák eltérő mezőkkel rendelkezhetnek, és mégis ugyanabban a kollekcióban tárolhatók.
* Beágyazott dokumentumok: Az egészségügyi adatok (health) nem külön táblában, hanem az állat dokumentumában találhatók.
* Tömbök kezelése: Egy állathoz több címkét is rendelhetünk egyetlen mezőben.

## Futtatási folyamat
1. Előkészületek
Győződj meg róla, hogy a MongoDB szerver fut (helyi telepítésen, Dockerben vagy Dev Containerben).

2. Futtatás MongoDB Compassban
Nyisd meg a MongoDB Compass alkalmazást.
Csatlakozz a szerverhez.
Az ablak alján kattints a Mongosh terminálra.
Másold be az animal-crud.js fájl tartalmát, majd nyomj Entert.

3. Futtatás parancssorból
Ha telepítve van a mongosh a gépeden, a következő paranccsal futtathatod a példát:

```bash
mongosh "mongodb://localhost:27017" < animal-crud.js
```

## Tesztelési feladatok
Próbáld ki a következőket a példában:
1. Módosítsd Pajti korát!
2. Adj hozzá egy új állatot, amelynek van egy teljesen egyedi mezője, például pikkely_szine.
3. Keress rá az olyan állatokra, amelyek címkéi között szerepel a „lusta” kifejezés.

### Kapcsolódó kapcsolati adatok
- MongoDB pluginben: mongodb://host.docker.internal:27017
- CLI-ben: mongosh "mongodb://host.docker.internal:27017/"

---
*Ez a modul a Korszerű Adatbázisok kurzus keretében készült.*