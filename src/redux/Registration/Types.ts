import ModalWindowProps from 'src/components/ModalWindow/Types';

const SET_SUBMITTING = 'SET-SUBMITTING';
const SUBMIT_FORM = 'SUBMIT-FORM';
const EMAIL_ERROR = 'EMAIL-ERROR';
const UNKNOWN_ERROR = 'UNKNOWN-ERROR';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const CLOSE_MODAL_WINDOW = 'CLOSE-MODAL-WINDOW';

type RegistrationState = { modalWindow: ModalWindowProps; submitting: boolean };

export default RegistrationState;
export {
  SET_SUBMITTING,
  SUBMIT_FORM,
  EMAIL_ERROR,
  UNKNOWN_ERROR,
  REGISTRATION_SUCCESS,
  CLOSE_MODAL_WINDOW,
};
