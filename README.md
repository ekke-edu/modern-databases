# iPhone Sales API

Egy Node.js alapú REST API alkalmazás az iPhone eladások adatainak kezeléséhez MongoDB adatbázissal.

## 📋 Projekt Áttekintése

Ez az alkalmazás lehetővé teszi az iPhone eladási rekordok teljes körű kezelését:
- **CRUD Műveletek**: Adatok hozzáadása, listázása, módosítása, törlése
- **Aggregáció & Statisztika**: Komplex adatanalitika (bevétel, átlagár, stb.)
- **Swagger API Dokumentáció**: Interaktív API tesztelés
- **Docker Támogatás**: Könnyű telepítés és futtatás konténerekben

---

## 🛠️ Technológiák

- **Node.js** - szerver runtime
- **Express.js** - web keretrendszer (v5.2.1)
- **MongoDB** - NoSQL adatbázis
- **Mongoose** - MongoDB ORM (v9.6.2)
- **Swagger UI** - API dokumentáció (swagger-ui-express, swagger-jsdoc)
- **Docker & Docker Compose** - konténerizáció
- **CSV Parser** - CSV adatimport

---

## 📦 Projektstruktura

```
j1aqxp_kaggle/
├── server.js                 # Fő alkalmazás fájl
├── importData.js            # CSV adatok importálása
├── swaggerOptions.js        # Swagger dokumentáció konfigurációja
├── package.json             # NPM függőségek
├── Dockerfile               # Docker image konfiguráció
├── docker-compose.yml       # Docker Compose orchestration
├── entrypoint.sh           # Konténer belépési pont
├── iphone_sales_dataset.csv # iPhone eladási adatok
├── models/
│   └── iphone.js           # Mongoose iPhone adatmodell
└── routes/
    └── iphoneRoutes.js     # API útvonalak (CRUD + Aggregáció)
```

---

## 🚀 Telepítés & Futtatás

### Előfeltételek

- Docker & Docker Compose telepítve
- Vagy: Node.js v18+ és MongoDB fut a gépén

### Docker-rel (Ajánlott)

1. **Navigálj a projekt mappájába:**
   ```bash
   cd j1aqxp_kaggle
   ```

2. **Másolj át az adatfájlt (ha szükséges):**
   ```bash
   cp ../iphone_sales_dataset.csv .
   ```

3. **Építsd és indítsd el a konténereket:**
   ```bash
   docker-compose up --build
   ```

4. **Ellenőrizd az indulást:**
   Az alkalmazás az alábbi üzeneteket adja ki:
   ```
   ✅ MongoDB csatlakozva!
   🚀 A szerver fut a következő címen: http://localhost:3000
   📖 Swagger UI: http://localhost:3000/api-docs
   📥 Adatok importálása automatikusan megtörtént az indításkor
   ```

5. **Nyisd meg a Swagger UI-t:**
   Navigálj a böngészőben: http://localhost:3000/api-docs

6. **Leállítás:**
   ```bash
   docker-compose down
   ```

### Helyi futtatás (Node.js + MongoDB nélkül)

1. **Függőségek telepítése:**
   ```bash
   npm install
   ```

2. **MongoDB csatlakozás beállítása (.env fájl):**
   ```bash
   MONGO_URI=mongodb://localhost:27017/j1aqxp_iphone_db
   PORT=3000
   ```

3. **CSV adatok importálása:**
   ```bash
   node importData.js
   ```

4. **Szerver indítása:**
   ```bash
   node server.js
   ```

---

## 📊 API Végpontok

### CRUD Műveletek

#### GET - Összes eladás listázása
```
GET /api/iphones
```
**Válasz:**
```json
[
  {
    "_id": "65f123abc456def789012345",
    "orderId": 1001,
    "customerName": "Kovács János",
    "country": "Hungary",
    "iphoneModel": "iPhone 15 Pro",
    "storage": "256GB",
    "color": "Titanium",
    "quantity": 1,
    "price": 999,
    "saleDate": "2024-03-10T00:00:00.000Z",
    "paymentMethod": "Credit Card"
  }
]
```

#### POST - Új eladás rögzítése
```
POST /api/iphones
Content-Type: application/json

{
  "orderId": 2001,
  "customerName": "Nagy Péter",
  "country": "Hungary",
  "iphoneModel": "iPhone 15 Pro Max",
  "storage": "512GB",
  "color": "Natural Titanium",
  "quantity": 2,
  "price": 1199,
  "saleDate": "2024-03-15",
  "paymentMethod": "Credit Card"
}
```
**Válasz:** `201 Created` + az új rekord adatai

#### PUT - Eladás módosítása ID alapján
```
PUT /api/iphones/{id}
Content-Type: application/json

{
  "iphoneModel": "iPhone 15",
  "price": 899
}
```
**Válasz:** A frissített rekord

#### DELETE - Eladás törlése ID alapján
```
DELETE /api/iphones/{id}
```
**Válasz:**
```json
{
  "message": "Sikeres törlés!",
  "deleted": { ... }
}
```

### Statisztika & Aggregáció

#### GET - Statisztikák országonként
```
GET /api/iphones/stats
```
**Válasz:**
```json
[
  {
    "_id": "United States",
    "totalOrders": 150,
    "totalRevenue": 149850,
    "averagePrice": 999,
    "minSale": 599,
    "maxSale": 1299
  },
  {
    "_id": "Hungary",
    "totalOrders": 45,
    "totalRevenue": 44955,
    "averagePrice": 999,
    "minSale": 899,
    "maxSale": 1199
  }
]
```

---

## 🗄️ Adatmodell

