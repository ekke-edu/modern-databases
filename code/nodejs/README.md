
# Modern Adatbázis Tanfolyam - Node.js

## Projekt Áttekintés

Ez a könyvtár a Modern Adatbázis Tanfolyam Node.js implementációit tartalmazza.

## Csomagok

- `express` - Webes keretrendszer REST API-k létrehozásához
- `sequelize` - ORM adatbázis műveletek elvégzéséhez
- `postgresql` - PostgreSQL kliens
- `dotenv` - Környezeti változók kezelése

## Használat

```bash
npm install
npm start
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

