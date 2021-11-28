/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { all, call, spawn, CallEffect } from '@redux-saga/core/effects';
import { Saga } from 'redux-saga';

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
  const sagas: any[] = [
    /* sagas */
  ];

  const retrySagas = yield sagas.map((saga) => spawn(startSaga, saga));

  yield all(retrySagas);

}

export default RootSaga;


// import { createStore } from '@reduxjs/toolkit';
// import { createWrapper } from 'next-redux-wrapper';
// import reducers from './reduces';

// const makeStore = () => createStore(reducers);
// const wrapper = createWrapper(makeStore, { debug: true });

// export default wrapper;

