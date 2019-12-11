import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../state/actionCreators";

const AdditionalFeature = (props, { buyItem }) => {
  const handleClick = event => {
    buyItem(event.target.value);
    console.log(event.target.value);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick} value={props.feature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

function mapstateToProps(state) {
  return {
    features: state.features
  };
}

export default connect(mapstateToProps, { buyItem })(AdditionalFeature);
