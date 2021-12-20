import { takeEvery, put } from 'redux-saga/effects';
import { call, delay } from '@redux-saga/core/effects';
import { AuthError } from 'firebase/auth';
import Cookie from 'js-cookie';
import firebaseAPI from '../../firebaseAPI/firebaseAPI';
import { UserType } from '../../firebaseAPI/Types';
import { setAuthenticated } from '../Authentication/AuthenticationActions';
import { setModalWindow, setError, setSubmitting } from './SignInCardActions';
import { SET_EMAIL, SUBMIT_SIGN_IN_FORM } from './Types';
import { ResultType, SET_USER } from '../Authentication/Types';
import { timestampToDateString } from '../../utils/Utils';

type SignInFormReducerType = {
  type: string;
  payload: {
    email: string;
    password: string;
  };
};

function* workerSignInSaga(form: SignInFormReducerType) {
  const result: Promise<UserType | AuthError> = yield call(() =>
    firebaseAPI.signIn(form.payload.email, form.payload.password)
  );
  if (result.constructor.name === 'FirebaseError') {
    yield put(setError(true));
    yield put(setSubmitting(false));
  } else {
    yield put(setError(false));
    yield put(setSubmitting(false));
    yield put(setModalWindow(true));
    yield delay(5000);
    Cookie.set('signInData', JSON.stringify(form.payload));
    yield put(setAuthenticated(true));
    yield put({
      type: SET_USER,
      payload: {
        ...result,
        birthday: timestampToDateString(result.birthday),
      },
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* watchSubmitSignInSaga() {
  yield takeEvery(SUBMIT_SIGN_IN_FORM, workerSignInSaga);
}

function* changeEmail(action: { type: string, payload: string }) {
  const result: ResultType = yield call(firebaseAPI.changeEmail, action.payload);
  if(result.changed) {
    yield put({ type: SET_EMAIL, payload: action.payload });
  } else {
    console.log(result.error);
  } 
}

function* watchChangeEmail() {
  yield takeEvery('CHANGE_EMAIL', changeEmail);
}

function* changePassword(action: { type: string, payload: string }) {
  const result: ResultType = yield call(firebaseAPI.changePassword, action.payload);
  if(!result.changed) {
    console.log(result.error);
  } 
}

function* watchChangePassword() {
  yield takeEvery('CHANGE_PASSWORD', changePassword);
}

export { watchChangePassword, watchChangeEmail };
export default watchSubmitSignInSaga;
