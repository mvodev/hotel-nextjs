import { combineReducers } from '@reduxjs/toolkit';
import signInCardReducer from './SignInCard/SignInCardReducer';
import prices from './Prices/PricesSlice';
import Authentication from './Slices/Authentication/Authentication';

const reducers = combineReducers({
  signInCardReducer,
  prices,
  Authentication,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;
export type { RootState };