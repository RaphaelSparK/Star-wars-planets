import React from 'react'
import loadingImage from '../r2d2.svg'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loadingImage} className='logoLoader' alt='Searching the planet...' /> <br /><br />
      Searching the planet
    </div>
  )
}

export default Loader
