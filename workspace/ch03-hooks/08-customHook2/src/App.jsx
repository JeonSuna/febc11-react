import { useEffect, useState } from 'react';

//vite-sample복사함
const API_SERVER = 'https://todo-api.fesp.shop/api';
function App() {
  //Todo API 서버에 ajax 요청을 보낸다

  const [data, setData] = useState();
  const fetchTodo = async (fetchParams) => {
    try {
      const response = await fetch(API_SERVER + fetchParams.url);
      const jsonData = await response.json();
      console.log(response);
      console.log(jsonData);
      if (jsonData.ok) {
        setData(jsonData.items);
      } else {
        throw new Error(jsonData.error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchParams = { url: '/todolist' };
    fetchTodo(fetchParams);
  }, []);

  return (
    <>
      <h1>08 Custom Hook - fetch api사용</h1>
      <h2>할일 목록</h2>
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
