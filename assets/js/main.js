function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`.join(''))} 
                </ol>

                <img src="${pokemon.photo}"
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

