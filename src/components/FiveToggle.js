import React, { useState } from "react";

const FiveToggle = () => {
  const [check, setCheck] = useState(false);
  return (
    <>
    <h1>Toggle</h1>
      <label>
        <input type="checkbox" onChange={(e) => setCheck(!check)} />
      </label>
      <p>{check ? "on" : "off"}</p>
    </>
  );
};

export default FiveToggle;
