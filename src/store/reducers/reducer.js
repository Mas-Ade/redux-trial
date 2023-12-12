// const reducer = (state,action)

const initialState = {
  numofCake: 10,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numofCakes: state.numofCake,
      };

    default:
      return state;
  }
};
