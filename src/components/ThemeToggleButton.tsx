import React from "react";

// icons
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import useThemeContext from "../hooks/useThemeContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <FaRegSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <FaRegMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggleButton;
