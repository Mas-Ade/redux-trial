import "./App.css";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/action";
// import CakeContainer from "./components/cakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import PageAndon from "./components/andon/Page";
import HomePageAndon from "./components/andon/Home_Page";

const App = () => {
  return (
    // connect to store by wrapp all in App using provider
    <Provider store={store}>
      <PageAndon />
      <HomePageAndon />
    </Provider>
  );
};
export default App;
