import React, { useState } from "react";

// components
import CalculatorButton from "./components/CalculatorButton";

// utils
import {
  evaluateCalculatorInstructions,
  buttonLabels,
} from "./utils/calculator";

const CalculatorApp = () => {
  // state
  const [calculatorInstructions, setCalculatorInstructions] =
    useState<string>("");
  const [calculatorError, setCalculatorError] = useState<string>("");

  // eventhandler
  const handleCalculatorEvaluation = () => {
    const [results, errorMsg] = evaluateCalculatorInstructions(
      calculatorInstructions
    );
    if (errorMsg === undefined) {
      setCalculatorInstructions(results);
    } else {
      setCalculatorError(errorMsg);
    }
  };
  const handleCalculatorClick = (label: string) => {
    // handle special cases first, default behaviour for the rest
    switch (label) {
      case "=":
        handleCalculatorEvaluation();
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
        // default behaviour is to append button label to instructions
        setCalculatorInstructions(calculatorInstructions + label);
        break;
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    // form onSubmit to capture whenever the user presses enter to submit
    // prevent default submit behaviour
    event.preventDefault();
    // evaluate math expression
    handleCalculatorEvaluation();
  };

  const getInputValue = (): string => {
    if (calculatorError.length === 0) {
      return calculatorInstructions;
    }

    return calculatorError;
  };

  return (
    <div className="flex flex-col justify-start items-center border w-screen h-screen">
      <div className="grid grid-cols-4 grid-flow-row gap-1 w-full sm:max-w-sm my-4">
        {/* Calculator display */}
        <form className="col-span-4" onSubmit={handleSubmit}>
          <input
            className="calculator-display-input"
            value={getInputValue()}
            onChange={(event) => {
              setCalculatorInstructions(event.target.value);
            }}
            onClick={() => {
              if (calculatorError.length > 0) {
                setCalculatorError("");
              }
            }}
            autoFocus
          />
        </form>

        {/* Calculator buttons */}
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
};

export default CalculatorApp;
