import React from "react";
import "./Navbar.css";
import logo from "../assets/techover-logo-dark.png"; //Dark logo
import logo2 from "../assets/techover-logo.png"; //Light logo

const Navbar = ({ toggleTheme, currentTheme }) => {
  const logoSrc = currentTheme === "light" ? logo : logo2;
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-name">
            <h3>The Flag App</h3>
          </div>
          <img src={logoSrc} alt="Logo" className="logo" />
          <div className="navbar-actions">
            <button onClick={toggleTheme} className="theme-toggle">
              {currentTheme === "light" ? "🌙 LIGHT MODE" : "☀️ DARK MODE"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
