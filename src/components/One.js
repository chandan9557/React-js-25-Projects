//Tast 1. counter increament and decreament
import React, { useState } from "react";
import ClockTime from "./ClockTime";
const One = () => {
  const [count, setCount] = useState(50);
  return (
    <>
    <ClockTime/>
      <button className="btn btn-primary mt-2" onClick={() => setCount(count + 1)}>+</button> <span className="text-danger p-2">{count}</span> 
      <button className="btn btn-primary mt-2" onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default One;
