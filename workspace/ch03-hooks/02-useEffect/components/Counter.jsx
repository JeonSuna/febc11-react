import { useEffect, useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = '0' }) {
  const initCounter = Number(children);

  //컴포넌트는 자신이 해야 할 기능과 UI모두 가지고 있어야한다.
  const [count, setCount] = useState(initCounter);
  const [step, setStep] = useState(1);

  const handleDown = () => {
    setCount(count - step); //자동 재할당
  };
  const handleUp = () => {
    setCount(count + step);
  };
  const handleReset = (event) => {
    setCount(initCounter);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log(
  //     'dependencies에 빈 배열을 지정하면 컴포넌트가 마운트된 후에(DOM이 생기고 난 후) 한번만 호출됨(업데이트 후에는 호출되지 않음)'
  //     // 상태 변경이(update)을 해도 그거와 상관없이 마운트 된 후에만 호출
  //   );
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //     // setTimeout이 1초 후 handleUp을 호출하면서 상태를 변경(예: setState)하면,
  //     // useEffect 실행 → setTimeout 설정 → 1초 후 handleUp() 호출.
  //     // handleUp()에서 상태 변경(예: setState) → 컴포넌트 다시 렌더링.
  //     // 다시 렌더링되면서 useEffect 실행 → 반복.
  //   }, 1000);
  //   console.log(
  //     'dependencies에 빈 배열을 지정하지 않으면 컴포넌트가 마운트된 후와 업데이트 된 후에 호출됨'
  //   );
  // });

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log(
  //     'dependencies에 값을 지정하면 컴포넌트가 업데이트 될 때 지정한 값중 하나라도 수정되었을 경우 호출됨'
  //   );
  // }, [step]);
  // // 증감치 올려서 step이 바뀌어 리렌더링 되면 setTimeout 실행된다
  // // 1초후에 화면 렌더링되고 (handleUp으로 인해), console.log는 바로 출력

  // useEffect(() => {
  //   console.log('setup 함수 호출'); //최초한번만 실행
  //   const timer = setInterval(() => {
  //     console.log(step, new Date()); //step은 계속 초기값인 1임
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer); //clear안하면 2번호출됨 , useStrict이 알려줌
  //   };
  // }, [step]);

  // useEffect(() => {
  //   console.log('setup 함수 호출'); //최초한번만 실행
  //   const timer = setInterval(() => {
  //     console.log(step, new Date()); //step은 계속 초기값인 1임
  //   }, 1000);
  //   return () => {
  //     console.log(step, 'cleanup함수'); //변경된 값
  //     clearInterval(timer);
  //   };
  // }, [step]);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        type="number"
        style={{ width: '40px' }}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <Button color="red" onClick={handleDown}>
        -
      </Button>
      <Button onClick={handleReset}>{initCounter}</Button>
      <Button color="blue" onClick={handleUp}>
        +
      </Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
