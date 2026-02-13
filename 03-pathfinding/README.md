# Neo4j Útvonalak és Mintázatkeresés
Míg az SQL-ben minden plusz kapcsolat egy újabb lassú JOIN műveletet jelent, a Neo4j-ban a kapcsolatokon való végighaladás (traversing) konstans idejű. Ebben a részben láncolt lekérdezéseket hajtunk végre.

## Mit vizsgálunk?
1. Több ugrásos lekérdezések (Multi-hop)
A gráfban nem csak azt látjuk, hogy kié az állat, hanem azt is, hogy az állaton keresztül kihez kapcsolódik a gazdi (pl. az állatorvoshoz).
Minta: (Gazdi)-->(Állat)-->(Orvos)
2. Mintázatillesztés (Pattern Matching)
A Cypher ereje abban rejlik, hogy bonyolult alakzatokat is leírhatunk. Például: "Keress olyan orvost, akit két különböző gazdi is meglátogatott a saját állatával."
3. Ajánlórendszerek (Recommendation Engine)
A gráfadatbázisok leggyakoribb felhasználási módja. Ha tudjuk, hogy János és Anna ugyanabban a városban lakik, megnézhetjük, Anna melyik orvost kedveli, és ezt ajánlhatjuk Jánosnak.