import React, { useState } from "react";

const NineBgChng = () => {
  const [backgroundColor, setBackgroundColor] = useState("yellow");
  const handleClick = () => {
    const newChange = backgroundColor === "yellow" ? "blulight" : "red";
    setBackgroundColor(newChange);
  };
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          backgroundColor,
          width: "500px",
          height: "500px",
          cursor: "pointer",
        }}
      >
        <h3>BG Change with Click </h3>
      </div>
    </>
  );
};

export default NineBgChng;
