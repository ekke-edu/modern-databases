# Mintadatok és Importálás (Windows & Compass)
Ebben a mappában találod azokat az adatállományokat, amelyekkel gyorsan feltöltheted az adatbázisodat teszteléshez. A manuális gépelés helyett az alábbi módszereket ajánlom.

## Tartalom
animals_import.json: Több példaállatot (Pajti, Chili, stb.) tartalmazó lista.
import_data.ps1: Windows PowerShell script az automatizált betöltéshez.

## Importálás módszerei (Windows alatt)
1. MongoDB Compass GUI
Ha nem szeretnél parancssort használni, kövesd ezeket a lépéseket:
Nyisd meg a MongoDB Compass-t és csatlakozz.
Válaszd ki (vagy hozd létre) a modern_db_course adatbázist és az animals kollekciót.
Kattints az "Add Data" gombra, majd válaszd az "Import File" opciót.
Tallózd be az animals_import.json fájlt.
Válaszd a JSON formátumot és kattints az Import gombra.

2. PowerShell Script
Ha sűrűn üríted és töltöd újra az adatokat, használd a mellékelt scriptet:
Nyiss egy PowerShell-t ebben a mappában.
Futtasd: ./import_data.ps1
(Megjegyzés: Ehhez telepítve kell lennie a MongoDB Database Tools csomagnak.)

3. Mongosh
Ha csak be akarod másolni a kódot a Compass alján lévő _ Mongosh terminálba:
Nyisd meg az animals_import.json fájlt egy szövegszerkesztőben.
Írd elé a terminálban: db.animals.insertMany(
Másold be a fájl tartalmát, majd zárd le a zárójelet: )
Nyomj Enter-t.
