import React from "react";

type Props = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const isNumber = (value: string) => {
  return /^-?\d+$/.test(value);
};

const CalculatorButton = ({ label, onClick }: Props) => {
  // base color
  let buttonColor;

  // check for special character
  if (label === "=") {
    buttonColor = "bg-light-dark dark:bg-dark-dark";
  } else if (label === "C") {
    buttonColor = "bg-light-accent dark:bg-dark-accent";
  } else if (!isNumber(label) && label !== ".") {
    buttonColor = "bg-light-secondary dark:bg-dark-secondary";
  }

  return (
    <button className={`calculator-button ${buttonColor}`} onClick={onClick}>
      <div className="drop-shadow">{label}</div>
    </button>
  );
};

export default CalculatorButton;
