import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { UserType } from 'src/firebaseAPI/Types';
import { stringToDate } from 'src/utils/Utils';
import { FirebaseError } from 'firebase/app';
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
    yield put({ type: EMAIL_ERROR });
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
    yield call(delay, 5000);
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
