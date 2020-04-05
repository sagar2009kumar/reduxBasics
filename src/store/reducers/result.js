import * as actionTypes from "../actions";

let initialState = {
  result: [],
};

const resultReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // push is not a good idea because it will just refer to the old array
      // concat returns a new array with the concatenated value
      // Reducer does not work that way if you just state the counter to be
      // state.ctr.counter, you need to pass the counter value from payload
      newState.result = state.result.concat({
        id: Math.random(),
        val: action.counter,
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

export default resultReducer;
