import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import counterActionCreator from '@redux/counterActionCreator';
import { countDown, countReset, countUp } from '@redux-toolkit/countSlice';

function Right3() {
  useEffect(() => {
    console.log('      # Right3 렌더링.');
  });

  //상태값 수정
  const dispatch = useDispatch(); //use를 이용해 디스패치 함수 호출
  //클릭함수 눌렀을 때 action을 디스패치가 전달
  //action은 actionCreator에 있음
  return (
    <div>
      <h3>Right3</h3>
      {/* redux toolkit 버전이다!  */}
      <button
        onClick={() => {
          dispatch(countUp(1));
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(countReset());
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          dispatch(countDown(1));
        }}
      >
        -1
      </button>
      {/* <button
        onClick={() => {
          dispatch(counterActionCreator.countUp(1));
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(counterActionCreator.countReset());
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          dispatch(counterActionCreator.countDown(1));
        }}
      >
        -1
      </button> */}
      {/* <button
        onClick={() => {
          dispatch({ type: 'countUp', payload: { step: 2 } });
        }}
      >
        +2
      </button> */}
    </div>
  );
}

export default Right3;
