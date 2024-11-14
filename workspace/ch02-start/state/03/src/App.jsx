import { useState } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <>
      <h1>03 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div
        onPointerMove={(event) => {
          // position.x = event.clientX; //마우스x,
          // position.y = event.clientY; //마우스y
          //리액트는 객체일 경우에 실제 내부 속성값을 하나하나 비교하는 깊은 비교를 하지 않음, 즉 얕은 비교를 한다.
          // 속성을 직접 객체에 수정하더라도 리렌더링되지 않는다

          //통째로 교체해야한다.
          let newPosition = { x: event.clientX, y: event.clientY - 80 };
          setPosition(newPosition);
          console.log(position);
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}
export default App;
