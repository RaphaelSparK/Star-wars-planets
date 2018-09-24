import { GET_PLANETS, GET_PLANET } from '../actions/actionTypes'

const initialState = {
  planets: [],
  planet: []
}

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.planets
      }
    case GET_PLANET:
      return {
        ...state,
        planet: action.planet
      }
    default:
      return state
  }
}
