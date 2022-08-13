import React from "react";

type Props = {
  label: string;
};

const CalculatorButton = ({ label }: Props) => {
  return <div className="calculator-button">{label}</div>;
};

export default CalculatorButton;
