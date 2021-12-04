/* eslint-disable import/no-extraneous-dependencies */

import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import {
  SWITCH_PAGE,
} from './Types';

function* workerSaga(data: AnyAction) {
  // getNumbersFromFirebaseAPI
}

function* watchPaginationSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(SWITCH_PAGE, workerSaga);
}

export default watchPaginationSaga;
