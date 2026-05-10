******************************************
Alapvető lekérdezések és szűrések
******************************************
parancssorba: mongosh -> use egyetem -> db.hallgatok.insertMany(dataset.json tartalma)

Listázd az adatbázisban szereplő összes hallgatót!
db.hallgatok.find()
Keresd meg azt a hallgatót, akinek a Neptun-kódja ABC123!
db.hallgatok.find({ "neptun_kod": "ABC123" })
Listázd az összes hallgatót, aki a Mérnökinformatika szakon tanul!
db.hallgatok.find({ "szak": "Mérnökinformatika" })
Keresd meg azokat a hallgatókat, akiknek az átlaga magasabb, mint 4.5!
db.hallgatok.find({ "atlag": { $gt: 4.5 } })
Szűrd le a másodéves (evfolyam: 2) Jogász szakos hallgatókat!
db.hallgatok.find({ "evfolyam": 2, "szak": "Jogász" })
Listázd azokat a hallgatókat, akik felvették az Analízis 1 nevű tárgyat!
db.hallgatok.find({ "targyak": "Analízis 1" })
Jelenítsd meg az összes hallgatót névsorrendbe (A-Z) rendezve!
db.hallgatok.find().sort({ "nev": 1 })
Kérdezd le az összes hallgatót, de a listában csak a nev és a neptun_kod mezők szerepeljenek!
db.hallgatok.find({}, { "nev": 1, "neptun_kod": 1, "_id": 0 })
Keress olyan hallgatókat, akiknek az átlaga 3.0 és 4.0 közé esik (határokat is beleértve)!
db.hallgatok.find({ "atlag": { $gte: 3.0, $lte: 4.0 } })
Számold meg, összesen hány hallgató jár a Villamosmérnök szakra!
db.hallgatok.countDocuments({ "szak": "Villamosmérnök" })
******************************************
Haladóbb műveletek, módosítások és törlés
******************************************

Listázd az összes hallgatót, aki nem elsőéves!
db.hallgatok.find({ "evfolyam": { $ne: 1 } })
Keress olyan hallgatókat, akik vagy Biológia, vagy Pszichológia szakra járnak!
db.hallgatok.find({ "szak": { $in: ["Biológia", "Pszichológia"] } })
Keress rá azokra a hallgatókra, akiknek a nevében szerepel a Kovács családnév!
db.hallgatok.find({ "nev": { $regex: "Kovács" } })
Kérdezd le azt az egyetlen hallgatót, akinek a legmagasabb az átlaga az egész iskolában!
db.hallgatok.find().sort({ "atlag": -1 }).limit(1)
Listázd azokat a hallgatókat, akiknek pontosan 3 tárgy van a tárgyfelvételi listájában!
db.hallgatok.find({ "targyak": { $size: 3 } })
Módosítsd az ABC123 Neptun-kódú hallgató átlagát 4.5-re!
db.hallgatok.updateOne({ "neptun_kod": "ABC123" }, { $set: { "atlag": 4.5 } })
Töröld az adatbázisból a BVC321 Neptun-kódú hallgató rekordját!
db.hallgatok.deleteOne({ "neptun_kod": "BVC321" })
Listázd a harmadévnél magasabb évfolyamra járók (>3) nevét és szakját (az azonosítót ne)!
db.hallgatok.find({ "evfolyam": { $gt: 3 } }, { "nev": 1, "szak": 1, "_id": 0 })
Keress olyan hallgatót, aki felvette a Programozás alapjai tárgyat, és az átlaga 4.0 alatt van!
db.hallgatok.find({ "targyak": "Programozás alapjai", "atlag": { $lt: 4.0 } })
Növeld meg minden Mérnökinformatika szakos hallgató évfolyamát eggyel!
db.hallgatok.updateMany({ "szak": "Mérnökinformatika" }, { $inc: { "evfolyam": 1 } })
******************************************
Aggregációs és statisztikai feladatok
******************************************

Számold meg, hogy szakonként összesen hány hallgató van! ($group, $sum)
db.hallgatok.aggregate([
{
$group: {
_id: "$szak",
hallgatok_szama: { $sum: 1 }
}
}
])
Számold ki az egész egyetem átlagos tanulmányi átlagát! ($group, $avg)
db.hallgatok.aggregate([
{
$group: {
_id: null,
atlagos_atlag: { $avg: "$atlag" }
}
}
])
Határozd meg szakonként a hallgatók átlagos tanulmányi átlagát!
db.hallgatok.aggregate([
{
$group: {
_id: "$szak",
atlagos_tanulmanyi_atlag: { $avg: "$atlag" }
}
}
])
Keresd meg minden szakon a legmagasabb (MAX) átlagot!
db.hallgatok.aggregate([
{
$group: {
_id: "$szak",
legmagasabb_atlag: { $max: "$atlag" }
}
}
])
Listázd ki az összes egyedi szaknevet, ami szerepel az adatbázisban! (distinct vagy $group)
db.hallgatok.distinct("szak")

// VAGY aggregációval:
db.hallgatok.aggregate([{ $group: { _id: "$szak" } }])
Csoportosítsd a hallgatókat évfolyamok szerint, és számold meg, hányan járnak az egyes évfolyamokra!
db.hallgatok.aggregate([
{
$group: {
_id: "$evfolyam",
hallgatok_szama: { $sum: 1 }
}
}
])
Szűrd ki a 3.0 feletti átlaggal rendelkezőket, majd csoportosítsd őket szakok szerint, és mutasd meg a csoportok átlagát! ($match + $group)
db.hallgatok.aggregate([
{
$match: { "atlag": { $gt: 3.0 } }
},
{
$group: {
_id: "$szak",
atlagos_atlag: { $avg: "$atlag" }
}
}
])
Bontsd szét a targyak tömböket elemeire, és számold meg, hányszor fordul elő az egyes tantárgyak felvétele az összes hallgatónál! ($unwind + $sortByCount)
db.hallgatok.aggregate([
  { $unwind: "$targyak" },
  { $sortByCount: "$targyak" }
])
Keress rá a legnépszerűbb szakra (ahová a legtöbb hallgató jár)! ($group + $sort + $limit)
db.hallgatok.aggregate([
  {
    $group: {
      _id: "$szak",
      letszam: { $sum: 1 }
    }
  },
  {
    $sort: { "letszam": -1 }
  },
  {
    $limit: 1
  }
])
Listázd ki a szakokat és a hozzájuk tartozó hallgatók névsorát egy-egy listában! ($group + $push)
db.hallgatok.aggregate([
  {
    $group: {
      _id: "$szak",
      hallgatok_nevora: { $push: "$nev" }
    }
  }
])