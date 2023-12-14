// Your React component
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/username/usernameAction";

// component start
const Simple = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
    // Dispatch the fetchData action when the component mounts
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Data:</h1>
      {data.map((row, index) => (
        <ul key={index}>
          <li>{row}</li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps, { fetchData })(Simple);
