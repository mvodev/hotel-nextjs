import { call } from "redux-saga/effects";
import firebaseAPI from "src/firebaseAPI/firebaseAPI";

function* cancelBooking(action) {
  try {
    yield call(firebaseAPI.cancelBooking(), action.payload)
  }
}