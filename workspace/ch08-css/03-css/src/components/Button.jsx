import PropTypes from 'prop-types';
import './Button.css';

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'red', 'yellow']), // 글자 색상 ,/글자 색상,배열 값 중에 하나만 와야한다는 뜻 (이 배열 중 꼭 하나야 함)
  bg: PropTypes.oneOf(['blue', 'red', 'yellow', 'gray']), // 배경 색상
  onClick: PropTypes.func,
};

export default function Button({
  children,
  type = 'button',
  bg,
  color,
  onClick: clickHandler,
}) {
  return (
    <button
      className={`button color-${bg}-${color}`}
      type={type}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
