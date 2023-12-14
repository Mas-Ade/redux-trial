import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./usernameType";

const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

// special action creator function
// action yang return function bukan hanya type untuk switch reducer
const fetchData = () => {
  return (dispatch) => {
    // set loading data to
    dispatch(fetchDataRequest());

    // Simulate an asynchronous operation (e.g., API call)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Dispatch a success action with the retrieved data
        const users = response.data.map((users) => users.name);
        // const users = response.data.map((users) => users.name);
        dispatch(fetchDataSuccess(users));
        console.log("fetch data");
      })
      .catch((error) => {
        // Dispatch a failure action with the error
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export { fetchData };

// .get("https://jsonplaceholder.typicode.com/users")
