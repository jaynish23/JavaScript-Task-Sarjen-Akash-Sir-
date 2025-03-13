import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Theme.css";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h1>Theme Switcher</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;