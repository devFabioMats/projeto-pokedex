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
                    ${convertPokemonTypesToLi(pokemon.types).join}  
                </ol>

                <img src="${pokemon.sprites.other.dream_world.front_default}"
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

