import Todo from '@pages/Todo';
import { produce } from 'immer';
import { useState } from 'react';

function TodoContainer() {
  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: '두부', done: true },
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ];

  const [itemList, setItemList] = useState(sampleItemList);

  const addItem = (item) => {
    const newItemList = [...itemList, item];
    setItemList(newItemList); //set 함수를 통한 상태관리
  };

  //할일 완료/미완료 처리
  const toggleDone = (_id) => {
    // 데이터 갱신(상태 변경)
    const newItemList = produce(itemList, (draft) => {
      const item = draft.find((item) => item._id === _id);
      item.done = !item.done;
    });

    setItemList(newItemList);

    console.log('예전 itemList', itemList);
    console.log('새로운 itemList', newItemList);
  };

  //할일 삭제
  function deleteItem(_id) {
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
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
