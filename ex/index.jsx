import React from "react";
import ReactDom from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import Field from "./field";
import fieldReducer from "./fieldReducer";

// Reducers são funções puras
const reducers = combineReducers({
  field: fieldReducer
});

ReactDom.render(
  // Dentro do "provider" terá o método "createStore" onde passa todos os "reducers".
  <Provider store={createStore(reducers)}>
    <Field initialValue="Teste" />
  </Provider>,
  document.getElementById("app"));