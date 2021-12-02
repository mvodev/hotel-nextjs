import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesReducer';
import prices from './Prices/PricesSlice';

const reducers = combineReducers({
  dates,
  prices,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;

export type { RootState };
