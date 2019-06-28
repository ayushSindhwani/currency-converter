import React from "react";

function USD({ usd, handleUSD }) {
  return (
    <div className="usd row">
      <div className="label">USD</div>
      <input
        type="text"
        className="custom-input"
        value={usd}
        onChange={handleUSD}
        placeholder="Enter USD value here"
      />
    </div>
  );
}

export default USD;
