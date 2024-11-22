import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
//vite-sample복사함
const API_SERVER = 'https://todo-api.fesp.shop/api';
function App() {
  //Todo API 서버에 ajax 요청을 보낸다

  const [data, setData] = useState(null);
  const [isLoadding, setIsLoadding] = useState(false);
  const [error, setError] = useState(null); //error가 발생하면 화면도 갱신 되어야함 -> error를 화면에 보여줘야하니까 ..

  const fetchTodo = async (fetchParams) => {
    try {
      setIsLoadding(true);
      const response = await fetch(API_SERVER + fetchParams.url);
      const jsonData = await response.json();
      console.log(response);
      console.log(jsonData);
      if (jsonData.ok) {
        setData(jsonData.items);
        setError(null);
      } else {
        throw new Error(jsonData.error.message);
      }
    } catch (error) {
      //error처리
      console.error(error); //서버로부터 데이터를 못받아올 때
      setError({
        message:
          '일시적인 문제로 인헤 작업 처리에 실패했습니다. 잠시후 다시 요청해 주시기 바랍니다',
      });
      setData(null);
    } finally {
      //무조건 호출되어야하는 코드는 finally에 넣어준다
      setIsLoadding(false);
      console.log('디버깅');
    }
  };

  useEffect(() => {
    const fetchParams = { url: '/todolist?delay=3000' };
    console.log('dsfs');
    fetchTodo(fetchParams);
  }, []);

  return (
    <>
      <h1>08 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 목록</h2>
      {isLoadding && <PacmanLoader color="#5eeb34" size={18} />}
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
