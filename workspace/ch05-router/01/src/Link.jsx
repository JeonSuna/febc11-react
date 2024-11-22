import PropTypes from 'prop-types';

function Link({ to, children }) {
  const handleClick = (e) => {
    //브라우저의 기본 동작을 제거(a태그 동작)
    e.preventDefault();
    window.history.pushState(null, '', e.target.pathname);
    //브라우저의 히스토리 스택에 새로운 상태를 추가합니다.
    //이 함수는 페이지를 새로고침하지 않고도 브라우저 주소창(URL)을 변경할 수 있습니다.
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Link;
