import { takeLatest, put, delay } from 'redux-saga/effects';

import {
  setDates,
  setGuests,
  setPrice,
  setRules,
  setAvailability,
  setConveniences,
  setAdditionalConvenience,
  setFilters,
} from './FiltersSlice';

function* handleFiltersChange(): Generator {
  yield delay(3000);
  yield put({ type: 'UPDATE_ROOMS', payload: 1 });
}

function* filtersWatcher(): Generator {
  yield takeLatest(
    [
      setDates.type,
      setGuests.type,
      setPrice.type,
      setRules.type,
      setAvailability.type,
      setConveniences.type,
      setAdditionalConvenience.type,
      setFilters.type,
    ],
    handleFiltersChange
  );
}

export default filtersWatcher;
