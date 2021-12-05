import { takeLatest, put } from 'redux-saga/effects';

import {
  setDates,
  setGuests,
  setPrice,
  setRules,
  setAvailability,
  setConveniences,
  setAdditionalConvenience,
  filtersActions,
} from 'src/redux/Slices/Filters/FiltersSlice';

function* handleFiltersChange(): Generator {
  yield put(filtersActions.update);
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
    ],
    handleFiltersChange
  );
}

export default filtersWatcher;
