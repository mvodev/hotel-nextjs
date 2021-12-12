import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';

import BookingType, { BookedRoom } from './Types';

const initialState: BookingType = {
  rooms: [],
  fetching: false,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<BookedRoom[]>) => {
      state.rooms = action.payload;
    },
    toggleFetchingStatus: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
    updateRooms: () => {},
  },
});

export const { setRooms, toggleFetchingStatus, updateRooms } =
  bookingSlice.actions;

export const selectBookedRooms = (state: AppState): BookedRoom[] =>
  state.booking.rooms;

export const selectFetching = (state: AppState): boolean =>
  state.booking.fetching;

export default bookingSlice.reducer;
