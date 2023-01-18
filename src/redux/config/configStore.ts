import { configureStore } from '@reduxjs/toolkit';

import todos from '../modules/todos';

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;


// State 타입 구분
export type RootState = ReturnType<typeof store.getState>;

// Dispatch 타입 구분
export type AppDispatch = typeof store.dispatch;