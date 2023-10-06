import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/action";

const App = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
export default App;
