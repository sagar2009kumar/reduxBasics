let initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "INCREMENT":
      newState.counter = state.counter + 1;
      break;
    case "SUBTRACT":
      newState.counter = state.counter - action.val;
      break;
    case "DECREMENT":
      newState.counter = state.counter - 1;
      break;
    case "ADD":
      newState.counter = state.counter + action.val;
      break;
    case "STORE_RESULT":
      // push is not a good idea because it will just refer to the old array
      // concat returns a new array with the concatenated value
      newState.result = state.result.concat({
        id: new Date(),
        val: state.counter,
      });
      break;
    case "DELETE_RESULT":
      newState.counter = 1;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
