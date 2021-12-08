import {
  call,
  delay,
  ForkEffect,
  put,
  takeEvery,
} from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { UserType } from 'src/firebaseAPI/Types';
import { stringToDate } from 'src/utils/Utils';
import { FirebaseError } from 'firebase/app';
import Cookie from 'js-cookie';
import {
  EMAIL_EXIST,
  INCORRECT_EMAIL,
  REGISTRATION_SUCCESS,
  SET_SUBMITTING,
  SUBMIT_FORM,
  UNKNOWN_ERROR,
} from './Types';
import FormData from '../../components/RegistrationCard/Types';
import { SET_AUTHENTICATED, SET_USER } from '../Authentication/Types';

async function userRegistration(
  data: FormData
): Promise<UserType | FirebaseError> {
  const response: UserType | FirebaseError = await firebaseAPI.signUp({
    ...data,
    birthday: stringToDate(data.birthday),
  });

  return response;
}

function* createErrorWindowSaga(data: FirebaseError) {
  if (data.code === 'auth/email-already-in-use') {
    yield put({ type: EMAIL_EXIST });
  } else if (data.code === 'auth/invalid-email') {
    yield put({ type: INCORRECT_EMAIL });
  } else {
    yield put({ type: UNKNOWN_ERROR });
  }
}

function* workerSaga(data: AnyAction) {
  yield put({ type: SET_SUBMITTING, payload: true });
  const response: Promise<UserType | FirebaseError> = yield call(
    userRegistration,
    data.payload
  );
  yield put({ type: SET_SUBMITTING, payload: false });

  if (response instanceof FirebaseError) {
    yield createErrorWindowSaga(response);
  } else {
    yield put({ type: REGISTRATION_SUCCESS });
    yield delay(5000);
    Cookie.set('userData', JSON.stringify({ ...response }));
    yield put({ type: SET_AUTHENTICATED, payload: true });
    yield put({ type: SET_USER, payload: { ...response } });
  }
}

function* watchRegistrationSubmitSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(SUBMIT_FORM, workerSaga);
}

export default watchRegistrationSubmitSaga;
