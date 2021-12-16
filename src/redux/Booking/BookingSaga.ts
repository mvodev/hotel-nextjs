import { call, put, select, take } from 'redux-saga/effects';

import { AppState } from 'src/redux/Store';
import { SET_USER } from 'src/redux/Authentication/Types';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import {
  setList,
  setRooms,
  toggleFetchingStatus,
  selectBookingList,
} from 'src/redux/Booking/BookingSlice';

import type { BookingList, BookedRoom } from './Types';

function* updateBookedRooms(): Generator {
  const list = yield select(selectBookingList);
  const rooms = yield call(
    { context: firebaseAPI, fn: firebaseAPI.getBookedRooms },
    list as BookingList[]
  );
  yield put(setRooms(rooms as BookedRoom[]));
}

function* updateBookingList(): Generator {
  const uid = yield select((state: AppState) => state.Authentication.user.uid);
  const list = yield call(
    { context: firebaseAPI, fn: firebaseAPI.getBookingList },
    uid as string
  );
  yield put(setList(list as BookingList[]));
}

function* updateFetchingStatus(status: boolean): Generator {
  yield put(toggleFetchingStatus(status));
}

function* watchBookingUpdate(): Generator {
  let status = true;

  while (true) {
    yield take(SET_USER);
    yield call(updateFetchingStatus, status);
    yield call(updateBookingList);
    yield call(updateBookedRooms);
    status = false;
    yield call(updateFetchingStatus, status);
  }
}

export default watchBookingUpdate;
