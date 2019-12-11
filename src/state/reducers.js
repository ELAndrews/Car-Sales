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
export function featuresReducer(features = initialFeatures, action) {
  switch (action.type) {
    case types.BUYITEM:
      return [...features, action.payload.feature];
    case types.REMOVEFEATURE:
      return features.filter(item => item.id === action.payload.id);
    default:
      return features;
  }
}
