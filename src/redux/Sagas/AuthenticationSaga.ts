import { takeEvery, put } from 'redux-saga/effects';
import { call } from '@redux-saga/core/effects';
import { AuthError } from 'firebase/auth';
import firebaseAPI from '../../firebaseAPI/firebaseAPI';
import { UserType } from '../../firebaseAPI/Types';
import { setAuthenticated } from '../Slices/Authentication/AuthenticationActions';
import { setError, setSubmitting } from '../SignInCard/SignInCardActions';
import { SUBMIT_SIGN_IN_FORM } from '../SignInCard/Types';

function* workerSignInSaga(form: any) {
  const isAuthorized: Promise<UserType | AuthError> = 
  yield call(() => firebaseAPI.signIn(form.payload.email, form.payload.password));
  if (isAuthorized.constructor.name === 'FirebaseError') {
    yield put(setError(true));
    yield put(setSubmitting(false));
  } else {
    yield put(setError(false));
    yield put(setAuthenticated(true));
    yield put(setSubmitting(false));
    // yield put(setUID((isAuthorized as unknown as UserType).uid));
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* watchSubmitSignInSaga() {
  yield takeEvery(SUBMIT_SIGN_IN_FORM, workerSignInSaga);
}

export default watchSubmitSignInSaga;