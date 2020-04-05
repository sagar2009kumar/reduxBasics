let initialState = {
  counter: 0,
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
    default:
      break;
  }
  return newState;
};

export default reducer;
