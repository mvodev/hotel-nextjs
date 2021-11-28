import { combineReducers } from '@reduxjs/toolkit';
import dates from './Dates/DatesReducer';
import registrationCard from './RegistrationCard/RegistrationCardReducer';

const reducers = combineReducers({
  dates,
  registrationCard,
});

type RootState = ReturnType<typeof reducers>;

export default reducers;
export type { RootState };
