import { call, put, takeEvery } from "redux-saga/effects";

import firebaseAPI from "src/firebaseAPI/firebaseAPI";
import { CancelBookingResult } from "src/firebaseAPI/Types";
import { toggleFetchingStatus, update } from 'src/redux/Booking/BookingSlice';

function* cancelBooking(action: {
  type: string,
  payload: {
    id: string,
    roomID: string,
    start: number,
    end: number,
  }
}) {
  try {
    yield put(toggleFetchingStatus(true));
    const cancelBookingResult: CancelBookingResult = yield call(
      firebaseAPI.cancelBooking,
      action.payload.id,
      action.payload.roomID,
      [action.payload.start, action.payload.end]
    )
    if (cancelBookingResult.canceled) {
      yield put(update())
    } else console.log(cancelBookingResult.error)
  }
  catch (e) {
    console.log(e)
  }
  finally {
    yield put(toggleFetchingStatus(false));
  }
}

function* watcCancelBooking(): Generator {
  yield takeEvery('CANCEL_BOOKING', cancelBooking)
}

export default watcCancelBooking;
