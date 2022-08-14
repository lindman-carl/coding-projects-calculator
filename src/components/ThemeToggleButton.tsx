import React from "react";

// icons
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import useThemeContext from "../hooks/useThemeContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="w-10 h-10 flex justify-center items-center transition duration-100 ease-in-out rounded-lg p-2 border-2 border-sky-200 dark:border-purple-500 bg-sky-500 dark:bg-purple-800">
      {theme === "dark" ? (
        <FaRegSun
          aria-label="dark mode icon"
          data-testid="darkModeIcon"
          size="2rem"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-purple-100 text-2xl cursor-pointer"
        />
      ) : (
        <FaRegMoon
          aria-label="dark mode icon"
          data-testid="darkModeIcon"
          size="2rem"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-sky-100 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggleButton;
