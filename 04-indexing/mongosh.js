db.animals.createIndex({ name: 1 }); 
db.animals.createIndex({ species: 1, age: -1 });
db.log_entries.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 3600 });
const stats = db.animals.find({ name: "Pajti" }).explain("executionStats");
console.log(stats.executionStats);
db.animals.getIndexes();