// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a Context for the theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState();

  // Get preferred color scheme from local storage or operating system
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      savedTheme === "dark" ? darkMode() : lightMode();
    } else {
      window.matchMedia("(prefers-color-scheme: dark)").matches ? darkMode() : lightMode();
    }
  }, []);

  // Theme mode handlers
  const darkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setThemeState("dark");
    
  };

  const lightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setThemeState("light");
  };

  // Theme toggle handler
  const toggleHandler = () => {
    themeState === "dark" ? lightMode() : darkMode();
    window.location.reload()
  };

  return (
    <ThemeContext.Provider value={{ themeState, toggleHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};