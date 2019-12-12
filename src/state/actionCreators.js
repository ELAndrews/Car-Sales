import * as types from "./actionTypes";

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function buyItem(feature) {
  return {
    type: types.BUYITEM,
    payload: { feature }
  };
}

export function removeFeature(feature) {
  return {
    type: types.REMOVEFEATURE,
    payload: { feature }
  };
}
