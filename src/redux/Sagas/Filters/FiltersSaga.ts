import {
  takeLatest,
  select,
  delay,
  put
} from 'redux-saga/effects';

import type { AppState } from 'src/redux/Store';
import {
  switchResponseReadyStatus 
} from 'src/redux/Slices/SearchRoom/SearchRoomSlice';

function* submitWorker(): Generator {
  const filters = yield select((state: AppState) => state.filters);
  yield delay(5000);
  yield put(switchResponseReadyStatus());
  console.log(filters);
}

function* watcher(): Generator {
  yield takeLatest('searchRoom/submit', submitWorker);
}

export default watcher;
