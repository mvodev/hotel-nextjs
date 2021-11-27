import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducers from './reduces';
import RootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(RootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
