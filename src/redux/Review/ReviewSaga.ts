import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import { CommentInputType } from 'src/firebaseAPI/Types';
import { FirebaseError } from 'firebase/app';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import {
  SET_REVIEW_FORM_RESET,
  SET_REVIEW_SUBMITTING,
  SUBMIT_REVIEW,
} from './Types';
import { ROOM_COMMENTS_TO_STATE } from '../CurrentRoomComments/Types';

async function addComment(
  values: CommentInputType
): Promise<boolean | FirebaseError> {
  const response: boolean | FirebaseError =
    await firebaseAPI.addCommentAndUpdateImpressions({
      ...values,
    });

  return response;
}

function* workerSaga(values: AnyAction) {
  // yield put({ type: SET_REVIEW_SUBMITTING, payload: true });
  // const response: Promise<boolean | FirebaseError> = yield call(
  //   addComment,
  //   values.payload
  // );
  // yield put({ type: SET_REVIEW_SUBMITTING, payload: false });

  // if (response && !(response instanceof FirebaseError)) {
  //   yield put({
  //     type: ROOM_COMMENTS_TO_STATE,
  //     payload: { roomID: values.payload.roomID },
  //   });
  //   yield put({
  //     type: SET_REVIEW_FORM_RESET,
  //     payload: true,
  //   });
  // }
}

function* watchReviewSubmitSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(SUBMIT_REVIEW, workerSaga);
}

export default watchReviewSubmitSaga;
