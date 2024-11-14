import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2>02 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{number}</p>
      <button
        onClick={() => {
          console.log('클릭시작', number); //0

          //호출 즉시 리렌더링리 되지 않고, 모아두었다가 한번에 반영이된다.(배치)
          // setNumber(number + 1); // 0+1
          // setNumber(number + 1); // 0+1
          // setNumber(number + 1); // 0+1 ///상태값은 렌더링이 되어야 바뀐다.

          //콜백 함수의 리턴값을 저장해 두었다가 다음에 호출되는 콜백함수의 인자로 전달
          //콜백 함수의 리턴값이 다음 상태로 설정됩니다. 이때 콜백 함수는 현재 상태값을 인자로 받아서 상태를 업데이트
          setNumber((num) => num + 1); // 0+1
          setNumber((num) => num + 1); // 1+1
          setNumber((num) => num + 1); // 2+1

          console.log('클릭 처리 종료', number); // 이건 여전히 0이다., 상태없데이트 반영 전 출력
        }}
      >
        +2
      </button>
    </div>
  );
}

export default App;
