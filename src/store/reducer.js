import * as actionTypes from "../store/actions";

let initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
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
    case actionTypes.STORE_RESULT:
      // push is not a good idea because it will just refer to the old array
      // concat returns a new array with the concatenated value
      newState.result = state.result.concat({
        id: Math.random(),
        val: state.counter,
      });
      break;
    case actionTypes.DELETE_RESULT:
      let id = action.deleteId;
      let newResultArr = state.result.filter((newResult) => {
        if (newResult.id === id) {
          return false;
        } else {
          return true;
        }
      });
      newState.result = newResultArr;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
