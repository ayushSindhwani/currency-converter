import React from "react";

function INR({ inr, handleINR }) {
  return (
    <div className="inr row">
      <div className="label">INR</div>
      <input
        type="text"
        className="custom-input"
        value={inr}
        onChange={handleINR}
        placeholder="Enter INR value here"
      />
    </div>
  );
}

export default INR;
