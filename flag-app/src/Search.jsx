import React from "react";

const Search = ({ SearchQuerry, setSearchQuerry }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={SearchQuerry}
      onChange={(e) => setSearchQuerry(e.target.value)}
    />
  );
};

export default Search;
