db.owners_embedded.insertOne({
  name: "Minta Mate",
  address: "Budapest, Fő utca 1.",
  pets: [
    { name: "Pajti", species: "kutya", age: 3 },
    { name: "Chili", species: "macska", age: 2 }
  ]
});

const pajtiId = ObjectId(); 
db.pets.insertOne({
  _id: pajtiId,
  name: "Pajti",
  species: "kutya"
});

db.owners_linked.insertOne({
  name: "Test Elek",
  pet_ids: [ pajtiId ]
});

db.owners_linked.aggregate([
  { $match: { name: "Test Elek" } },
  {
    $lookup: {
      from: "pets",
      localField: "pet_ids",
      foreignField: "_id",
      as: "pet_details"
    }
  }
]);
