import React from "react";

type Props = {
  label: string;
  onClick: any;
};

const isNumber = (value: string) => {
  return /^-?\d+$/.test(value);
};

const CalculatorButton = ({ label, onClick }: Props) => {
  // base color
  let buttonColor = "bg-slate-400";

  // check for special character
  if (label === "=") {
    buttonColor = "bg-sky-800";
  } else if (!isNumber(label) && label !== ".") {
    buttonColor = "bg-blue-400";
  }

  return (
    <button className={`calculator-button ${buttonColor}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CalculatorButton;
