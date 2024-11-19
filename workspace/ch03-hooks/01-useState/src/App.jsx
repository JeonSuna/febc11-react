import { useState } from 'react';

function App() {
  const [state, setState] = useState('');
  function onChange(event) {
    setState(event.target.value);
  }
  return (
    <>
      <h1>01 useState - 상태 관리</h1>
      <div>
        <input type="text" value={state} onChange={onChange} />
        <br />
        <span>입력 메세지: {state}</span>
      </div>
    </>
  );
}

export default App;
