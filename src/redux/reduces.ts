import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesSlice';

const reducers = combineReducers({
  dates,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;

export type { RootState };
