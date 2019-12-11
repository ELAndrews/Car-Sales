import React from "react";
import { connect } from "react-redux";
import { increment } from "../state/actionCreators";

const AddedFeature = (props, { count, increment }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={increment}>
        X
      </button>
      {count}
      {props.feature.name}
    </li>
  );
};

function mapstateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapstateToProps, { increment })(AddedFeature);
