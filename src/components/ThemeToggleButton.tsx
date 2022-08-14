import React from "react";

// icons
import { FaRegMoon, FaRegSun } from "react-icons/fa";

type Props = {
  darkMode: boolean;
};

const ThemeToggle = ({ darkMode }: Props) => {
  return <button>{darkMode ? <FaRegMoon /> : <FaRegSun />}</button>;
};

export default ThemeToggle;
