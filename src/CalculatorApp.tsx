import React, { useState } from "react";

// components
import CalculatorButton from "./components/CalculatorButton";
import CalculatorDisplay from "./components/CalculatorDisplay";

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

  // eventhandlers
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
      case ".":
        // dont allow multiple dots in a succession
        if (calculatorInstructions.slice(-1) === ".") {
          break;
        }
        setCalculatorInstructions(calculatorInstructions + label);
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
    <div className="calculator-container">
      {/* Calculator display */}
      <CalculatorDisplay
        handleSubmit={handleSubmit}
        getInputValue={getInputValue}
        setCalculatorError={setCalculatorError}
        setCalculatorInstructions={setCalculatorInstructions}
        calculatorError={calculatorError}
      />
      {/* Calculator buttons */}
      {buttonLabels.map((label, idx) => (
        <CalculatorButton
          key={idx}
          label={label}
          onClick={() => handleCalculatorClick(label)}
        />
      ))}
    </div>
  );
};

export default CalculatorApp;
