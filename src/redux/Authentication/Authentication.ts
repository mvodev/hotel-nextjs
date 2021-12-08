import { AnyAction } from 'redux';
import AuthenticationState, {
  RESET_USER_DATA,
  SET_AUTHENTICATED,
  SET_USER,
} from './Types';

const initialState = {
  isAuthenticated: false,
  user: {
    uid: null,
    name: null,
    surname: null,
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
    case RESET_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

export default Authentication;
