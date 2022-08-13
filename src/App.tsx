import React from "react";
import CalculatorApp from "./CalculatorApp";

const App = () => {
  return (
    <div className="app-container">
      <div className="text-5xl font-bold text-sky-800 drop-shadow my-8">
        Calculator
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
  );
};

export default App;
