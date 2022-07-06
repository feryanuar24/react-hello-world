const globalState = {
  totalOrder: 0,
};

const rootReducer = (state = globalState, action) => {
  if (action.type === "PLUS_ORDER") {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  if (action.type === "MINUS_ORDER") {
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1,
      };
    }
    return {
      ...state,
      totalOrder: state.totalOrder,
    };
  }
  return state;
};

export default rootReducer;
