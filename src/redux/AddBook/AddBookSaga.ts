import { call, put, takeEvery } from 'redux-saga/effects';

import firebaseAPI from '../../firebaseAPI/firebaseAPI';
import type { AddBookActionType, AddBookResultType } from './Types';

export function* addBook(action: AddBookActionType) {
  try {
    const addBookResult: AddBookResultType = yield call(
      firebaseAPI.addBook,
      action.payload
    );
  } catch(error) {
    console.error(error)
  }
}

export function* watchAddBook() {
  yield takeEvery('ADD_BOOK', addBook);
};