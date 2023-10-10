const initialState = {
  todos: [
    {
      id: 1,
      title: "Cakes",
      stock: 10,
      completed: false,
    },
    {
      id: 2,
      title: "Ice Cream",
      stock: 20,
      completed: false,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, payload],
        // ...(state.todos.stock + 1),
      };
    case "DEL":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return {
        ...state,
      };
  }
};
