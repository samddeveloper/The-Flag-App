import React from "react";
import "./Dropdown.css";

const Dropdown = ({ selectedRegion, setSelectedRegion }) => {
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Dropdown;
