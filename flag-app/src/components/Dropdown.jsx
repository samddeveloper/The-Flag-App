import React from "react";
import "./Dropdown.css";

const Dropdown = ({ selectedRegion, setSelectedRegion }) => {
  const handleFocus = (e) => {
    e.target.parentNode.classList.add("active-border");
  };

  const handleBlur = (e) => {
    e.target.parentNode.classList.remove("active-border");
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <p className="region-title">Region</p>
      <select
        value={selectedRegion}
        onChange={handleRegionChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Dropdown;
