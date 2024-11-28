import counterSlice from '@redux-toolkit/countSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer, //counterStore에 정한 reducer는 counterSlice에서 정의한 reducer이다
  },
});

export default store;
