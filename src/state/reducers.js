import * as types from "./actionTypes";

const initialCount = 0;
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    default:
      return count;
  }
}

const initialFeatures = [];
const additionalFeatures = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

export function featuresReducer(features = initialFeatures, action) {
  switch (action.type) {
    case types.BUYITEM:
      return additionalFeatures.map(
        curr => console.log(curr)
        // curr.name === action.payload ? features + curr : curr
      );
    case types.REMOVEFEATURE:
      return features.filter(item => item.id === action.payload.id);
    default:
      return features;
  }
}
