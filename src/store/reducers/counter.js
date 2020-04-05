import * as actionTypes from "../actions";

let initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case actionTypes.INCREMENT:
      newState.counter = state.counter + 1;
      break;
    case actionTypes.SUBTRACT:
      newState.counter = state.counter - action.val;
      break;
    case actionTypes.DECREMENT:
      newState.counter = state.counter - 1;
      break;
    case actionTypes.ADD:
      newState.counter = state.counter + action.val;
      break;
    default:
      break;
  }
  return newState;
};

export default counterReducer;
