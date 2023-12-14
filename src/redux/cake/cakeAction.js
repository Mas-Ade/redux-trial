import { BUY_CAKE } from "./cakeType";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

// sample action
// fungsi buycake akan mengembalikan type BUY_CAKE yang akan diproses reducer nantinya
