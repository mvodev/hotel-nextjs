import { AnyAction } from 'redux';
import AuthenticationState, {
  RESET_USER_DATA,
  SET_AUTHENTICATED,
  SET_USER,
  SET_USER_NAME,
  SET_USER_SURNAME,
} from './Types';

const initialState = {
  isAuthenticated: false,
  user: {
    uid: null,
    name: null,
    surname: null,
    email: null
  },
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
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_NAME:
      return {
        ...state,
        user: {...state.user, name: action.payload},
      };
    case SET_USER_SURNAME:
      return {
        ...state,
        user: {...state.user, surname: action.payload},
      };
    case RESET_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

export default Authentication;
