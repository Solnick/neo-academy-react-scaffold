import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isModalOpened: boolean;
}

interface ToggleViewPayload {
  isModalOpened: boolean;
}

export const initialState: ModalState = {
  isModalOpened: false
};

const modalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    toggleModalView(state, action: PayloadAction<ToggleViewPayload>) {
      state.isModalOpened = action.payload.isModalOpened;
    }
  }
});

export const {
  toggleModalView
} = modalSlice.actions;

export default modalSlice.reducer;
