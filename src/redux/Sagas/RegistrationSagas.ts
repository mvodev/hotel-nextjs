import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { Error, UserType } from 'src/firebaseAPI/Types';
import { stringToDate } from 'src/utils/Utils';
import {
  EMAIL_ERROR,
  REGISTRATION_SUCCESS,
  SET_SUBMITTING,
  SUBMIT_FORM,
  UNKNOWN_ERROR,
} from '../Slices/Registration/Types';
import FormData from '../../components/RegistrationCard/Types';
import { SET_AUTHENTICATED, SET_USER } from '../Slices/Authentication/Types';

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

async function userRegistration(data: FormData): Promise<UserType | Error> {
  const response = await firebaseAPI.signUp({
    ...data,
    birthday: stringToDate(data.birthday),
  });
  return response;
}

function* createModalWindowSaga(data: UserType & Error) {
  if (data.errorCode && data.errorCode === 'auth/email-already-in-use') {
    yield put({ type: EMAIL_ERROR });
  } else if (data.errorCode) {
    yield put({ type: UNKNOWN_ERROR });
  } else {
    yield put({ type: REGISTRATION_SUCCESS });
  }
}

function* addCredentialsSaga(data: UserType) {
  yield put({ type: SET_AUTHENTICATED, payload: true });
  yield put({ type: SET_USER, payload: { ...data } });
}

function* workerSaga(data: AnyAction) {
  yield put({ type: SET_SUBMITTING, payload: true });
  const response: UserType & Error = yield call(userRegistration, data.payload);
  yield createModalWindowSaga(response);
  yield put({ type: SET_SUBMITTING, payload: false });

  if (!response.errorCode) {
    yield call(delay, 5000);
    yield addCredentialsSaga(response);
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
