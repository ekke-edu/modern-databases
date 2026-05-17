const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/PokemonController');
const Pokemon = require('../models/Pokemon');

/**
 * @swagger
 * /api/pokemon/stats:
 *   get:
 *     summary: Pokémon típusok statisztikái
 *     description: Típusonkénti összesített adatok lekérése a Pokedexből.
 *     responses:
 *       200:
 *         description: Sikeres válasz az aggregált adatokkal.
 */
router.get('/stats', pokemonController.getStats);

/**
 * @swagger
 * /api/pokemon/search:
 *   get:
 *     summary: Keresés név alapján
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: A keresett pokémon neve
 *     responses:
 *       200:
 *         description: A talált pokémonok listája
 */
router.get('/search', async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.json([]);
        }

        const results = await Pokemon.find({
            pokemon_name: new RegExp(name, 'i')
        }).limit(10);

        res.json(results);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;