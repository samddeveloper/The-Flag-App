import React from "react";
import "./Search.css";

const Search = ({ SearchQuerry, setSearchQuerry }) => {
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
        onFocus={(e) => e.target.previousSibling.classList.add('active')}
        onBlur={(e) => {
          if (!e.target.value) {
            e.target.previousSibling.classList.remove('active');
          }
        }}
      />
    </div>
  );
};

export default Search;
