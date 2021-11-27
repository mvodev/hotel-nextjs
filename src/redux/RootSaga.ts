/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { all, call, spawn } from '@redux-saga/core/effects';
import { Saga } from 'redux-saga';

function* RootSaga(): Saga<any[]> {
  const sagas: any[] = [
    /* sagas */
  ];

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e: unknown) {
          console.log(e);
        }
      }
    });
  });

  yield all(retrySagas);
}

export default RootSaga;
