import { ADD_STATUS, REMOVE_STATUS } from "../andon/andonType";

export const addStatus = () => {
  return {
    type: ADD_STATUS,
  };
};

export const removeStatus = () => {
  return {
    type: REMOVE_STATUS,
  };
};

// sample action
// fungsi buycake akan mengembalikan type BUY_CAKE yang akan diproses reducer nantinya
