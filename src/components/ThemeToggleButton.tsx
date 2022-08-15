import React from "react";

// icons
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import useThemeContext from "../hooks/useThemeContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={"theme-toggle-container"}>
      {theme === "dark" ? (
        <FaRegSun
          aria-label="dark mode icon"
          data-testid="darkModeIcon"
          size="2rem"
          onClick={toggleTheme}
        />
      ) : (
        <FaRegMoon
          aria-label="dark mode icon"
          data-testid="darkModeIcon"
          size="2rem"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default ThemeToggleButton;
