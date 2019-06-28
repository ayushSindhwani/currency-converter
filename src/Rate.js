import React from "react";

function Rate({ rate, handleRate }) {
  return (
    <div className="rate row">
      <div className="label">
        Rate <i>(1 USD = {rate} INR)</i>
      </div>
      <input
        type="text"
        className="custom-input"
        value={rate}
        onChange={handleRate}
      />
    </div>
  );
}

export default Rate;
