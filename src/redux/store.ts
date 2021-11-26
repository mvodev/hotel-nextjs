import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import dates from './Dates/DatesSlice';

const makeStore = () => configureStore({
  reducer: {
    dates 
  }
});

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
