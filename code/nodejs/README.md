
# Modern Adatbázis Tanfolyam - Node.js

## Projekt Áttekintés

Ez a modul a projekt Node.js alapú szolgáltatását (frontend kiszolgáló / BFF) tartalmazza. A fejlesztési környezet egy Docker Compose alapú DevContainerben fut, amely tökéletes szinkront és izolációt biztosít a projekt FastAPI backendjével és a MongoDB adatbázissal.

## Csomagok
A korábbi relációs adatbázis (PostgreSQL / Sequelize) és a lokális környezetiváltozó-kezelő (dotenv) helyett a projekt egy felhő-natívabb megközelítést alkalmaz:

- `express` - Gyors és minimalista webes keretrendszer az útvonalak és kérések kezelésére.
- `swagger-ui-express` - Az API dokumentáció (Swagger) integrálása és vizuális megjelenítése.

> (A MongoDB műveletekhez szükség esetén natív driver vagy a FastAPI backend hívásai használatosak.)

## Beállítás és Futtatás
A projekt az npm helyett a modern és gyors pnpm csomagkezelőt használja. A DevContainer inicializálása során a függőségek telepítése (a postCreateCommand révén) automatikusan megtörténik.

1. Környezeti változók kezelése:
A konfigurációs adatok a projekt legkülső gyökerében elhelyezett, közös .env fájlból töltődnek be. Ezt a Docker Compose transzparens módon injektálja, így a Node.js kód közvetlenül a beépített process.env objektumon keresztül, extra csomagok (pl. dotenv) nélkül fér hozzájuk.

> Példa .env-re: `MONGO_CONNECTION_STRING=mongodb://root:examplepassword@mongodb:27017/` `DATABASE_NAME=ekke`

2. Függőségek manuális telepítése (ha szükséges):
Ha a konténer futása közben új csomagot adsz hozzá, vagy újra kell húznod a mappát:

```bash
cd code/nodejs
pnpm install
```

3. Szerver indítása:
```bash
pnpm start
# vagy közvetlenül:
# node app.js
```

## Projekt Szerkezet

```
nodejs/
├── src/
│   ├── models/        - Adatbázis modellek
│   ├── routes/        - API végpontok
│   ├── controllers/    - Kéréskezelők
│   ├── middleware/     - Közbenső logika
│   └── config/        - Konfigurációs fájlok
├── tests/             - Tesztfájlok
├── package.json       - Függőségek
└── README.md         - Ez a fájl
```

## Kezdődés

1. Függőségek telepítése: `npm install`
2. `.env` fájl konfigurálása adatbázis hitelesítési adatokkal
3. Migrációk futtatása: `npm run migrate`
4. Szerver indítása: `npm start`

