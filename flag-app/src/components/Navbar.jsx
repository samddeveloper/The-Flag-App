import React from 'react';
import './Navbar.css';

const Navbar = (( {toggleTheme} ) => {
    return (
       <nav className="navbar">
        <div className="container">
            <div className="navbar-name">The Flag App</div>
            <div className="navbar-actions">
                <img src="./assets/moon-bordered.svg" alt="moon" />
                <button className="theme-toggle">
                    Dark Mode
                </button>
            </div>
        </div>
       </nav>
    )
})

export default Navbar;