let initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  if (action.type === "INCREMENT") {
    newState.counter = state.counter + 1;
  }
  if (action.type === "SUBTRACT") {
    newState.counter = state.counter - 1;
  }
  if (action.type === "DECREMENT") {
    newState.counter = state.counter - 1;
  }
  if (action.type === "ADD") {
    newState.counter = state.counter + 1;
  }
  return newState;
};

export default reducer;
