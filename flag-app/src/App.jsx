import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

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
    </>
  );
}

export default App;
