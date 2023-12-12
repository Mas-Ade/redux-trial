import axios from "axios";

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

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

const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    // Simulate an asynchronous operation (e.g., API call)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Dispatch a success action with the retrieved data
        const users = response.data.map((users) => users.name);
        dispatch(fetchDataSuccess(users));
      })
      .catch((error) => {
        // Dispatch a failure action with the error
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export { fetchData };
