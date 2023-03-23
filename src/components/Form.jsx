import React, { useState } from "react";

function Form({ onSearch, onTypeChange }) {
  const [searchValue, setSearchValue] = useState("Liza");
  const [typeValue, setTypeValue] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   onSearch(searchValue);
  // };

  const handleTypeChange = (e) => {
    e.preventDefault();
    setTypeValue(e.target.value);
    onTypeChange(e.target.value);
  };

  return (
    <div>
      <input className="input"
        type="text"
        value={searchValue}
        onChange={(e) => { e.preventDefault(); setSearchValue(searchValue => e.target.value); onSearch(e.target.value);console.log('searchValue',searchValue)}}
      />
      <select className="value" value={typeValue} onChange={handleTypeChange}>
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="game">Game</option>
      </select>
     
    </div>
  );
}

export default Form;
