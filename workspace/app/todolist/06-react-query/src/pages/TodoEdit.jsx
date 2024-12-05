import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import useAxiosInstance from '../../hooks/useAxiosInstance';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

function TodoEdit() {
  // Outlet 컴포넌트의 context 속성에 전달되는 값 추출
  const { item, refetch } = useOutletContext();

  // 프로그래밍 방식으로 페이지 이동에 사용
  const navigate = useNavigate();
  //axios 인스턴스 반환
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done,
    },
  });
  const axios = useAxiosInstance();
  // 수정 작업

  // const { data, refetch } = useQuery({
  //   queryKey: ['수정 쿼리', 'todolist'],
  //   queryFn: () => {
  //     axios.get('./todolist');
  //   },
  //   select: (res) => res.data,
  // });

  const editItem = useMutation({
    mutationFn: (formData) => {
      return axios.patch(`/todolist/${item._id}`, formData);
    },
    onSuccess: () => {
      alert('할 일이 수정되었습니다');
      queryClient.invalidateQueries(['todolist', item._id]); //refetch를 대체한다
      //React Query에서 queryKey는 캐싱된 데이터를 식별하는 고유한 키 역할을 하며, 모든 컴포넌트에서 공유됨
      //할 일 목록으로 이동
      navigate(-1); // 상세페이지로 넘어가면서 todoDetail의 쿼리키 캐시를 무효화함
    },
    onError: (err) => {
      alert(err?.message || '할 일 수정에 실패하였습니다');
    },
  });

  // const onSubmit = async (formData) => {
  //   try {
  //     // TODO: API 서버에 수정 요청
  //     await axios.patch(`/todolist/${item._id}`, formData);

  //     alert('할일이 수정 되었습니다.');
  //     navigate(-1); //window.history,back(-1)
  //   } catch (err) {
  //     console.error(err);
  //     alert('할일 수정에 실패했습니다.');
  //   }
  // };

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(editItem.mutate)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            autoFocus
            {...register('title', {
              // required: '제목을 입력하세요.',
            })}
          />
          <div className="input-error">{errors.title?.message}</div>
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols="23"
            rows="5"
            {...register('content', {
              required: '내용을 입력하세요.',
            })}
          />
          <div className="input-error">{errors.content?.message}</div>
          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" {...register('done')} />
          <br />
          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
