import { call, put, takeEvery, select, delay} from 'redux-saga/effects';

import { setModalWindiwData, switchModelWindow } from '../ModalWindow/ModalWindow';
import firebaseAPI from '../../firebaseAPI/firebaseAPI';
import { AppState } from '../Store';
import type { AddBookActionType, AddBookResultType } from './Types';
import { GET_CURRENT_ROOM, SET_IN_BOOKING_PROCESS, SET_IS_BOOKED, SET_IS_BOOKING_BLOCKED } from '../CurrentRoom/Types';

export function* addBook(action: AddBookActionType) {

  try {
    const userID: string = yield select((state: AppState) => state.Authentication.user.uid);
    const roomID: string = yield select((state: AppState) => state.CurrentRoom.roomID);
    const dates: [Date, Date] = yield select((state: AppState) => state.filters.dates);

    yield put({ type: SET_IN_BOOKING_PROCESS, payload: true });

    const addBookResult: AddBookResultType = yield call(
      firebaseAPI.addBook,
      {userID, roomID, dates}
    );
    yield put(setModalWindiwData({
      isEnabled: true,
      image: addBookResult.isBooked ? 'booked.webp' : 'booking-failed.webp',
      title: addBookResult.massage,
      text: addBookResult.isBooked ? 'Номер был успешно зарегистрирован. Через несколько секуунд вы будете перенаправлены на страницу "мои номера"' : '',
    }))
    yield delay(3000);
    if (addBookResult.isBooked) {
      yield put(switchModelWindow(false))
      yield put({ type: SET_IS_BOOKED, payload: true });
    }
    else yield put({ type: GET_CURRENT_ROOM, payload: roomID });

    yield put({ type: SET_IN_BOOKING_PROCESS, payload: false });
    
  } catch(error) {
    console.error(error)
  }
}

export function* watchAddBook() {
  yield takeEvery('ADD_BOOK', addBook);
};