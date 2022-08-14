import React from "react";

// icons
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import useThemeContext from "../hooks/useThemeContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="theme-toggle-container">
      {theme === "dark" ? (
        <FaRegSun
          aria-label="dark mode icon"
          data-testid="darkModeIcon"
          size="2rem"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-purple-100"
        />
      ) : (
        <FaRegMoon
          aria-label="dark mode icon"
          data-testid="darkModeIcon"
          size="2rem"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-sky-100"
        />
      )}
    </div>
  );
};

export default ThemeToggleButton;
