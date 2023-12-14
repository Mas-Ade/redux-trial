import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducers from "./andon/combineAndon";

// using redux-thunk
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;

// sample store
// dalam fungsi store akan membawa parameter yaitu reducer yang dibuat
