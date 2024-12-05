import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import useAxiosInstance from '../../hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';

function TodoDetail() {
  const { _id } = useParams();
  console.log(_id);
  // const { data } = useAxios({ url: `/todolist/${_id}` });

  const navigate = useNavigate(); //목록 8 하고 목록 누르면 바로 이전페이지로 돌아가도록 함

  const axios = useAxiosInstance();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['todolist', _id],
    queryFn: () => {
      return axios.get(`/todolist/${_id}`);
    },
    select: (res) => res.data,
    staleTime: 1000 * 60, //1분동안  캐시상태를 유지해라, 캐시된 걸 먼저 보여주고 그 사이에 서버 요청, 요청 후 바뀐게 있으면 바뀐걸 보여줌
  });

  // const [data, setData] = useState();

  // const fetchDetail = async () => {
  //   const res = await axios.get(`/todolist/${_id}`);
  //   setData(res.data);
  // };

  // useEffect(() => {
  //   fetchDetail();
  // }, []); // 마운트 될 때 한번만 호출

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      {isLoading && <p>로딩중</p>}
      {data && (
        <>
          <div className="todo">
            <div>제목 : {data.item.title}</div>
            <div>내용 : {data.item.content}</div>
            <div>상태 : {data.item.done ? '완료' : '미완료'}</div>
            <div>작성일 : {data.item.createdAt}</div>
            <div>수정일 : {data.item.updatedAt}</div>

            <Link to="./edit">수정</Link>
            <button type="button" onClick={() => navigate(-1)}>
              목록
            </button>
          </div>

          <Outlet context={{ item: data.item }} />
        </>
      )}
    </div>
  );
}

export default TodoDetail;
