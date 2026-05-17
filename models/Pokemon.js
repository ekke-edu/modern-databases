const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    pokedex_number: Number,
    pokemon_name: { type: String, required: true },
    type_1: String,
    type_2: String,
    hit_points: Number,
    attack: Number,
    defense: Number,
    special_attack: Number,
    special_defense: Number,
    speed: Number,
    generation: Number,
    legendary: Boolean
});

module.exports = mongoose.model('Pokemon', PokemonSchema, 'pokemons');