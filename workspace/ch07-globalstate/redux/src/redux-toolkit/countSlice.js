import { createSlice } from '@reduxjs/toolkit';

//리듀서와 액션 생성자를 간단하게 작성
//반환값{reducer,actions,...} ==>을 반환
//educers에 등록해놓은 함수들이 reducer가 되고, Redux 스토어에 전달해야한다
//actions 속성에는 각 리듀서에 해당하는 액션 생성자 객체

const counterSlice = createSlice({
  name: 'myCounter', //슬라이스 이름(액션 타입의 접두사로 사용됨)
  initialState: { count: 10 },
  reducers: {
    countUp: (state, action) => {
      //immer라이브러리를 내부적으로 사용학시 때문에 state를 직접 수정 가능하다
      //==>불변성 고민 안해도 됨!
      state.count += action.payload;
    },
    countDown: (state, action) => {
      state.count -= action.payload; //데이터는 payload라는 속성으로 넘어온다고 정해져 있는거임
    },
    countReset: (state, action) => {
      state.count = 0;
    },
  },
});
//countUp(2)=>{type:'myCounter_countUp',payload:2)}
export const { countDown, countUp, countReset } = counterSlice.actions;
//ex( CountDown을 호출하면 action을 반환해줌 )
export default counterSlice;
