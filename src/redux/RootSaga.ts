/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { all, call, spawn, CallEffect } from '@redux-saga/core/effects';
import { Saga } from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import { AuthError } from 'firebase/auth';
import { SUBMIT_SIGN_IN_FORM } from './SignInCard/Types';
import firebaseAPI from '../firebaseAPI/firebaseAPI';
import { UserType } from '../firebaseAPI/Types';
import {
  setSubmitting,
  setUID,
  setError,
} from './SignInCard/SignInCardActions';

function* startSaga(
  saga: Saga<any>
): Generator<CallEffect<unknown>, void, unknown> {
  while (true) {
    try {
      yield call(saga);
      break;
    } catch (e: unknown) {
      console.log(e);
    }
  }
}

function* workerSignInSaga(form: any) {
  const isAuthorized: Promise<UserType | AuthError> = yield call(() => {
    return firebaseAPI.signIn(form.payload.email, form.payload.password);
  });

  if (isAuthorized.constructor.name === 'FirebaseError') {
    yield put(setError(true));
    yield put(setSubmitting(false));
  } else {
    yield put(setError(false));
    yield put(setSubmitting(false));
    yield put(setUID((isAuthorized as unknown as UserType).uid));
  }
}

function* watchSubmitSignInSaga() {
  yield takeEvery(SUBMIT_SIGN_IN_FORM, workerSignInSaga);
}

function* RootSaga(): Generator<any, any, any> {
  const sagas: any[] = [
    /* sagas */
    watchSubmitSignInSaga,
  ];

  const retrySagas = yield sagas.map((saga) => spawn(startSaga, saga));

  yield all(retrySagas);
}

export default RootSaga;
