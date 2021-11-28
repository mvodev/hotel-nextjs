import { AnyAction } from 'redux';
import { SET_SUBMITTING, SUBMIT_FORM } from './Types';

const setSubmitting = (payload: boolean): AnyAction => ({
  type: SET_SUBMITTING,
  payload,
});

const submitForm = (payload: FormData): AnyAction => ({
  type: SUBMIT_FORM,
  payload,
});

export { setSubmitting, submitForm };
