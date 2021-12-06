/* eslint-disable import/no-extraneous-dependencies */

import { AnyAction } from 'redux';
import ModalWindowOptions from './ModalWindowsOptions';
import RegistrationState, {
  CLOSE_MODAL_WINDOW,
  EMAIL_ERROR,
  REGISTRATION_SUCCESS,
  SET_SUBMITTING,
  UNKNOWN_ERROR,
} from './Types';

const initialState = {
  modalWindow: { title: '', text: '' },
  submitting: false,
};

const Registration = (
  state: RegistrationState = initialState,
  action: AnyAction
): RegistrationState => {
  switch (action.type) {
    case SET_SUBMITTING:
      return {
        ...state,
        submitting: action.payload,
      };
    case EMAIL_ERROR:
      return {
        ...state,
        modalWindow: {
          isEnabled: true,
          ...ModalWindowOptions.emailError,
        },
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        modalWindow: {
          isEnabled: true,
          ...ModalWindowOptions.registrationSuccess,
        },
      };

    case UNKNOWN_ERROR:
      return {
        ...state,
        modalWindow: {
          isEnabled: true,
          ...ModalWindowOptions.unknownError,
        },
      };
    case CLOSE_MODAL_WINDOW:
      return {
        ...state,
        modalWindow: { ...state.modalWindow, isEnabled: false },
      };
    default:
      return state;
  }
};

export default Registration;
