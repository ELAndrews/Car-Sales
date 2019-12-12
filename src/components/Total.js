import React from "react";
import { connect } from "react-redux";

const Total = ({ car, additionalCosts }) => {
  debugger;
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalCosts}</h4>
    </div>
  );
};

function mapStatetoProps(state) {
  return {
    car: state.car,
    additionalCosts: state.additionalCosts
  };
}

export default connect(mapStatetoProps)(Total);
