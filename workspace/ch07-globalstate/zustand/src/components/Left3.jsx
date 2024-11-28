import useCounterState from '@zustand/counter';
import { useEffect } from 'react';

function Left3() {
  useEffect(() => {
    console.log('      # Left3 렌더링.');
  });

  const { count } = useCounterState(); //count와 countUp을 가진 속성을 반환함
  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
