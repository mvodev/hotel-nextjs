import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';

import type { Dates, Guests, Prices, Conveniences } from './Types';
import initialState from './InitialState';

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDates: (state, action: PayloadAction<Dates>) => {
      state.dates = action.payload;
    },
    setGuests: (state, action: PayloadAction<Guests>) => {
      state.guests = action.payload;
    },
    setPrices: (state, action: PayloadAction<Prices>) => {
      state.prices = action.payload;
    },
    setConveniences: (state, action: PayloadAction<Conveniences>) => {
      state.conveniences = action.payload;
    },
  },
});

export const { setDates, setGuests, setPrices, setConveniences } =
  filtersSlice.actions;

export const selectDates = (state: AppState): Dates => state.filters.dates;

export const selectGuests = (state: AppState): Guests => state.filters.guests;

export const selectPrices = (state: AppState): Prices => state.filters.prices;

export const selectConveniences = (state: AppState): Conveniences =>
  state.filters.conveniences;

export default filtersSlice.reducer;
