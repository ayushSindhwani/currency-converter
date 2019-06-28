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
      />
    </div>
  );
}

export default INR;
