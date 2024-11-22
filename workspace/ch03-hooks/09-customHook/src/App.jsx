import useFetch from '@hooks/useFetch';
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
//vite-sample복사함
const API_SERVER = 'https://todo-api.fesp.shop/api';
function App() {
  //Todo API 서버에 ajax 요청을 보낸다

  const { data, error, isLoading } = useFetch({ url: '/todolist?delay=2000' });

  return (
    <>
      <h1>09 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 목록</h2>
      {isLoading && <PacmanLoader color="#5eeb34" size={18} />}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
