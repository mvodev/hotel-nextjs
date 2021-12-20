import { FirebaseError } from '@firebase/util';
import { ForkEffect, put, call, takeEvery } from '@redux-saga/core/effects';
import Cookie from 'js-cookie';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { SignInResult, UserType } from 'src/firebaseAPI/Types';
import {
  RESET_USER_DATA,
  SET_AUTHENTICATED,
  SET_USER,
  SET_USER_NAME,
  USER_AUTHENTICATE,
  USER_LOG_OUT,
  ResultType,
  SET_USER_SURNAME
} from './Types';

function* authenticationWorkerSaga() {

  const signInDataCookies: { email: string, password: string }  = JSON.parse(Cookie.get()?.signInData || '{}');

  if (signInDataCookies.email) {
    const result: Promise<UserType | FirebaseError> = yield call(firebaseAPI.signIn, signInDataCookies.email, signInDataCookies.password)
    if (result.constructor.name !== 'FirebaseError') {
      yield put({
        type: SET_AUTHENTICATED,
        payload: true,
      });
      yield put({ type: SET_USER, payload: result });
    }
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
  const signOutResult: SignInResult = yield call(firebaseAPI.signOut);
  if (signOutResult.isSignOut) {
    Cookie.remove('signInData');
    yield put({ type: RESET_USER_DATA });
  }
  
}

function* watchUserLogOutSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(USER_LOG_OUT, userLogOutSaga);
}

function* changeUserName(action: { type: string, payload: {id: string, userName: string } }) {
  const result: ResultType = yield call(
    firebaseAPI.changeUserName, 
    action.payload.id,
    action.payload.userName,
  )
  if(result.changed) {
    yield put({ type: SET_USER_NAME, payload: action.payload.userName });
  } else {
    console.log(result.error);
  }
}

function* watchChangeUserName() {
  yield takeEvery('CHANGE_USER_NAME', changeUserName);
}

function* changeUserSurname(action: { type: string, payload: {id: string, userSurname: string } }) {
  const result: ResultType = yield call(
    firebaseAPI.changeUserSurname, 
    action.payload.id,
    action.payload.userSurname,
  )
  if(result.changed) {
    yield put({ type: SET_USER_SURNAME, payload: action.payload.userSurname });
  } else {
    console.log(result.error);
  }
}

function* watchChangeUserSurname() {
  yield takeEvery('CHANGE_USER_SURNAME', changeUserSurname);
}

export default watchAuthenticationSaga;
export { watchUserLogOutSaga, watchChangeUserName, watchChangeUserSurname };
