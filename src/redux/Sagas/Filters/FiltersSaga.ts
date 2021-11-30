import { takeLatest, select } from 'redux-saga/effects';

import type { AppState } from 'src/redux/Store';
import { submit } from 'src/redux/Slices/Filters/FiltersSlice';

function* submitWorker(): Generator {
  const filters = yield select((state: AppState) => state.filters);
  console.log(filters);
}

function* watcher(): Generator {
  yield takeLatest(submit.type, submitWorker);
}

export default watcher;
