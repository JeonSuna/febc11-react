import Footer from '@components/Footer';
import Header from '@components/Header';
import Todo from '@pages/Todo';
import { useState } from 'react';

function App() {
  // 샘플 목록
  // state를 만든곳에서 상태관련 코드 (set)은 넘겨주지 말고 한 함수에서 실행하자
  const [itemList, setItemList] = useState([
    { _id: 1, title: '두부', done: true },
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ]);

  const addItem = (item) => {
    const newItemList = [...itemList, item];
    setItemList(newItemList); //set 함수를 통한 상태관리
  };

  //할일 완료/미완료 처리
  function toggleDone(_id) {
    const newItemList = [...itemList];
    const item = itemList.find((item) => item._id === _id);
    item.done = !item.done;
    setItemList([...itemList]);
  }

  //할일 삭제
  function deleteItem(_id) {
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  }

  return (
    <div id="todo">
      <Header />
      <Todo
        itemList={itemList}
        addItem={addItem}
        toggleDone={toggleDone}
        deleteItem={deleteItem}
      />
      <Footer />
    </div>
  );
}

export default App;
