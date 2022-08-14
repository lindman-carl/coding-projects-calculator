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
  let buttonColor = "bg-slate-400 dark:bg-amber-700";

  // check for special character
  if (label === "=") {
    buttonColor = "bg-sky-800 dark:bg-amber-900";
  } else if (label === "C") {
    buttonColor = "bg-orange-500 dark:bg-purple-800";
  } else if (!isNumber(label) && label !== ".") {
    buttonColor = "bg-blue-400 dark:bg-purple-600";
  }

  return (
    <button className={`calculator-button ${buttonColor}`} onClick={onClick}>
      <div className="drop-shadow">{label}</div>
    </button>
  );
};

export default CalculatorButton;
