const axios = require('axios');

axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
.then(({data}) => {
    let promises = [];
    data.results.forEach(el => {
        promises.push(getPokemonData(el.url))
    })
    getAll(promises)
})
.catch(console.log)



function getPokemonData(url){
    return axios.get(url)
}

function getAll(promises){
    axios.all(promises)
        .then(data => {
            let pokemons = data
            pokemons.forEach(el => {
                console.log(el.data)
            })
        })
}