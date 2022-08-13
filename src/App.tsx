import React, { useState } from "react";
import CalculatorButton from "./components/CalculatorButton";

const buttonLabels = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "x",
  "1",
  "2",
  "3",
  "-",
  "0",
  ",",
  "=",
  "+",
];

function App() {
  const [calculatorResults, setCalculatorResults] = useState<number>(1237474);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [calculatorInstructions, setCalculatorInstructions] =
    useState<string>("hej");

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div className="grid grid-cols-4 grid-flow-row gap-1">
        <div className="calculator-display col-span-4">
          {showResults ? calculatorResults : calculatorInstructions}
        </div>
        {buttonLabels.map((label) => (
          <CalculatorButton label={label} />
        ))}
      </div>
    </div>
  );
}

export default App;
