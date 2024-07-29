import React from "react";
import "./Navbar.css";
import logo from "../assets/techover-logo-dark.png"; // Mörkt logo
import logo2 from "../assets/techover-logo.png"; // Ljust logo
import moon from "../assets/moon.svg"; 
import moonBordered from "../assets/moon-bordered.svg";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const logoSrc = currentTheme === "light" ? logo : logo2; // Väljer logo beroende på tema

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-name">
            <div>The Flag App</div>
          </div>
          <img src={logoSrc} alt="Logo" className="logo" /> {/* Visar logotypen */}
          <div className="navbar-actions">
            <button onClick={toggleTheme} className="theme-toggle">
              {currentTheme === "light" ? (
                <>
                  <img
                    src={moonBordered}
                    alt="Light Mode Icon"
                    className="theme-icon"
                  />
                  LIGHT MODE 
                </>
              ) : (
                <>
                  <img src={moon} alt="Dark Mode Icon" className="theme-icon" />
                  DARK MODE 
                </>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
