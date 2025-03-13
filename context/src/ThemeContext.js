import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // State for theme (default: light)
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;