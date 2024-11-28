import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Left3() {
  useEffect(() => {
    console.log('      # Left3 렌더링.');
  });

  //redux
  const count = useSelector((state) => state.count); //상태를 전달 받고 상태를 return하는 함수
  //count속성 꺼내서 쓰겠다

  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
