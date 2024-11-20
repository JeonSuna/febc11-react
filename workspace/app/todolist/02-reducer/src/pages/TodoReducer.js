import { produce } from 'immer';
//state,action을 전달받고 새로운 state를 반환하는 순수 함수
function TodoReducer(state, action) {
  //   let newItemList = [...state];
  //([{},{},{}], { type: 'ADD', value: {_id:1,title:'두부',done:true} } )
  let targetIndex = state.findIndex((item) => item._id === action.value._id);

  let newState; //선언만 해주고 immer를 통해서 변경하도록 한다
  switch (action.type) {
    case 'ADD':
      newState = produce(state, (draft) => {
        draft.push(action.value);
      });
      break;
    case 'TOGGLE':
      newState = produce(state, (draft) => {
        draft[targetIndex].done = !draft[targetIndex].done;
      });
      break;
    case 'DELETE':
      newState = produce(state, (draft) => {
        draft.splice(targetIndex, 1);
      });
      break;
    default:
      newState = state;
  }
  return newState;
}
export default TodoReducer;
