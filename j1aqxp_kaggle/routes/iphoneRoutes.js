const express = require('express');
const router = express.Router();
const Iphone = require('../models/iphone');

router.get('/stats', async (req, res) => {
    try {
        const stats = await Iphone.aggregate([
            {
                $group: {
                    _id: "$country",
                    totalOrders: { $sum: 1 },
                    totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
                    averagePrice: { $avg: "$price" },
                    minSale: { $min: "$price" },
                    maxSale: { $max: "$price" }
                }
            },
            { $sort: { totalRevenue: -1 } }
        ]);
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const iphones = await Iphone.find();
        res.json(iphones);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// [READ] - Összes listázása
router.get('/', async (req, res) => {
    try {
        const iphones = await Iphone.find();
        res.json(iphones);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [CREATE] - Új eladás hozzáadása
router.post('/', async (req, res) => {
    try {
        const newIphone = new Iphone(req.body);
        const saved = await newIphone.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// [UPDATE] - Módosítás ID alapján
router.put('/:id', async (req, res) => {
    try {
        const updated = await Iphone.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Nincs ilyen ID!" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// [DELETE] - Törlés ID alapján
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Iphone.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Nincs ilyen ID!" });
        res.json({ message: "Sikeres törlés!", deleted });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [AGGREGATION] - Statisztikák
router.get('/stats', async (req, res) => {
    try {
        const stats = await Iphone.aggregate([
            {
                $group: {
                    _id: "$country",
                    totalOrders: { $sum: 1 },
                    totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
                    averagePrice: { $avg: "$price" }
                }
            },
            { $sort: { totalRevenue: -1 } }
        ]);
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;