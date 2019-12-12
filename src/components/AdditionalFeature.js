import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../state/actionCreators";

const AdditionalFeature = ({ feature, buyItem }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={e => buyItem(feature)}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

function mapstateToProps(state) {
  return {};
}

export default connect(mapstateToProps, { buyItem })(AdditionalFeature);
