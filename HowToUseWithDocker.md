# How to Use with Docker

Ez az útmutató segít futtatni a hallgatók API alkalmazást Docker segítségével.

## Előfeltételek

- Telepített Docker (https://www.docker.com/get-started)
- Telepített Docker Compose

## Lépések

1. **Navigálj a projekt mappájába:**
   ```
   cd j1aqxp_kaggle
   ```

2. **Másold át az adatfájlt (ha szükséges):**
   Az alkalmazás az `iphone_sales_dataset.csv` fájlt használja az adatok importálásához. Győződj meg róla, hogy ez a fájl elérhető a projekt mappájában. Ha a gyökérmappában (`../`) van, másold át:
   ```
   cp ../iphone_sales_dataset.csv .
   ```

3. **Építsd és indítsd el a konténereket:**
   ```
   docker-compose up --build
   ```
   Ez elindítja a Node.js alkalmazást és a MongoDB adatbázist.

4. **Ellenőrizd az indulást:**
   A konzolban látni fogod a következő üzeneteket:
   - `✅ MongoDB csatlakozva!`
   - `🚀 A szerver fut a következő címen: http://localhost:3000`
   - `📖 Swagger UI: http://localhost:3000/api-docs`
   - `📥 Adatok importálása automatikusan megtörtént az indításkor`

5. **Nyisd meg a Swagger dokumentációt:**
   Navigálj a böngészőben a `http://localhost:3000/api-docs` címre, ahol interaktívan tesztelheted az API végpontokat (CRUD műveletek és aggregációk).

6. **Leállítás:**
   A konténereket leállíthatod `Ctrl+C`-vel, vagy külön terminálban:
   ```
   docker-compose down
   ```

## API Végpontok

- **CRUD műveletek:** `/api/iphones`
  - GET: Összes rekord listázása
  - POST: Új rekord létrehozása
  - PUT/PATCH: Rekord frissítése
  - DELETE: Rekord törlése

- **Aggregációk:**
  - Összesítés (SUM): Pl. teljes bevétel
  - Átlag (AVG): Pl. átlagos ár
  - Számosság (COUNT): Rekordok száma
  - Minimum/Maximum (MIN/MAX): Pl. legalacsonyabb/magasság ár

A részletes dokumentáció a Swagger UI-ban található.

## Hibaelhárítás

- Ha a port 3000 foglalt, módosítsd a `docker-compose.yml` fájlban a port mapping-ot.
- Ha a MongoDB nem indul, ellenőrizd, hogy a 27017-es port szabad-e.
- Az adatok importálásához győződj meg róla, hogy az `iphone_sales_dataset.csv` fájl helyes formátumú és elérhető.