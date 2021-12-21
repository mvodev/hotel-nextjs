/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { all, call, CallEffect, spawn } from '@redux-saga/core/effects';
import { Saga } from '@redux-saga/types';
import watchAuthenticationSaga, {
  watchUserLogOutSaga,
  watchChangeUserName,
  watchChangeUserSurname,
  watchChangePassword, 
  watchChangeEmail
} from './Authentication/AuthenticationSagas';
import watchRegistrationSubmitSaga from './Registration/RegistrationSagas';
import watchSubmitSignInSaga from './SignInCard/AuthenticationSaga';
import { watchUpdateRooms } from './Rooms/RoomsSaga';
import appWatcher from './App/AppSaga';
import { watchAddBook } from './AddBook/AddBookSaga';
import {
  watchGetCurrentRoomSaga,
  watchCheckBookingBloked
} from './CurrentRoom/CurrentRoomSagas';
import {
  watchAddLikeSaga,
  watchRemoveLikeSaga,
  watchRoomCommentsToStateSaga,
} from './CurrentRoomComments/CurrentRoomCommentsSagas';

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
    watchUpdateRooms,
    appWatcher,
    watchSubmitSignInSaga,
    watchRegistrationSubmitSaga,
    watchAuthenticationSaga,
    watchUserLogOutSaga,
    watchAddBook,
    watchGetCurrentRoomSaga,
    watchCheckBookingBloked,
    watchAddLikeSaga,
    watchRemoveLikeSaga,
    watchRoomCommentsToStateSaga,
    watchChangeUserName, 
    watchChangeUserSurname,
    watchChangePassword,
    watchChangeEmail,
  ];

  const retrySagas = yield sagas.map((saga) => spawn(startSaga, saga));

  yield all(retrySagas);
}

export default RootSaga;
