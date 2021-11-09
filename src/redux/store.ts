import { createStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducers from './reduces';

const makeStore = () => createStore(reducers);
const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
