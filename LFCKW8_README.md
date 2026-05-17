# Korszerű Adatbázisok - Féléves Nagyprojekt

## Fejlesztő adatai
* **Név:** Majnár Patrik
* **Neptun kód:** LFCKW8
* **Projekt témája:** Pokémon statisztikai és kereső API

## Technológiai fókusz & Architektúra

A projekt egy többrétegű (Tiered Architecture) Node.js/Express alkalmazás, amely bemutatja a NoSQL adatbázisok kezelését dokumentum-alapú (MongoDB) és gráfalapú (Neo4j) megközelítésben is.

* **Backend:** Node.js, Express keretrendszer
* **Dokumentum-adatbázis:** MongoDB (Mongoose ODM)
* **Dokumentáció:** Swagger (OpenAPI 3.0) interaktív felület

## Mappaszerkezet és felépítés
A projekt logikáját külön rétegekre bontottam a könnyebb karbantarthatóság érdekében:
* `controllers/` - A kérések kezelése, itt található a MongoDB aggregációs lekérdezés is.
* `models/` - A Mongoose séma, ami meghatározza a pokémon dokumentumok szerkezetét.
* `routes/` - Az API útvonalak és a hozzájuk tartozó Swagger (YAML) dokumentáció.
* `services/` - Az adatbázis-műveletekért (CRUD) felelős réteg, ami közvetlenül kommunikál a MongoDB-vel.

## Pokémon feladat részletes leírása

A projekt ezen része egy teljes körű Pokémon Pokedex REST API-t valósít meg Node.js és Express alapokon, MongoDB adatbázissal.

### 1. Adatmodell (models/Pokemon.js)
A MongoDB-ben tárolt pokémonok formáját egy Mongoose sémával rögzítettem, hogy az adatok strukturáltak legyenek. Minden Pokémon az alábbi mezőkkel rendelkezik:
* `pokedex_number`: A Pokémon sorszáma (szám).
* `pokemon_name`: A Pokémon neve (szöveg).
* `type_1` és `type_2`: Elsődleges és másodlagos típusok (szöveg).
* `attack`, `defense`, `speed`, `hp`: Harci tulajdonságok és értékek (számok).

### 2. Statisztika végpont (GET /api/pokemon/stats)
Ez a funkció a MongoDB aggregációs pipeline-ját használja, így a számításokat közvetlenül az adatbázis-szerver végzi el:

* **Csoportosítás (`$group`):** Az adatbázisban található összes pokémont az elsődleges típusuk (`type_1`) alapján külön csoportokba rendezi (pl. Grass, Fire, Water).
* **Matematikai összesítés:** Minden egyes típuscsoportra egyszerre számol egy átlagos támadóerőt (`$avg`), egy maximális védelmi értéket (`$max`), egy minimális sebességet (`$min`) és egy összesített életerőt (`$sum`).
* **Rendezés (`$sort`):** A kapott statisztikai listát az átlagos támadóerő szerint csökkenő sorrendbe rakja, így a legerősebb típusok kerülnek a lista elejére.

### 3. Kereső végpont (GET /api/pokemon/search)
* **Reguláris kifejezés (`RegExp`):** A kód `new RegExp(name, 'i')` megoldást használ. Emiatt a keresés nem érzékeny a kis- és nagybetűkre, illetve név részletekre is működik (pl. ha beírjuk, hogy "char", kiadja a Charizard és Charmander neveket is).
* **Szervervédelem (`.limit(10)`):** A lekérdezés le van korlátozva maximum 10 találatra. Ez megakadályozza, hogy egy túl rövid (pl. egyetlen betűs) keresésnél a program feleslegesen letöltse mind az 1118 pokémont, túlterhelve a hálózatot és a szervert.

### 4. CRUD műveletek (services/PokemonService.js)
A szolgáltatás rétegben implementálva lettek az alapvető adatbázis-kezelő függvények a Mongoose beépített metódusaival:
* **Create (`save()`):** Új pokémon hozzáadása.
* **Read (`find()`, `findById()`):** Összes pokémon listázása vagy egy konkrét egyed lekérése ID alapján.
* **Update (`findByIdAndUpdate()`):** Meglévő pokémon adatainak módosítása.
* **Delete (`findByIdAndDelete()`):** Pokémon törlése az adatbázisból.

## Az 5. 8. 9. feladat megoldása:
Nekem az eredeti adatbázissal egyáltalán nem működött, emiatt kicsit módosítani kellett( hogy a változók az utolsó blokknál is éljenek) rajta:

CREATE (t1:Tanszek {nev: 'Matematika Intézet'})
CREATE (t2:Tanszek {nev: 'Informatikai Intézet'})
CREATE (t3:Tanszek {nev: 'Pszichológiai Intézet'})
CREATE (t4:Tanszek {nev: 'Jogtudományi Kar'})

