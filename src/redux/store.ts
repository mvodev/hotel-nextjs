import {
  configureStore,
  getDefaultMiddleware,
  Store 
} from '@reduxjs/toolkit';
import createSagaMiddleware, {Task} from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import filters from './Filters/FiltersSlice';
import rootSaga from './Sagas/Index'

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      filters
    },
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore);

type AppStore = ReturnType<typeof makeStore>;
type AppState = ReturnType<AppStore['getState']>;

export default wrapper;

export type { AppStore, AppState };
