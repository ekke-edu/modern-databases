db.animals.insertMany([
  { 
    name: "Pajti", 
    species: "kutya", 
    breed: "keverék",
    age: 3, 
    tags: ["barátságos", "szereti a labdát"],
    health: { weight: 16, last_checkup: new Date("2026-01-10") }
  },
  { 
    name: "Chili", 
    species: "macska", 
    indoor: true,
    age: 12, 
    tags: ["lusta", "gurmé"],
    health: { weight: 4.5, last_checkup: new Date("2024-02-12") }
  },
  { 
    name: "Némó", 
    species: "hal", 
    age: 1, 
    tags: ["csendes"],
    health: { weight: 0.1, last_checkup: new Date() }
  }
]);
db.animals.find({ species: "kutya" });
db.animals.find({ age: { $lt: 3 } });
db.animals.updateOne(
  { name: "Pajti" },
  { $push: { tags: "ügyes" }, $inc: { age: 1 } }
);
db.animals.updateOne(
  { name: "Chili" },
  { $set: { "health.weight": 4.8 } }
);
db.animals.deleteOne({ name: "Pikkely" });
db.animals.countDocuments();
