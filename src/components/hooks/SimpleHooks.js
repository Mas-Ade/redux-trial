// UserComponent.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/username/hooks/usernameHookAction";

const UserComponent = () => {
  const dispatch = useDispatch();
  // call function reducer to get data state from store
  const userData = useSelector((state) => state.reducer1);
  const datas = useSelector((state) => state.reducer1.datas);

  // get specific data from datas
  const specificItem = datas.map((item) => item.machine_stts);

  useEffect(() => {
    // Dispatch the Thunk action creator when the component mounts
    // dispatch function khusus dari action dalam hal ini yg telah dibuat adalah fungsi fetchUserData()
    dispatch(fetchUserData()); // Assuming 123 is the user ID
  }, []);

  if (userData.loading) {
    return <p>Loading...</p>;
  }

  if (userData.error) {
    return <p>Error: {userData.error}</p>;
  }

  return (
    <div>
      <div></div>
      <h2>User Information:</h2>
      <p> data : </p>
      <p>{specificItem[0]}</p>
      <p>{specificItem[1]}</p>
      <p>{specificItem[2]}</p>
      <p>{specificItem[3]}</p>
    </div>
  );
};

export default UserComponent;

// sudah berhasil namun harus 1 data spesifik tidak bisa banyak data atau array
