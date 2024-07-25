import React from "react";
import "./Search.css";

const Search = ({ searchQuery, setSearchQuery }) => {
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

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    console.log("Search Query:", e.target.value); // Kontrollera värdet som skrivs in
  };

  return (
    <div className="search-container">
      <label className={`search-placeholder ${searchQuery ? 'active' : ''}`} htmlFor="search-input">
        Search for a country
        </label>
      <input
        id="search-input"
        type="text"
        value={searchQuery}
        onChange={handleChange} // Anropa handleChange när värdet ändras
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Search;
