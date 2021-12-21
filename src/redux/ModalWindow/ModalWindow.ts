import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type ModalWindow from './Types';

const initialState: ModalWindow = {
  isEnabled: false,
  image: '',
  title: '',
  text: '',
}

const modalWindowSlice = createSlice({
  name:  'modalWindow',
  initialState,
  reducers: {
    setModalWindiwData: (state, action: PayloadAction<ModalWindow>) => {
      state.isEnabled = action.payload.isEnabled;
      state.image = action.payload.image;
      state.title = action.payload.title;
      state.text = action.payload.text;
    },
    switchModelWindow: (state, action: PayloadAction<boolean>) => {
      state.isEnabled = action.payload
    }
  }
})

const modalWindiw = modalWindowSlice.reducer;

export const { setModalWindiwData, switchModelWindow } = modalWindowSlice.actions;
export default modalWindiw;