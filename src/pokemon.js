// Purpose: Fetches a random pokemon from the pokeapi and renders it to the DOM
import fetch from "../node_modules/node-fetch/src/index.js";
const url = "https://pokeapi.co/api/v2/pokemon";
const limit = 151;
const seenPokemon = [];

async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}

function getRandomNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * limit) + 1;
    }
    while (seenPokemon.includes(randomNumber));
    seenPokemon.push(randomNumber);
    return randomNumber;
}

export async function renderRandomPokemon() {
    const randomPokemonNumber = getRandomNumber();
    const pokemon = await fetchData(`${url}/${randomPokemonNumber}`);
    const renderedPokemon = pokemonDetails(pokemon);
    const generatedPokemon = generatePokemonCard(renderedPokemon);
    return generatedPokemon;
}


export function pokemonDetails(pokemon) {
    const { name, id, sprites } = pokemon;
    const pokemonImage = sprites.front_default;
    return {name, id, pokemonImage};
}

function generatePokemonCard({ pokemonImage }) {
   return `
         <img src="${pokemonImage}" id="pokemon" class="w-64 h-64" />
    `
}
