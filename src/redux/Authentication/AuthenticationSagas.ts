import { ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import Cookie from 'js-cookie';
import {
  RESET_USER_DATA,
  SET_AUTHENTICATED,
  SET_USER,
  USER_AUTHENTICATE,
  USER_LOG_OUT,
} from './Types';

function* authenticationWorkerSaga() {
  const cookies = JSON.parse(Cookie.get()?.userData || '{}');
  if (cookies.uid) {
    yield put({
      type: SET_AUTHENTICATED,
      payload: true,
    });
    yield put({ type: SET_USER, payload: cookies });
  }
}

function* watchAuthenticationSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(USER_AUTHENTICATE, authenticationWorkerSaga);
}

function* userLogOutSaga() {
  Cookie.remove('userData');
  yield put({ type: RESET_USER_DATA });
}

function* watchUserLogOutSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(USER_LOG_OUT, userLogOutSaga);
}

export default watchAuthenticationSaga;
export { watchUserLogOutSaga };
