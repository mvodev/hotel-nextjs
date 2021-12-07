import { combineReducers } from '@reduxjs/toolkit';
import prices from './Prices/PricesSlice';
import Authentication from './Slices/Authentication/Authentication';

const reducers = combineReducers({
  prices,
  Authentication,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;

export type { RootState };

