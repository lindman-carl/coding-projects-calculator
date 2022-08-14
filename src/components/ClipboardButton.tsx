import React from "react";
import { toast } from "react-toastify";

// icon
import { TbClipboardText } from "react-icons/tb";
import { ToastOptions } from "react-toastify";

const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
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

type ClipboardButtonProps = {
  value: string;
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

    toast.warn(`Do math first`, basicToast);
  };

  return (
    <button
      className="clipboard-button"
      aria-label="Copy to clipboard"
      title="Copy to clipboard (Ctrl+C)"
      onClick={copyCalculatorInstructionsToClipboard}
    >
      <TbClipboardText className="w-full h-full p-2" />
    </button>
  );
};
export default ClipboardButton;
