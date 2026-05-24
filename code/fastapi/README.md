
# FastAPI Projekt

## Leírás

Ez a projekt egy modern webalkalmazást valósít meg Python FastAPI keretrendszer segítségével. A FastAPI egy gyors, fejlett és könnyen használható webes keretrendszer API-k fejlesztésére.

## Csomag telepítése

```bash
pip install fastapi uvicorn
```

## Beállítás

1. A projekt telepítéséhez szükséges függőségek:
    - Python 3.7+
    - FastAPI
    - Uvicorn (ASGI szerver)

2. Szerver indítása:
```bash
uvicorn main:app --reload
```

## Funkcionalitás

A projekt az alábbi feladatokat végzi el:

- **REST API végpontok** létrehozása és kezelése
- **Automatikus dokumentáció** (Swagger UI, ReDoc)
- **Path és Query paraméterek** feldolgozása
- **Request/Response validáció** Pydantic modellek segítségével
- **Adatbázis műveletek** kezelése
- **Hitelesítés és autorizáció** implementálása
