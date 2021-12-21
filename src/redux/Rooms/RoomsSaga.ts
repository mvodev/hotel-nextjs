import { call, put, takeEvery, select } from 'redux-saga/effects';

import { FiltersAPIType } from 'src/firebaseAPI/Types';

import firebaseAPI from '../../firebaseAPI/firebaseAPI';
import { selectFilters } from '../Filters/FiltersSlice';
import { SET_PAGINATION } from '../Pagination/Types';
import { ActionType, UpdateRoomsResultType } from './Types';
import { writeRooms } from './Rooms';
import { json } from 'stream/consumers';

export function* updateRooms(action: ActionType) {
  try {
    const filters: FiltersAPIType = yield select(selectFilters)
    const roomsData: UpdateRoomsResultType = yield call(
      firebaseAPI.getRooms, 
      filters, 
      action.payload, 
      12 
    )
    yield put(writeRooms({ rooms: roomsData.rooms }))
    yield put({
      type: SET_PAGINATION, 
      payload: {
        roomsOnPage: 12,
        pageCount: roomsData.pagesNumber,
        activePage: roomsData.page,
        roomsCount: roomsData.resultsNumber
      }
    })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

export function* watchUpdateRooms(){
  yield takeEvery('UPDATE_ROOMS', updateRooms)
}