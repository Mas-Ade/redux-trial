// rootReducer.js
import { combineReducers } from "redux";
import userReducer from "./usernameHookReducer"; // Assume you have this reducer

const rootReducers = combineReducers({
  reducer1: userReducer,
  // Add other reducers if needed
});

export default rootReducers;
