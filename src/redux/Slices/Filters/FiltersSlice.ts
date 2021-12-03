import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';
import type { CheckboxButtonItemType } from 'src/components/CheckboxButtons/Types';
import type { DropdownRoomValue } from 'src/components/DropdownRoom/Types';

import type {
  Dates,
  Guests,
  Prices,
  RulesKeys,
  AvailabilityKeys,
  ConveniencesKeys,
  AdditionalConvenienceKeys,
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
    setFilters: (state, action: PayloadAction<FiltersState>) => {
      state = action.payload;
    },
    setDates: (state, action: PayloadAction<Dates>) => {
      state.dates = action.payload;
    },
    setGuests: (state, action: PayloadAction<Guests>) => {
      state.guests = action.payload;
    },
    setPrices: (state, action: PayloadAction<Partial<Prices>>) => {
      state.prices = { ...state.prices, ...action.payload };
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

export const {
  setFilters,
  setDates,
  setGuests,
  setPrices,
  setRules,
  setAvailability,
  setConveniences,
  setAdditionalConvenience,
} = filtersSlice.actions;

export const selectFilters = (state: AppState): FiltersState => state.filters;

export const selectDates = (state: AppState): Dates => state.filters.dates;

export const selectGuests = (state: AppState): Guests => state.filters.guests;

export const selectPrices = (state: AppState): Prices => state.filters.prices;

export const selectRules = (state: AppState): CheckboxButtonItemType[] =>
  Object.values(state.filters.rules);

export const selectAvailability = (state: AppState): CheckboxButtonItemType[] =>
  Object.values(state.filters.availability);

export const selectConveniences = (state: AppState): DropdownRoomValue[] =>
  Object.values(state.filters.conveniences);

export const selectAdditionalConvenience = (
  state: AppState
): CheckboxButtonItemType[] =>
  Object.values(state.filters.additionalConvenience);

export default filtersSlice.reducer;
