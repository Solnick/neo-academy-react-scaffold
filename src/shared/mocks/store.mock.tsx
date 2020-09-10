import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../store/rootReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false
  })
];

export const storeMock = configureStore({
  reducer: rootReducer,
  middleware
});
