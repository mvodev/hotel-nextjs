/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { all, call, CallEffect, spawn } from '@redux-saga/core/effects';
import { Saga } from '@redux-saga/types';

function* startSaga(
  saga: Saga<any>
): Generator<CallEffect<unknown>, void, unknown> {
  while (true) {
    try {
      yield call(saga);
      break;
    } catch (e: unknown) {
      console.log(e);
    }
  }
}

function* RootSaga(): Generator<any, any, any> {
  const sagas: Saga<any>[] = [
    /* sagas */
  ];

  const retrySagas = yield sagas.map((saga) => spawn(startSaga, saga));

  yield all(retrySagas);
}

export default RootSaga;
