import React from "react";

type Props = {
  label: string;
};

const isNumber = (value: string) => {
  return /^-?\d+$/.test(value);
};

const CalculatorButton = ({ label }: Props) => {
  // check for special character
  if (!isNumber(label)) {
    return <div className="calculator-button bg-orange-600">{label}</div>;
  }

  return <div className="calculator-button">{label}</div>;
};

export default CalculatorButton;
