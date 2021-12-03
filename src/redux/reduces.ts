import { combineReducers } from '@reduxjs/toolkit';
import signInCardReducer from './SignInCard/SignInCardReducer';
import prices from './Prices/PricesSlice';

const reducers = combineReducers({
  signInCardReducer,
  prices,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;
export type { RootState };