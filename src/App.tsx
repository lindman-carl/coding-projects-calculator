import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import CalculatorApp from "./CalculatorApp";
import SignatureFooter from "./components/SignatureFooter";
import ThemeToggleButton from "./components/ThemeToggleButton";

// Context
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider initialTheme="light">
      <div className="app-container">
        <div className="header-container">
          Calculator
          <ThemeToggleButton />
        </div>
        <CalculatorApp />
        <div className="m-2 font-light text-black dark:text-purple-100">
          <div className="font-light">Press ENTER to calculate</div>
          <SignatureFooter />
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </ThemeProvider>
  );
};

export default App;
