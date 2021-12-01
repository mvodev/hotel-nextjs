import { AnyAction } from 'redux';
import {
  SET_SUBMITTING,
  SUBMIT_SIGN_IN_FORM,
  SET_UID,
  SET_ERROR,
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

export { setSubmitting, submitForm, setUID, setError };
