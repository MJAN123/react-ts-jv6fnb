import {combineReducers} from 'redux'
import {helloWorld} from './helloWorld.reducers'
export const reducers= combineReducers({
  helloWorld: helloWorld
})