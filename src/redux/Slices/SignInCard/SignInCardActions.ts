import { AnyAction } from 'redux';
import FormData from 'src/components/SignInCard/Types';
import {
  SET_SUBMITTING,
  SUBMIT_SIGN_IN_FORM,
  SET_ERROR,
  SET_AUTHENTICATION_SUCCESS,
} from './Types';

const setSubmitting = (payload: boolean): AnyAction => ({
  type: SET_SUBMITTING,
  payload,
});

const submitForm = (payload: FormData): AnyAction => ({
  type: SUBMIT_SIGN_IN_FORM,
  payload,
});

const setError = (payload: boolean): AnyAction => ({
  type: SET_ERROR,
  payload,
});

const setModalWindow = (payload: boolean): AnyAction => ({
  type: SET_AUTHENTICATION_SUCCESS,
  payload,
});

export { setSubmitting, submitForm, setError, setModalWindow };
