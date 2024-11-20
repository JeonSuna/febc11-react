//state,action을 전달받고 새로운 state를 반환하는 순수 함수
function TodoReducer(state, action) {
  let newItemList = [...state];
  //([{},{},{}], { type: 'ADD', value: {_id:1,title:'두부',done:true} } )
  let targetIndex = state.findIndex((item) => item._id === action.value._id);
  switch (action.type) {
    case 'ADD':
      newItemList.push(action.value);
      newItemList; //set 함수를 통한 상태관리
      break;
    case 'TOGGLE':
      newItemList[targetIndex].done = !newItemList[targetIndex].done;
      break;
    case 'DELETE':
      newItemList.splice(targetIndex, 1);
      break;
  }
  return newItemList;
}
export default TodoReducer;
