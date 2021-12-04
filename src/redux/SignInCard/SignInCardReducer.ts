import { AnyAction } from 'redux';
import SignInCardState, {
  SET_SUBMITTING,
  SUBMIT_SIGN_IN_FORM,
  SET_ERROR,
} from './Types';

const initialState:SignInCardState = {
  submitting: false,
  email: '',
  password: '',
  uid: '',
  error: false,
  isAuthenticated:false,
};

const signInCardReducer = (
  state: SignInCardState = initialState,
  action: AnyAction
): SignInCardState => {
  switch (action.type) {
    case SET_SUBMITTING:
      return {
        ...state,
        submitting: action.payload,
      };
    case SUBMIT_SIGN_IN_FORM:
      return {
        ...state,
        submitting: true,
        email: action.payload.email,
        password: action.payload.password,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signInCardReducer;
