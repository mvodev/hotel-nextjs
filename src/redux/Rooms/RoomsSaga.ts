import { call, put, takeEvery, select } from 'redux-saga/effects';
import { FiltersAPIType } from 'src/firebaseAPI/Types';
import firebaseAPI from '../../firebaseAPI/firebaseAPI';
import { selectFilters } from '../Slices/Filters/FiltersSlice';
import { StateType, ActionType, UpdateRoomsResultType } from './Types';
import { writeRooms } from './Rooms';



export function* updateRooms(action: ActionType) {
  try {
    const filters: FiltersAPIType = yield select(selectFilters)
    const roomsData: UpdateRoomsResultType = yield call(
      firebaseAPI.getRooms, 
      filters, 
      action.payload, 
      12 
    )
    yield put(writeRooms(roomsData.rooms))
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

export function* watchUpdateRooms(){
  yield takeEvery('UPDATE_ROOMS', updateRooms)
}