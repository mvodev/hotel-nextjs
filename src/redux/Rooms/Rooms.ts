import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RoomsType, initialStateType } from './Types'

const initialState: initialStateType = { rooms: [] }

const roomsSlice = createSlice({
  name:  'rooms',
  initialState,
  reducers: {
    writeRooms: (state, action: PayloadAction<{ rooms: RoomsType }>) => {
      state.rooms = action.payload.rooms;
    },
  }
})

const rooms = roomsSlice.reducer;

export const { writeRooms } = roomsSlice.actions;
export default rooms;
