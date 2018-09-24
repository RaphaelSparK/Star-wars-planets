import { planetsReducer } from './planetsReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  planets: planetsReducer
})
