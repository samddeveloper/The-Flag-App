import React from "react";
import "./Navbar.css";
import logo from "../assets/techover-logo-dark.png"; //Dark logo
import logo2 from "../assets/techover-logo.png"; //Light logo
import moon from "../assets/moon.svg"; // Adjust the path based on the actual structure
import moonBordered from "../assets/moon-bordered.svg";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const logoSrc = currentTheme === "light" ? logo : logo2;
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-name">
          <div> The Flag App </div>
          </div>
          <img src={logoSrc} alt="Logo" className="logo" />
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
