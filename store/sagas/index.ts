import {all, spawn} from 'redux-saga/effects'
import helloWorldSagas from './helloWorld.sagas';

export default function* rootSaga(){
  yield all ([spawn(helloWorldSagas)])
}