import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';
import type { CheckboxButtonItemType } from 'src/components/CheckboxButtons/Types';
import type { DropdownRoomValue } from 'src/components/DropdownRoom/Types';

import type {
  Dates,
  Guests,
  Price,
  RulesKeys,
  AvailabilityKeys,
  ConveniencesKeys,
  AdditionalConvenienceKeys,
  Filters,
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
    setFilters: (state, action: PayloadAction<Filters>) => {
      const {
        dates,
        guests,
        price,
        rules,
        availability,
        conveniences,
        additionalConvenience,
      } = action.payload;
      state.dates = dates;
      state.guests = guests;
      state.price = price;
      state.rules = rules;
      state.availability = availability;
      state.conveniences = conveniences;
      state.additionalConvenience = additionalConvenience;
    },
    setDates: (state, action: PayloadAction<Dates>) => {
      state.dates = action.payload;
    },
    setGuests: (state, action: PayloadAction<Guests>) => {
      state.guests = action.payload;
    },
    setPrice: (state, action: PayloadAction<Partial<Price>>) => {
      state.price = { ...state.price, ...action.payload };
    },
    setRules: (state, action: PayloadAction<CheckboxButtonItemType[]>) => {
      state.rules = retype(
        Object.keys(initialState.rules) as RulesKeys[],
        action.payload
      );
    },
    setAvailability: (
      state,
      action: PayloadAction<Required<CheckboxButtonItemType>[]>
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
  setPrice,
  setRules,
  setAvailability,
  setConveniences,
  setAdditionalConvenience,
} = filtersSlice.actions;

export const filtersActions = {
  update: { type: 'filters/update' },
};

export const selectFilters = (state: AppState): Filters => state.filters;

export const selectDates = (state: AppState): [number, number] | [null, null] =>
  state.filters.dates;

export const selectGuests = (state: AppState): Guests => state.filters.guests;

export const selectPrice = (state: AppState): Price => state.filters.price;

export const selectRules = (state: AppState): CheckboxButtonItemType[] =>
  Object.values(state.filters.rules);

export const selectAvailability = (state: AppState): Required<CheckboxButtonItemType>[] =>
  Object.values(state.filters.availability);

export const selectConveniences = (state: AppState): DropdownRoomValue[] => {
  const { bedrooms, beds, bathrooms } = state.filters.conveniences;
  return [bedrooms, beds, bathrooms];
}

export const selectAdditionalConvenience = (
  state: AppState
): CheckboxButtonItemType[] =>
  Object.values(state.filters.additionalConvenience);

export default filtersSlice.reducer;
