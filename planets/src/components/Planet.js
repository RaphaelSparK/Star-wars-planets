import React from 'react'

import './Planet.css'

const Planet = (props) => {
  return (
    <div className='planet'>
      <h1>{props.planet.name}</h1>
      <p>Population: {props.planet.population}</p>
      <p>Climate: {props.planet.climate}</p>
      <p>Terrain: {props.planet.terrain}</p>
      <div> Featured in {props.planet.films.length} films</div>
      <a className='btnNext' onClick={props.onNextPlanet}>Next</a>
    </div>
  )
}

export default Planet
