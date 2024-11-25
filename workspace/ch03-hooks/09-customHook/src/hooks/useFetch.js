import { useEffect, useState } from 'react';
const API_SERVER = 'https://todo-api.fesp.shop/api';

function useFetch(fetchParams) {
  //서버로부터 받은 응답 data
  const [data, setData] = useState(null);
  //error메세지
  const [isLoading, setIsLoading] = useState(false);
  //로딩중 상태
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('dsfs');
    requset(fetchParams);
  }, []); //마운트 된 후 한번만 호출

  const requset = async (params) => {
    try {
      setIsLoading(true);
      const response = await fetch(API_SERVER + params.url);
      const jsonData = await response.json();
      console.log(response);
      console.log(jsonData);
      if (jsonData.ok) {
        setData(jsonData);
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
      setIsLoading(false);
    }
  };

  return { data, error, isLoading };
}

export default useFetch;
