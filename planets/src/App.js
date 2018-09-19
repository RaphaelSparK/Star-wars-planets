import React, { Component } from 'react'
import './App.css'
import { getAll, getPlanet } from './api/service'
import Planet from './components/Planet'

class App extends Component {
  state = {
    planets: [],
    planet: null,
    planetsCount: 0
  
  }
  
  componentDidMount() {
   this.loadPlanets()
  }

 getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  loadPlanets = () =>{
    getAll()
    .then((planets) => {
      this.setState({
        planets,
        planetsCount: planets.count
      })
      this.showPlanet()
  })}

  showPlanet = () => {
    getPlanet(this.getRandomInt(1, this.state.planetsCount))
    .then((planet) => {
      this.setState({
        planet
      })
  })
  }

  render () {
    return (
      <div className="flexbox-container">
        {this.state.planet && <Planet planet={this.state.planet} onNextPlanet={this.showPlanet}></Planet> }
        <div className='stars'></div>
        <div className='twinkling'></div>
      </div>
    )
  }
}

export default App
