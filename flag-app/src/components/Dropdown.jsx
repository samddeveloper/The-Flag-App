import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";
import arrowDownLight from "../assets/arrow-down-light.svg";
import arrowDownDark from "../assets/arrow-down-dark.svg";

const Dropdown = ({ selectedRegion, setSelectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const regions = [
    { value: "", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const handleToggleDropdown = () => {
    setIsOpen((prevOpenState) => !prevOpenState); // Toggle isOpen
  };

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [arrowSrc, setArrowSrc] = useState(arrowDownLight);

  useEffect(() => {
    const theme = document.body.dataset.theme;
    setArrowSrc(theme === "dark" ? arrowDownDark : arrowDownLight);
  }, [document.body.dataset.theme]);

  return (
    <div
      className={`dropdown-container ${isOpen ? "active-border" : ""}`}
      ref={dropdownRef}
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="selected-item" onClick={handleToggleDropdown}>
        {selectedRegion || ""}
      </div>
      {!selectedRegion && <span className="search-placeholder">Region</span>}
      <img
        src={arrowSrc}
        className="arrow-icon"
        alt="Arrow Down"
        onClick={handleToggleDropdown}
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