import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'src/redux/reduces';

type Dates = [null, null] | [Date, Date];

type DatesState = {
  dates: Dates
};

const dates: Dates = [null, null];

const initialState: DatesState = {
  dates
};

const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setDates: (state, action: PayloadAction<Dates>) => {
      state.dates = action.payload;
    }
  },
});

const { setDates } = datesSlice.actions;

const selectDates = (state: RootState): Dates => state.dates.dates;

export default datesSlice.reducer;

export { setDates, selectDates };
