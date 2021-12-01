import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesReducer';
import prices from './Prices/PricesSlice';
import signInCardReducer from './SignInCard/SignInCardReducer';

const reducers = combineReducers({
  dates,
  prices,
  signInCardReducer,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;

export type { RootState };

