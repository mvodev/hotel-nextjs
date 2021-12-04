import { takeLatest, select, call } from 'redux-saga/effects';

import {
  setDates,
  setGuests,
  setPrice,
  setRules,
  setAvailability,
  setConveniences,
  setAdditionalConvenience,
  selectFilters,
} from 'src/redux/Slices/Filters/FiltersSlice';
import firebaseAPI from 'src/firebaseAPI/firebaseAPI';
import type { FiltersAPIType } from 'src/firebaseAPI/Types';

function* handleFiltersChange(): Generator {
  const filters  = yield select(selectFilters);
  const r = yield call(
    firebaseAPI.getRooms,
    filters as FiltersAPIType,
    1,
    20
  );
  console.log(r);
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
