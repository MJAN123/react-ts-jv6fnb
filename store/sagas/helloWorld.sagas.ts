import { call, takeEvery, put, all } from "redux-saga/effects";

import { setMessage } from "../actions/helloWorld.actions";
import ACTIONS from "../../utils/projectName.constants";
import { api } from "../services/api";

export function* getMessage({ message }) {
  try {
    put(setMessage.pending());
    debugger
    const res = call(api.getMessage, message);

    put(setMessage.success(res));
  } catch {
    yield put(setMessage.error("error"));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(ACTIONS.HELLO_WORLD_BEGIN, getMessage)]);
}
