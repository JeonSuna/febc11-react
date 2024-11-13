import './Button.css';
function Button({ children, type = 'button', onClick, color }) {
  return (
    <button
      className="rounded-button"
      style={{ backgroundColor: color }}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
