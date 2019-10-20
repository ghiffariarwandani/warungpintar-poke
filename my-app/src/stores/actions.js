import axios from 'axios'
import pokeapi from '../services/api'


function getData(url){
  return axios.get(url)
}

export const fetchPokemon = (offset) => {
  return dispatch => {
    pokeapi
      .get(`/pokemon?offset=${offset}&limit=20`)
      .then(({ data }) => {
        let promises = [];
        data.results.forEach(el => {
          promises.push(getData(el.url))
        })
        dispatch(getAllPoke(promises))
      })
      .catch(console.log)
  }
}

export const getAllPoke = (pokemonUrl) => {
  return dispatch => {
    axios
      .all(pokemonUrl)
      .then(data => {
        let ispokemon = []
        data.forEach(el => {
          pokemon = {
          id: el.data.id,
          name: el.data.name,
          img: el.data.sprites.front_default,
          weight: el.data.weight,
          height: el.data.height,
          move: el.data.moves[0].move.name,
          base: el.data.base_experience,
          ability: el.data.abilities,
          types: el.data.types
          }
          ispokemon.push(pokemon)
        })
        dispatch(receivePoke(ispokemon))
      })
      .catch(console.log)
  }
}

export const receivePoke = (ispoke) => {
  return ({
    type: 'RECEIVE_POKEMON',
    payload: ispoke
  })
}

export const fetchTypes = () => {
  return dispatch => {
    pokeapi
      .get('/type')
      .then(({ data }) => {
        let istypes = [];
        data.results.forEach(el => {
          istypes.push(el.name)
        })
        dispatch(receiveTypes(istypes))
      })
      .catch(console.log)
  }
}

export const receiveTypes = (payload) => {
  return {
    type: 'RECEIVE_TYPES',
    payload
  }
}

