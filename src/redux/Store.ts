import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import Pagination from 'src/redux/Pagination/Pagination';
import rooms from './Rooms/Rooms';
import RootSaga from './RootSaga';
import Authentication from './Authentication/Authentication';
import filters from './Filters/FiltersSlice';
import Registration from './Registration/Registration';
import roomCardsStatus from './RoomCardsStatus/RoomCardsStatusSlice';
import signInCardReducer from './SignInCard/SignInCardReducer';
import CurrentRoom from './CurrentRoom/CurrentRoom';
import modalWindiw from './ModalWindow/ModalWindow';

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
      Pagination,
      signInCardReducer,
      Registration,
      roomCardsStatus,
      CurrentRoom,
      modalWindiw,
    },
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            'rooms/writeRooms',
            'SET-PAGINATION',
            'app/mount',
            'UPDATE_ROOMS',
            'filters/setRules',
            'filters/setAvailability',
            'filters/setAdditionalConvenience',
            'filters/setPrice',
            'filters/setGuests',
            'filters/setDates',
            'filters/setConveniences',
            'SET_IS_BOOKING_BLOCKED',
            'SET-CURRENT-ROOM',
            'CHECK_BOOKING_BLOCKED',
            'SET-ROOM-LOADING',
            'SET_IS_BOOKING_BLOCKED',
            'USER-AUTHENTICATE',
            'SUBMIT_SIGN_IN_FORM',
            'SET_ERROR',
            'SET-SUBMITTING',
            'SET_AUTHENTICATION_SUCCESS',
            'SET-USER',
            'SET-AUTHENTICATED',
            'SET-ROOM-LOADING',
            'GET-CURRENT-ROOM',
            'SET_IN_BOOKING_PROCESS',
            'ADD_BOOK',
            'modalWindow/setModalWindiwData',
            'modalWindow/switchModelWindow',
            'SET_IS_BOOKED'
          ],
        },
      }),
      sagaMiddleware,
    ],
  });
  (store as SagaStore).sagaTask = sagaMiddleware.run(RootSaga);
  return store;
};

const wrapper = createWrapper(makeStore);

type AppStore = ReturnType<typeof makeStore>;
type AppState = ReturnType<AppStore['getState']>;

export default wrapper;

export type { AppStore, AppState };
