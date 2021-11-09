import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesReducer';

const reducers = combineReducers({
  dates,
});

export default reducers;
