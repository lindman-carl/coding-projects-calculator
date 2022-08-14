import React from "react";

import { TbClipboardText } from "react-icons/tb";
import { toast, ToastOptions } from "react-toastify";

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

const basicToast: ToastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const ClipboardButton = ({ value }: ClipboardButtonProps) => {
  const copyCalculatorInstructionsToClipboard = async () => {
    if (value.length > 0) {
      // copy to clipboard
      copyToClipboard(value);
      toast.info(`${value} copied to clipboard`, {
        ...basicToast,
      });

      return;
    }

    toast(`Do math first`, basicToast);
  };

  return (
    <div
      className="w-24 h-10
        rounded-br-md
        text-sky-100 dark:text-purple-100
        bg-sky-300 dark:bg-purple-300
        bg-opacity-20 dark:bg-opacity-20
        hover:scale-95
        cursor-pointer
        shadow
     "
      aria-label="Copy to clipboard"
      title="Copy to clipboard (Ctrl+C)"
      onClick={copyCalculatorInstructionsToClipboard}
    >
      <TbClipboardText className="w-full h-full p-2" />
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
