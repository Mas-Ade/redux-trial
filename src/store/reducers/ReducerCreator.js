import { combineReducers } from "redux";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here if needed
});

export default rootReducer;
