import React from "react";

type Props = {
  label: string;
  onClick: any;
};

const isNumber = (value: string) => {
  return /^-?\d+$/.test(value);
};

const CalculatorButton = ({ label, onClick }: Props) => {
  // check for special character
  if (!isNumber(label)) {
    return (
      <button className="calculator-button bg-orange-400" onClick={onClick}>
        {label}
      </button>
    );
  }

  return (
    <button className="calculator-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default CalculatorButton;
