import React from "react";

const FourDis = () => {
  const data = ["item1", "item2", "item3", "item4", "item5", "item6"];
  return (
    <ul>
      <h1>Display List</h1>
      {data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default FourDis;
