import React from "react";

// avoid prop drilling
type Props = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setCalculatorError: React.Dispatch<React.SetStateAction<string>>;
  setCalculatorInstructions: React.Dispatch<React.SetStateAction<string>>;
  getInputValue: () => string;
  calculatorError: string;
};

const CalculatorDisplay = ({
  handleSubmit,
  getInputValue,
  setCalculatorInstructions,
  setCalculatorError,
  calculatorError,
}: Props) => {
  return (
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
        aria-label="calculator display"
      />
    </form>
  );
};

export default CalculatorDisplay;
