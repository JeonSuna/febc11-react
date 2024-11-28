//초기 상태
import { COUNTER_ACTION } from '@redux/counterActionCreator';
const initialState = { count: 5 };

//현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
//상태가 복합 객체일 경우 immer같은 라이브러리를 사용해서 불변성 유지해야 함
//state: 이전 상태(store가 내부적으로 관리, 이전의 리턴값이 다음의 state로 전달)
//action: 동작을 정의한 객체(자유롭게 작성) . 예시{type:'countUp',payload:{step:2}}
//리턴값: 새로운 상태
function counterReducer(state = initialState, action) {
  //defaultvalue추가
  switch (action.type) {
    case COUNTER_ACTION.UP:
      //   state.count += action.payload.step;
      //   return state;    //==> 불변성을 지키지 못한다, count는 객체이기 때문에!! (참조어쩌구)
      //==> 새로운 객체를 만들어서 return해야 한다
      return { ...state, count: state.count + action.payload.step };
    case COUNTER_ACTION.DOWN:
      return { ...state, count: state.count - action.payload.step };
    case COUNTER_ACTION.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default counterReducer;
