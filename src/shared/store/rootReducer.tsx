import { combineReducers } from '@reduxjs/toolkit';
import modal from 'shared/store/features/modalSlice';

const rootReducer = combineReducers({
  modal
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
