import { put, all, call, select } from "redux-saga/effects";
import { api } from "../services";
import {setMessage} from "../actions/helloWorld.actions";
import ACTIONS from '../../utils/projectName.constants'


export function* getMessage(){
  
  try{

  put (setMessage.pending({message}))
  const res= call (api.getMessage, message)
  put (setMessage.success(res))
  }
  catch{
    yield put (setMessage.error("error"))
  }

}




export default function* rootSaga(){
  yield all ([
    takeEvery(ACTIONS.HELLO_WORLD_BEGIN, getMessage)
  ])
}