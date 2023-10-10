// action yang dibuat untuk terhubung ke store

// action add todo dengan parameter/argument data
// payload adalah data yang dibawa reducer ke store
export const addTodo = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
export const delTodo = (data) => {
  return {
    type: "DEL",
    palyload: data,
  };
};
