import { takeEvery, put, select, call } from 'redux-saga/effects';

import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import type { FiltersAPIType } from 'src/firebaseAPI/Types';
import {
  filtersActions,
  selectFilters,
} from '../../Filters/FiltersSlice';
import {
  turnOn,
  turnOff,
} from '../../RoomCardsStatus/RoomCardsStatusSlice';

function* roomCardsUpdate(): Generator {
  yield put(turnOff());
  const filters = yield select(selectFilters);
  const rooms = yield call(
    firebaseAPI.getRooms,
    filters as FiltersAPIType,
    1,
    12
  );
  // yield put(setRooms({ rooms }));
  yield put(turnOn());
}

function* roomCardsSagaWatcher(): Generator {
  yield takeEvery(filtersActions.update.type, roomCardsUpdate);
}

export default roomCardsSagaWatcher;
