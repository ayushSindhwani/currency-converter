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
      />
    </div>
  );
}

export default USD;
