import "./App.css";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/action";
// import CakeContainer from "./components/cakeContainer";
import { Provider } from "react-redux";
import store from "./store";
// import TodoApp from "./components/TodoApp";
// import Simple from "./components/Simple";
import Trial from "./components/Trial";
import Simple from "./components/Simple";

const App = () => {
  return (
    // connect to store by wrapp all in App using provider
    <Provider store={store}>
      <Simple />
    </Provider>
    // <div>
    //   <h1>Counter: {counter}</h1>
    //   <h6>Tambah</h6>
    //   <button onClick={() => dispatch(increment())}>Increment</button>
    //   <h6>Kurang</h6>
    //   <button onClick={() => dispatch(decrement())}>Increment</button>
    // </div>
  );
};
export default App;
