// actions.js
import axios from "axios";

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

const fetchUserSuccess = (datas) => ({
  type: FETCH_USER_SUCCESS,
  payload: datas,
});

const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

// Thunk action creator
export const fetchUserData = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());

    try {
      const response = await axios.get(
        "http://10.202.100.84:3001/api/getdat_andonlinessnt45t"
      );
      const user = response.data.data;
      dispatch(fetchUserSuccess(user));
      console.log(user);
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};
