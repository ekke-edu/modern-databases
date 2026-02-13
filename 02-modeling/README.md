# MongoDB Adatmodellezés – Állatok és Gazdik
Ebben a részben azt vizsgáljuk meg, hogyan érdemes strukturálni az adatokat NoSQL környezetben. A MongoDB-ben nincs kőbe vésett séma, ezért nekünk kell döntenünk az adatok elhelyezkedéséről.

## Modellezési stratégiák

1. Beágyazás (Embedding)
Az állatok adatait közvetlenül a gazdi dokumentumába helyezzük.
Mikor használd? Ha az állat adataira mindig szükség van, amikor a gazdit lekérdezzük.
Előnye: Rendkívül gyors olvasás (egyetlen művelet).
Hátránya: Ha túl sok állata van valakinek, a dokumentum túllépheti a 16MB-os korlátot.

2. Referencia (Linking)
Az állatokat külön kollekcióban tároljuk, és csak az azonosítójukat (_id) mentjük el a gazdinál.
Mikor használd? Ha egy állatnak több gazdája is lehet, vagy ha az állat adatai gyakran frissülnek.
Előnye: Tisztább adatszerkezet, nincs redundancia.
Hátránya: Az adatok összekapcsolásához $lookup (JOIN) szükséges, ami lassabb lehet.

## Kipróbálás
A mongosh.js fájl lefuttatásával láthatod, hogyan néz ki a két különböző struktúra a gyakorlatban. Figyeld meg a $lookup operátor használatát a referenciák feloldásához!
