# MongoDB Alapok – Állatkert Projekt
Ez a mappa a MongoDB alapvető CRUD (Create, Read, Update, Delete) műveleteit mutatja be egy egyszerű, állatokat tartalmazó példán keresztül.

## Miről szól ez a labor?

A példakód (mongosh.js) bemutatja, hogyan kezeljük az adatokat egy dokumentum-alapú adatbázisban. A középpontban Pajti (a kutya) és Chili (a macska) állnak.

Bemutatott NoSQL koncepciók:
* Sémamentesség: A kutyáknak és macskáknak eltérő mezőik lehetnek (pl. a kutyának van fajtája, a macskának nincs), a MongoDB mégis egy kollekcióban kezeli őket.
* Beágyazott dokumentumok: Az egészségügyi adatok (health) nem külön táblában, hanem az állat profilján belül tárolódnak.
* Tömbök kezelése: Egy állathoz több címkét (tags) is rendelhetünk egyetlen mezőben.

## Futtatás folyamata
1. Előkészületek
Győződj meg róla, hogy fut a MongoDB szervered (helyileg vagy Dockerben).

2. Futtatás MongoDB Compass-ban
Nyisd meg a MongoDB Compass alkalmazást.
Csatlakozz a szerverhez.
Az ablak alján kattints a _ Mongosh terminálra.
Másold be az animal-crud.js fájl tartalmát és nyomj Enter-t.

3. Futtatás parancssorból
Ha telepítve van a mongosh a gépedre:
bash
mongosh "mongodb://localhost:27017" < animal-crud.js
Körültekintően használja a kódot.

## Tesztelési feladatok
Próbáld ki a következőket a kódban:
1. Módosítsd Pajti korát!
2. Adj hozzá egy új állatot, akinek van egy teljesen egyedi mezője (pl. pikkely_szine).
3. Keress rá az összes olyan állatra, akinek a címkéi között szerepel a "lusta" kifejezés.

---
*Ez a modul a [Korszerű Adatbázisok] kurzus keretében készült.*
