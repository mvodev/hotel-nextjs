import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/store';

import type { Dates, Guests } from './Types';
import initialState from './InitialState';

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDates: (state, action: PayloadAction<Dates>) => {
      state.dates = action.payload;
    },
    setAdults: (state, action: PayloadAction<number>) => {
      state.guests.adults = action.payload;
    },
    setChilds: (state, action: PayloadAction<number>) => {
      state.guests.childs = action.payload;
    },
    setInfants: (state, action: PayloadAction<number>) => {
      state.guests.infants = action.payload;
    },
    resetGuests: (state) => {
      state.guests = { 
        adults: 0,
        childs: 0,
        infants: 0,
      };
    }
  },
});

export const {
  setDates,
  setAdults,
  setChilds,
  setInfants,
  resetGuests,
} = filtersSlice.actions;

export const selectDates = (state: AppState): Dates => state.filters.dates;

export const selectGuests = (state: AppState): Guests => state.filters.guests;

export default filtersSlice.reducer;
