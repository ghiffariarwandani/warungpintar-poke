const initState = {
  pokemons: [],
  types: [],
  isError: [],
  isLoading: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'RECEIVE_POKEMON':
      if (state.pokemons.length > 0) {
        return {
          ...state,
          pokemons: [...state.pokemons, ...action.payload]
        }
      } else {
        return {
          ...state,
          pokemons: action.payload
        }
      }
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'SET_IS_ERROR':
      return {
        ...state,
        isError: action.payload
      }
    case 'RECEIVE_ONE_POKEMON':
      return {
        ...state,
        pokemon: action.payload
      }
    case 'RECEIVE_TYPES':
      return {
        ...state,
        types: ['all', ...action.payload]
      }
      
  
    default:
      return state
  }
}

export default reducer;