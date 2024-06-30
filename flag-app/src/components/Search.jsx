import React from "react";
import "./Search.css";


const Search = ({ SearchQuerry, setSearchQuerry }) => {
  return (
    <div className="search-container">
      <input
      type="text"
      placeholder="Search for a country..."
      value={SearchQuerry}
      onChange={(e) => setSearchQuerry(e.target.value)}
    />
    </div>
  );
};

export default Search;
