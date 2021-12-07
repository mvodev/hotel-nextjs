import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
<<<<<<< HEAD
=======
import Authentication from './Authentication/Authentication';
import RootSaga from './RootSaga';
import Registration from './Registration/Registration';
>>>>>>> #46-add-registration-page

import RootSaga from './Sagas/RootSaga';
import Authentication from './Slices/Authentication/Authentication';
import filters from './Slices/Filters/FiltersSlice';
import roomCardsStatus from './Slices/RoomCardsStatus/RoomCardsStatusSlice';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
<<<<<<< HEAD
    reducer: {
      Authentication,
      filters,
      roomCardsStatus,
    },
=======
    reducer: {Authentication, Registration},
>>>>>>> #46-add-registration-page
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });
  (store as SagaStore).sagaTask = sagaMiddleware.run(RootSaga);
  return store;
};

const wrapper = createWrapper(makeStore);

type AppStore = ReturnType<typeof makeStore>;
type AppState = ReturnType<AppStore['getState']>;

export default wrapper;

export type { AppStore, AppState };
