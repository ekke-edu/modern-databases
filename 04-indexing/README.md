# MongoDB Indexelés és Teljesítmény
Az indexek speciális adatstruktúrák, amelyek a kollekció adatainak egy kis részét tárolják könnyen bejárható formában. Segítségükkel elkerülhető a lassú Collection Scan.

## Index típusok a laborban
* Single Field Index: Egyetlen mezőre épített index. Ideális, ha gyakran keresünk egy konkrét értékre (pl. name).
* Compound Index: Több mező kombinációja. Fontos a sorrend: { species: 1, age: -1 } segít, ha fajra szűrünk, majd kor szerint rendezünk.
* TTL (Time-To-Live) Index: Automatikusan törli a dokumentumokat egy bizonyos idő után. Kiváló munkamenetek (sessions) vagy ideiglenes értesítések kezelésére.
* Unique Index: Garantálja, hogy ne lehessen két azonos érték (pl. ne lehessen két állat ugyanazzal az egyedi chippel).
Példa: db.animals.createIndex({ chip_id: 1 }, { unique: true })

## Hogyan mérjük a hatékonyságot?
A legfontosabb eszközünk az .explain() metódus.
* COLLSCAN: Rossz jel. Az adatbázis minden dokumentumot megnézett.
* IXSCAN: Jó jel. Az adatbázis indexet használt, így csak a szükséges elemeket érte el.
