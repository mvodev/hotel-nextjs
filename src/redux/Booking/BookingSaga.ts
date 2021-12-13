import { call, put, select, take } from 'redux-saga/effects';

import { AppState } from 'src/redux/Store';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import {
  setRooms,
  updateRooms,
  toggleFetchingStatus,
} from 'src/redux/Booking/BookingSlice';
import type { BookedRoom } from 'src/redux/Booking/Types';

function* updateBookedRooms(): Generator {
  yield put(toggleFetchingStatus(true));
  const uid = yield select((state: AppState) => state.Authentication.user.uid);
  const rooms = yield call(
    { context: firebaseAPI, fn: firebaseAPI.getBookedRooms },
    // демо
    (uid || '0n0juvZREvSNDNYJvS2rQjcf3Ei1') as string
  );
  yield put(setRooms(rooms as BookedRoom[]));
  yield put(toggleFetchingStatus(false));
}

function* watchBookedRoomsUpdate(): Generator {
  yield take(updateRooms.type);
  yield call(updateBookedRooms);
}

export default watchBookedRoomsUpdate;
