import React from "react";

const isDarkTime = () => {
  const darkHours = {
    start: 20,
    end: 8,
  };

  const date = new Date();
  const now = date.getHours();

  if (now >= darkHours.start || now < darkHours.end) {
    // initialize with darkMode from 20:00 to 08:00
    return true;
  }
  // else not darkMode
  return false;
};

const getInitialTheme = () => {
  const darkMode = isDarkTime();
  const theme = darkMode ? "dark" : "light";

  return theme;
};

type Props = {
  initialTheme: string;
  children: React.ReactNode | React.ReactNode[] | undefined;
};

export type ThemeContextType = {
  theme: string;
  setTheme: any;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ initialTheme, children }: Props) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
