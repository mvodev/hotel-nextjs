import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesReducer';
import signInCardReducer from './SignInCard/SignInCardReducer';
import prices from './Prices/PricesSlice';

const reducers = combineReducers({
  dates,
  signInCardReducer,
  prices,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;
export type { RootState };
