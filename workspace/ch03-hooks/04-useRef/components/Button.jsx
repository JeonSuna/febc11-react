import PropTypes from 'prop-types';
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
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func, //모든 버튼을 클릭해야하는건 아니니 ...
  color: PropTypes.string,
};
export default Button;
