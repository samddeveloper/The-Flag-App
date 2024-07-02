import React from "react";
import "./Search.css";

const Search = ({ SearchQuerry, setSearchQuerry }) => {
  const handleFocus = (e) => {
    e.target.parentNode.classList.add('active-border');
    e.target.previousSibling.classList.add('active');
  };
  
  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.remove('active-border');
      e.target.previousSibling.classList.remove('active');
    }
  };
  return (
    <div className="search-container">
      <label className={`search-placeholder ${SearchQuerry ? 'active' : ''}`} htmlFor="search-input">
        Search for a country
      </label>
      <input
        id="search-input"
        type="text"
        value={SearchQuerry}
        onChange={(e) => setSearchQuerry(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Search;
