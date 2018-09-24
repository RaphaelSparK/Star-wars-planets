import React from 'react'

import './Planet.css'

const Planet = (props) => {
  return (
    <div className='planet'>
      <div className='planetInfo'>
        <h1>{props.planet.name}</h1>
        <p>Population: <span>{props.planet.population}</span></p>
        <p>Climate: <span>{props.planet.climate}</span></p>
        <p>Terrain: <span>{props.planet.terrain}</span></p>
        <p className='feat'> Featured in <span>{props.planet.films.length}</span> films</p>
      </div>
      <a className='btnNext' onClick={props.onNextPlanet}>Next</a>
    </div>
  )
}

export default Planet
