import { call, ForkEffect, put, takeLatest, select } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { ReturnedRoomTypeWithDates } from 'src/firebaseAPI/Types';
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

async function getCurrentRoom(id: string): Promise<ReturnedRoomTypeWithDates | null> {
  const response = await firebaseAPI.getCurrentRoom(id);
  return response;
}

function* workerSaga({ payload }: AnyAction) {
  yield put({ type: SET_ROOM_LOADING, payload: true });

  const response: ReturnedRoomTypeWithDates | null = yield call(
    getCurrentRoom,
    payload
  );

  if (response) {
    yield put({ type: SET_CURRENT_ROOM, payload: response });
  } else {
    yield put({ type: SET_CURRENT_ROOM, payload: null });
  }

  yield put({ type: SET_ROOM_LOADING, payload: false });
}

function* checkBookingBloked() {
  const guests: Guests = yield select(selectGuests);
  const dates: Dates = yield select(selectDates);
  const maxGuests: number = yield select((state: AppState) => state.CurrentRoom.maxGuests);
  const bookedDates: Date[] = yield select((state: AppState) => state.CurrentRoom.bookedDays);
  const filtredBookedDays = (dates[0] !== null) 
    ? bookedDates.filter((item) => (
      (item.getTime() >= dates[0].getTime()) && (item.getTime() <= dates[1].getTime())
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
