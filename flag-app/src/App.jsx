import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import Dropdown from "./components/Dropdown"; // Import Dropdown component
import './index.css';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<CountryPage currentTheme={theme} />} />
      </Routes>
      
    </>
  );
}

export default App;
