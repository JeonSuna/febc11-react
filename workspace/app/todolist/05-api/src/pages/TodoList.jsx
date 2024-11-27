import TodoListItem from '@pages/TodoListItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useAxiosInstance from '../../hooks/useAxiosInstance';

function TodoList() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   setData(dummyData);
  // }, []); //마운트된 후 한번만 호출한다

  // API 서버에서 목록 조회
  // const { data } = useFetch({ url: '/todolist' });

  //await 인스턴스
  const axios = useAxiosInstance();

  //삭제 후 목록 조회, 컴포넌트 마운트 직후와 삭제 후에 목록 조회를 해야하므로 함수로 만듦
  const fetchList = async () => {
    const res = await axios.get('/todolist');
    setData(res.data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  // 삭제 작업
  const handleDelete = async (_id) => {
    //삭제할  todo의 id를 전달받는다
    try {
      // TODO: API 서버에 수정 요청
      await axios.delete(`/todolist/${_id}`);
      alert('할일이 삭제 되었습니다.');

      //Todo 목록을 다시 조회
      fetchList();
    } catch (err) {
      console.error(err);
      alert('할일 삭제에 실패했습니다.');
    }
  };

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
  ));
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/list/add">추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>
    </div>
  );
}
export default TodoList;
