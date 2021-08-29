import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './Reducers/RootReducer.ts';

const store = configureStore({
  reducer: rootReducer,
  //middleware,
});

export default store;