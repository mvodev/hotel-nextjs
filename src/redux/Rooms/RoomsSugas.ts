import { call, put, takeEvery } from 'redux-saga/effects';
import { useSelector } from 'react-redux'
import firebaseAPI from '../../firebaseAPI/firebaseAPI';
import { StateType, ActionType, UpdateRoomsResultType } from './Types';
import { writeRooms } from './Rooms';

const filters = useSelector((state: StateType) => state.filters)

export function* updateRooms(action: ActionType) {
  try {
    const roomsData: UpdateRoomsResultType = yield call(
      firebaseAPI.getRooms, 
      filters, 
      action.payload, 
      12 
    )
    yield put({ type: writeRooms, payload: roomsData.rooms })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

export function* watchUpdateRooms(){
  yield takeEvery('UPDATE_ROOMS', updateRooms)
}