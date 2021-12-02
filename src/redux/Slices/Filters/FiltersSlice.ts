import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';

import type { Dates, Guests, Prices } from './Types';
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
    },
    setPrices: (state, action: PayloadAction<Partial<Prices>>) => {
      state.prices = { ...state.prices, ...action.payload };
    },
  },
});

export const {
  setDates,
  setAdults,
  setChilds,
  setInfants,
  resetGuests,
  setPrices,
} = filtersSlice.actions;

export const selectDates = (state: AppState): Dates => state.filters.dates;

export const selectGuests = (state: AppState): Guests => state.filters.guests;

export const selectPrices = (state: AppState): Prices => state.filters.prices;

export default filtersSlice.reducer;
