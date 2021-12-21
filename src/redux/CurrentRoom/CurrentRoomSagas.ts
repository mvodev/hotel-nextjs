import { call, ForkEffect, put, select, takeLatest } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { selectDates, selectGuests } from '../Filters/FiltersSlice';
import { Dates, Guests } from '../Filters/Types';
import { AppState } from '../Store';
import {
  SET_CURRENT_ROOM,
  GET_CURRENT_ROOM,
  SET_ROOM_LOADING,
  SET_IS_BOOKING_BLOCKED,
  CHECK_BOOKING_BLOCKED,
} from './Types';

import { ReturnedRoomType } from 'src/firebaseAPI/Types';
import { ROOM_COMMENTS_TO_STATE } from '../CurrentRoomComments/Types';

async function getCurrentRoom(id: string): Promise<ReturnedRoomType | null> {
  const response = await firebaseAPI.getCurrentRoom(id);
  return response;
}

async function roomIsBookedByUser({ roomID, uid }: { roomID: string, uid: string }): Promise<boolean> {
  const response = await firebaseAPI.roomIsBookedByUser({ roomID, uid });
  return response;
}

function* workerSaga({ payload }: AnyAction) {
  yield put({ type: SET_ROOM_LOADING, payload: true });

  const roomResponse: Promise<ReturnedRoomType | null> = yield call(
    getCurrentRoom,
    payload
  );

  const uid: string = yield select((state: AppState) => state.Authentication.user.uid);
  const isRoomBookedByUser: Promise<boolean> = yield call(
    roomIsBookedByUser,
    { roomID: payload, uid }
  );

  yield put({
    type: ROOM_COMMENTS_TO_STATE,
    payload: { roomID: payload },
  });

  if (roomResponse) {
    yield put({
      type: SET_CURRENT_ROOM,
      payload: roomResponse,
    });
  } else {
    yield put({ type: SET_CURRENT_ROOM, payload: null });
  }

  yield put({ type: SET_ROOM_LOADING, payload: false });
}

function* checkBookingBloked() {
  const guests: Guests = yield select(selectGuests);
  const dates: Dates = yield select(selectDates);
  const maxGuests: number = yield select((state: AppState) => state.CurrentRoom.maxGuests);
  const bookedDates: number[] = yield select((state: AppState) => state.CurrentRoom.bookedDays);
  const filtredBookedDays = (dates[0] !== null) 
    ? bookedDates.filter((item) => (
      (item >= dates[0]) && (item <= dates[1])
    ))
    : []
  const isBookingBloked = (
    (dates[0] === null) 
    || (guests.adult + guests.child === 0) 
    || (filtredBookedDays.length > 0)
    || (guests.adult + guests.child > maxGuests)
  )
  yield put({ type: SET_IS_BOOKING_BLOCKED, payload: isBookingBloked })
}

function* watchGetCurrentRoomSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(GET_CURRENT_ROOM, workerSaga);
}

function* watchCheckBookingBloked(): Generator<
ForkEffect<never>,
void,
unknown
> {
  yield takeLatest(CHECK_BOOKING_BLOCKED, checkBookingBloked);
}

export { watchGetCurrentRoomSaga, watchCheckBookingBloked };
