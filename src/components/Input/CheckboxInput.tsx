import React from "react";

import "./checkbox-input.css";

export interface ChecboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckboxInput = ({ label, ...props }: ChecboxInputProps) => {
  return (
    <label className="input-checkbox">
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
};

export default CheckboxInput;
