import React from 'react';

const Dropdown = ({ selectedRegion, setSelectedRegion }) => {
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <select value={selectedRegion} onChange={handleRegionChange}>
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Dropdown;