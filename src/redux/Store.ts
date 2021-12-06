import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import rooms from './Rooms/Rooms';
import RootSaga from './RootSaga';
import Authentication from './Authentication/Authentication';
import filters from './Filters/FiltersSlice';
import Pagination from 'src/redux/Pagination/Pagination';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      Authentication,
      filters,
      rooms,
      Pagination
    },
    middleware: [...getDefaultMiddleware({
      serializableCheck: { 
        ignoredActions: ['rooms/writeRooms', 'SET-PAGINATION', 'app/mount'] 
      }}), sagaMiddleware],
    });
  (store as SagaStore).sagaTask = sagaMiddleware.run(RootSaga);
  return store;
};

const wrapper = createWrapper(makeStore);

type AppStore = ReturnType<typeof makeStore>;
type AppState = ReturnType<AppStore['getState']>;

export default wrapper;

export type { AppStore, AppState };
