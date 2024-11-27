import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  current: PropTypes.number,
};
function Pagination({ totalPages, current = 1 }) {
  //총 몇페이지? 현재 몇페이지?

  let pageList = []; //페이지 목록을 저장 할 배열

  // api 서버에 params로 page, limit를 사용하면 pagination객체를 얻을 수 있다.
  // params에 아무것도 안 넣으면 pagination은 빈 객체
  const [searchParams] = useSearchParams(); //url의 쿼리 문자열을 읽음

  for (let page = 1; page <= totalPages; page++) {
    searchParams.set('page', page);
    // keyword=환승&page=1
    // keyword=환승&page=2
    // keyword=환승&page=3
    let search = searchParams.toString();
    pageList.push(
      <li key={page} className={current === page ? 'active' : ''}>
        <Link to={`/list?${search}`}>{page}</Link>
      </li>
    );
  }

  return (
    <div className="pagination">
      <ul>{pageList}</ul>
    </div>
  );
}
export default Pagination;
