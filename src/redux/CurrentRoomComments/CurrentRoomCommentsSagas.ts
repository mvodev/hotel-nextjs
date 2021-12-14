import { FirebaseError } from '@firebase/util';
import { call, ForkEffect, put, takeLatest } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { CommentType } from 'src/firebaseAPI/Types';
import {
  ADD_LIKE,
  REMOVE_LIKE,
  ROOM_COMMENTS_TO_STATE,
  SET_ROOM_COMMENTS,
} from './Types';

async function getRoomComments(
  roomID: string
): Promise<Array<CommentType> | FirebaseError> {
  const response = await firebaseAPI.getCommentsByRoomID(roomID);

  return response;
}

async function addLike(
  commentID: string,
  uid: string
): Promise<boolean | FirebaseError> {
  const response = await firebaseAPI.addLikeToComment(commentID, uid);

  return response;
}

async function removeLike(
  commentID: string,
  uid: string
): Promise<boolean | FirebaseError> {
  const response = await firebaseAPI.removeLikeFromComment(commentID, uid);

  return response;
}

function* workerAddLikeSaga({ payload }: AnyAction) {
  if (payload.uid) {
    yield call(addLike, payload.commentID, payload.uid);

    yield put({
      type: ROOM_COMMENTS_TO_STATE,
      payload: { roomID: payload.roomID },
    });
  }
}

function* workerRemoveLikeSaga({ payload }: AnyAction) {
  if (payload.uid) {
    yield call(removeLike, payload.commentID, payload.uid);

    yield put({
      type: ROOM_COMMENTS_TO_STATE,
      payload: { roomID: payload.roomID },
    });
  }
}

function* workerRoomCommentsToStateSaga({ payload }: AnyAction) {
  const comments: Promise<Array<CommentType> | FirebaseError> = yield call(
    getRoomComments,
    payload.roomID
  );

  yield put({ type: SET_ROOM_COMMENTS, payload: JSON.stringify(comments) });
}

function* watchAddLikeSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(ADD_LIKE, workerAddLikeSaga);
}

function* watchRemoveLikeSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(REMOVE_LIKE, workerRemoveLikeSaga);
}

function* watchRoomCommentsToStateSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(ROOM_COMMENTS_TO_STATE, workerRoomCommentsToStateSaga);
}

export { watchAddLikeSaga, watchRemoveLikeSaga, watchRoomCommentsToStateSaga };
