const initialState = {
  numberOfStock: 10,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        numberOfStock: state.numberOfStock + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        numberOfStock: state.numberOfStock - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
