import { call, ForkEffect, put, takeLatest } from '@redux-saga/core/effects';
import { useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { ReturnedRoomType } from 'src/firebaseAPI/Types';
import { ROOM_COMMENTS_TO_STATE } from '../CurrentRoomComments/Types';
import { AppState } from '../Store';
import { SET_CURRENT_ROOM, GET_CURRENT_ROOM, SET_ROOM_LOADING } from './Types';

async function getCurrentRoom(id: string): Promise<ReturnedRoomType | null> {
  const response = await firebaseAPI.getCurrentRoom(id);
  return response;
}

async function roomIsBookedByUser(roomID: string): Promise<boolean> {
  const uid = useSelector((state: AppState) => (state.Authentication.user.uid))
  const response = await firebaseAPI.roomIsBookedByUser({roomID, uid});
  return response;
}

function* workerSaga({ payload }: AnyAction) {
  yield put({ type: SET_ROOM_LOADING, payload: true });

  const roomResponse: Promise<ReturnedRoomType | null> = yield call(
    getCurrentRoom,
    payload
  );

  yield put({
    type: ROOM_COMMENTS_TO_STATE,
    payload: { roomID: payload },
  });

  if (roomResponse) {
    yield put({
      type: SET_CURRENT_ROOM,
      payload: JSON.stringify(roomResponse),
    });
  } else {
    yield put({ type: SET_CURRENT_ROOM, payload: null });
  }

  yield put({ type: SET_ROOM_LOADING, payload: false });
}

function* watchGetCurrentRoomSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(GET_CURRENT_ROOM, workerSaga);
}

export default watchGetCurrentRoomSaga;
