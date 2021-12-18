import { ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import { UserType } from 'src/firebaseAPI/Types';
import { FirebaseError } from 'firebase/app';
import { SET_REVIEW_SUBMITTING, SUBMIT_REVIEW } from './Types';

async function addComment(values: any): Promise<UserType | FirebaseError> {
  // const response: UserType | FirebaseError = await firebaseAPI.signUp({
  //   ...data,
  //   birthday: stringToDate(data.birthday),
  // }};

  return response;
}

function* workerSaga(values: AnyAction) {
  yield put({ type: SET_REVIEW_SUBMITTING, payload: true });
  // const response: Promise<UserType | FirebaseError> = yield call(
  //   userRegistration,
  //   data.payload
  // );
  yield put({ type: SET_REVIEW_SUBMITTING, payload: false });

  // if (response instanceof FirebaseError) {
  //   yield createErrorWindowSaga(response);
  // } else {
  //   yield put({ type: REGISTRATION_SUCCESS });
  //   yield delay(5000);
  //   Cookie.set('userData', JSON.stringify({ ...response }));
  //   yield put({ type: SET_AUTHENTICATED, payload: true });
  //   yield put({ type: SET_USER, payload: { ...response } });
  // }
}

function* watchReviewSubmitSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(SUBMIT_REVIEW, workerSaga);
}

export default watchReviewSubmitSaga;
