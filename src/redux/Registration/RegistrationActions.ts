import { AnyAction } from 'redux';
import {
  CLOSE_MODAL_WINDOW,
  EMAIL_EXIST,
  REGISTRATION_SUCCESS,
  SET_SUBMITTING,
  SUBMIT_FORM,
} from './Types';

const setSubmitting = (payload: boolean): AnyAction => ({
  type: SET_SUBMITTING,
  payload,
});

const submitForm = (payload: FormData): AnyAction => ({
  type: SUBMIT_FORM,
  payload,
});

const showEmailErrorWindow = (): AnyAction => ({
  type: EMAIL_EXIST,
});

const showRegistrationSuccessWindow = (): AnyAction => ({
  type: REGISTRATION_SUCCESS,
});

const closeModalWindow = (): AnyAction => ({
  type: CLOSE_MODAL_WINDOW,
});

export {
  setSubmitting,
  submitForm,
  showEmailErrorWindow,
  showRegistrationSuccessWindow,
  closeModalWindow,
};
