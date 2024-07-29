import React from "react";
import "./Search.css";

const Search = ({ searchQuery, setSearchQuery }) => {
  // Hanterar när input-fältet får fokus
  const handleFocus = (e) => {
    e.target.parentNode.classList.add('active-border'); // Lägg till aktiv border på föräldern
    e.target.previousSibling.classList.add('active'); // Gör placeholder aktiv
  };
  
  // Hanterar när input-fältet tappar fokus
  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.remove('active-border'); // Ta bort aktiv border om fältet är tomt
      e.target.previousSibling.classList.remove('active'); // Inaktivera placeholder
    }
  };

  // Hanterar ändringar i sökfältet
  const handleChange = (e) => {
    setSearchQuery(e.target.value); // Uppdaterar sökfrågan med det nya värdet
    console.log("Search Query:", e.target.value); // Loggar det inmatade värdet
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
        onChange={handleChange} // Uppdaterar sökfrågan när värdet ändras
        onFocus={handleFocus} // Hanterar fokus
        onBlur={handleBlur} // Hanterar att fältet tappar fokus
      />
    </div>
  );
};

export default Search;
