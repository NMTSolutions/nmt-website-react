import React from "react";
import "./button.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  viewSize?: "sm" | "md" | "lg";
  variant?: "primary" | "text" | "outlined";
  disabled?: boolean;
  color?: string;
  height?: number | string;
  width?: number | string;
  margin?: number | string;
  padding?: number | string;
  isActive?: boolean;
  children?: React.ReactNode;
}

export interface ButtonCustomStyles {
  background?: string;
  borderColor?: string;
  outlineColor?: string;
  color?: string;
  height?: number | string;
  width?: number | string;
  margin?: number | string;
  padding?: number | string;
}

const Button = ({
  label,
  viewSize = "md",
  variant = "primary",
  disabled = false,
  color,
  height,
  width,
  margin,
  padding,
  children,
  style,
  className,
  isActive = false,
  ...props
}: ButtonProps) => {
  const getCssClasses = () => {
    return (
      `btn btn-${variant} btn-${viewSize}${isActive ? " btn-active" : ""}` +
      (disabled ? " btn-disabled" : "")
    );
  };

  const getCustomStyles = () => {
    const styles: ButtonCustomStyles = {};
    if (color) {
      if (variant === "primary") {
        styles.background = color;
        styles.outlineColor = "skyblue";
      } else if (variant === "outlined") {
        styles.outlineColor = color;
        styles.color = color;
      } else if (variant === "text") {
        styles.color = color;
      }
    }
    if (height || height === 0) {
      styles.height = typeof height === "number" ? height + "px" : height;
    }
    if (width || width === 0) {
      styles.width = typeof width === "number" ? width + "px" : width;
    }
    if (padding || padding === 0) {
      styles.padding = typeof padding === "number" ? padding + "px" : padding;
    }
    if (margin || margin === 0) {
      styles.margin = typeof margin === "number" ? margin + "px" : margin;
    }

    return styles;
  };

  return (
    <button
      style={{ ...getCustomStyles() }}
      className={getCssClasses() + (className ?? "")}
      disabled={disabled}
      {...props}
    >
      {children ? children : label}
    </button>
  );
};

export default Button;
