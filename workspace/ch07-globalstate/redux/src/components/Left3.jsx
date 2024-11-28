import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Left3() {
  useEffect(() => {
    console.log('      # Left3 렌더링.');
  });

  //redux

  // const state = useSelector((state) => state);
  // <span>{state.count}</span>;
  //모든 상태를 다 꺼내오고 싶으면 이렇게 하면 됨 ,
  //이 state는 counterResucer에서 설정한 initialState임

  // const count = useSelector((state) => state.count);
  //상태를 전달 받고 상태를 return하는 함수
  //count속성 꺼내서 쓰겠다

  const count = useSelector((state) => state.counterStore.count);

  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
