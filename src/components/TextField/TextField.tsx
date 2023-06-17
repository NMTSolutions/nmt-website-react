import "./text-field.css";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "outlined" | "filled" | "standard" | "native" | "textarea";
  label?: string;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  color?: string;
  height?: number | string;
  width?: number | string;
  margin?: number | string;
  padding?: number | string;
  required?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export interface TextFieldCustomStyles {
  background?: string;
  borderColor?: string;
  outlineColor?: string;
  color?: string;
  height?: number | string;
  width?: number | string;
  margin?: number | string;
  padding?: number | string;
}

const TextField = ({
  variant = "outlined",
  label,
  error = false,
  errorText,
  disabled = false,
  placeholder = " ",
  color,
  height,
  width,
  margin,
  padding,
  required,
  style,
  onChange,
  ...props
}: TextFieldProps) => {
  const getClassNames = () => {
    if (variant === "native") {
      return `textfield-native ${error ? "textfield-error" : ""}`;
    }
    return (
      `textfield textfield-${variant} ${error ? "textfield-error" : ""}` +
      (disabled ? "textfield-disabled" : "")
    );
  };

  const getCustomStyles = () => {
    const styles: TextFieldCustomStyles = {};
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

  const styles = getCustomStyles();
  delete styles.padding;

  return (
    <div style={styles} className={getClassNames()}>
      {variant === "textarea" ? (
        <textarea
          style={{ padding: getCustomStyles().padding, ...style }}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
        />
      ) : (
        <input
          style={{ padding: getCustomStyles().padding, ...style }}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          {...props}
        />
      )}
      <span className="textfield-label">
        {label}
        {required ? <span className="required-aestrick">*</span> : null}
      </span>
      {error && <span className="textfield-error-text">{errorText}</span>}
    </div>
  );
};

export default TextField;
