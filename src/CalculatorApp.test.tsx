import React from "react";
import { render, screen } from "@testing-library/react";
import CalculatorApp from "./CalculatorApp";

// utils
import {
  buttonLabels,
  evaluateCalculatorInstructions,
} from "./utils/calculator";

describe("CalculatorApp", () => {
  test("CalculatorApp loads and renders all buttons", () => {
    render(<CalculatorApp />);
    const buttonElements = buttonLabels.map((label) => screen.getByText(label));

    expect(buttonElements.length).toBe(buttonLabels.length);
  });
});

describe("Expression evaluation", () => {
  test("Evaluation of invalid expression returns error message", () => {
    const [results, errorMsg] = evaluateCalculatorInstructions("92-asd");

    expect(results).toBe("");
    expect(errorMsg).not.toBeNull();
  });

  test("Evaluation of valid expressions return expected results", () => {
    const calculations = [
      ["4+5*(12/3)", "24"],
      ["2+4", "6"],
      ["5*5", "25"],
      ["4/4", "1"],
      ["17*2+4", "38"],
      ["(9999-20)*2", "19958"],
    ];

    for (let [expression, expectedResult] of calculations) {
      const [result] = evaluateCalculatorInstructions(expression);
      expect(result).toBe(expectedResult);
    }
  });
});
