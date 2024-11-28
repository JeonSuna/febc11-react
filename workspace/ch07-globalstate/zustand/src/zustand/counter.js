import { create } from 'zustand';

const useCounterState = create((set, get) => ({
  count: 6,
  countUp: (step) => {
    const newState = { count: get().count + step };
    set(newState);
  },
})); //create를 통해 만듦, 이 create는 객체를 반환하는 함수가 전달됨 , 그 객체가 상태를 반영/set과 get을 매개변수롷받음

export default useCounterState;
