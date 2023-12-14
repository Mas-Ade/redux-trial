// reducer.js
const initialState = {
  datas: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_USER_SUCCESS":
      return { ...state, loading: false, datas: action.payload, error: null };
    case "FETCH_USER_FAILURE":
      return { ...state, loading: false, datas: [], error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
