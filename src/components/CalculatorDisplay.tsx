import React from "react";

import { FaRegClipboard } from "react-icons/fa";
import { toast } from "react-toastify";

// avoid prop drilling
type Props = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setCalculatorError: React.Dispatch<React.SetStateAction<string>>;
  setCalculatorInstructions: React.Dispatch<React.SetStateAction<string>>;
  getInputValue: () => string;
  calculatorError: string;
};

const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

type ClipboardButtonProps = {
  value: string;
};

const ClipboardButton = ({ value }: ClipboardButtonProps) => {
  const copyCalculatorInstructionsToClipboard = async () => {
    if (value.length > 0) {
      // copy to clipboard
      copyToClipboard(value);
      toast(`${value} copied to clipboard`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    toast(`Do math first`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div
      className="w-24 h-8
        border-b border-r rounded-br-md
        text-sky-100 dark:text-purple-100
        bg-sky-400 bg-opacity-20
        hover:scale-95
        cursor-pointer
     "
      aria-label="Copy to clipboard"
      title="Copy to clipboard (Ctrl+C)"
      onClick={copyCalculatorInstructionsToClipboard}
    >
      <FaRegClipboard className="w-full h-full p-1" />
    </div>
  );
};

const CalculatorDisplay = ({
  handleSubmit,
  getInputValue,
  setCalculatorInstructions,
  setCalculatorError,
  calculatorError,
}: Props) => {
  return (
    <div className="col-span-4">
      <div className="absolute z-10">
        <ClipboardButton value={getInputValue()} />
      </div>
      <form className="relative" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default CalculatorDisplay;
