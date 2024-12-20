import CounterContext from '@context/CounterContext';
import { SimpleContext } from '@context/SimpleContext';
import { useContext, useEffect } from 'react';

function Right3() {
  useEffect(() => {
    console.log('      # Right3 렌더링.');
  });

  // const {
  //   hello: { simple },
  // } = useContext(SimpleContext);
  const simple = useContext(SimpleContext);

  const {
    hello,
    actions: { countUp, countDown, reset },
  } = useContext(CounterContext);

  return (
    <div>
      <h3>Right3-{simple.hello}</h3>
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => reset()}>0</button>
      <button onClick={() => countUp(1)}>+1</button>
    </div>
  );
}

export default Right3;
