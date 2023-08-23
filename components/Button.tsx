interface ButtonProps {
  type: "button" | "submit";
  label?: string;
  containerStyle?: string;
  buttonStyle?: string;
}

export default function Button({
  type,
  label,
  containerStyle,
  buttonStyle,
}: ButtonProps) {
  return (
    <div className={containerStyle}>
      <button type={type} className={buttonStyle}>
        {label}
      </button>
    </div>
  );
}
