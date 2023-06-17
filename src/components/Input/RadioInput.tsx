import React from "react";

import "./radio-input.css";

export interface RadioInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioInput = ({ label, ...props }: RadioInputProps) => {
  return (
    <label className="input-radio">
      <input type="radio" {...props} />
      <span>{label}</span>
    </label>
  );
};

export default RadioInput;