CREATE (o1:Oktato {nev: 'Dr. Szabó Géza', beosztas: 'Egyetemi tanár'})
CREATE (o2:Oktato {nev: 'Dr. Kovács Ilona', beosztas: 'Docens'})
CREATE (o3:Oktato {nev: 'Dr. Kiss László', beosztas: 'Adjunktus'})
CREATE (o4:Oktato {nev: 'Varga Péter', beosztas: 'Tanársegéd'})

CREATE (k1:Kurzus {cim: 'Analízis 1', kredit: 5, tipus: 'Matematika'})
CREATE (k2:Kurzus {cim: 'Fizika', kredit: 4, tipus: 'Fizika'})
CREATE (k3:Kurzus {cim: 'Adatbázisok', kredit: 5, tipus: 'Informatika'})
CREATE (k4:Kurzus {cim: 'Gráfelmélet', kredit: 3, tipus: 'Matematika'})
CREATE (k5:Kurzus {cim: 'Programozás alapjai', kredit: 5, tipus: 'Informatika'})

CREATE (h1:Hallgato {nev: 'Kovács Adél', neptun_kod: 'ABC123', szak: 'Gazdaságinformatika', evfolyam: 2, kor: 21, atlag: 4.6})
CREATE (h2:Hallgato {nev: 'Nagy Márk', neptun_kod: 'XYZ789', szak: 'Mérnökinformatika', evfolyam: 2, kor: 22, atlag: 3.8})
CREATE (h3:Hallgato {nev: 'Szabó Luca', neptun_kod: 'LMN456', szak: 'Mérnökinformatika', evfolyam: 3, kor: 23, atlag: 4.2})
CREATE (h4:Hallgato {nev: 'Tóth Bence', neptun_kod: 'BVC321', szak: 'Jogász', evfolyam: 2, kor: 21, atlag: 3.5})
CREATE (h5:Hallgato {nev: 'Kovács Péter', neptun_kod: 'KVP111', szak: 'Pszichológia', evfolyam: 1, kor: 19, atlag: 4.8})
CREATE (h6:Hallgato {nev: 'Molnár Éva', neptun_kod: 'EVA999', szak: 'Állam- és Jogtudományi', evfolyam: 4, kor: 24, atlag: 4.9})

//Kapcsolatok
CREATE (o1)-[:TAGJA]->(t1), (o2)-[:TAGJA]->(t1), (o3)-[:TAGJA]->(t2), (o4)-[:TAGJA]->(t2)
CREATE (o1)-[:TANIT]->(k1), (o1)-[:TANIT]->(k4), (o2)-[:TANIT]->(k2), (o3)-[:TANIT]->(k3), (o4)-[:TANIT]->(k5)
CREATE (h1)-[:FELVETTE {jegy: 5}]->(k1), (h1)-[:FELVETTE {jegy: 4}]->(k3)
CREATE (h2)-[:FELVETTE {jegy: 3}]->(k3), (h2)-[:FELVETTE {jegy: 2}]->(k5)
CREATE (h3)-[:FELVETTE {jegy: 5}]->(k3), (h3)-[:FELVETTE {jegy: 5}]->(k4)
CREATE (h5)-[:FELVETTE {jegy: 5}]->(k1), (h6)-[:FELVETTE {jegy: 5}]->(k1)
CREATE (h1)-[:ISMERI]->(h2), (h2)-[:ISMERI]->(h3), (h1)-[:ISMERI]->(h4), (h5)-[:ISMERI]->(h1);


// 5.	Listázd azokat a hallgatókat, akik felvették a 'Gráfelmélet' nevű tárgyat!
MATCH (h: Hallgato)-[:FELVETTE]->(k:Kurzus { cim: 'Gráfelmélet'}) return h.nev
Eredmény: Szabó Luca

//8.	Listázd azokat az oktatókat, akik a 'Matematika Intézet' nevű tanszék tagjai!
MATCH(o: Oktato)-[:TAGJA]->(t:Tanszek {nev: 'Matematika Intézet'}) return o.nev
Eredmény: Dr. Szabó Géza ; Dr. Kovács Ilona

/9.	Keress olyan hallgatót, aki felvette az 'Adatbázisok' tárgyat, és a jegye 4-esnél rosszabb! (Itt szintén módosítani kellett a függvényen.)
MATCH (h:Hallgato)-[f:FELVETTE]->(k:Kurzus {cim: 'Adatbázisok'}) 
WHERE f.jegy < 4 
RETURN h.nev AS Hallgato_neve, f.jegy AS Jegy
Eredmény: Nagy Márk     Jegy 3
