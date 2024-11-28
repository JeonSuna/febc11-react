import CounterContext from '@context/CounterContext';
import { useContext, useEffect } from 'react';

function Left3() {
  useEffect(() => {
    console.log('      # Left3 렌더링.');
  });

  const {
    state: { count },
  } = useContext(CounterContext); //==>values값이 return된다

  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
