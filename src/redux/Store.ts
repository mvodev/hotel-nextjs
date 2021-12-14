import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rooms from './Rooms/Rooms';
import RootSaga from './RootSaga';
import Authentication from './Authentication/Authentication';
import filters from './Filters/FiltersSlice';
import Pagination from 'src/redux/Pagination/Pagination';
import Registration from './Registration/Registration';
import roomCardsStatus from './RoomCardsStatus/RoomCardsStatusSlice';
import signInCardReducer from './SignInCard/SignInCardReducer';
import booking from './Booking/BookingSlice';


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
      booking,
    },
    middleware: [...getDefaultMiddleware({
      serializableCheck: { 
        ignoredActions: ['rooms/writeRooms', 
        'SET-PAGINATION', 
        'USER-AUTHENTICATE',
        'SET-AUTHENTICATED',
        'SET-USER',
        'RESET-USER-DATA',
        'USER-LOG-OUT',
        'app/mount', 
        'UPDATE_ROOMS', 
        'filters/setRules',
        'filters/setAvailability',
        'filters/setAdditionalConvenience',
        'filters/setPrice',
        'filters/setGuests',
        'filters/setDates',
        'filters/setConveniences',
        'booking/setRooms',
        'booking/toggleFetchingStatus',
        'booking/updateRooms',
      ] 
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
