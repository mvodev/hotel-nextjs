import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesReducer';
import prices from './Prices/PricesSlice';
import headerReducer from './Header/HeaderReducer';

const reducers = combineReducers({
  dates,
  prices,
  headerReducer,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;

export type { RootState };

