import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// create store with root reducer and composeWithDevTools
const store = createStore(rootReducer, composeWithDevTools());

export default store;
