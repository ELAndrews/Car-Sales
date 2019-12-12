import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import Counter from "./components/Counter";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";

const App = props => {
  const mainReducer = combineReducers({
    car: reducers.carReducer,
    additionalFeatures: reducers.additionalFeaturesReducer,
    additionalCosts: reducers.additionalCostsReducer
  });

  const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </Provider>
  );
};

export default App;
