import {
  takeLatest,
  select,
  delay,
  put
} from 'redux-saga/effects';

import type { AppState } from 'src/redux/Store';
import { switchUpdateStatus } from 'src/redux/Slices/Filters/FiltersSlice';

function* submitWorker(): Generator {
  const filters = yield select((state: AppState) => state.filters);
  yield delay(5000);
  yield put(switchUpdateStatus(true));
  console.log(filters);
}

function* searchRoomCardSubmitWatcher(): Generator {
  yield takeLatest('searchRoomCard/submit', submitWorker);
}

export default searchRoomCardSubmitWatcher;
