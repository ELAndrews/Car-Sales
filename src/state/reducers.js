import * as types from "./actionTypes";

const initialState = {
  additionalCosts: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export function carReducer(car = initialState.car, action) {
  switch (action.type) {
    case types.BUYITEM:
      return {
        ...car,
        features: [...car.features, action.payload.feature]
      };
    case types.REMOVEFEATURE:
      return {
        ...car,
        features: [
          ...car.features.filter(
            feature => feature.id !== action.payload.feature.id
          )
        ]
      };
    default:
      return car;
  }
}

export function additionalFeaturesReducer(
  additionalFeatures = initialState.additionalFeatures
) {
  return additionalFeatures;
}

export function additionalCostsReducer(
  additionalCosts = initialState.additionalCosts,
  action
) {
  switch (action.type) {
    case types.BUYITEM:
      return additionalCosts + action.payload.feature.price;
    case types.REMOVEFEATURE:
      return additionalCosts - action.payload.feature.price;
    default:
      return additionalCosts;
  }
}
