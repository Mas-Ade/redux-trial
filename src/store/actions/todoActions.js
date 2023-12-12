// action yang dibuat untuk terhubung ke store

// action add todo dengan parameter/argument data
// payload adalah data yang dibawa reducer ke store
export const addTodo = (data) => {
  return {
    // type action ADD
    type: "ADD",
    // data yang dibawa dari action ADD
    payload: data,
  };
};
export const delTodo = (data) => {
  return {
    // type action DEL
    type: "DEL",
    // data yang dibawa dari action DEL
    palyload: data,
  };
};

export const buyCake = () => {
  return {
    type: "BUY_CAKE",
    info: "First redux action",
  };
};
