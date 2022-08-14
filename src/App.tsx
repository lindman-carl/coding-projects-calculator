import React from "react";
import CalculatorApp from "./CalculatorApp";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider initialTheme="light">
      <div className="app-container">
        <div className="text-5xl font-bold text-sky-800 drop-shadow my-8">
          Calculator
          <ThemeToggleButton />
        </div>
        <CalculatorApp />
        <div className="m-2 font-light">
          <div className="font-thin">Press ENTER to calculate</div>
          <div className="">
            @lindman -{" "}
            <a
              href="https://github.com/yoga-python/coding-projects-calculator"
              className="underline decoration-sky-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
