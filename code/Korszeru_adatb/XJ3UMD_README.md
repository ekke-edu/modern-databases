# Korszerű Adatbázis Beadandó - Node.js + MongoDB

## Projekt Áttekintés

Ez a projekt a Korszerű Adatbázisok kurzus MongoDB alapú Node.js implementációja. Egy Spotify playlist adatokat kezelő REST API, amely lehetővé teszi zeneszámok lekérdezését, létrehozását, módosítását és törlését, valamint különböző statisztikák lekérését.

## Adatforrás

A projektben használt adatbázis az alábbi Kaggle adathalmazon alapul:
[Spotify Global Top Songs 2026](https://www.kaggle.com/datasets/mkaur1141/spotify-global-top-songs-2026/data)

## Csomagok

- `express` - Webes keretrendszer REST API-k létrehozásához
- `mongoose` - MongoDB ODM adatbázis műveletek elvégzéséhez
- `cors` - Cross-Origin Resource Sharing kezelése
- `dotenv` - Környezeti változók kezelése
- `swagger-jsdoc` - API dokumentáció generálása
- `swagger-ui-express` - Swagger UI megjelenítése

## Használat

```bash
npm install
npm start
```

Fejlesztői mód:

```bash
npm run dev
```

## Projekt Szerkezet

```
spotify-playlist-api/
├── config/
│   └── spotify.playlist.json   - Adatbázis adatok
├── models/
│   └── Track.js                - Mongoose adatmodell
├── services/
│   └── TrackService.js         - Adatbázis műveletek
├── controllers/
│   └── trackController.js      - Kéréskezelők
├── routes/
│   └── trackRoutes.js          - API végpontok és Swagger kommentek
├── app.js                      - Alkalmazás belépési pont
├── swagger.js                  - Swagger konfiguráció
├── .env                        
├── .gitignore
└── package.json                - Függőségek
```

## Kezdődés

1. Függőségek telepítése: `npm install`
2. `.env` fájl konfigurálása
3. Szerver indítása: `npm start`

## API Végpontok

| Metódus | Végpont | Leírás |
|--------|---------|--------|
| GET | /api/tracks | Összes track listázása |
| GET | /api/tracks/:id | Track lekérése ID alapján |
| POST | /api/tracks | Új track létrehozása |
| PUT | /api/tracks/:id | Track frissítése |
| DELETE | /api/tracks/:id | Track törlése |
| GET | /api/tracks/stats/genres | Műfaj statisztikák |
| GET | /api/tracks/stats/top-artists | Top 10 előadó |
| GET | /api/tracks/stats/minmax | Legmagasabb és legalacsonyabb stream szám |

Az API dokumentáció elérhető a szerver indítása után: `http://localhost:4000/api-docs`