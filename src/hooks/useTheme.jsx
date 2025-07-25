import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useThemeContext must be used within a ThemeProvider");

  return context;
};
