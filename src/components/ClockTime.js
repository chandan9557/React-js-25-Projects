import "../App.css";
import React, { useState } from "react";
const ClockTime = () => {
  const clockTime = new Date().toLocaleTimeString();
  const [clock, setClockTime] = useState(clockTime);

  let handleFun = () => {
    const clockTime = new Date().toLocaleTimeString();
    setClockTime(clockTime);
  };
  setInterval(handleFun, 1000);
  return (
    <>
      <div className="d-flex justify-content-end float-end text-danger mt-1 p-1">
        <h2>{clock}</h2>
      </div>
    </>
  );
};

export default ClockTime;
