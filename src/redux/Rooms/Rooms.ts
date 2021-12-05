import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from 'src/redux/Store';
import type { RoomsType, initialStateType } from './Types'

const initialState: initialStateType = { rooms: [] }

const roomsSlice = createSlice({
  name:  'rooms',
  initialState,
  reducers: {
    writeRooms: (state, action: PayloadAction<RoomsType>) => {
      state.rooms = action.payload;
    },
  }
})

const rooms = roomsSlice.reducer;

export const selectRooms = (state: AppState): RoomsType => state.roomsReducer;
export const { writeRooms } = roomsSlice.actions;
export default rooms;
