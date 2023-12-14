// MyComponent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "../../redux/username/reduxToolkit/datasSlice";

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.name);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  if (loading === "loading") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <p>{data.name}</p>
    </div>
  );
};

export default MyComponent;
