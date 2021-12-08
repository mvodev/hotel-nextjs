import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import Authentication from './Authentication/Authentication';
import Registration from './Registration/Registration';
import filters from './Filters/FiltersSlice';
import RootSaga from './RootSaga';
import roomCardsStatus from './RoomCardsStatus/RoomCardsStatusSlice';
import signInCardReducer from './SignInCard/SignInCardReducer';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      Authentication,
      filters,
      roomCardsStatus,
      signInCardReducer,
      Registration,
    },
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
