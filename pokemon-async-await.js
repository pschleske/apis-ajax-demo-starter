// const { default: axios } = require("axios");
const button = document.getElementById("get-pokemon");

async function getPokemon() {
    console.log("hey")
    const numPokemon = document.getElementById("num-pokemon").value;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`;

    const { data } = await axios.get(url);

    data.results.forEach(pokemon => {
        const item = document.createElement("li");
        item.innerText = pokemon.name;
        document.getElementById("pokemon-list").appendChild(item);
    });
}

button.addEventListener("click", getPokemon)