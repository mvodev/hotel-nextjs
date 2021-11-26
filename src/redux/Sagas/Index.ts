import { takeLatest, select } from 'redux-saga/effects';

import type { AppState } from '../store';
import { submit } from '../Filters/FiltersSlice';

function* workerSaga(): Generator {
  const filters = yield select((state: AppState) => state.filters);
  console.log(filters);
}

function* watcherSaga(): Generator {
  yield takeLatest(submit.type, workerSaga)
}

function* rootSaga(): Generator {
  yield watcherSaga();
}

export default rootSaga;

export { watcherSaga, workerSaga };
