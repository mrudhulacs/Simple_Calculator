
import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");

  const clickButton = (btn) => {
    if (btn === "C") {
      setValue("");
    } else if (btn === "=") {
      try {
        setValue(String(eval(value)));
      } catch {
        setValue("Error");
      }
    } else {
      setValue(value + btn);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
  ];

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <input value={value} readOnly />
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => clickButton(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
