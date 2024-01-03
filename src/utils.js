import fetch from "../node_modules/node-fetch/src/index.js";
const url = "https://pokeapi.co/api/v2/pokemon";
const limit = 151;

async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}

function getRandomNumber() {
    return Math.floor(Math.random() * limit) + 1;
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
    const pokemonImage = sprites.front_default || 'https://via.placeholder.com/150'; 
    return {name, id, pokemonImage};
}

function generatePokemonCard({ pokemonImage }) {
   return `
    <img src="${pokemonImage}"id="pokemon" class="w-64 h-64" />
`
}
