import { takeEvery, put, select, call } from 'redux-saga/effects';

import {
  filtersActions,
  selectFilters,
} from 'src/redux/Slices/Filters/FiltersSlice';
import {
  turnOn,
  turnOff,
} from 'src/redux/Slices/RoomCardsStatus/RoomCardsStatusSlice';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import type { FiltersAPIType } from 'src/firebaseAPI/Types';

function* roomCardsUpdate(): Generator {
  yield put(turnOff());
  const filters = yield select(selectFilters);
  const rooms = yield call(
    firebaseAPI.getRooms,
    filters as FiltersAPIType,
    1,
    12
  );
  console.log(rooms);
  // yield put(setRooms({ rooms }));
  yield put(turnOn());
}

function* roomCardsSagaWatcher(): Generator {
  yield takeEvery(filtersActions.update.type, roomCardsUpdate);
}

export default roomCardsSagaWatcher;
