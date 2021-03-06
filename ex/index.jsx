import React from "react";
import ReactDom from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import counterReducers from './counterReducers'
import Counter from './counter'

// Reducers são funções puras
const reducers = combineReducers({
  counter: counterReducers
});

ReactDom.render(
  // Dentro do "provider" terá o método "createStore" onde passa todos os "reducers".
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>,
  document.getElementById("app"));