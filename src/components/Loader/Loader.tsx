import React from "react";
import "./loader.css";

export interface LoaderProps {
  variant: "circular" | "material" | "linear";
  ringColor?: string;
  spinnerColor?: string;
  strokeWidth?: number | string;
  height?: number | string;
  width?: number | string;
  duration?: number | string;
  lineCap?: "round" | "square" | "butt";
}

interface LoaderCustomStyles {
  background?: string;
  borderColor?: string;
  borderTopColor?: string;
  borderWidth?: number | string;
  height?: number | string;
  width?: number | string;
  animationDuration?: string;
}

const Loader = ({
  variant = "circular",
  ringColor,
  spinnerColor,
  strokeWidth,
  height,
  width,
  duration,
  lineCap = "round",
}: LoaderProps) => {
  const getClassNames = () => {
    return `${variant}-loader`;
  };

  const getCustomStyles = () => {
    const styles: LoaderCustomStyles = {};
    if (ringColor) {
      if (variant === "linear") {
        styles.background = ringColor;
      } else {
        styles.borderColor = ringColor;
      }
    }
    if (spinnerColor) {
      if (variant === "linear") {
      } else {
        styles.borderTopColor = spinnerColor;
      }
    }
    if (strokeWidth) {
      styles.borderWidth =
        typeof strokeWidth === "number" ? strokeWidth + "px" : strokeWidth;
    }
    if (height) {
      styles.height = typeof height === "number" ? height + "px" : height;
    }
    if (width) {
      styles.width = typeof width === "number" ? width + "px" : width;
    }
    if (duration) {
      styles.animationDuration =
        typeof duration === "number" ? duration + "ms" : duration;
    }

    return styles;
  };

  return (
    <div style={getCustomStyles()} className={getClassNames()}>
      {variant === "material" && (
        <svg className="material-loader-spinner" viewBox="25 25 50 50">
          <circle
            className="material-loader-path"
            cx="50"
            cy="50"
            r="20"
            style={{ stroke: spinnerColor, strokeLinecap: lineCap }}
          ></circle>
        </svg>
      )}
    </div>
  );
};

export default Loader;
