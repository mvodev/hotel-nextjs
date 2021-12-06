import { ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import Cookie from 'js-cookie';
import { SET_AUTHENTICATED, SET_USER, USER_AUTHENTICATE } from './Types';

function* workerSaga() {
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
  yield takeEvery(USER_AUTHENTICATE, workerSaga);
}

export default watchAuthenticationSaga;
