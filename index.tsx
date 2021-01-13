import React, { Component } from "react";
import createSagaMiddleware from 'redux-saga'
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./assets/scss/style.scss";
import HelloWorld from "./components/HelloWorld";
import { reducers } from "./store/reducers";
import rootSaga from './store/sagas'


const createSaga= createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(createSaga));

createSaga.run(rootSaga)


render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.getElementById("root")
);
