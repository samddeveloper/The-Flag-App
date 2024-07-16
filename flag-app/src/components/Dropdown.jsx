import React, { useRef, useEffect, useState } from "react";
import "./Dropdown.css";
import arrowDownLight from "../assets/arrow-down-light.svg";
import arrowDownDark from "../assets/arrow-down-dark.svg";

const Dropdown = ({ selectedRegion, setSelectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const regions = [
    { value: "", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [arrowSrc, setArrowSrc] = useState(
    document.body.dataset.theme === "dark" ? arrowDownDark : arrowDownLight
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.body.dataset.theme;
      setArrowSrc(theme === "dark" ? arrowDownDark : arrowDownLight);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

    const theme = document.body.dataset.theme;
    setArrowSrc(theme === "dark" ? arrowDownDark : arrowDownLight);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`dropdown-container ${isOpen ? "active-border" : ""}`} ref={dropdownRef} onClick={toggleDropdown}>
      <div className="selected-item">
        {selectedRegion ? selectedRegion : ""}
      </div>
      <span className={`search-placeholder ${selectedRegion ? "fixed" : ""}`}>
        Region
      </span>
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
