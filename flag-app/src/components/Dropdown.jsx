import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";
import arrowDownLight from "../assets/arrow-down-light.svg";
import arrowDownDark from "../assets/arrow-down-dark.svg";

const Dropdown = ({ selectedRegion, setSelectedRegion, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const arrowSrc = currentTheme === "dark" ? arrowDownLight : arrowDownDark;

  const regions = [
    { value: "", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  // Växlar mellan att visa och dölja dropdown-menyn
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Hanterar fokus på dropdown-komponenten
  const handleFocus = () => {
    dropdownRef.current.classList.add('active-border');
    dropdownRef.current.querySelector('.search-placeholder').classList.add('active');
  };

  // Återställer placeholder när dropdown förlorar fokus
  const handleBlur = () => {
    if (!selectedRegion && !isOpen) {
      dropdownRef.current.classList.remove('active-border');
      dropdownRef.current.querySelector('.search-placeholder').classList.remove('active');
    }
  };


  // Ändrar vald region och stänger dropdown
  const handleRegionChange = (value) => {
    setSelectedRegion(value);
    setIsOpen(false);
  };

  // Stänger dropdown när man klickar utanför
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      if (selectedRegion) {
        dropdownRef.current.classList.remove('active-border');
      }
    }
  };

  // Lägg till och ta bort eventlyssnare för att hantera klick utanför
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Aktiverar placeholder om en region är vald
  useEffect(() => {
    if (selectedRegion || isOpen) {
      dropdownRef.current.classList.add('active-border');
      dropdownRef.current.querySelector('.search-placeholder').classList.add('active');
    } else {
      dropdownRef.current.classList.remove('active-border');
      dropdownRef.current.querySelector('.search-placeholder').classList.remove('active');
    }
  }, [selectedRegion, isOpen]);


  return (
    <div
      className={`dropdown-container ${isOpen ? "active-border" : ""}`}
      ref={dropdownRef}
      onClick={toggleDropdown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="selected-item">
        <span className="search-placeholder">
          Region
        </span>
        <span className="selected-region">
          {selectedRegion || ""}
        </span>
      </div>
      <img
        src={arrowSrc}
        className="arrow-icon"
        alt="Arrow Down"
      />
      {isOpen && (
        <ul className="dropdown-list">
          {regions.map((region) => (
            <li
              key={region.value}
              className={`dropdown-item ${selectedRegion === region.value ? "selected" : ""}`}
              onClick={() => handleRegionChange(region.value)}
            >
              {region.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
