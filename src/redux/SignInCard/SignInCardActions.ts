import { AnyAction } from 'redux';
import FormData from 'src/components/SignInCard/Types';
import {
  SET_SUBMITTING,
  SUBMIT_SIGN_IN_FORM,
  SET_UID,
  SET_ERROR,
  SET_AUTHENTICATED,
} from './Types';

const setSubmitting = (payload: boolean): AnyAction => ({
  type: SET_SUBMITTING,
  payload,
});

const submitForm = (payload: FormData): AnyAction => ({
  type: SUBMIT_SIGN_IN_FORM,
  payload,
});

const setUID = (payload: string): AnyAction => ({
  type: SET_UID,
  payload,
});

const setError = (payload: boolean): AnyAction => ({
  type: SET_ERROR,
  payload,
});

const setAuthenticated = (payload: boolean): AnyAction => ({
  type: SET_AUTHENTICATED,
  payload,
});

export { setSubmitting, submitForm, setUID, setError, setAuthenticated };
