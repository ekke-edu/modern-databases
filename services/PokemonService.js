const Pokemon = require('../models/Pokemon');

exports.getAllPokemons = async () => {
    return await Pokemon.find();
};

exports.getPokemonById = async (id) => {
    return await Pokemon.findById(id);
};

exports.createPokemon = async (pokemonData) => {
    const pokemon = new Pokemon(pokemonData);
    return await pokemon.save();
};

exports.updatePokemon = async (id, pokemonData) => {
    return await Pokemon.findByIdAndUpdate(id, pokemonData, { new: true });
};

exports.deletePokemon = async (id) => {
    return await Pokemon.findByIdAndDelete(id);
};