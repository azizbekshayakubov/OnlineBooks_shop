export default function Button({
  placeholder = "",
  type = "button",
  onClick,
  className = "",
  children,
}) {
  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      className={`default-btn ${className}`}
    >
      {children}
    </button>
  );
}
