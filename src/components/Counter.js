import React from "react";
import { connect } from "react-redux";
import { increment } from "../state/actionCreators";

const Counter = ({ count, increment }) => {
  return (
    <div>
      <p>This count is {count}</p>
      <button className="button" onClick={increment}>
        Add
      </button>
    </div>
  );
};

function mapstateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapstateToProps, { increment })(Counter);
