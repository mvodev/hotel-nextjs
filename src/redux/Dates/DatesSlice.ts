import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/store';

type Dates = [null, null] | [string, string];

type DatesState = {
  dates: Dates;
};

const dates: Dates = [null, null];

const initialState: DatesState = {
  dates,
};

const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setDates: (state, action: PayloadAction<Dates>) => {
      state.dates = action.payload;
    },
  },
});

const { setDates } = datesSlice.actions;

const selectDates = (state: AppState): Dates => state.dates.dates;

export default datesSlice.reducer;

export { setDates, selectDates };
