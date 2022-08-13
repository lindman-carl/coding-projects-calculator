import { evaluate } from "mathjs";

export const buttonLabels = [
  "(",
  ")",
  "%",
  "C",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "/",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

export const evaluateCalculatorInstructions = (
  instructions: string
): [string, string | undefined] => {
  let results = "";
  let errorMsg;
  // evaluate expression
  try {
    results = evaluate(instructions).toString();
  } catch (err) {
    errorMsg = "Error";
    console.error(err);
  }

  return [results, errorMsg];
};
