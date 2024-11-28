import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

// 1. Context 객체 생성
const CounterContext = createContext();

CounterProvider.propTypes = {
  children: PropTypes.node,
};

//3. Provider 작성해서 export한다
export function CounterProvider({ children }) {
  //4. 상태,데이터,상태를 관리하는 함수를 정의
  //Left3에 전달
  const [count, setCount] = useState(10);

  //Right3에 전달
  const countUp = function (step) {
    setCount(count + step);
  };
  const countDown = function (step) {
    setCount(count - step);
  };
  const reset = function () {
    setCount(0);
  };

  useEffect(() => {
    console.log('# App 렌더링.');
  });

  //value속성에 전달할 Context 값 지정
  //==> 보내고싶은 data
  const values = {
    state: { count }, //객체 속성으로 count정의
    actions: { countDown, reset, countUp }, //key값은 우리 맘대로
  };
  //5.context객체의 Provider로 자식 컴포넌트를 감싸서 반환

  return (
    <CounterContext.Provider value={values}>
      {children};
    </CounterContext.Provider>
  );
}

// <CounterProvider>
//     <App/>  ==>칠드런은 앱이됨
// </CounterProvider>

{
  /* <CounterContext.Provider value={values}>
    <App/>  ==>칠드런은 앱이됨   ==>App밑에있는 애들은 value를 꺼내서 쓸 수 있다.
</CounterContext.Provider> */
}

// 2. Context 객체 export
export default CounterContext;
