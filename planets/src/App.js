import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGetPlanets, fetchGetPlanet } from './actions'

import Planet from './components/Planet'

import { getRandomInt } from './helpers/util'

class App extends Component {
  componentDidMount () {
    this.props.fetchGetPlanets().then(() => {
      this.getPlanet()
    })
  }

  getPlanet () {
    this.props.fetchGetPlanet(getRandomInt(1, this.props.planets.count))
  }

  render () {
    return (
      <div className='flexbox-container'>
        {this.props.planet.length !== 0 && <Planet planet={this.props.planet} onNextPlanet={() => this.getPlanet()} /> }
        <div className='stars' />
        <div className='twinkling' />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  planets: store.planets.planets,
  planet: store.planets.planet
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetPlanets, fetchGetPlanet }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
