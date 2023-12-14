import { BUY_CAKE } from "./cakeType";
const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;

// sample reducer
// pada reducer terdapat fungsi switch case
// yang mana akan berjalan menurut case yang dipilih
// pada contoh reducer saat ini case BUY_CAKE akan return copy dari state dan fungsi variable cake - 1
// dengan default state
