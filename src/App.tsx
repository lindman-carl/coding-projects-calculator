import React, { useState } from "react";
import CalculatorButton from "./components/CalculatorButton";

import { evaluate } from "mathjs";

const buttonLabels = [
  "(",
  ")",
  "%",
  "C",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "/",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

function App() {
  const [calculatorInstructions, setCalculatorInstructions] =
    useState<string>("");
  const [calculatorError, setCalculatorError] = useState<string>("");

  const evaluateCalculatorInstructions = () => {
    console.log(calculatorInstructions);
    // evaluate expression
    try {
      const evaluatedExpression = evaluate(calculatorInstructions);
      // set results and show results
      setCalculatorInstructions(evaluatedExpression);
    } catch (err) {
      setCalculatorError("Error evaluating expression");
      console.error(err);
    }
  };

  const handleCalculatorClick = (label: string) => {
    // handle special cases first, default behaviour for the rest
    switch (label) {
      case "=":
        evaluateCalculatorInstructions();
        break;
      case "C":
        // remove error if their is one
        if (calculatorError.length > 0) {
          setCalculatorError("");
          break;
        }

        // remove last character in string
        const newInstructions = calculatorInstructions.slice(0, -1);
        setCalculatorInstructions(newInstructions);
        break;
      default:
        setCalculatorInstructions(calculatorInstructions + label);
        break;
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    // form onSubmit to capture whenever the user presses enter to submit
    // prevent default submit behaviour
    event.preventDefault();
    // evaluate math expression
    evaluateCalculatorInstructions();
  };

  const inputValue = (): string => {
    if (calculatorError.length === 0) {
      return calculatorInstructions;
    }

    return calculatorError;
  };

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div className="grid grid-cols-4 grid-flow-row gap-1">
        <form className="col-span-4" onSubmit={handleSubmit}>
          <input
            className="calculator-display-input"
            value={inputValue()}
            onChange={(event) => {
              setCalculatorInstructions(event.target.value);
            }}
            onClick={() => {
              if (calculatorError.length > 0) {
                setCalculatorError("");
              }
            }}
          />
        </form>

        {buttonLabels.map((label, idx) => (
          <CalculatorButton
            key={idx}
            label={label}
            onClick={() => handleCalculatorClick(label)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
