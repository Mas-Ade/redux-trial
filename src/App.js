import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/action";

const App = () => {
  const counter = useSelector((state) => state.numberOfStock);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <h6>Tambah</h6>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h6>Kurang</h6>
      <button onClick={() => dispatch(decrement())}>Increment</button>
    </div>
  );
};
export default App;
