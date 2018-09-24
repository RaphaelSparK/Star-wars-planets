import { GET_PLANETS, GET_PLANET } from '../actions/actionTypes'

import * as API from '../api/service'

export function getPlanets (planets) {
  return {
    type: GET_PLANETS,
    planets
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    error
  }
}

export function fetchGetPlanets () {
  return function (dispatch) {
    return API.getAll().then(
      planets => dispatch(getPlanets(planets))
    )
  }
}

export function getPlanet (planet) {
  return {
    type: GET_PLANET,
    planet
  }
}

export function fetchGetPlanet (id) {
  return function (dispatch) {
    return API.getPlanet(id).then(
      planet => dispatch(getPlanet(planet))
    )
  }
}
