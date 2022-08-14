import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useThemeContext = () => {
  // use context
  const context = useContext(ThemeContext);

  // check for provider
  if (context === undefined) {
    throw new Error(
      "useThemeContext muse be used within a ThemeContext provider"
    );
  }

  return context;
};

export default useThemeContext;
