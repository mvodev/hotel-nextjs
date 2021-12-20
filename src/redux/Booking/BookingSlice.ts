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
      state.list = action.payload.sort((a, b) => b.end - a.end);
    },
    setRooms: (state, action: PayloadAction<BookedRoom[]>) => {
      state.rooms = action.payload;
    },
    toggleFetchingStatus: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
  },
});

export const { setList, setRooms, toggleFetchingStatus } = bookingSlice.actions;

export const selectBookingList = (state: AppState): BookingList[] =>
  state.booking.list;

export const selectActiveBookingSize = (state: AppState): number =>
  state.booking.list.filter((i) => i.end > new Date().getTime()).length;

export const selectActiveRoomSize = (state: AppState): number =>
  [
    ...new Set(
      state.booking.list
        .slice(0, selectActiveBookingSize(state))
        .map((i) => i.roomID)
    ),
  ].length;

export const selectBookedRooms = (state: AppState): BookedRoom[] =>
  state.booking.rooms;

export const selectFetching = (state: AppState): boolean =>
  state.booking.fetching;

export default bookingSlice.reducer;
