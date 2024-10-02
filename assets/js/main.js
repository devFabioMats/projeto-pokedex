function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`).join('');
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types)}
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

// convertendo uma lsta de pokemons em uma lista de elementos html
pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
    //pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
})

