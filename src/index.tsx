import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CalculatorApp from "./CalculatorApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="flex flex-col justify-center items-center sm:h-screen p-2">
      <CalculatorApp />
      <div className="m-2 font-light">
        <div className="font-thin">Press ENTER to calculate</div>
        <br />
        @CarlLindman -{" "}
        <a
          href="https://github.com/yoga-python/coding-projects-calculator"
          className="underline decoration-sky-800"
        >
          GitHub
        </a>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
