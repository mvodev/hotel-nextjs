import { takeEvery, put } from 'redux-saga/effects';
import { call } from '@redux-saga/core/effects';
import { AuthError } from 'firebase/auth';
import firebaseAPI from '../../firebaseAPI/firebaseAPI';
import { UserType } from '../../firebaseAPI/Types';
import { setAuthenticated } from '../Slices/Authentication/AuthenticationActions';
import { setModalWindow, setError, setSubmitting } from '../Slices/SignInCard/SignInCardActions';
import { SUBMIT_SIGN_IN_FORM } from '../Slices/SignInCard/Types';
import { SET_USER } from '../Slices/Authentication/Types';
import { stringToDateString } from '../../utils/Utils';

type SignInFormReducerType = {
  type:string,
  payload:{
    email:string,
    password:string,
  }
}

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

function* workerSignInSaga(form:SignInFormReducerType) {
  const isAuthorized: Promise<UserType | AuthError> = 
  yield call(() => firebaseAPI.signIn(form.payload.email, form.payload.password));
  if (isAuthorized.constructor.name === 'FirebaseError') {
    yield put(setError(true));
    yield put(setSubmitting(false));
  } else {
    yield put(setError(false));
    yield put(setSubmitting(false));
    yield put(setModalWindow(true));
    yield call(delay,5000);
    yield put(setAuthenticated(true));
    yield put({ 
      type: SET_USER,
      payload: { 
        ...isAuthorized,
        birthday:stringToDateString((isAuthorized).birthday),
    }});
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* watchSubmitSignInSaga() {
  yield takeEvery(SUBMIT_SIGN_IN_FORM, workerSignInSaga);
}

export default watchSubmitSignInSaga;