import React, { useState } from "react";

const ThrtnSrch = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterItems = items.filter((item) => {
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filterItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ThrtnSrch;
