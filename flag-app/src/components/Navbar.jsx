import React from 'react';
import './Navbar.css';
import logo from "../assets/techover-logo-dark.png" //Dark logo
import logo2 from "../assets/techover-logo.png" //Light logo


const Navbar = (( {toggleTheme, currentTheme} ) => {
    const logoSrc = currentTheme === "light" ? logo : logo2;
    return (
       <nav className="navbar">
        <div className="container">
            <div className="navbar-name">The Flag App</div>
            <img src={logoSrc} alt="Logo" className='logo' />
            <div className="navbar-actions">
                <button  onClick={toggleTheme} className="theme-toggle">
                    {currentTheme ==='light' ? '🌙 DARK MODE' : '☀️ LIGHT MODE'}
                </button>
            </div>
        </div>
       </nav>
    )
})

export default Navbar;