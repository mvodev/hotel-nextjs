import { call, put, select, take } from 'redux-saga/effects';

import { AppState } from 'src/redux/Store';
import { SET_USER } from 'src/redux/Authentication/Types';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import type {
  BookingType,
  ReturnedRoomTypeWithTimestamp,
} from 'src/firebaseAPI/Types';
import {
  setList,
  setRooms,
  toggleFetchingStatus,
  selectBookingList,
  update,
} from 'src/redux/Booking/BookingSlice';

import type { BookingList, BookedRoom } from './Types';

export function* updateBookedRooms(): Generator {
  const list = yield select(selectBookingList);
  const rooms = yield call(
    { context: firebaseAPI, fn: firebaseAPI.getBookedRooms },
    list as BookingList[]
  );
  const bookedRooms = yield (rooms as ReturnedRoomTypeWithTimestamp[]).map(
    (r) => ({
      ...r,
      bookedDays: r.bookedDays.map((bd) => bd.seconds * 1000),
    })
  );
  yield put(setRooms(bookedRooms as BookedRoom[]));
}

export function* updateBookingList(): Generator {
  const uid = yield select((state: AppState) => state.Authentication.user.uid);
  const list = yield call(
    { context: firebaseAPI, fn: firebaseAPI.getBookingList },
    uid as string
  );
  yield put(
    setList(
      (list as BookingType[]).map(
        ({ id, dates, userID, roomID, totalCost }) => ({
          id,
          userID,
          roomID,
          totalCost,
          start: dates[0].seconds * 1000,
          end: dates[1].seconds * 1000,
        })
      )
    )
  );
}

function* updateFetchingStatus(status: boolean): Generator {
  yield put(toggleFetchingStatus(status));
}

function* watchBookingUpdate(): Generator {
  while (true) {
    yield take([SET_USER, update.type]);
    yield call(updateFetchingStatus, true);
    yield call(updateBookingList);
    yield call(updateBookedRooms);
    yield call(updateFetchingStatus, false);
  }
}

export default watchBookingUpdate;
