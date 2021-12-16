import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';

import BookingType, { BookingList, BookedRoom } from './Types';

const initialState: BookingType = {
  list: [],
  rooms: [],
  fetching: false,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<BookingList[]>) => {
      state.list = action.payload.sort(
        (a, b) => b.dates[1].seconds - a.dates[1].seconds
      );
    },
    setRooms: (state, action: PayloadAction<BookedRoom[]>) => {
      state.rooms = action.payload;
    },
    toggleFetchingStatus: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
  },
});

export const { setList, setRooms, toggleFetchingStatus } =
  bookingSlice.actions;

export const selectBookingList = (state: AppState): BookingList[] =>
  state.booking.list;

export const selectBookedRooms = (state: AppState): BookedRoom[] =>
  state.booking.rooms;

export const selectFetching = (state: AppState): boolean =>
  state.booking.fetching;

export default bookingSlice.reducer;
