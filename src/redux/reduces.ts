import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesReducer';

const reducers = combineReducers({
  dates,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;
export type { RootState };
