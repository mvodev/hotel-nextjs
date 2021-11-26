import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
  reducer: {

  }
});

const wrapper = createWrapper(makeStore);

export default wrapper;