### iPhone Schema
```javascript
{
  orderId: Number,           // Rendelés sorszáma
  customerName: String,      // Ügyfél neve
  country: String,          // Ország
  iphoneModel: String,      // iPhone modell (pl. iPhone 15 Pro)
  storage: String,          // Tárolókapacitás (pl. 256GB)
  color: String,            // Szín
  quantity: Number,         // Darabszám
  price: Number,            // Ár
  saleDate: Date,           // Eladás dátuma
  paymentMethod: String     // Fizetési mód
}
```

---

## 📖 Swagger UI Dokumentáció

Az alkalmazás indítása után nyisd meg: **http://localhost:3000/api-docs**

Itt:
- ✅ Interaktívan tesztelheted az API végpontokat
- 📝 Láthatsz részletes dokumentációt minden végpontról
- 📤 Közvetlenül küldhetsz HTTP kéréseket
- 🔍 Módosíthatod az adatokat és láthatod a válaszokat

---

## 🔄 Docker Compose Konfigurációja

A `docker-compose.yml` a következő szolgáltatásokat indítja el:

### 1. **MongoDB Adatbázis**
- **Image:** `mongo:latest`
- **Port:** `27017` (alapértelmezett)
- **Volume:** Az adatok perzisztensek (nem vesznek el az újraindítás után)
- **Adatbázis neve:** `j1aqxp_iphone_db`

### 2. **Node.js API Alkalmazás**
- **Port:** `3000`
- **Környezeti változó:** `MONGO_URI=mongodb://mongodb:27017/j1aqxp_iphone_db`
- **Automatikus funkciók:**
  - MongoDB csatlakozási ellenőrzése
  - CSV adatok importálása (automatikusan `importData.js`-ből)
  - Swagger dokumentáció kiszolgálása

---

## 📥 CSV Adatok Importálása

### Fájl Formátuma
A CSV-nek az alábbi oszlopokkal kell rendelkeznie:
```
Order_ID,Customer_Name,Country,iPhone_Model,Storage,Color,Quantity,Price,Sale_Date,Payment_Method
1001,Kovács János,Hungary,iPhone 15 Pro,256GB,Titanium,1,999,2024-03-10,Credit Card
...
```

### Automatikus Import (Docker)
A `docker-compose up` futtatásakor az alkalmazás automatikusan importálja az adatokat az `importData.js` segítségével.

### Manuális Import (Node.js)
```bash
node importData.js
```
Ez:
1. Csatlakozik a MongoDB-hez
2. Törli az előző adatokat (`Iphone.deleteMany()`)
3. Beolvassa a CSV-t
4. Beszúrja az új rekordokat
5. Lezárja a kapcsolatot

---

## 🔧 Konfigurációs Fájlok

### .env (Opcionális)
```
MONGO_URI=mongodb://mongodb:27017/j1aqxp_iphone_db
PORT=3000
```

### package.json
```json
{
  "name": "j1aqxp_kaggle",
  "version": "1.0.0",
  "main": "server.js",
  "type": "commonjs",
  "dependencies": {
    "express": "^5.2.1",
    "mongoose": "^9.6.2",
    "csv-parser": "^3.2.1",
    "dotenv": "^17.4.2",
    "swagger-ui-express": "^5.0.1",
    "swagger-jsdoc": "^6.2.8"
  }
}
```

---

## 🐛 Hibaelhárítás

### Problem: MongoDB kapcsolódási hiba
```
❌ Hiba a MongoDB csatlakozásnál: ...
```
**Megoldás:** 
- Ellenőrizd, hogy a MongoDB fut-e
- Docker-rel futtatás: `docker-compose up --build`
- Helyi futtatás: MongoDB szerver indítása (`mongod`)

### Problem: CSV fájl nem található
```
❌ HIBA: A "iphone_sales_dataset.csv" fájl nem található a mappában!
```
**Megoldás:** 
- Másold az `iphone_sales_dataset.csv` fájlt a `j1aqxp_kaggle` mappájába
- Vérifold a fájl nevét és helyét

### Problem: Port már használatban van
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Megoldás:** 
- Leállítsd a másik alkalmazást, amely a 3000-es portot használja
- Vagy változtass meg a PORT környezeti változót

### Problem: Swagger UI nem érhető el
**Megoldás:** 
- Ellenőrizd, hogy az alkalmazás fut-e: `http://localhost:3000`
- Az API-docs elérési út: `http://localhost:3000/api-docs`

---

## 📝 Gyakorlat Feladatok

### 1. CRUD Műveletek
- [ ] Új iPhone eladás rögzítése POST-tal
- [ ] Összes eladás listázása GET-tel
- [ ] Egy rekord módosítása PUT-tal
- [ ] Egy rekord törlése DELETE-tel

### 2. Aggregáció & Statisztika
- [ ] Statisztikák lekérdezése `/api/iphones/stats` útvonalon
- [ ] Elemzés: Melyik ország a legmagasabb bevétellel?
- [ ] Az átlagár melyik országban a legmagasabb?

### 3. Swagger UI Kezelés
- [ ] Nyisd meg a Swagger UI-t
- [ ] Próbáld meg egy új iPhone-t hozzáadni az interfészből
- [ ] Módosíts egy meglévő rekordot
- [ ] Töröljél egy rekordot

---

## 📚 Dokumentáció & Fejlesztés

- **Express.js dokumentáció:** https://expressjs.com/
- **Mongoose dokumentáció:** https://mongoosejs.com/
- **MongoDB dokumentáció:** https://docs.mongodb.com/
- **Swagger/OpenAPI:** https://swagger.io/

---

## 📄 Licencia

ISC

---

## ✍️ Szerzők

Készült a BSc Progr. Inf. Eger kurzus számára.
Kaggle iPhone eladások dataset alapján.

---

**Utolsó frissítés:** 2024. március
