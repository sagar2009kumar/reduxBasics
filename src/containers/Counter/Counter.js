import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
    result: [],
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.strResult.map((value, index) => {
            return (
              <li
                onClick={() => this.props.onDeleteResult(value.id)}
                key={value.id}
              >
                {value.val}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    strResult: state.res.result,
  };
};

// connect is a function that receive the state and returns a function
// and that function receives the class component as the parameter

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
    onStoreResult: (cntr) =>
      dispatch({ type: actionTypes.STORE_RESULT, counter: cntr }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, deleteId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
