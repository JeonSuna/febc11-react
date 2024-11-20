import Todo from '@pages/Todo';
import TodoReducer from '@pages/TodoReducer';

import { useReducer, useState } from 'react';

function TodoContainer() {
  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: '두부', done: true },
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ];

  const [itemList, itemListDispatch] = useReducer(TodoReducer, sampleItemList);
  const [count, setCount] = useState(sampleItemList.length + 1);

  // const addItem = (item) => {
  //   itemListDispatch({ type: 'ADD', value: item }); //set 함수를 통한 상태관리
  // };
  const addItem = (title) => {
    itemListDispatch({
      type: 'ADD',
      value: { _id: count, title, done: false },
    }); //set 함수를 통한 상태관리
    setCount(count + 1);
  };

  //할일 완료/미완료 처리
  const toggleDone = (_id) => {
    // 데이터 갱신(상태 변경)
    itemListDispatch({ type: 'TOGGLE', value: { _id } });
  };

  //할일 삭제
  function deleteItem(_id) {
    itemListDispatch({ type: 'DELETE', value: { _id } });
  }

  return (
    <Todo
      itemList={itemList}
      addItem={addItem}
      toggleDone={toggleDone}
      deleteItem={deleteItem}
    />
  );
}
export default TodoContainer;
