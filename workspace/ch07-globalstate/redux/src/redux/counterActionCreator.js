export const COUNTER_ACTION = {
  UP: 'countUp',
  DOWN: 'countDown',
  RESET: 'countReset',
};

//액션을 생성해서 반환
//counterActionCreator.countUp(2) ==>이런 방식으로 호출하면
//return {type:'countUp',payload:{step:2}} ==> 이런 값으로 return된다
const counterActionCreator = {
  countUp: (step) => ({ type: COUNTER_ACTION.UP, payload: { step: 2 } }),
  countDown: (step) => ({ type: COUNTER_ACTION.DOWN, payload: { step: 2 } }),
  countReset: (step) => ({ type: COUNTER_ACTION.RESET }),
};

export default counterActionCreator;
