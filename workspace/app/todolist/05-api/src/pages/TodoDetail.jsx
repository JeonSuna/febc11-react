import { useEffect, useState } from 'react';
import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import useAxiosInstance from '../../hooks/useAxiosInstance';

function TodoDetail() {
  const { _id } = useParams();
  console.log(_id);
  // const { data } = useAxios({ url: `/todolist/${_id}` });
  const [data, setData] = useState();

  const axios = useAxiosInstance();

  const fetchDetail = async () => {
    const res = await axios.get(`/todolist/${_id}`);
    setData(res.data);
  };

  useEffect(() => {
    fetchDetail();
  }, []); // 마운트 될 때 한번만 호출

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>

      {data && (
        <>
          <div className="todo">
            <div>제목 : {data.item.title}</div>
            <div>내용 : {data.item.content}</div>
            <div>상태 : {data.item.done ? '완료' : '미완료'}</div>
            <div>작성일 : {data.item.createdAt}</div>
            <div>수정일 : {data.item.updatedAt}</div>

            <Link to="./edit">수정</Link>
            <Link to="/list">목록</Link>
          </div>

          <Outlet context={{ item: data.item, refetch: fetchDetail }} />
        </>
      )}
    </div>
  );
}

export default TodoDetail;
