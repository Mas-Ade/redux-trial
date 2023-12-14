// UserComponent.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStatus, removeStatus } from "../../redux/andon/andonAction";

const PageAndon = () => {
  const [sample, setSample] = useState(true);
  const [sample2, setSample2] = useState(false);
  let isPreviousValueTrue = false;

  const dataAbnormal = useSelector((state) => state.reducer1);
  const dispatch = useDispatch();

  const countAbn = (currentValue) => {
    if (currentValue && !isPreviousValueTrue) {
      dispatch(addStatus());
    }
    if (!currentValue && isPreviousValueTrue) {
      dispatch(removeStatus());
    }
  };

  useEffect(() => {
    countAbn(sample);
    countAbn(sample2);
  }, []);
  // call function reducer to get data state from store

  return (
    <div>
      <div>
        <h1>Trial Home Page Andon</h1>
        <h2> Machine Abnormal : {dataAbnormal.numOfAbnormal} </h2>
        <div>
          <button onClick={() => countAbn(sample)}> add abnormal</button>
        </div>
      </div>
    </div>
  );
};

export default PageAndon;

// sudah berhasil namun harus 1 data spesifik tidak bisa banyak data atau array
