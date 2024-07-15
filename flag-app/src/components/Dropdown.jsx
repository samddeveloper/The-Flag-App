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

  // Funktion för att hantera klick på dropdown-container
  const toggleDropdown = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  // Funktion för att hantera regionval
  const handleRegionChange = (value) => {
    setSelectedRegion(value);
    setIsOpen(false); // Stäng dropdown-menyn när en region väljs
  };

  // Hantera klick utanför dropdown-container för att stänga menyn
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Lyssna efter klick utanför dropdown-container
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Hantera temaväxling med MutationObserver
  const [arrowSrc, setArrowSrc] = useState(
    document.body.dataset.theme === "dark" ? arrowDownDark : arrowDownLight
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.body.dataset.theme;
      setArrowSrc(theme === "dark" ? arrowDownDark : arrowDownLight);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

    // Uppdatera temat vid start
    const theme = document.body.dataset.theme;
    setArrowSrc(theme === "dark" ? arrowDownDark : arrowDownLight);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`dropdown-container ${isOpen ? "active-border" : ""}`} ref={dropdownRef}>
      <div className="selected-item" onClick={toggleDropdown}>
        {selectedRegion ? selectedRegion : ""}
      </div>
      <span className={`search-placeholder ${selectedRegion ? "fixed" : ""}`}>
        Region
      </span>
      <img
        src={arrowSrc}
        className="arrow-icon"
        alt="Arrow Down"
        onClick={toggleDropdown}
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
