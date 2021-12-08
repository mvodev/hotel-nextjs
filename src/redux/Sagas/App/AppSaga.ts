import { take, call, put } from 'redux-saga/effects';

import appActions from 'src/redux/Slices/App/AppActions';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import { setFilters } from 'src/redux/Slices/Filters/FiltersSlice';
import type { Filters } from 'src/redux/Slices/Filters/Types';

function* appInit(): Generator {
  const filtersInitState = yield call(firebaseAPI.getFilters);
  yield put(setFilters(filtersInitState as Filters));
}

function* appWatcher(): Generator {
  yield take(appActions.mount.type);
  yield call(appInit);
}

export default appWatcher;
