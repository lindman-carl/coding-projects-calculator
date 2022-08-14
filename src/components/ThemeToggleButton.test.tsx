import React from "react";
import { render, screen } from "@testing-library/react";
import ThemeToggleButton from "./ThemeToggleButton";
import { ThemeProvider } from "../contexts/ThemeContext";

const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <ThemeProvider {...providerProps}>{ui}</ThemeProvider>,
    renderOptions
  );
};
describe("ThemeToggleButton", () => {
  test("dark mode renders sun icon", () => {
    const providerProps = {
      initialTheme: "light",
    };
    customRender(<ThemeToggleButton />, { providerProps });
    const buttonIcon = screen.getByTestId("darkModeIcon");
    expect(buttonIcon).toHaveStyle("rgb(186 230 253 / 1)");
  });
});
