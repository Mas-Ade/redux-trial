// Your React component
// script logic untuk penambahan total status mesin andon abnormal
import React, { useEffect, useState } from "react";

// component start
const Trial = () => {
  let [nilai, setNilai] = useState(0);
  let [status, setStatus] = useState(false);

  // Fungsi untuk menghitung perubahan
  const countChanges = (currentValue) => {
    // Jika nilai sebelumnya adalah false dan nilai saat ini adalah true
    if (!status && currentValue) {
      setStatus(true);
      setNilai(nilai + 1);
      //   isPreviousValueTrue = true;
      console.log(status);
    }

    // Jika nilai sebelumnya adalah true dan nilai saat ini adalah false
    if (status && !currentValue) {
      setNilai(nilai - 1);
      setStatus(false);
      //   isPreviousValueTrue = false;
      console.log(status);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>testing logic</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => countChanges(true)}>Increment</button>
        <button onClick={() => countChanges(false)}>decrement</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>{nilai}</p>
      </div>
    </div>
  );
};

export default Trial;
