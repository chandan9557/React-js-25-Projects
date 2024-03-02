import React, { useState } from "react";

const FourtnPage = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  //console.log(currentItems)

  return (
    <>
      <ul>
        {currentItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {pageNumbers.map((number) => {
       return <li key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </li>;
      })}
    </>
  );
};

export default FourtnPage;
