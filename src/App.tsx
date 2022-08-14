import React from "react";
import CalculatorApp from "./CalculatorApp";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ThemeProvider initialTheme="light">
      <div className="app-container">
        <div className="flex flex-row items-center gap-4 text-6xl font-bold text-sky-800 dark:text-purple-100 drop-shadow my-8">
          Calculator
          <ThemeToggleButton />
        </div>
        <CalculatorApp />
        <div className="m-2 font-light text-black dark:text-purple-100">
          <div className="font-light">Press ENTER to calculate</div>
          <div className="font-normal">
            @lindman -{" "}
            <a
              href="https://github.com/yoga-python/coding-projects-calculator"
              className="underline decoration-sky-800"
            >
              GitHub
            </a>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
