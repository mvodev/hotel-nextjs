import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesReducer';
import signInCardReducer from './SignInCard/SignInCardReducer';

const reducers = combineReducers({
  dates,
  signInCardReducer,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;
export type { RootState };
