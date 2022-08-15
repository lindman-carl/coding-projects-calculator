import React from "react";

import ClipboardButton from "./ClipboardButton";

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
  const displayValue = getInputValue();

  // eventhandlers
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (calculatorError.length > 0) {
      setCalculatorError("");
    } else {
      setCalculatorInstructions(event.target.value);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (calculatorError.length > 0) {
      setCalculatorError("");
    }
  };

  return (
    <div className="col-span-4">
      <div className="absolute z-10">
        <ClipboardButton value={displayValue} />
      </div>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="calculator-display-input"
          value={displayValue}
          onChange={handleChange}
          onClick={handleClick}
          autoFocus
          aria-label="calculator display"
        />
      </form>
    </div>
  );
};

export default CalculatorDisplay;
