import ModalWindowProps from 'src/components/ModalWindow/Types';

const SET_SUBMITTING = 'SET-SUBMITTING';
const SUBMIT_FORM = 'SUBMIT-FORM';
const EMAIL_EXIST = 'EMAIL-EXIST';
const INCORRECT_EMAIL = 'INCORRECT-EMAIL';
const UNKNOWN_ERROR = 'UNKNOWN-ERROR';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const CLOSE_MODAL_WINDOW = 'CLOSE-MODAL-WINDOW';

type RegistrationState = { modalWindow: ModalWindowProps; submitting: boolean };

export default RegistrationState;
export {
  SET_SUBMITTING,
  SUBMIT_FORM,
  EMAIL_EXIST,
  UNKNOWN_ERROR,
  REGISTRATION_SUCCESS,
  CLOSE_MODAL_WINDOW,
  INCORRECT_EMAIL
};
