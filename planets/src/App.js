import React, { Component } from 'react'
import './App.css'
import styled from 'styled-components';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGetPlanets, fetchGetPlanet } from './actions'

import Planet from './components/Planet'
import Loader from './components/Loader'

import { getRandomInt } from './helpers/util'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Stars = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: #000 url("https://image.ibb.co/mjnygo/stars.png") repeat top center;
`;

const Twinkling = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: transparent url("https://image.ibb.co/ir1DE8/twinkling.png") repeat top center;
  animation: move-twink-back 200s linear infinite;
`;


class App extends Component {
state = {
  loading: true,
}

  componentDidMount () {
    this.props.fetchGetPlanets().then(() => {
      this.getPlanet()
    })
  }

  getPlanet () {
    this.setState({loading: true})
    this.props.fetchGetPlanet(getRandomInt(1, this.props.planets.count)).then(() => {this.setState({loading: false})})
  }

  showPlanetInfo () {
    return this.props.planet.length !== 0 && <Planet planet={this.props.planet} onNextPlanet={() => this.getPlanet()} />
  }

  render () {
    return (
      <Container>
        {this.state.loading ? <Loader /> : this.showPlanetInfo()  }
        <Stars />
        <Twinkling />
      </Container>
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
