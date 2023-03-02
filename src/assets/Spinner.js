import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="lds-dual-ring spinner">
      <img
        className="spinner-img"
        src="https://cdn-icons-png.flaticon.com/512/2527/2527964.png"
        alt=""
      />
    </div>
  );
};

export default Spinner;
