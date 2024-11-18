import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    cellphone: '010',
  });

  function handleChange(event) {
    const newUser = {
      ...user, //기존 유저 복사해서 새로운 객체로 만들고
      [event.target.name]: event.target.value, //수정된 것만 덮어 씌운다
    };
    setUser(newUser);
  }
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [cellphone, setCellphone] = useState('010');

  // function handleNameChange(event) {
  //   setName(event.target.value);
  // }
  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
  // function handleCellphoneChange(event) {
  //   setCellphone(event.target.value);
  // }

  return (
    <>
      <h1>05 회원가입 입력값 상태 관리</h1>

      <form>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
        <div>검증 실패 메세지</div>

        <label htmlFor="email">이메일</label>
        <input
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <div>검증 실패 메세지</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input
          id="cellphone"
          name="cellphone"
          type="number"
          value={user.cellphone}
          onChange={handleChange}
        />
        <br />
        <div>검증 실패 메세지</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: <br />
        이메일: <br />
        휴대폰: <br />
      </p>
    </>
  );
}

export default App;
