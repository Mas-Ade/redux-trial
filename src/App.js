import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/action";
// import CakeContainer from "./components/cakeContainer";
import { Provider } from "react-redux";
import store from "./store";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    // connect to store by wrapp all in App using provider
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
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
