
const api = 'https://swapi.co/api'

const headers = {
  'Accept': 'application/json'
}

var options = { method: 'GET',
  headers: headers,
  mode: 'cors'
}

export const getAll = () =>
  fetch(`${api}/planets/`, options)
    .then(res => res.json())
    .then(data => data)

export const getPlanet = (id) =>
  fetch(`${api}/planets/${id}/`, options)
    .then(res => res.json())
    .then(data => data)
