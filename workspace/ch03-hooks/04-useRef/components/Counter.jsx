import { useEffect, useReducer, useRef, useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = '0' }) {
  const initCount = Number(children);
  const [count, countDispatch] = useReducer(counterReducer, initCount);

  const step = useRef(1); //증감수만 증가시킬 때 전체 컴포넌트가 렌더링 될 필요는 없다
  //{current:1} 반환

  const handleDown = () => {
    countDispatch({ type: 'DOWN', value: step.current });
  };
  const handleUp = () => {
    countDispatch({ type: 'UP', value: step.current });
  };
  const handleReset = (event) => {
    countDispatch({ type: 'RESET', value: initCount });
    stepElem.current.focus();
  };
  const stepElem = useRef(null);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        type="number"
        style={{ width: '40px' }}
        defaultValue={step.current}
        onChange={(e) => (step.current = Number(e.target.value))}
        ref={stepElem}
      />
      <Button color="red" onClick={handleDown}>
        -
      </Button>
      <Button onClick={handleReset}>{initCount}</Button>
      <Button color="blue" onClick={handleUp}>
        +
      </Button>
      <span>{count}</span>
    </div>
  );
}

function counterReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'DOWN':
      newState = state - action.value;
      break;
    case 'UP':
      newState = state + action.value;
      break;
    case 'RESET':
      newState = action.value;
      break;
    default:
      newState = state;
  }

  return newState;
}
export default Counter;
