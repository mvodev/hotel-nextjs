import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RoomsType, initialStateType } from './Types'

const initialStae: initialStateType = { rooms: [] }

const roomsSlice = createSlice({
  name:  'rooms',
  initialStae,
  reducers: {
    writeRooms: (state: initialStateType, action: PayloadAction<RoomsType>) => {
      state.rooms = action.payload;
    },
  }
})

const roomsReducer = roomsSlice.reducer;

export const { writeRooms } = roomsSlice.actions;
export default roomsReducer;
