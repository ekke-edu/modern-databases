const Pokemon = require('../models/Pokemon');

exports.getStats = async (req, res) => {
    try {
        const stats = await Pokemon.aggregate([
            {
                $group: {
                    _id: "$type_1", 
                    count: { $count: {} },       
                    avgAttack: { $avg: "$attack" },
                    maxDefense: { $max: "$defense" },  
                    minSpeed: { $min: "$speed" },          
                    totalHP: { $sum: "$hit_points" }
                }
            },
            { $sort: { avgAttack: -1 } }
        ]);
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};