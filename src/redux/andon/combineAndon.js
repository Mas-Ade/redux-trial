// rootReducer.js
import { combineReducers } from "redux";
import andonReducer from "./andonReducer";

const rootReducers = combineReducers({
  reducer1: andonReducer,
  // Add other reducers if needed
});

export default rootReducers;
