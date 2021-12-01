import { combineReducers } from '@reduxjs/toolkit';
import AuthenticationReducer from './Authentication/AuthenticationReducer';
import dates from './Dates/DatesReducer';
import prices from './Prices/PricesSlice';

const reducers = combineReducers({
  dates,
  prices,
  AuthenticationReducer,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;

export type { RootState };
