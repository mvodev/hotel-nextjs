import { call, takeEvery } from "redux-saga/effects";
import firebaseAPI from "src/firebaseAPI/firebaseAPI";
import { CancelBookingResult } from "src/firebaseAPI/Types";

function* cancelBooking(action: {
  type: string,
  payload: {
    bookingID: string,
    roomID: string,
    dates: [number, number]
  }
}) {
  try {
    const cancelBookingResult: CancelBookingResult = yield call(
      firebaseAPI.cancelBooking,
      action.payload.bookingID,
      action.payload.roomID,
      action.payload.dates
    )

    if (cancelBookingResult.canceled) {

    } else console.log(cancelBookingResult.error)
  }
  catch (e) {
    console.log(e)
  }
}

function* watcCancelBooking() {
  yield takeEvery('CANCEL_BOOKING', cancelBooking)
}

export default watcCancelBooking;