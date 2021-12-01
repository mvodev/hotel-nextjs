import {
  takeLatest,
  select,
  delay,
  put
} from 'redux-saga/effects';

import type { AppState } from 'src/redux/Store';
import { submit, switchToReadyDate } from 'src/redux/Slices/Filters/FiltersSlice';

function* submitWorker(): Generator {
  const filters = yield select((state: AppState) => state.filters);
  yield delay(5000);
  yield put(switchToReadyDate());
  console.log(filters);

}

function* watcher(): Generator {
  yield takeLatest(submit.type, submitWorker);
}

export default watcher;
