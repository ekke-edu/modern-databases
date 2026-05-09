# MongoDB – Amit a régi anyagok nem tanítanak

## 1. `count()` vs. `countDocuments()` – Miért felejtsd el a régit?

Régen mindenki a sima `count()`-ot használta, mert villámgyors. A gond csak az, hogy ez a parancs valójában **lusta**: nem számolja meg ténylegesen a dokumentumokat, csak ránéz az adatbázis metaadataira. Ha épp mozognak az adatok vagy volt egy kisebb leállás, simán kamuzik és **fals számot ad vissza**. Mára hivatalosan is elavult lett.

A modern **`countDocuments()`** ezzel szemben a háttérben elindít egy aggregációs futószalagot (`$group` + `$sum`), és leszámolja a találatokat. Egy hajszálnyit lassabb, de cserébe **100%-ig pontos** és sosem fog átverni.

```js
// Elavult – ne használd
db.collection.count({ aktiv: true })

// Helyes
db.collection.countDocuments({ aktiv: true })
```

---

## 2. A `null`-csapda – A semmi és a hiányzó adat nem ugyanaz

Ha beírod, hogy `db.collection.find({ osztondij: null })`, azt hinnéd, csak azokat adja vissza, akiknél explicit ki van töltve, hogy `null`. **Frászt.** A Mongo visszaadja azokat is, akiknél **egyáltalán nem létezik** ez a mező a dokumentumban.

A megoldás a BSON típuskódok használata (a `null` BSON kódja: `10`):

```js
// Csak azok, akiknél ténylegesen null az érték
db.collection.find({ osztondij: { $type: 10 } })

// Csak azok, akiknél a mező hiányzik
db.collection.find({ osztondij: { $exists: false } })
```

---

## 3. A `3.1 + 0.2 != 3.3` probléma – A Double-csapda

Mivel a Mongo a háttérben JavaScript motorral fut, alapból mindent **lebegőpontos (Double) számként** ment el. Ha valakinek `3.1` az átlaga, és a `$inc` operátorral adsz neki `0.2`-es bónuszt, logikusan `3.3`-nak kéne lennie az eredmény. De a JS bináris kerekítési hibája miatt a memóriában **`3.3000000000000003`** lesz belőle.

Ha erre lefuttatsz egy `find({ atlag: 3.3 })` keresést, üres lesz a találatlista.

A profi fix: minden pénzt, pontos átlagot vagy kritikus adatot **`NumberDecimal`** típusként kell kezelni:

```js
// Lebegőpontos hiba
db.collection.updateOne({ nev: "X" }, { $inc: { atlag: 0.2 } })

// Pontos decimal típussal
db.collection.updateOne({ nev: "X" }, { $inc: { atlag: NumberDecimal("0.2") } })
```

---

## 4. A `$size` – és a Dot-Notation hack

Meg akarod keresni azokat a hallgatókat, akiknek **több mint 2** felvett tárgyuk van. Adja magát:

```js
// Ez hibát dob – a $size csak pontos egyezést fogad el
db.collection.find({ targyak: { $size: { $gt: 2 } } })
```

A `$size` operátor **nem fogad el tartományokat**, csak pontos számot (pl. pontosan 3 elem).

**A golyóálló megoldás:** Ha egy tömbben több mint 2 elem van, a harmadik elem (index: `2`) biztosan létezik – ezt ellenőrizzük dot-notationnel:

```js
// Elegáns hack: ha a 3. elem létezik, a tömb legalább 3 elemű
db.collection.find({ "targyak.2": { $exists: true } })
```
