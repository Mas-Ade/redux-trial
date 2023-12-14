// UserComponent.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStatus } from "../../redux/andon/andonAction";

const HomePageAndon = () => {
  const dataAbnormal = useSelector((state) => state.reducer1);
  const dispatch = useDispatch();
  // call function reducer to get data state from store

  return (
    <div>
      <div>
        <h2>Trial Home Page Andon</h2>
        <h1> Machine Abnormal : {dataAbnormal.numOfAbnormal} </h1>
      </div>
    </div>
  );
};

export default HomePageAndon;

// sudah berhasil namun harus 1 data spesifik tidak bisa banyak data atau array
