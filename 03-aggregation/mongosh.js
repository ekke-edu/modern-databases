db.animals.aggregate([
  { $group: { 
      _id: "$species", 
      totalCount: { $sum: 1 },
      avgAge: { $avg: "$age" }
  }},
  { $sort: { totalCount: -1 } }
]);

db.animals.aggregate([
  { $unwind: "$tags" },
  { $group: { 
      _id: "$tags", 
      count: { $sum: 1 } 
  }},
  { $sort: { count: -1 } }
]);

db.animals.aggregate([
  { $match: { tags: "lusta" } },
  { $project: { 
      _id: 0, 
      allat_neve: { $toUpper: "$name" }, 
      suly_kg: "$health.weight",
      tipus: "$species"
  }},
  { $limit: 5 }
]);
