import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import Counter from "./components/Counter";

import * as actions from "./state/actionCreators";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";

const App = props => {
  // const initialState = {
  //   count: 0
  //   car: {
  //     price: 26395,
  //     name: "2019 Ford Mustang",
  //     image:
  //       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  //     features: []
  // }
  // };

  const mainReducer = combineReducers({
    count: reducers.countReducer,
    car: reducers.carReducer
    // additionalFeatures: reducers.additionalFeaturesReducer
  });

  const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // const removeFeature = item => {};

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   props.buyItem(item);
  //   console.log(`event happened`, item);
  // };

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <Counter />
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </Provider>
  );
};

export default App;
