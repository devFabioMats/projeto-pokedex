const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


fetch(url)
    .then((response) => response.json())   // funcao com sintaxe reduzida // retorna uma promessa
    .then((jsonBody) => console.log(jsonBody)) // ja vou receber o meu body convertido
    .catch((error) => console.log(error))
    .finally(function () {
        console.log('Requisição concluída!')
    })



const x = 10 + 10
console.log(x)