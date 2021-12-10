import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { ReturnedRoomType } from 'src/firebaseAPI/Types';
import { SET_CURRENT_ROOM, GET_CURRENT_ROOM } from './Types';

async function getCurrentRoom(id: string): Promise<ReturnedRoomType | null> {
  const response = await firebaseAPI.getCurrentRoom(id);
  return response;
}

function* workerSaga({ payload }: AnyAction) {
  const response: Promise<ReturnedRoomType | null> = yield call(
    getCurrentRoom,
    payload
  );

  if (response) {
    yield put({ type: SET_CURRENT_ROOM, payload: JSON.stringify(response) });
  }
}

function* watchGetCurrentRoomSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(GET_CURRENT_ROOM, workerSaga);
}

export default watchGetCurrentRoomSaga;
