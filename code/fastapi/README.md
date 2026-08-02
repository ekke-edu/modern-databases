
# FastAPI Projekt

## Leírás

Ez a projekt egy modern webalkalmazást valósít meg Python FastAPI keretrendszer segítségével. A FastAPI egy gyors, fejlett és könnyen használható webes keretrendszer API-k fejlesztésére.

## Beállítás és Futtatás
Mivel a projekt DevContainerre épül, a manuális csomagtelepítést (pl. pip install) a konténer inicializálása automatikusan elvégzi a requirement.txt alapján.

Környezeti változók kezelése:
A konfiguráció (pl. MONGO_CONNECTION_STRING, DATABASE_NAME) a projekt legkülső gyökerében lévő, közös .env fájlból töltődik be. Ezt a Docker Compose transzparens módon injektálja a konténerbe, így a Pydantic beállítások automatikusan hozzáférnek.

Szerver indítása:
Nyiss egy integrált terminált a VS Code-ban, lépj be a backend mappájába, és indítsd el a fejlesztői szervert:

```bash
cd code/fastapi
uvicorn main:app --reload
```
vagy

```bash
make run
```

## Funkcionalitás

A projekt az alábbi feladatokat végzi el:

- **REST API végpontok** létrehozása és kezelése
- **Automatikus dokumentáció** (Swagger UI, ReDoc)
- **Path és Query paraméterek** feldolgozása
- **Request/Response validáció** Pydantic modellek segítségével
- **Adatbázis műveletek** kezelése
- **Hitelesítés és autorizáció** implementálása
