import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';

const roomCardsStatusSlice = createSlice({
  name: 'roomCardsStatus',
  initialState: {
    updateStatus: false,
  },
  reducers: {
    turnOff: (state) => {
      state.updateStatus = false;
    },
    turnOn: (state) => {
      state.updateStatus = true;
    },
  },
});

export const { turnOff, turnOn } = roomCardsStatusSlice.actions;

export const selectUpdateStatus = (state: AppState): boolean =>
  state.roomCardsStatus.updateStatus;

export default roomCardsStatusSlice.reducer;
