import useCounterState from '@zustand/counter';
import { useEffect } from 'react';

function Right3() {
  useEffect(() => {
    console.log('      # Right3 렌더링.');
  });
  //count를 사용하지 않더라도 자동으로 구독이 되기 때문에 count변경시 리렌더링이 됨(right,left둘 다)
  // const { countUp } = useCounterState();

  //때문에 countUp만 꺼내와라 . 즉 필요한 함수만 수정해서 가져오도록 한다=>ㅣleft만 렌더링 됨
  const countUp = useCounterState((state) => state.countUp);
  return (
    <div>
      <h3>Right3</h3>
      <button
        onClick={() => {
          countUp(1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Right3;
