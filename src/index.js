import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

// const initialState = {
//   count: 0
//   features: []
// };

const mainReducer = combineReducers({
  count: reducers.countReducer,
  features: reducers.featuresReducer
});

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
