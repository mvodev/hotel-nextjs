/* eslint-disable import/no-extraneous-dependencies */

import { AnyAction } from 'redux';
import AuthenticationState, {
  SET_AUTHENTICATED,
  SET_NAME,
  SET_SURNAME,
  SET_UID,
} from './Types';

const initialState = {
  isAuthenticated: false,
  uid: '',
  name: '',
  surname: '',
};

const Authentication = (
  state: AuthenticationState = initialState,
  action: AnyAction
): AuthenticationState => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case SET_UID:
      return {
        ...state,
        uid: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_SURNAME:
      return {
        ...state,
        surname: action.payload,
      };
    default:
      return state;
  }
};

export default Authentication;
