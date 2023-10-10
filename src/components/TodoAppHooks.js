import React from "react";
import { connect } from "react-redux";
import { addTodo, delTodo } from "../store/actions/todoActions";
import { useSelector, useDispatch } from "react-redux";

const TodoApp = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const addNewTodo = () => {
    const data = {
      id: 3,
      title: "title three",
      stock: 10,
      complete: false,
    };
    dispatch(addTodo(data));
  };

  return (
    <div className="App">
      <h1>todo app</h1>
      <button onClick={addNewTodo}>add</button>

      {todos.map((todo, index) => (
        <div key={index}>
          <p>Item : {todo.title}</p>
          <p>Stock : {todo.stock}</p>
          <button onClick={() => dispatch(delTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos,
});

// export default connect(mapStateToProps, { addTodo, delTodo })(TodoApp);
export default TodoApp;
