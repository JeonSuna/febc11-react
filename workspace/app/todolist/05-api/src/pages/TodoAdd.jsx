import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function TodoAdd() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  // handleSubmit에서 검증을 통과할 경우 호출됨
  const onSubmit = (item) => {
    console.log('서버에 전송', item);

    const timer = setTimeout(() => {
      xhr.abort(); //중간에 요청을 취소하는 함수
    }, 2000); // 2초안에 응답이 도착하지 않으면 abot 함수를 호출함

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://todo-api.fesp.shop/api/todolist');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.responseType = 'json'; //xhr에 response에 저장되는 응답 데이터가 JSON.parse() 결과로 저장됨
    // 서버로부터 응답이 도착하면 호출되는 함수
    xhr.onload = () => {
      clearTimeout(timer);
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.response);
        alert('할일이 추가되었습니다');
        setFocus('title');
        reset();
      } else {
        //4xx,5xx
        console.log('서버에서 에러 응답', xhr.status, xhr.response);
        alert(xhr.response.error?.message || '할일 추가에 실패했습니다');
      }
    };
    xhr.onabort = () => {
      alert('타임아웃');
    };
    xhr.onerror = () => {
      console.error('네트워크 오류');
      alert('할일 추가에 실패했습니다');
    };

    xhr.send(JSON.stringify(item));
  };

  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">추가</button>
          <Link to="/list">취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;