import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../state/actionCreators";

const AddedFeature = ({ feature, removeFeature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={e => removeFeature(feature)}>
        X
      </button>
      {feature.name}
    </li>
  );
};

function mapstateToProps(state) {
  return {};
}

export default connect(mapstateToProps, { removeFeature })(AddedFeature);
