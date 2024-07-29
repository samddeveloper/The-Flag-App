import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import './index.css';

function App() {
  const [theme, setTheme] = useState("light"); // Tillstånd för att hantera appens tema (ljus eller mörk)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Sätter data-theme-attributet på HTML-elementet
  }, [theme]); // Körs när temat ändras

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"; // Växlar mellan ljus och mörk
    setTheme(newTheme); // Uppdaterar temat i tillståndet
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} /> {/* Navigationsbar med tema-växling */}
      <Routes>
        <Route path="/" element={<HomePage currentTheme={theme} />} /> {/* Startsidans rutt */}
        <Route path="/country/:name" element={<CountryPage currentTheme={theme} />} /> {/* Landsidans rutt */}
      </Routes>
    </>
  );
}

export default App;
