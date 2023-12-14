import { ADD_STATUS } from "../andon/andonType";
import { REMOVE_STATUS } from "../andon/andonType";

const initialState = {
  numOfAbnormal: 0,
};

const andonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STATUS:
      return {
        ...state,
        numOfAbnormal: state.numOfAbnormal + 1,
      };
    case REMOVE_STATUS:
      return {
        ...state,
        numOfAbnormal: state.numOfAbnormal - 1,
      };

    default:
      return state;
  }
};

export default andonReducer;

// sample reducer
// pada reducer terdapat fungsi switch case
// yang mana akan berjalan menurut case yang dipilih
// pada contoh reducer saat ini case BUY_CAKE akan return copy dari state dan fungsi variable cake - 1
// dengan default state
