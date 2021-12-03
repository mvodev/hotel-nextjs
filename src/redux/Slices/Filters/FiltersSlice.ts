import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';
import type { CheckboxButtonItemType } from 'src/components/CheckboxButtons/Types';
import type { DropdownRoomValue } from 'src/components/DropdownRoom/Types';

import type {
  Dates,
  Guests,
  Prices,
  RulesKeys,
  Rules,
  AvailabilityKeys,
  Availability,
  ConveniencesKeys,
  Conveniences,
  AdditionalConvenienceKeys,
  AdditionalConvenience,
  FiltersState,
} from './Types';
import initialState from './InitialState';

const retype = <I, T extends string>(keys: T[], items: I[]): Record<T, I> =>
  keys.reduce(
    (res, k, idx) => ({ ...res, [k]: items[idx] }),
    {} as Record<T, I>
  );

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
    setRules: (state, action: PayloadAction<CheckboxButtonItemType[]>) => {
      state.rules = retype(
        Object.keys(initialState.rules) as RulesKeys[],
        action.payload
      );
    },
    setAvailability: (
      state,
      action: PayloadAction<CheckboxButtonItemType[]>
    ) => {
      state.availability = retype(
        Object.keys(initialState.availability) as AvailabilityKeys[],
        action.payload
      );
    },
    setConveniences: (state, action: PayloadAction<DropdownRoomValue[]>) => {
      state.conveniences = retype(
        Object.keys(initialState.conveniences) as ConveniencesKeys[],
        action.payload
      );
    },
    setAdditionalConvenience: (
      state,
      action: PayloadAction<CheckboxButtonItemType[]>
    ) => {
      state.additionalConvenience = retype(
        Object.keys(
          initialState.additionalConvenience
        ) as AdditionalConvenienceKeys[],
        action.payload
      );
    },
  },
});

export const { setDates, setGuests, setPrices, setConveniences } =
  filtersSlice.actions;

export const selectFilters = (state: AppState): FiltersState => state.filters;

export const selectDates = (state: AppState): Dates => state.filters.dates;

export const selectGuests = (state: AppState): Guests => state.filters.guests;

export const selectPrices = (state: AppState): Prices => state.filters.prices;

export const selectRules = (state: AppState): Rules => state.filters.rules;

export const selectConveniences = (state: AppState): Conveniences =>
  state.filters.conveniences;

export default filtersSlice.reducer;
